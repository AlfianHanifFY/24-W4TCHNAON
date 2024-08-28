"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WatchLaterMovies } from "~/app/_components/watch-later-movie";

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
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      {/* left navbar */}
      <div className="h-screen w-1/4 bg-[#B3B3B3]">
        <Link
          href="/profile"
          className="mt-16 flex h-14 w-full items-center justify-center"
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
          href="./profile-watch-later"
          className="my-4 flex h-14 w-full items-center justify-center bg-[#555555]"
        >
          <i className="bx bxs-star absolute left-4 text-2xl"></i>
          <p className="">WATCH LATER</p>
        </Link>
      </div>

      <div className="h-auto w-full">
        <WatchLaterMovies id={user?.id} />
      </div>
    </div>
  );
}
