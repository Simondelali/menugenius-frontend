'use client'
// import React from "react";
import Link from "next/link";
import Image from "next/image";

import NotificationBar from "@/app/ui/notification-bar";
import NewUsersCard from "@/app/ui/admin/new-users";
import TotalUsersCard from "@/app/ui/admin/total-users";
import TotaMenusCard from "@/app/ui/admin/total-menus";
import EarningsCard from "@/app/ui/admin/earnings";
import TeamMembersCard from "@/app/ui/admin/team-members";
import RecentActivity from "@/app/ui/admin/recent-activity";
import AdminLineChart from "@/app/ui/admin/line-chart";

import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import axiosInstance from "@/app/utils/axios";

export default function Page() {
  const [date, setDate] = useState(new Date());
  const[user, setUser] = useState([])

  useEffect(() => {
    const fetchUserDetails = async () => {
        try {
            const response = await axiosInstance.get('/api/user/');
            setUser(response.data);
        } catch (error) {
            console.error('Failed to fetch user details:', error);
            // Handle the error (e.g., redirect to login)
        }
    };

    fetchUserDetails();
}, []);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-slate-500 text-sm font-bold">Hi {user.first_name},</p>
          <p className="text-indigo-900 text-4xl font-bold">Welcome Back!</p>
        </div>
        <NotificationBar />
      </div>
      <div className="flex justify-between mt-8 gap-2">
        <NewUsersCard />
        <TotalUsersCard />
        <TotaMenusCard />
        <EarningsCard />
      </div>

      <div className="flex justify-between mt-4 gap-2">
        <div className="relative w-4/6 h-72 bg-white rounded-2xl flex justify-center items-center pt-3">
          <AdminLineChart />
        </div>
        <RecentActivity />
      </div>

      <div className="flex justify-between mt-4 gap-2">
        <div className="w-2/6 h-72 bg-white rounded-2xl flex justify-center items-center">
          <Image src="/images/chart2.png" alt="chart" width="320" height="10" />
        </div>
        <TeamMembersCard />
        <div className="w-2/6 h-72 bg-white rounded-2xl pt-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
}
