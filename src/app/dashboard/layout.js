"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

export default function Layout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axiosInstance.post("/user/token/verify/", {
          token: token,
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          try {
            const response = await axiosInstance.post("/user/token/refresh/", {
              refresh: refreshToken,
            });
            const { access } = response.data;
            localStorage.setItem("accessToken", access);
            axiosInstance.defaults.headers["Authorization"] =
              "Bearer " + access;
            setIsAuthenticated(true);
          } catch (refreshError) {
            console.log("Refresh token failed", refreshError);
            router.push("./auth/login");
          }
        } else {
          router.push("./auth/login");
        }
      }
    };

    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return <div>{children}</div>;
}
