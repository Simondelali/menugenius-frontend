import { HiSearch } from "react-icons/hi";
import { BiBell } from "react-icons/bi";
import { FaMoon } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Image from "next/image";

export default function NotificationBar() {
  return (
    <div className="w-96 h-12 bg-white rounded-3xl shadow flex items-center px-4 justify-between">
      <div className="w-52 h-8 bg-blue-50 rounded-3xl flex justify-start items-center px-4 gap-2">
        <HiSearch />
        {/* <p className="text-slate-400 text-sm font-normal ml-2">Search</p> */}
        <input 
        type="search"
        placeholder="Search"
        className="w-full text-slate-400 text-sm font-normal bg-blue-50 focus:outline-none"
        />
      </div>
      <BiBell size={24} className="text-slate-400" />
      <FaMoon size={24} className="text-slate-400" />
      <IoMdInformationCircleOutline size={24} className="text-slate-400" />
      <Image
        width="36"
        height="36"
        alt="profile img"
        src="/images/Elipse 5.png"
        className="rounded-3xl"
      />
    </div>
  );
}
