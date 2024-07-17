import axiosInstance from '@/app/utils/axios';
import { ArrowLeftIcon, LinkIcon, LucideFileJson } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineChartBar } from 'react-icons/hi2';
// import { ArrowLeftIcon, LinkIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const TopNavBar = ({ menuId }) => {
    const [menuName, setMenuName] = useState('Loading...');
    const testLink = `http://127.0.0.1:8000/test/${menuId}`;
  
    useEffect(() => {
      const fetchMenuName = async () => {
        try {
          const response = await axiosInstance.get(`/api/menu/${menuId}/`);
          setMenuName(response.data.name);
        } catch (error) {
          console.error('Error fetching menu name:', error);
          setMenuName('Menu');
        }
      };
  
      fetchMenuName();
    }, [menuId]);

  return (
    <nav className=" bg-white shadow-md p-4 mb-6 fixed top-0 right-0 z-10 lg:left-64 ml-1 left-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-800">
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-semibold">{menuName}</h1>
        </div>

        <div className="flex items-center space-x-4">
            <p>Callback url:</p>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <input 
              type="text" 
              value={testLink} 
              readOnly 
              className="bg-transparent text-sm mr-2"
            />
            <button 
              onClick={() => navigator.clipboard.writeText(testLink)}
              className="text-blue-500 hover:text-blue-700"
            >
              <LinkIcon className="h-5 w-5" />
            </button>
          </div>

          <Link 
            href={`/dashboard/responses/${menuId}`} 
            className="text-gray-600 hover:text-gray-800"
          >
            <div className='bg-gray-200 p-2 rounded-lg'>
            <LucideFileJson className="h-6 w-6 text-blue-500 hover:text-blue-700" />
            </div>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;