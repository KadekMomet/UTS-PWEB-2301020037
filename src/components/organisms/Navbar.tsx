'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Tetap pertahankan import

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo dengan Image */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 relative mr-2">
              <Image
                src="/logo.png" // Pastikan file ada di public/logo.png
                alt="Foodie Logo"
                width={32}
                height={32}
              />
            </div>
            <span className="text-2xl font-bold text-red-500">Foodie</span>
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-red-500">
            Home
          </Link>
          <Link href="/menu" className="text-gray-800 hover:text-red-500">
            Our Menu
          </Link>
          <Link href="/foods" className="text-gray-800 hover:text-red-500">
            Foods
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-red-500">
            About us
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-red-500">
            Contact us
          </Link>
        </div>

        {/* Login Button */}
        <Link 
          href="/login" 
          className="border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;