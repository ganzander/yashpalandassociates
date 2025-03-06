import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold h-full">
            <Image
              src="/logo.png"
              alt="logo"
              width={300}
              height={200}
              className="object-contain h-full w-full"
            />
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link
                href="#services"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Services
              </Link>
              <Link
                href="#location"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Location
              </Link>
              <Link
                href="#contact"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
