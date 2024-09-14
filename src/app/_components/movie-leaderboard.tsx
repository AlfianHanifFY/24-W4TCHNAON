"use client";
import { api } from "~/trpc/react";
import React from "react";

export default function MovieLeaderboard() {
  const data = api.movie.getMovieLeaderBoard.useQuery();
  const restData: Record<string, unknown>[] = [];
  data.data?.list.map((val, rank) => {
    if (rank > 2) {
      restData.push(val);
    }
  });
  const rank = 4;

  return (
    <main className="min-h-screen bg-black p-8">
      <div className="mb-12 flex justify-center">
        <div className="bg-white-600 rounded-full px-6 py-3 text-black"></div>
      </div>

      <div className="mb-16 flex justify-center space-x-8">
        <div className="relative w-40 transform text-center transition hover:scale-105">
          <div className="absolute -right-5 -top-5 rounded-full bg-gray-400 px-3 py-1 text-white shadow-lg">
            2
          </div>
          <a href={`movie-details/${data.data?.list[1].id}`}>
            <img
              src={data.data?.list[1].link}
              alt="Cover"
              className="h-32 w-full rounded-lg shadow-md md:h-56"
            />
          </a>
          <div className="mt-4 text-white">
            <p className="font-bold md:text-lg">{data.data?.list[1].name}</p>
            <p className="">{data.data?.list[1].rating}</p>
          </div>
        </div>
        <div className="relative w-48 transform text-center transition hover:scale-105">
          <div className="absolute -right-6 -top-6 rounded-full bg-yellow-400 px-3 py-1 text-white shadow-lg">
            1
          </div>
          <a href={`movie-details/${data.data?.list[0].id}`}>
            <img
              src={data.data?.list[0].link}
              alt="Cover"
              className="h-36 w-full rounded-lg shadow-md md:h-64"
            />
          </a>

          <div className="mt-4 text-white">
            <p className="text-lg font-bold">{data.data?.list[0].name}</p>
            <p className="">{data.data?.list[0].rating}</p>
          </div>
        </div>
        <div className="relative w-40 transform text-center transition hover:scale-105">
          <div className="absolute -right-5 -top-5 rounded-full bg-orange-400 px-3 py-1 text-white shadow-lg">
            3
          </div>
          <a href={`movie-details/${data.data?.list[2].id}`}>
            <img
              src={data.data?.list[2].link}
              alt="Cover"
              className="h-36 w-full rounded-lg shadow-md md:h-56"
            />
          </a>

          <div className="mt-4 text-white">
            <p className="font-bold md:text-lg">{data.data?.list[2].name}</p>
            <p className="">{data.data?.list[2].rating}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {restData.map((val, rank) => (
          <div
            key={rank + 4}
            className="flex transform items-center rounded-lg bg-[#3C3A3A] p-6 shadow-md transition hover:scale-105"
          >
            <span className="w-6 text-3xl font-bold text-white md:w-12">
              {rank + 4}
            </span>
            <a href={`movie-details/${val.id}`}>
              <img
                src={val.link}
                alt="Cover"
                className="ml-6 h-20 w-16 rounded-lg shadow-sm md:h-28 md:w-20"
              />
            </a>

            <div className="ml-6 text-white">
              <p className="text-lg font-bold">{val.name}</p>
              <p className="">{val.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
