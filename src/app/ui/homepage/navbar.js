import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-24 shadow-md">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/">
          <div className="ml-[100px]">
            <Image
              src="/images/navbar-logo.png"
              alt="Menugenius-logo"
              width={150}
              height={80}
              className="cursor-pointer" 
            />
          </div>
        </Link>
        <div className="flex justify-center flex-grow">
          <ul className="flex justify-between gap-5 font-medium">
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/demo">
              <li>Demo</li>
            </Link>
            <Link href="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-5 mr-[100px]">
          <Link href="/auth/login">
            <button className="border border-black rounded-full px-8 py-2 font-medium">
              Sign In
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="bg-primary rounded-full px-6 py-2.5 text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
