import NotificationBar from "@/app/ui/notification-bar";
import { CiSquarePlus } from "react-icons/ci";
import { FaFolderPlus } from "react-icons/fa6";

export default function Page() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <p className="text-slate-500 text-sm font-bold">Hi User,</p>
          <p className="text-indigo-900 text-4xl font-bold">Good Morning!</p>
        </div>
        <NotificationBar />
      </div>
      <div className="text-slate-600 text-2xl font-semibold mt-4">USSD Flows</div>

      <div className=" flex justify-between items-center mt-2">
        <select className="select select-xs select-bordered w-1/6 max-w-xs">
          <option selected>
            View All
          </option>
          <option>Live</option>
          <option>Production</option>
        </select>
        <button className="flex items-center justify-center p-2 bg-blue-700 rounded-md h-8 w-24 text-white">
          Create<CiSquarePlus size={24} />
        </button>
      </div>

      <div className="bg-blue-50 w-full flex justify-around text-slate-600 mt-4">
        <div>Name</div>
        <div>Status</div>
        <div>Description</div>
      </div>

      <div className="mt-20 flex justify-center">
        <div className="h-80 w-80 bg-blue-50 rounded-full text-slate-500 flex flex-col justify-center items-center">
            <FaFolderPlus size={72} />
          <div className="text-center">
            <p className="text-lg font-bold ">No menus to show yet</p>
            <p className="text-sm font-semibold">
              Use the <span className="text-blue-700">'Create +'</span> button
              to add a new menu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
