'use client'
import { useState } from "react";
import { HiUsers } from "react-icons/hi2";

export default function NewUsersCard(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    return(
    <div className="flex items-center w-full h-24 bg-white rounded-2xl p-4 gap-4">
        <div className="bg-blue-50 h-14 w-14 rounded-full text-blue-600 flex justify-center items-center">
            <HiUsers size={30}/>
        </div>
        <div>
            <p className="text-slate-400 text-sm font-medium ">New Users</p>
            <p className="text-indigo-900 text-2xl font-bold">8</p>
            <p className="text-slate-400 text-xs font-normal"><span className="text-teal-500 text-xs font-bold">+23% </span>since last month</p>
        </div>
    </div>
)
}