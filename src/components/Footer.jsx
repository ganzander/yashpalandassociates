import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Yash Law Associates</h3>
            <p className="text-sm">
              Providing expert legal services since 1995.
            </p>
          </div>
          {/* Center */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-sm hover:text-gray-300">
                  Location
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-sm hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Right */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              Court Chamber: Ch. No. 63, Shaheed Sukhdev Singh Block, Near Gate
              No. 1, Distt. Courts, Gurugram & Sub Division Sohna Court
            </p>
            <p className="text-sm">
              Office Address: Near Maruti Kunj Mour Bhondsi Sohna Road,
              Delhi-Mumbai Expressway, Gurugram
            </p>
            <p className="text-sm">Phone: +91 9953193163</p>
            <p className="text-sm">Email: yashlawassociates@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; 2025 Yash Law Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
