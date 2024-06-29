import Link from "next/link";
import Image from "next/image";

import NotificationBar from "@/app/ui/notification-bar";
import NewUsersCard from "@/app/ui/admin/new-users";
import TotalUsersCard from "@/app/ui/admin/total-users";
import TotaMenusCard from "@/app/ui/admin/total-menus";
import EarningsCard from "@/app/ui/admin/earnings";

export default function Page() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-slate-500 text-sm font-bold">Hi Simon,</p>
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
      <div className="relative w-4/6 h-72 bg-white rounded-2xl"></div>
      <div className="w-2/6 h-72 bg-white rounded-2xl"></div>
    </div>

    <div className="animate-pulse flex justify-between mt-4 gap-2">
      <div className="w-2/6 h-72 bg-gray-200 rounded-2xl"></div>
      <div className="w-2/6 h-72 bg-white rounded-2xl"></div>
      <div className="w-2/6 h-72 bg-white rounded-2xl"></div>
    </div>
    

    </div>
  );
}
