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
        const token = sessionStorage.getItem("accessToken");
        const response = await axiosInstance.post("/user/token/verify/", {
          token: token,
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        const refreshToken = sessionStorage.getItem("refreshToken");
        if (refreshToken) {
          try {
            const response = await axiosInstance.post("/user/token/refresh/", {
              refresh: refreshToken,
            });
            const { access } = response.data;
            sessionStorage.setItem("accessToken", access);
            axiosInstance.defaults.headers["Authorization"] =
              "Bearer " + access;
            setIsAuthenticated(true);
          } catch (refreshError) {
            console.log("Refresh token failed", refreshError);
            router.push("/auth/login");
          }
        } else {
          router.push("/auth/login");
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
