"use client";
import { useSession } from "next-auth/react";
import { DashboardNav } from "../_components/dashboard-navbar";
import { Drawer } from "../_components/drawer";
import { useRouter } from "next/navigation";
import { WatchLaterMovies } from "../_components/watch-later-movie";
import { FavoriteMovies } from "../_components/favorite-movie";
import Image from "next/image";
import { api } from "~/trpc/react";
import MustLoginPage from "../_components/must-login";

export default function HomePage() {
  const router = useRouter();
  const { data: sessionData, status } = useSession({
    required: true,
    onUnauthenticated() {},
  });
  if (status != "authenticated") {
    return <MustLoginPage />;
  }
  const user = sessionData?.user;
  const list = api.user.getUserList.useQuery({ userId: user?.id });
  return (
    <div className="mt-16 h-screen w-full overflow-auto bg-black">
      <div className="flex h-full">
        <div className="flex-grow p-8">
          <h1 className="mb-10 mt-10 animate-pulse text-5xl font-bold text-white">
            Hello, {user?.name} !
          </h1>
          <div className="h-96 rounded-xl bg-gradient-to-b from-[#3C3A3A] p-6 text-white">
            <span className="flex flex-row gap-6 text-5xl font-bold">
              Your List{" "}
              <a href="/add-list">
                <button className="hover:scale-110">+</button>
              </a>
            </span>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
              <button
                onClick={() => {
                  router.push("/favorite");
                }}
                className="flex flex-row rounded-sm bg-gradient-to-l from-pink-400 via-purple-500 to-indigo-600 p-4 hover:scale-105"
              >
                <div className="p-1 md:w-1/4">
                  <Image
                    src="/icon/love-icon.png"
                    width={30}
                    height={30}
                    alt="icon"
                  />
                </div>
                <div className="p-1">
                  <span className="text-2xl">Favorite</span>
                </div>
              </button>
              <button
                onClick={() => {
                  router.push("/watch-later");
                }}
                className="flex flex-row rounded-sm bg-gradient-to-r from-blue-400 to-blue-700 p-4 hover:scale-105"
              >
                <div className="w-1/4 p-1">
                  <Image
                    src="/icon/video-icon.png"
                    width={30}
                    height={30}
                    alt="icon"
                  />
                </div>
                <div className="p-1">
                  <span className="text-2xl">Watch Later</span>
                </div>
              </button>
              {list.data?.list.map((val) => {
                return (
                  <button
                    onClick={() => {
                      router.push(`list/${val.listId}`);
                    }}
                    className={`flex flex-row rounded-sm p-4 hover:scale-105 ${val.prop}`}
                  >
                    <div className="w-1/4 p-1">
                      <Image src={val.icon} width={30} height={30} alt="icon" />
                    </div>
                    <div className="p-1">
                      <span className="text-2xl">{val.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
