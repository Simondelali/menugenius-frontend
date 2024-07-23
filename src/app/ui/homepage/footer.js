import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-[200px] bg-gray-100 w-full py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center mt-10 px-4 lg:px-8">
        <div className="mb-6 lg:mb-0 lg:mr-auto">
          <Image
            src="/images/navbar-logo.png"
            alt="Menugenius-logo"
            width={150}
            height={80}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:ml-[30px]">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <Link href="/about" className="hover:text-gray-400">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400">
              Terms of Service
            </Link>
          </div>
          <p className="text-sm mt-4 lg:mt-2">
            © {new Date().getFullYear()} MenuGenius. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
