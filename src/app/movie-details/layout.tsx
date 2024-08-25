"use client";
import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isClient, setIsClient] = useState(false); // Initializing useState

  useEffect(() => {
    setIsClient(true); // Setting the state to true after the component mounts
  }, []);

  return (
    <div>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      {isClient && ( // Conditional rendering based on isClient state
        <body>
          {/* Navbar */}
          <div className="fixed left-0 right-0 top-0 z-20 rounded-lg bg-white bg-opacity-50 shadow-md">
            <nav className="flex items-center p-5">
              <button>
                <a href="#">
                  <i className="bx bx-share bx-sm text-2xl transition-transform duration-300 ease-in-out hover:scale-125"></i>
                </a>
              </button>
              <button className="ml-auto flex space-x-7">
                <a href="#">
                  <i className="bx bx-search bx-sm text-2xl transition-transform duration-300 ease-in-out hover:scale-125"></i>
                </a>
                <a href="#">
                  <i className="bx bx-home bx-sm text-2xl transition-transform duration-300 ease-in-out hover:scale-125"></i>
                </a>
                <a href="#">
                  <i className="bx bxs-user-circle bx-sm text-2xl transition-transform duration-300 ease-in-out hover:scale-125"></i>
                </a>
              </button>
            </nav>
          </div>
          <SessionProvider>
            <div className="pt-20">{children}</div>
          </SessionProvider>
        </body>
      )}
    </div>
  );
}
