"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function Random() {
  const router = useRouter();
  const { data: sessionData, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
    },
  });
  const user = sessionData?.user;
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const { data, refetch } = api.movie.getRandomMovie.useQuery();
  const createWatchLater = api.user.createWatchLater.useMutation();
  const createFavorite = api.user.createFavorite.useMutation();

  const handleRefreshClick = () => {
    refetch(); // Refetch the data
    if (data) {
      setName(data[0]?.movies.name);
      setDescription(data[0]?.movies.description);
      setPoster(data[0]?.moviePosters?.link);
      setRating(data[0]?.movies.rating);
      setId(data[0]?.movies.id);
    }
  };
  return (
    <div className="mt-16 p-12">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@1..1000&family=Montserrat:wght@400&display=swap"
        rel="stylesheet"
      ></link>

      {/* Also Like + Refresh */}
      <div className="flex items-center justify-between">
        <div className="text-3xl font-semibold">You May Also Like</div>
        <div className="flex items-center justify-center rounded-full border-2 border-[#BA0000] bg-[#F5F5F5] px-7 py-1 text-[#BA0000] hover:bg-[#BA0000] hover:text-white">
          <i className="bx bx-refresh"></i> {/* Icon */}
          <button onClick={() => handleRefreshClick()}> Refresh </button>
        </div>
      </div>
      {/* Judul */}
      <div className="relative ml-20 mt-12 flex">
        <div className="flex flex-row">
          <div className="box-content h-72 w-52 overflow-hidden rounded-md bg-[#B3B3B3] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={poster}></img>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="pl-12 text-4xl font-bold"> {name} </div>
              <div className="ml-8 mt-2">
                <span className="ml-2 rounded-full bg-[#D9D9D9] px-3 font-normal italic">
                  {rating}/5.0
                </span>
              </div>
            </div>

            {/* Watch Later */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createWatchLater.mutate({
                  userId: user.id,
                  movieId: id,
                });
              }}
            >
              {" "}
              <button className="ml-10 mt-4 w-48 items-center space-x-2 rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] px-11 py-2 font-normal text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
                <i className="bx bx-time-five"></i> {/* Icon */}
                <p>Watch Later</p>
              </button>
            </form>

            {/* Views + Rating */}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                createFavorite.mutate({
                  userId: user.id,
                  movieId: id,
                });
              }}
            >
              {" "}
              <button className="ml-10 mt-4 w-48 items-center space-x-2 rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] px-11 py-2 font-normal text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
                <i className="bx bx-time-five"></i> {/* Icon */}
                <p>Favorite</p>
              </button>
            </form>
            {/* Details (link to details movie) */}
            <div className="mt-3 pl-12">
              <a
                href={`http://localhost:3000/movie-details/${id}`}
                className="border-b-2 border-red-500 text-sm font-normal text-red-500"
              >
                See Details
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Line */}
      <div className="mx-20 mt-10 h-0.5 bg-[#757575]"></div>

      {/* Storyline */}
      <div className="mx-20 mt-4 flex flex-col space-y-3">
        <div className="ml-14 text-lg font-semibold">Storyline</div>
        <div className="text-l h-full w-full rounded-xl bg-[#D9D9D9] p-2">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
