import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" mt-[10px]">
      <div className="">
        <div>
          <h1 className="text-2xl font-bold">MenuGenius</h1>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className="flex flex-col space-y-2">
            <Link href="/about" className="hover:text-gray-400">
               About Us
            </Link>
            <Link href="/contact"className="hover:text-gray-400">
            Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-400">
            Terms of Service
            </Link>
            <p className="text-sm">© {new Date().getFullYear()} MenuGenius. All rights reserved.</p>
          </div>
        </div>
        
        </div>
      
    </footer>
  );
}
