"use client";

import { usePathname } from "next/navigation";
import Navbar from "./_components/navbar";
import { useEffect, useState } from "react";
import { Loading } from "./_components/loading";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noNavbarRoutes = ["/login", "/register-page"];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      {!noNavbarRoutes.includes(pathname) && <Navbar />}
      <div className="flex-grow">{children}</div>
    </>
  );
}
