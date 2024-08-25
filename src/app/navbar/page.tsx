"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/recommendation', label: 'Recommendation' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/my-list', label: 'My List' },  
  ];

  return (
    <nav className="bg-black p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Watchnaon</Link>
        </div>
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-300 hover:text-white transition duration-500 ease-in-out ${
                isActive(link.href) ? 'bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg' : 'px-4 py-2'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-white text-2xl font-bold hidden md:block">
            <Link href="/profile">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${
                  isActive('/profile') ? 'bg-red-600 shadow-lg' : 'bg-gray-700'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="none"
                  className="w-6 h-6"
                >
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21a7.5 11.5 0 0 1 13 0"></path>
                </svg>
              </div>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none transition duration-500 ease-in-out"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden bg-black text-center overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-2 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-300 hover:text-white transition duration-500 ease-in-out ${
                isActive(link.href) ? 'bg-red-600 text-white py-2 rounded-md shadow-lg' : 'bg-slate-600 py-2 rounded-md'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/profile"
            className={`flex items-center justify-center text-gray-300 hover:text-white transition duration-500 ease-in-out ${
              isActive('/profile') ? 'bg-red-600 text-white py-2 rounded-md shadow-lg' : 'bg-slate-600 py-2 rounded-md'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              stroke="none"
              className="w-6 h-6"
            >
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M5.5 21a7.5 11.5 0 0 1 13 0"></path>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




