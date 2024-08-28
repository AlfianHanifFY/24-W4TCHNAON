"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FavoriteMovies } from "~/app/_components/favorite-movie";
import { api } from "~/trpc/react";

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
        <a
          href="http://https://24-w4-tchnaon-cls6-8kqvyiqyh-alfianhaniffys-projects.vercel.app/profile"
          className="mt-16 flex h-14 w-full items-center justify-center"
        >
          <i className="bx bxs-user absolute left-4 text-2xl"></i>
          <p className="">USER INFO</p>
        </a>
        <a
          href="http://https://24-w4-tchnaon-cls6-8kqvyiqyh-alfianhaniffys-projects.vercel.app/profile/favorite"
          className="my-4 flex h-14 w-full items-center justify-center bg-[#555555]"
        >
          <i className="bx bxs-heart absolute left-4 text-2xl"></i>
          <p className="">FAVORITE</p>
        </a>
        <a
          href="http://https://24-w4-tchnaon-cls6-8kqvyiqyh-alfianhaniffys-projects.vercel.app/profile/watch-later"
          className="my-4 flex h-14 w-full items-center justify-center"
        >
          <i className="bx bxs-star absolute left-4 text-2xl"></i>
          <p className="">WATCH LATER</p>
        </a>
      </div>

      {/* Box */}
      <div className="w-full">
        <FavoriteMovies id={user?.id} />
      </div>
    </div>
  );
}
