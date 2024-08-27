"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Label } from "@headlessui/react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/recommendation", label: "Recommendation" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/my-list", label: "My List" },
    { href: "/random", label: "Random" },
  ];

  const handleReload = (href: string) => {
    if (pathname === href) {
      router.refresh();
    } else {
      router.push(href);
      router.refresh();
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          <Link href="/" aria-label="Home" onClick={() => handleReload("/")}>
            W4TCHNAON
          </Link>
        </div>
        <div className="hidden flex-grow justify-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              onClick={() => handleReload(link.href)}
              className={`text-gray-300 transition duration-500 ease-in-out hover:text-white ${
                isActive(link.href)
                  ? "rounded-lg bg-red-600 px-4 py-2 text-white shadow-lg"
                  : "px-4 py-2"
              }`}
              aria-label={link.label}
            >
              <button> {link.label}</button>
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden text-2xl font-bold text-white md:block">
            <Link
              href="/search-movie"
              aria-label="Search Movies"
              onClick={() => handleReload("/search-movie")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8 transition-all duration-500 ease-in-out hover:text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM17.293 17.293l4.294 4.293"
                />
              </svg>
            </Link>
          </div>
          <div className="hidden text-2xl font-bold text-white md:block">
            <Link
              href="/profile"
              aria-label="Profile"
              onClick={() => handleReload("/profile")}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ease-in-out ${
                  isActive("/profile") ? "bg-red-600 shadow-lg" : "bg-gray-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="none"
                  className="h-6 w-6"
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
              className="text-gray-300 transition duration-500 ease-in-out hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden bg-black text-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              onClick={() => handleReload(link.href)}
              className={`text-gray-300 transition duration-500 ease-in-out hover:text-white ${
                isActive(link.href)
                  ? "rounded-md bg-red-600 py-2 text-white shadow-lg"
                  : "rounded-md bg-slate-600 py-2"
              }`}
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
          <a
            onClick={() => handleReload("/profile")}
            className={`flex items-center justify-center text-gray-300 transition duration-500 ease-in-out hover:text-white ${
              isActive("/profile")
                ? "rounded-md bg-red-600 py-2 text-white shadow-lg"
                : "rounded-md bg-slate-600 py-2"
            }`}
            aria-label="Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              stroke="none"
              className="h-6 w-6"
            >
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M5.5 21a7.5 11.5 0 0 1 13 0"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
