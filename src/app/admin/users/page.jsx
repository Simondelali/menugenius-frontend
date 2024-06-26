'use client'
import NotificationBar from "@/app/ui/notification-bar";
import axiosInstance from "@/app/utils/axios";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-indigo-900 text-4xl font-bold">User List</p>
        </div>
        <NotificationBar />
      </div>
      <div className="w-full rounded-3xl bg-white p-8 mt-12">
      <div className="flex justify-between">
        <p className="font-semibold">All Users</p>
        <div>sort by</div>
      </div>
      <UserTable /> 
      </div>
    </div>
  );
}

export function UserTable(){
  const [users, setUsers] = useState([]);
  const [error, setError]= useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axiosInstance.get('/api/users/');
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        setError('Failed to fecth users')
      }
    };
    getUsers();
  }, []);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );


  if (error) return <div>{error}</div>;

  return(
  <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date Joined</th>
        </tr>
      </thead>
      <tbody>
        {currentUsers.map((user, index) => (
          <tr className="hover:bg-gray-50" key={user.id}>
          <th>{(currentPage - 1) * usersPerPage + index + 1}</th>
          <td>{user.email}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.date_joined}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-4 flex justify-end">
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