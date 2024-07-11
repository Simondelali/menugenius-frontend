import axiosInstance from "@/app/utils/axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFolderPlus } from "react-icons/fa6";

export default function UserMenuTable() {
  const [userMenus, setUserMenus] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserMenus = async () => {
      try {
        const response = await axiosInstance.get("/api/user-menus/");
        setUserMenus(response.data);
      } catch (error) {
        setError("Failed to fetch menus, Try again later");
      }
    };

    fetchUserMenus();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  if (userMenus.length === 0) {
    return (
      <div className="mt-20 flex justify-center">
        <div className="h-80 w-80 bg-blue-50 rounded-full text-slate-500 flex flex-col justify-center items-center p-4">
          <FaFolderPlus size={72} />
          <div className="text-center">
            <p className="text-md font-bold ">No menus to show yet</p>
            <p className="text-xs font-semibold">
              Use the <span className="text-blue-700">'Create +'</span> button
              to add a new menu
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-4 mb-2">
      <table className="table">
        {/* head */}
        <thead className="bg-blue-50">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th className="w-3/6">Description</th>
          </tr>
        </thead>

        <tbody>
          {userMenus.map((userMenu, index) => (
            <tr className="hover:bg-gray-50" key={userMenu.id}>
              <th>{index + 1}</th>
              <td>
                <Link href={`/dashboard/flow/${userMenu.id}`}>
                  <div className="block">{userMenu.name}</div>
                </Link>
              </td>
              <td>
                <Link href={`/dashboard/flow/${userMenu.id}`}>
                  <div className="block">
                    <div className="w-20 h-7 m-2 bg-teal-500 bg-opacity-40 rounded border border-emerald-500 flex items-center justify-center">
                      Draft
                    </div>
                  </div>
                </Link>
              </td>
              <td>
                <Link href={`/dashboard/flow/${userMenu.id}`}>
                  <div className="block">{userMenu.description}</div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
