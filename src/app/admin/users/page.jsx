'use client'
import NotificationBar from "@/app/ui/notification-bar";
import axiosInstance from "@/app/utils/axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('oldest');
  const [error, setError]= useState('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axiosInstance.get('/api/users/');
        setUsers(response.data);
      } catch (error) {
        setError('Failed to fecth users')
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-indigo-900 text-4xl font-bold">User List</p>
        </div>
        <NotificationBar />
      </div>
      <div className="relative w-full rounded-3xl bg-white p-8 mt-12 h-[75vh]">
      <div className="flex justify-between">
        <p className="font-semibold text-slate-600">All Users</p>
        <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <UserTable users={users} sortOrder={sortOrder} error={error}/> 
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

const sortUsers = (users, sortOrder) => {
  if (sortOrder === 'newest') {
    return [...users].reverse();
  }
  return users;
};


export function UserTable({ users, sortOrder, error }){
  const sortedUsers = sortUsers(users, sortOrder);
  // const [error, setError]= useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentUsers = sortedUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );


  if (error) return <div className="text-red-500">{error}</div>;

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
          <td>{format(new Date(user.date_joined), 'MMMM dd, yyyy h:mm a')}</td>
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