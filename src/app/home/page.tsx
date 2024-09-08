"use client";
import { useSession } from "next-auth/react";
import { DashboardNav } from "../_components/dashboard-navbar";
import { Drawer } from "../_components/drawer";
import { useRouter } from "next/navigation";
import { WatchLaterMovies } from "../_components/watch-later-movie";
import { FavoriteMovies } from "../_components/favorite-movie";

export default function HomePage() {
  const router = useRouter();
  const { data: sessionData } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
      window.location.reload();
    },
  });
  const user = sessionData?.user;
  return (
    <div className="mt-16 w-full">
      <div className="flex h-full">
        <div className="flex-grow bg-gray-100 p-8">
          <h1 className="mb-4 mt-8 text-5xl font-bold">
            Hello, {user?.name} !
          </h1>
          <h2 className="mb-4 mt-8 text-2xl font-bold">
            Your Watch Later List
          </h2>
          <div className="h-auto w-full">
            <WatchLaterMovies id={user?.id} />
          </div>
          <h2 className="mb-4 mt-8 text-2xl font-bold">Your Favorite List</h2>
          <div className="w-full">
            <FavoriteMovies id={user?.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
