import Image from "next/image";
export default function FeatureCard({ photo, title, info }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:border-gray-500 hover:shadow-lg" style={{ width: '250px', height: '500px' }}>
      <Image 
      src={photo} 
      alt="card image" 
      width={85}
      height={110}
      className=" mb-4 "
      />
      <h2 className="text-2xl font-bold mb-2 text-center uppercase">{title}</h2>
      <p className="text-md text-gray-600 text-center uppercase mb-[75px] mt-[60px]">{info}</p>
      <p className="text-xl font-bold uppercase text-[#254DD9] text-center cursor-pointer">Learn more</p>
    </div>
  );
}
