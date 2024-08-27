"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
    },
  });

  const user = data?.user;
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-16 flex">
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      {/* left navbar */}
      <div className="h-screen w-1/4 bg-[#B3B3B3]">
        <a
          href="http://localhost:3000/profile"
          className="mt-16 flex h-14 w-full items-center justify-center"
        >
          <i className="bx bxs-user absolute left-4 text-2xl"></i>
          <p className="">USER INFO</p>
        </a>
        <a
          href="http://localhost:3000/profile/favorite"
          className="my-4 flex h-14 w-full items-center justify-center bg-[#555555]"
        >
          <i className="bx bxs-heart absolute left-4 text-2xl"></i>
          <p className="">FAVORITE</p>
        </a>
        <a
          href="http://localhost:3000/profile/watch-later"
          className="my-4 flex h-14 w-full items-center justify-center"
        >
          <i className="bx bxs-star absolute left-4 text-2xl"></i>
          <p className="">WATCH LATER</p>
        </a>
      </div>

      {/* Box */}
      <div className="h-auto w-full">
        <div className="relative z-10 ml-20 mt-16 flex space-x-4">
          <div className="flex flex-col">
            <div className="group relative box-content h-48 w-40 rounded-md bg-[#B3B3B3] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 sm:h-52 sm:w-48 md:h-64 md:w-52">
              <i className="bx bxs-heart absolute bottom-2 right-2 text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
