"use client";
import { useSession } from "next-auth/react";
import { DashboardNav } from "../_components/dashboard-navbar";
import { Drawer } from "../_components/drawer";
import { useRouter } from "next/navigation";
import { WatchLaterMovies } from "../_components/watch-later-movie";
import { FavoriteMovies } from "../_components/favorite-movie";
import Image from "next/image";
import { api } from "~/trpc/react";
import { useState } from "react";

export default function AddListPage() {
  const router = useRouter();
  const { data: sessionData } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
      window.location.reload();
    },
  });
  const user = sessionData?.user;
  const createList = api.user.createUserList.useMutation();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("/icon/leaf-icon.png");
  const [prop, setProp] = useState(
    "bg-gradient-to-b from-green-400 to-green-700",
  );
  const [header, setHeader] = useState(
    "bg-gradient-to-b from-green-400 to-black",
  );

  return (
    <div className="mt-16 h-screen w-screen bg-black md:h-screen md:w-full">
      <div className="flex h-full">
        <div className="flex-grow md:p-8">
          <div className="h-96 rounded-xl bg-gradient-to-b from-[#3C3A3A] p-6 text-white">
            <span className="flex flex-row gap-6 text-5xl font-bold">
              Add List
            </span>
            <div className="flex flex-col">
              <span className="mb-4 mt-10 text-3xl">Name</span>
              <input
                className="rounded-md bg-[#F7F1F1] p-4 text-black placeholder:italic placeholder:opacity-80 md:text-2xl"
                placeholder="insert your list name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div className="flex flex-col">
              <span className="mb-4 mt-10 text-3xl">Icon</span>
              <div className="grid scale-75 grid-cols-2 gap-3 md:scale-100 md:grid-cols-6">
                <button
                  onClick={() => {
                    setIcon("/icon/leaf-icon.png");
                    setProp("bg-gradient-to-b from-green-400 to-green-700");
                    setHeader("bg-gradient-to-b from-green-400 to-black");
                    alert(`u choose leaf`);
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-md bg-gradient-to-b from-green-400 to-green-700 hover:scale-110"
                >
                  <Image
                    src="/icon/leaf-icon.png"
                    width={60}
                    height={60}
                    alt="icon"
                  />
                </button>
                <button
                  onClick={() => {
                    setIcon("/icon/puzzle-icon.png");
                    setProp("bg-gradient-to-b from-[#F2DAC4] to-[#F2CEA2]");
                    setHeader("bg-gradient-to-b from-[#F2DAC4] to-black");
                    alert(`u choose puzzle`);
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-md bg-gradient-to-b from-[#F2DAC4] to-[#F2CEA2] hover:scale-110"
                >
                  <Image
                    src="/icon/puzzle-icon.png"
                    width={60}
                    height={60}
                    alt="icon"
                  />
                </button>
                <button
                  onClick={() => {
                    setIcon("/icon/mustache-icon.png");
                    setProp("bg-gradient-to-b from-gray-400 to-gray-700");
                    setHeader("bg-gradient-to-b from-gray-400 to-black");
                    alert(`u choose mustache`);
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-md bg-gradient-to-b from-gray-400 to-gray-700 hover:scale-110"
                >
                  <Image
                    src="/icon/mustache-icon.png"
                    width={60}
                    height={60}
                    alt="icon"
                  />
                </button>
                <button
                  onClick={() => {
                    setIcon("/icon/rocket-icon.png");
                    setProp("bg-gradient-to-b from-[#D0D9F2] to-[#716FA6]");
                    setHeader("bg-gradient-to-b from-[#D0D9F2] to-black");
                    alert(`u choose rocket`);
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-md bg-gradient-to-b from-[#D0D9F2] to-[#716FA6] hover:scale-110"
                >
                  <Image
                    src="/icon/rocket-icon.png"
                    width={60}
                    height={60}
                    alt="icon"
                  />
                </button>
                <button
                  onClick={() => {
                    setIcon("/icon/planet-icon.png");
                    setProp("bg-gradient-to-b from-yellow-400 to-yellow-700 ");
                    setHeader("bg-gradient-to-b from-yellow-400 to-black ");
                    alert(`u choose planet`);
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-md bg-gradient-to-b from-yellow-400 to-yellow-700 hover:scale-110"
                >
                  <Image
                    src="/icon/planet-icon.png"
                    width={60}
                    height={60}
                    alt="icon"
                  />
                </button>
                <button
                  onClick={() => {
                    setIcon("/icon/octopus-icon.png");
                    setProp("bg-gradient-to-b from-[#00D3D5] to-[#E6D7DC]");
                    setHeader("bg-gradient-to-b from-[#00D3D5] to-black");
                    alert(`u choose octopus`);
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-md bg-gradient-to-b from-[#00D3D5] to-[#E6D7DC] hover:scale-110"
                >
                  <Image
                    src="/icon/octopus-icon.png"
                    width={60}
                    height={60}
                    alt="icon"
                  />
                </button>
              </div>

              <button
                onClick={() => {
                  createList.mutate({
                    userId: user?.id,
                    listName: name,
                    creator: user?.name,
                    icon: icon,
                    prop: prop,
                    header: header,
                  });
                  setName("");
                  setIcon("");
                  setProp("");
                  alert("new list created");
                  router.push("/home");
                }}
                className="mt-8 flex w-32 items-center justify-center space-x-2 rounded-xl border border-gray-600 bg-gray-400 bg-opacity-50 py-2 shadow-sm transition duration-150 hover:translate-y-0.5 hover:bg-red-600 hover:shadow-lg"
              >
                <span>Create !</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
