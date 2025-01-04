"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 shadow-lg py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center py-4 px-2">
              <svg
                className="h-8 w-8 mr-2 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
              <span className="font-semibold text-red-500 text-xl">BD Martyr's 2024</span>
            </Link>
          </div>
          {/* Centered Navbar items */}
          <div className="hidden md:flex space-x-7">
            <Link href="/" className="py-4 px-2 text-white font-semibold hover:text-red-500 transition duration-300">
              Home
            </Link>
            <Link href="/stories" className="py-4 px-2 text-white font-semibold hover:text-red-500 transition duration-300">
              Stories
            </Link>
            <Link href="/memorial" className="py-4 px-2 text-white font-semibold hover:text-red-500 transition duration-300">
              Memorial
            </Link>
            <Link href="/about" className="py-4 px-2 text-white font-semibold hover:text-red-500 transition duration-300">
              About
            </Link>
            <Link href="/contact" className="py-4 px-2 text-white font-semibold hover:text-red-500 transition duration-300">
              Contact
            </Link>
          </div>
          {/* Secondary Navbar items on the right */}
          <div className="hidden md:flex items-center space-x-3">
          <Link href="/contact">
  <button className="relative rounded-full px-6 py-3 bg-red-600 text-white text-xl font-medium tracking-wide overflow-hidden group hover:bg-white hover:text-black">
    <span className="relative z-10 block bg-transparent  transition-transform duration-300 group-hover:-translate-y-10">
      Donate
    </span>
    <span className="absolute inset-0 flex  items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      Donate
    </span>
  </button>
</Link>

          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="">
          <li>
            <Link href="/" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300" onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/stories" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300" onClick={handleMenuItemClick}>
              Stories
            </Link>
          </li>
          <li>
            <Link href="/memorial" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300" onClick={handleMenuItemClick}>
              Memorial
            </Link>
          </li>
          <li>
            <Link href="/about" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300" onClick={handleMenuItemClick}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300" onClick={handleMenuItemClick}>
              Contact
            </Link>
          </li>
          {/* Mobile Donate button */}
          <li>
          <Link href="/contact">
          <button className="relative rounded px-6 py-3 bg-black dark:bg-white dark:text-black  text-white text-sm font-medium tracking-wide overflow-hidden group">
            <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-8">
              Donate
            </span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
             Donate
            </span>
          </button>
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
