import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-10 py-20 px-4 lg:px-0">
      <div className=" lg:ml-[20px] lg:pr-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <span className="text-blue-600">USSD</span> Solutions
          <br />
          for Africa
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-4">
          Reach a broader audience by rapidly
          <br /> generating USSD menus for your business.
        </p>
        <Link href="/auth/signup">
          <button className="bg-primary rounded-full px-6 py-2.5 mt-4 text-white">
            Get Started
          </button>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 mt-10 lg:mt-[25px]">
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
