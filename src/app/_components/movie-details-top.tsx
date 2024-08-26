"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { api } from "~/trpc/react";

export function MovieDetailsTop({ userId, id }) {
  const movie = api.movie.getMovieDetail.useQuery({ movieId: id });
  const genres = movie.data?.genre;
  const cast = movie.data?.actor;
  const createWatchLater = api.user.createWatchLater.useMutation();
  const createFavorite = api.user.createFavorite.useMutation();
  return (
    <div className="p-6 font-light">
      {/* Background Image */}

      <img
        className="absolute inset-0 z-0 h-[310px] w-full rounded-lg bg-cover bg-center object-cover blur-lg"
        src={movie.data?.poster[0]?.link}
        alt="image description"
      />

      {/* Box, Title, and Genres */}
      <div className="relative z-10 ml-20 mt-16 flex items-start space-x-4">
        <div className="flex flex-col">
          <div className="box-content h-48 w-40 overflow-hidden rounded-md bg-[#a39494] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 sm:h-52 sm:w-48 md:h-64 md:w-52">
            <img
              src={movie.data?.poster[0]?.link}
              alt="Movie Poster"
              width={500}
              height={300}
            />
          </div>

          {/* Watch Later */}
          <div className="mt-4 flex flex-col space-y-2 text-center">
            <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-[#F5F5F5] px-5 py-2 font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:bg-gray-50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createWatchLater.mutate({
                    userId: userId,
                    movieId: "1000001",
                  });
                }}
              >
                <button>
                  <span>Watch Later </span>
                </button>
              </form>
            </div>
            {/* Add to List */}
            <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-[#F5F5F5] px-5 py-2 font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:bg-gray-50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createFavorite.mutate({
                    userId: userId,
                    movieId: id,
                  });
                }}
              >
                <button>
                  <span>Add Favorite </span>
                </button>
              </form>
            </div>
            {/* Comments */}
          </div>
          <div className="mt-16 flex flex-col text-center">
            <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-lg bg-[#F5F5F5] px-5 py-4 font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <i className="bx bx-comment-detail"></i> {/* Icon */}
              <a href="#">Show Comments</a>
            </div>
          </div>
        </div>
        <div></div>

        {/* Title and Genres */}
        <div className="mt-1 p-3">
          {/* Title */}
          <div className="flex h-20 w-auto items-center rounded-lg bg-[#F5F5F5] p-10 italic">
            <h1 className="text-3xl font-semibold">
              {movie.data?.detail[0]?.name}
            </h1>
          </div>

          {/* Genres */}
          <div className="mt-2 flex space-x-2 font-normal">
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
            <span className="text-3xl">
              <i className="bx bxs-show"></i>
            </span>

            <span className="text-2xl">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </span>
            <span className="ml-2 rounded-full bg-[#D9D9D9] px-3 py-1 font-normal italic">
              {movie.data?.detail[0]?.rating}/5.0
            </span>
          </div>

          {/* Line */}
          <div className="absolute left-60 right-0 mt-2 h-0.5 bg-[#757575]"></div>

          {/* Details and Cast */}
          <div className="m-7 space-y-4">
            <div className="items-center justify-between space-x-64 font-normal italic">
              <span className="relative rounded-full bg-[#D9D9D9] px-8 py-1">
                Details
              </span>
              <span className="relative rounded-full bg-[#D9D9D9] px-8 py-1">
                Cast
              </span>
            </div>
            {/* Details */}
            <div className="space-x-96">
              <div className="absolute w-80 rounded-xl bg-[#F5F5F5] px-7 py-7">
                <p>Country: {movie.data?.country[0]?.country}</p>
                <p>Release Date: {movie.data?.release[0]?.date}</p>
                <p>Duration: {movie.data?.detail[0]?.minute} minute</p>
              </div>
              {/* Cast */}
              <div className="space-y-3">
                {cast?.map((data) => {
                  return (
                    <span className="relative flex items-center">
                      <span className="z-10 h-10 w-10 rounded-full bg-[#B3B3B3]"></span>
                      <span className="-ml-10 h-10 w-56 rounded-full bg-[#F5F5F5] px-12 py-2">
                        {data.name}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Line */}
          <div className="absolute left-60 right-0 z-10 mt-2 h-0.5 bg-[#757575]">
            {/* Storyline */}
            <div className="relative m-7 items-center justify-between space-y-3 font-normal italic">
              <span className="relative rounded-full bg-[#D9D9D9] px-8 py-1">
                Storyline
              </span>
              <div className="absolute left-0 right-0 h-36 rounded-xl bg-[#F5F5F5] p-2">
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
