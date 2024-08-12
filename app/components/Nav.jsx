"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center py-4 px-2">
              <svg
                className="h-8 w-8 mr-2 text-white"
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
              <span className="font-semibold text-white text-xl">BD Martyr's 2024</span>
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
            <Link href="#donate" className="inline-block bg-red-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-red-500 transition duration-300">
              Donate
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
            <Link href="/" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/stories" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300">
              Stories
            </Link>
          </li>
          <li>
            <Link href="/memorial" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300">
              Memorial
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300">
              Contact
            </Link>
            <Link href="/about" className="block text-sm px-2 py-4 text-white hover:bg-red-500 transition duration-300">
            About
            </Link>
          </li>
          <li>
            <Link href="/donate" className="block text-sm px-2 py-4 text-white border border-white rounded hover:bg-red-500 transition duration-300">
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
