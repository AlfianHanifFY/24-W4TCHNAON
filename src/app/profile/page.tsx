"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProfileImage } from "../_components/profile-image";
import LogOutButton from "../_components/log-out";
import { Linden_Hill } from "next/font/google";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
      window.location.reload();
    },
  });
  const user = data?.user;
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-16 flex">
      {/* left navbar */}
      <div className="h-screen w-1/4 bg-[#B3B3B3]">
        <Link
          href="/profile"
          className="mt-16 flex h-14 w-full items-center justify-center bg-[#555555]"
        >
          <i className="bx bxs-user absolute left-4 text-2xl"></i>
          <p className="">USER INFO</p>
        </Link>
        <Link
          href="/profile-favorite"
          className="my-4 flex h-14 w-full items-center justify-center"
        >
          <i className="bx bxs-heart absolute left-4 text-2xl"></i>
          <p className="">FAVORITE</p>
        </Link>
        <Link
          href="/profile-watch-later"
          className="my-4 flex h-14 w-full items-center justify-center"
        >
          <i className="bx bxs-star absolute left-4 text-2xl"></i>
          <p className="">WATCH LATER</p>
        </Link>
      </div>

      <div className="mb-20 mt-14 h-auto w-full">
        <div className="ml-20 mr-20 justify-center">
          <div className="mb-10 flex">
            <img
              src={user?.image}
              width={500}
              height={500}
              alt="Picture of the author"
              className="mr-5 mt-4 h-24 w-24 max-w-sm rounded-full sm:flex sm:items-center"
            />
            <div className="mt-4 w-2/3 items-center space-x-4 rounded-xl bg-slate-100 p-6">
              <div className="space-y-2">
                <p className="mt-2 text-3xl font-semibold text-black">
                  {user?.name}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2">
              <p className="justify-content-center mt-4 text-left italic">
                NAME
              </p>
            </div>
            <div className="ml-2 w-1/2">
              <p className="justify-content-center mt-4 text-left italic">
                EMAIL
              </p>
            </div>
          </div>
          <div className="flex w-full">
            <div className="h-15 mx-6 my-4 mr-2 w-1/2 rounded-3xl border-2 p-2">
              <p>{user?.name}</p>
            </div>
            <div className="h-15 mx-6 my-4 mr-2 w-1/2 rounded-3xl border-2 p-2">
              <p>{user?.email}</p>
            </div>
          </div>
          <p className="justify-content-center mb-4 mt-10 text-left italic">
            FAVORITE GENRE
          </p>
          <div className="mb-5 ml-6 flex flex-row">
            <button className="text-black-600 mr-4 rounded-full border bg-white px-10 py-1 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Genre 1
            </button>
            <button className="text-black-600 mr-4 rounded-full border bg-white px-10 py-1 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Genre 1
            </button>
            <button className="text-black-600 mr-4 rounded-full border bg-white px-10 py-1 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Genre 1
            </button>
          </div>
          <p className="justify-content-center mb-4 mt-10 text-left italic">
            FAVORITE ACTOR
          </p>
          <div className="ml-6 flex flex-row">
            <button className="text-black-600 mr-4 rounded-full border bg-white px-10 py-1 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Genre 1
            </button>
            <button className="text-black-600 mr-4 rounded-full border bg-white px-10 py-1 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Genre 1
            </button>
            <button className="text-black-600 mr-4 rounded-full border bg-white px-10 py-1 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Genre 1
            </button>
          </div>
          <div className="flex w-full justify-end">
            <LogOutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
