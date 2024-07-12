'use client'
import SessionTable from "@/app/ui/user/session-table";
import axiosInstance from "@/app/utils/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CSVLink } from 'react-csv';
import { startOfDay, startOfWeek, endOfWeek, isWithinInterval, parseISO } from 'date-fns';
import NotificationBar from "@/app/ui/notification-bar";

export default function Page() {
  const[user, setUser] = useState([]);
  const { id: menuId }= useParams();

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };


  useEffect(() => {
    const fetchUserDetails = async () => {
        try {
            const response = await axiosInstance.get('/api/user/');
            setUser(response.data);
        } catch (error) {
            console.error('Failed to fetch user details:', error);
        }
    };

    fetchUserDetails();
}, []);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-slate-500 text-sm font-bold">Hi {user.first_name},</p>
          <p className="text-indigo-900 text-4xl font-bold">{getGreeting()}!</p>
        </div>
        <NotificationBar />
      </div>
      <MenuName menuId={menuId}/>
      <SessionResponseTable />
      </div>
  )
}

export function SessionResponseTable() {
  const { id: menuId } = useParams();
  const [sessionData, setSessionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axiosInstance.get(`/api/sessions/${parseInt(menuId)}`);
        setSessionData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(`Error fetching sessions: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (menuId) {
      fetchMenu();
    } else {
      setLoading(false);
    }
  }, [menuId]);
  
  
  return <div>
    <ExportCSV sessionData={sessionData}/>
    <div className="relative h-[75vh]">
    <SessionTable sessionData={sessionData} error={error}/>
    </div>
  </div>;
}

export function ExportCSV({ sessionData }) {
  const [filterOption, setFilterOption] = useState('all');

  const filterData = () => {
    const now = new Date();
    let filteredData = sessionData;

    if (filterOption === 'today') {
      const start = startOfDay(now);
      const end = new Date();
      filteredData = sessionData.filter(item => 
        isWithinInterval(parseISO(item.date), { start, end })
      );
    } else if (filterOption === 'this_week') {
      const start = startOfWeek(now, { weekStartsOn: 1 }); 
      const end = endOfWeek(now, { weekStartsOn: 1 });
      filteredData = sessionData.filter(item => 
        isWithinInterval(parseISO(item.date), { start, end })
      );
    }

    return filteredData;
  };
  return(
<div>
      <select onChange={e => setFilterOption(e.target.value)} value={filterOption}>
        <option value="all">All Data</option>
        <option value="today">Today</option>
        <option value="this_week">This Week</option>
      </select>
      <CSVLink
        data={filterData()}
        filename={`sessiondata_${filterOption}.csv`}
        className="btn btn-primary"
        target="_blank"
        >
        Export to CSV
      </CSVLink>
    </div>
  )
}

export function MenuName({menuId}){
  const [menu, setMenu] = useState({});

  useEffect(() => {
    const fetchMenuDetails = async () => {
        try {
            const response = await axiosInstance.get(`/api/menu/${parseInt(menuId)}/`);
            setMenu(response.data);
        } catch (error) {
            console.error('Failed to fetch Menu details:', error);
        }
    };

    fetchMenuDetails();
}, []);

  return <div className="text-slate-600 text-xl font-semibold mt-4 mb-4">
  Session Response for {menu.name}</div>
}
