"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { api } from "~/trpc/react";
import MustLoginPage from "../_components/must-login";

export default function Random() {
  const router = useRouter();
  const { data: sessionData, status } = useSession({
    required: true,
    onUnauthenticated() {},
  });
  if (status != "authenticated") {
    return <MustLoginPage />;
  }
  const user = sessionData?.user;

  const [name, setName] = useState("?????");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("??");
  const [description, setDescription] = useState("???");
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
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-16 bg-black p-12 md:h-screen">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@1..1000&family=Montserrat:wght@400&display=swap"
        rel="stylesheet"
      ></link>

      {/* Also Like + Refresh */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold text-white md:text-3xl">
          Find Movie !
        </div>
        <div className="flex items-center justify-center rounded-full border-2 bg-[#3C3A3A] px-7 py-1 text-white hover:bg-[#BA0000] hover:text-white">
          <i className="bx bx-refresh"></i> {/* Icon */}
          <button onClick={() => handleRefreshClick()}> Refresh </button>
        </div>
      </div>
      {/* Judul */}
      <div className="relative ml-10 mt-12 flex md:ml-20">
        <div className="flex flex-col md:flex-row">
          <div className="box-content h-72 w-52 overflow-hidden rounded-md bg-[#B3B3B3] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={poster}></img>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-col">
              <div className="mt-3 text-4xl font-bold text-white md:m-3 md:pl-12">
                {" "}
                {name}{" "}
              </div>
              <div className="mt-2 md:ml-8">
                <span className="ml-2 rounded-full bg-yellow-200 px-3 font-normal italic">
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
                alert(`${name} added to list`);
              }}
            >
              {" "}
              <button className="mt-4 w-48 items-center space-x-2 rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] px-11 py-2 font-normal text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000] md:ml-10">
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
                alert(`${name} added to list`);
              }}
            >
              {" "}
              <button className="mt-4 w-48 items-center space-x-2 rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] px-11 py-2 font-normal text-white shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000] md:ml-10">
                <i className="bx bx-time-five"></i> {/* Icon */}
                <p>Favorite</p>
              </button>
            </form>
            {/* Details (link to details movie) */}
            <div className="mt-3 pl-12">
              <a
                href={`movie-details/${id}`}
                className="border-b-2 border-red-500 text-sm font-normal text-red-500"
              >
                See Details
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Line */}
      <div className="mt-10 h-0.5 w-fit bg-[#757575] md:mx-20"></div>

      {/* Storyline */}
      <div className="mt-4 flex flex-col space-y-3 md:mx-20">
        <div className="text-lg font-semibold text-white md:ml-14">
          Storyline
        </div>
        <div className="text-l mx-auto h-full w-full max-w-4xl rounded-xl bg-[#3C3A3A] p-2 text-white">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
