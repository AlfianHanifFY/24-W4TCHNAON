"use client";

import { usePathname } from "next/navigation";
import Navbar from "./_components/navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noNavbarRoutes = ["/login", "/register-page"];

  return (
    <>
      {!noNavbarRoutes.includes(pathname) && <Navbar />}
      <div className="flex-grow">{children}</div>
    </>
  );
}
