import Link from "next/link";
import React from "react";

function Navbar() {

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">MyApp</div>
          <div className="space-x-6">
            <Link href="/users" className="text-gray-700 hover:text-blue-600">
              Users
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link href="/postUi" className="text-gray-700 hover:text-blue-600">
              Posts
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
