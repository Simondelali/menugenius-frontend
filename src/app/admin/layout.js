"use client";
import { IoHomeOutline } from "react-icons/io5";
import { RiArticleLine, RiGraduationCapLine } from "react-icons/ri";

import { HiOutlineUsers } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import { TiFlowChildren } from "react-icons/ti";
import { GoStack } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";

import { FaRegCalendarAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="h-screen hidden lg:flex w-1/6 justify-center overflow-hidden bg-gray-50">
        <SideNav />
      </div>
      <div className="h-screen w-full lg:w-5/6 p-8 bg-blue-50 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export function SideNav() {
  return (
    <div className="">
      <div className="flex-col items-center inline-flex p-8 gap-2 bg-indigo-950 rounded-xl mt-2 text-slate-200">
        <p className="text-2xl font-bold">MENUGENIUS</p>
        <p className="text-xs font-medium">ADMIN | DASHBOARD</p>
      </div>
      <div className=" border border-indigo-100 mt-2 "></div>

      
        <div className="flex flex-col p-8 gap-4">
          <NavLinks />
        </div>
        <div className="flex gap-2 p-8 fixed bottom-0">
          <div className="flex gap-4 text-slate-500">
            <RiLogoutCircleRLine size={24} />
            <p>Logout</p>
          </div>
        </div>
    </div>
  );
}

const links = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: BiCategory,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: HiOutlineUsers,
  },
  {
    name: "USSD Menus",
    href: "/admin/menus",
    icon: TiFlowChildren,
  },
  { name: "Templates", href: "/admin/templates", icon: GoStack },
  { name: "Settings", href: "/admin/settings", icon: CiSettings },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href}
          
          className={clsx(
            'rounded-md p-3 text-sm font-medium text-slate-500 hover:bg-sky-100 hover:text-blue-600',
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
            },
          )}
          >
            <div className="flex gap-4 items-center">
            <LinkIcon size={24} className={clsx({'text-blue-700': pathname === link.href,})}/>
            <p >{link.name}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
