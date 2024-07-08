'use client'
import NotificationBar from "@/app/ui/notification-bar";
import axiosInstance from "@/app/utils/axios";
import { useEffect, useState } from "react";

export default function Page() {
  const [menus, setMenus] = useState([]);
  const [sortOrder, setSortOrder] = useState('oldest');
  const [error, setError]= useState('');

  useEffect(() => {
    const getMenus = async () => {
      try {
        const response = await axiosInstance.get('/api/menus/');
        setMenus(response.data);
        console.log(response.data);
      } catch (error) {
        setError('Failed to fecth menus')
      }
    };
    getMenus();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-indigo-900 text-4xl font-bold">Menu List</p>
        </div>
        <NotificationBar />
      </div>
      <div className="relative w-full rounded-3xl bg-white p-8 mt-12 h-[75vh]">
      <div className="flex justify-between">
        <p className="font-semibold text-slate-600">All Menus</p>
        <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <MenuTable menus={menus} sortOrder={sortOrder} error={error}/> 
      </div>
    </div>
  );
}

const SortOptions = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="flex justify-end mb-4">
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="p-1 rounded border"
      >
        <option value="oldest">Earliest</option>
        <option value="newest">Latest</option>
      </select>
    </div>
  );
};

const sortMenus = (menus, sortOrder) => {
  if (sortOrder === 'newest') {
    return [...menus].reverse();
  }
  return menus;
};

export function MenuTable({ menus, sortOrder, error }){
  // const [menus, setMenus] = useState([]);
  const sortedMenus = sortMenus(menus, sortOrder);
  // const [error, setError]= useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const menusPerPage = 8;

  const totalPages = Math.ceil(sortedMenus.length / menusPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentMenus = sortedMenus.slice(
    (currentPage - 1) * menusPerPage,
    currentPage * menusPerPage
  );


  if (error) return <div className="text-red-500">{error}</div>;

  return(
  <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Menu Name</th>
          <th>User Email</th>
          <th>Status</th>
          {/* <th>Date Joined</th> */}
        </tr>
      </thead>
      <tbody>
        {currentMenus.map((menu, index) => (
          <tr className="hover:bg-gray-50" key={menu.id}>
          <th>{(currentPage - 1) * menusPerPage + index + 1}</th>
          <td>{menu.name}</td>
          <td>{menu.user_email}</td>
          <div className="w-20 h-7 m-2 bg-teal-500 bg-opacity-40 rounded border border-emerald-500 flex items-center justify-center">
          <td className="text-emerald-600 text-sm font-medium">Live</td>
          </div>
          {/* <td>{menu.date_joined}</td> */}
        </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-4 flex justify-end absolute bottom-5 right-5">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-200 rounded"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
  </div>
  )
}