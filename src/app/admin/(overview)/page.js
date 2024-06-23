import Link from "next/link";
import Image from "next/image";

import { HiSearch } from "react-icons/hi";
import { BiBell } from "react-icons/bi";
import { FaMoon } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function Page() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-slate-500 text-sm font-bold">Hi Simon,</p>
          <p className="text-indigo-900 text-4xl font-bold">Welcome Back!</p>
        </div>
        <div className="w-96 h-14 bg-white rounded-3xl shadow flex items-center px-4 justify-between">
          <div className="w-52 h-10 bg-blue-50 rounded-3xl flex justify-start items-center px-4">
            <HiSearch />
            <p className="text-slate-400 text-sm font-normal ml-2">Search</p>
          </div>
          <BiBell size={24} className="text-slate-400" />
          <FaMoon size={24} className="text-slate-400" />
          <IoMdInformationCircleOutline size={24} className="text-slate-400" />
          <Image
            width="42"
            height="42"
            alt="profile img"
            src="/images/Elipse 5.png"
            className="rounded-3xl"
          />
        </div>
      </div>
    <div className="flex justify-between mt-8 gap-2">
      <div className="w-3/12 h-24 bg-white rounded-2xl"></div>
      <div className="w-3/12 h-24 bg-white rounded-2xl"></div>
      <div className="w-3/12 h-24 bg-white rounded-2xl"></div>
      <div className="w-3/12 h-24 bg-white rounded-2xl"></div>
    </div>

    <div className="flex justify-between mt-4 gap-2">
      <div className="relative w-4/6 h-72 bg-white rounded-2xl"></div>
      <div className="w-2/6 h-72 bg-white rounded-2xl"></div>
    </div>

    <div className="flex justify-between mt-4 gap-2">
      <div className="w-2/6 h-72 bg-white rounded-2xl"></div>
      <div className="w-2/6 h-72 bg-white rounded-2xl"></div>
      <div className="w-2/6 h-72 bg-white rounded-2xl"></div>
    </div>

    </div>
  );
}
