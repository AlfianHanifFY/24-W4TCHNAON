"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { api } from "~/trpc/react";

export function MovieDetailsTop({ userId, id }) {
  const movie = api.movie.getMovieDetail.useQuery({ movieId: id });
  const genres = movie.data?.genre;
  const cast = movie.data?.actor;
  const userList = api.user.getUserList.useQuery({ userId: userId });
  const createWatchLater = api.user.createWatchLater.useMutation();
  const createFavorite = api.user.createFavorite.useMutation();
  const createUserListMovie = api.user.createUserListMovie.useMutation();
  const [isSquareVisible, setSquareVisible] = useState(false);

  const toggleSquare = () => {
    setSquareVisible(!isSquareVisible);
  };
  return (
    <div className="font-light md:p-6">
      {/* Background Image */}

      <img
        className="absolute inset-0 z-0 h-[310px] w-screen rounded-lg bg-cover bg-center object-cover blur-lg brightness-75"
        src={movie.data?.poster[0]?.link}
        alt="image description"
      />

      {/* Box, Title, and Genres */}
      <div className="relative z-10 mt-16 flex flex-col items-start space-x-4 md:ml-20 md:flex-row">
        <div className="flex flex-col">
          <div className="ml-28 box-content h-52 w-40 overflow-hidden rounded-md bg-[#3C3A3A] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 sm:h-52 sm:w-48 md:ml-0 md:h-72 md:w-48">
            <img
              src={movie.data?.poster[0]?.link}
              alt="Movie Poster"
              width={250}
              height={300}
            />
          </div>

          {/* Watch Later */}
          <div className="ml-28 mt-4 flex flex-col space-y-2 text-center md:ml-0">
            <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] px-5 py-2 font-normal text-white shadow-sm ring-1 ring-inset transition-shadow delay-300 hover:bg-gray-50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createWatchLater.mutate({
                    userId: userId,
                    movieId: id,
                  });
                  alert("added to watch later");
                }}
              >
                <button>
                  <span>Watch Later </span>
                </button>
              </form>
            </div>
            {/* Add to Fav */}
            <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] px-5 py-2 font-normal text-gray-900 shadow-sm ring-1 ring-inset transition-shadow delay-300 hover:bg-gray-50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createFavorite.mutate({
                    userId: userId,
                    movieId: id,
                  });
                  alert("added to favorite");
                }}
              >
                <button>
                  <span className="text-white">Add Favorite </span>
                </button>
              </form>
            </div>
            <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] px-5 py-2 font-normal text-gray-900 shadow-sm ring-1 ring-inset transition-shadow delay-300 hover:bg-gray-50">
              <button onClick={toggleSquare}>
                <span className="text-white">Add To List </span>
              </button>
            </div>
            {isSquareVisible && (
              <div className="mt-5 flex h-full w-40 flex-col items-center justify-center space-y-4 rounded-lg border-2 border-black bg-black p-1">
                {userList.data?.list?.map((val) => {
                  return (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        createUserListMovie.mutate({
                          movieId: id,
                          listId: val.listId,
                        });
                        alert(
                          `${movie.data?.detail[0]?.name} added to ${val.name}`,
                        );
                      }}
                    >
                      <button className="ml-3 w-40 rounded-xl bg-[#3C3A3A] p-2 text-white opacity-80 hover:opacity-100 md:ml-8">
                        {val.name}
                      </button>
                    </form>
                  );
                })}
              </div>
            )}
            {/* Comments */}
            <div className="mt-16 flex flex-col text-center">
              <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-[#BA0000] to-[#FF0000] px-5 py-4 font-normal text-white shadow-sm ring-1 ring-inset hover:bg-gray-50">
                <i className="bx bx-comment-detail"></i> {/* Icon */}
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  <a href="#">Show Comments</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Title and Genres */}
        <div className="mt-1 md:w-3/4 md:p-3">
          {/* Title */}
          <div className="md:w- my-8 ml-6 flex h-20 w-80 items-center rounded-lg bg-[#3C3A3A] p-10 md:my-0 md:ml-0 md:w-max">
            <h1 className="text-xl font-semibold tracking-wider text-white md:text-3xl">
              {movie.data?.detail[0]?.name}
            </h1>
          </div>

          {/* Genres */}
          <div className="mt-2 flex w-screen space-x-2 overflow-scroll font-normal">
            {genres?.map((data) => {
              return (
                <span className="rounded-full bg-[#F5F5F5] px-5 py-1">
                  {data.genre}
                </span>
              );
            })}
          </div>

          {/* Jumlah Views */}
          <div className="flex items-center space-x-3 bg-transparent pt-5">
            <span className="ml-8 rounded-full bg-yellow-400 px-3 py-1 font-normal italic md:ml-2">
              {movie.data?.detail[0]?.rating}/5.0
            </span>
          </div>

          {/* Line */}
          <div className="absolute left-60 right-0 mt-2 h-0.5 md:bg-[#757575]"></div>

          {/* Details and Cast */}
          <div className="m-7">
            {/* Responsive container that switches from column (on mobile) to row (on desktop) */}
            <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
              {/* Details Section */}
              <div className="font-normal italic">
                <span className="relative rounded-full bg-[#3C3A3A] px-8 py-1 text-white">
                  Details
                </span>
                <div className="relative mt-4 w-80 rounded-xl bg-[#3C3A3A] px-7 py-7 text-white">
                  <p>Country: {movie.data?.country[0]?.country}</p>
                  <p>Release Date: {movie.data?.release[0]?.date}</p>
                  <p>Duration: {movie.data?.detail[0]?.minute} minutes</p>
                </div>
              </div>

              {/* Cast Section */}
              <div className="font-normal italic">
                <span className="relative w-full rounded-full bg-[#3C3A3A] px-8 py-1 text-white">
                  Cast
                </span>
                <div className="mt-4 space-y-4 text-white">
                  {cast?.map((data) => {
                    return (
                      <span
                        key={data.name}
                        className="relative flex items-center"
                      >
                        <span className="z-10 h-10 w-10 rounded-full bg-[#151414] ring-2 ring-[#3C3A3A]"></span>
                        <span className="-ml-10 h-10 w-80 rounded-full bg-[#3C3A3A] px-12 py-2">
                          {data.name}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Line */}
          <div className="right-0 z-10 mt-2 h-0.5 md:absolute md:left-60 md:bg-[#757575]">
            {/* Storyline */}
            <div className="relative m-7 items-center justify-between space-y-3 font-normal italic md:h-auto">
              <span className="relative rounded-full bg-[#3C3A3A] px-8 py-1 text-white">
                Storyline
              </span>
              <div className="absolute left-0 right-0 h-36 overflow-scroll rounded-xl bg-[#3C3A3A] p-2 text-white">
                <div>
                  <p>{movie.data?.detail[0]?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
