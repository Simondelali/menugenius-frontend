import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-around items-center gap-[10px]">
      <div className="w-[45%] pr-10 ml-[100px]">
        <h1 className="text-6xl font-extrabold">
          <span className="text-blue-600">USSD</span> Solutions<br/>for Africa
        </h1>
        <p className="text-lg mt-4">
          Reach a broader audience by rapidly<br/> generating USSD menus for your
          business.
        </p>
        <Link href="/sign-up">
          <button className="bg-primary rounded-full px-6 py-2.5 mt-4 text-white">
            Get Started
          </button>
        </Link>
      </div>
      <div className="w-[55%] mr-[50px] mt-10">
        <Image 
          src="/images/hero-sect-a.png"
          alt="Man checking his phone"
          width={600}
          height={800}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
