"use client";
import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import ClientLayout from "../ClientLayout";

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
        <body className="bg-black">
          <ClientLayout>
            <div className="pt-20">{children}</div>
          </ClientLayout>
        </body>
      )}
    </div>
  );
}
