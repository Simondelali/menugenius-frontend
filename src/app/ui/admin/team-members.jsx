import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";

const members = [
    {
        name: "Simon Delali Atiegar",
        position: "Creative Director",
        profile: "S",
    },
    {
        name: "Jeremy Kobby Patamia",
        position: "Product Designer",
        profile: "J",
    },
    {
        name: "Griffith Selorm Klogo",
        position: "Senior Director",
        profile: "G",
    },
]

export default function TeamMembersCard(){
    return(
        <div className="w-2/6 h-72 bg-white rounded-2xl p-6">
            <div className="flex justify-between">
                <div className="text-indigo-900 text-lg font-bold">Team Members</div>
                <div className="h-7 w-7 bg-blue-50 rounded-lg flex items-center justify-center">
                    <CiCirclePlus size={24} className="text-blue-700"/>
                </div>
            </div>
            {members.map((member) => {
                return (
                  <div
                    key={member.name}
                    className="flex items-center rounded-2xl shadow h-16 p-2 mt-2 justify-between"
                  >
                    <div className="flex gap-4">
                      <div className="avatar placeholder">
                        <div className="bg-blue-900 text-neutral-content w-10 rounded-full">
                          <span className="text-xl">{member.profile}</span>
                        </div>
                      </div>
                      <div className="">
                        <p className="text-indigo-900 text-base font-semibold">
                          {member.name}
                        </p>
                        <p className="text-slate-400 text-xs font-sm">
                          {member.position}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <HiOutlineDotsVertical size={24} />
                    </div>
                  </div>
                );
            })}
        </div>
    )
}