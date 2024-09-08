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
    <div className="mt-16 flex flex-col p-8 md:flex-row md:p-0">
      <div className="mx-auto mb-20 mt-14 w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <img
            src={user?.image}
            width={500}
            height={500}
            alt="Picture of the author"
            className="mb-4 h-24 w-24 max-w-sm rounded-full md:mb-0 md:mr-5"
          />
          <div className="w-full rounded-xl bg-slate-100 p-6 md:w-2/3">
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-black">{user?.name}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <p className="text-left italic">NAME</p>
          </div>
          <div className="mt-4 hidden w-full md:ml-2 md:mt-0 md:block md:w-1/2">
            <p className="text-left italic">EMAIL</p>
          </div>
        </div>

        <div className="mt-4 flex w-full flex-col md:flex-row">
          <div className="mb-4 w-full rounded-3xl border-2 p-2 md:mb-0 md:mr-2 md:w-1/2">
            <p>{user?.name}</p>
          </div>
          <div className="mt-4 block w-full md:ml-2 md:mt-0 md:hidden md:w-1/2">
            <p className="text-left italic">EMAIL</p>
          </div>
          <div className="w-full rounded-3xl border-2 p-2 md:w-1/2">
            <p>{user?.email}</p>
          </div>
        </div>

        <p className="mb-4 mt-10 text-left italic">FAVORITE GENRE</p>
        <div className="mb-5 flex flex-wrap gap-4">
          <button className="text-black-600 rounded-full border bg-white px-6 py-2 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Genre 1
          </button>
          <button className="text-black-600 rounded-full border bg-white px-6 py-2 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Genre 2
          </button>
          <button className="text-black-600 rounded-full border bg-white px-6 py-2 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Genre 3
          </button>
        </div>

        <p className="mb-4 mt-10 text-left italic">FAVORITE ACTOR</p>
        <div className="flex flex-wrap gap-4">
          <button className="text-black-600 rounded-full border bg-white px-6 py-2 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Actor 1
          </button>
          <button className="text-black-600 rounded-full border bg-white px-6 py-2 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Actor 2
          </button>
          <button className="text-black-600 rounded-full border bg-white px-6 py-2 text-sm font-semibold hover:border-transparent hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Actor 3
          </button>
        </div>

        <div className="mt-10 flex justify-end">
          <LogOutButton />
        </div>
      </div>
    </div>
  );
}
