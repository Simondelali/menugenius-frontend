import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import { HiOutlineDotsVertical } from "react-icons/hi";

const members = [
    {
        name: "Simon Delali",
        position: "Creative Director",
        profile: "/images/Elipse 5.png",
    },
    {
        name: "Jeremy Kobby",
        position: "Product Designer",
        profile: "/images/Elipse 5.png",
    },
    {
        name: "Klogo Selorm",
        position: "Senior Director",
        profile: "/images/Elipse 5.png",
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
                return(
                <div key={member.name} className="flex items-center rounded-2xl shadow h-16 p-2 mt-2 justify-between">
                <div className="flex gap-4">

                <Image 
                src={member.profile}
                alt="profile"
                width="40"
                height="40"
                className="rounded-full"
                />
                <div className="">
                    <p className="text-indigo-900 text-base font-semibold">{member.name}</p>
                    <p className="text-slate-400 text-xs font-sm">{member.position}</p>
                </div>
                </div>
                <div className="">
                    <HiOutlineDotsVertical size={24} />
                </div>
            </div>
                )
            })}
        </div>
    )
}