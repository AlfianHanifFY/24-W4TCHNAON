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
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mb-10">
        <nav className="flex items-center justify-center rounded-lg bg-white py-4 shadow-sm">
          <p className="text-lg font-semibold">Leaderboard</p>
        </nav>
      </div>

      <div className="mb-12 flex justify-center">
        <div className="bg-white-600 rounded-full px-6 py-3 text-black">
          Based On Rating
        </div>
      </div>

      <div className="mb-16 flex justify-center space-x-8">
        <div className="relative w-40 transform text-center transition hover:scale-105">
          <div className="absolute -right-5 -top-5 rounded-full bg-gray-400 px-3 py-1 text-white shadow-lg">
            2
          </div>
          <img
            src={data.data?.list[1].link}
            alt="Cover"
            className="h-56 w-full rounded-lg shadow-md"
          />
          <div className="mt-4">
            <p className="text-lg font-bold">{data.data?.list[1].name}</p>
            <p className="text-gray-500">{data.data?.list[1].rating}</p>
          </div>
        </div>
        <div className="relative w-48 transform text-center transition hover:scale-105">
          <div className="absolute -right-6 -top-6 rounded-full bg-yellow-400 px-3 py-1 text-white shadow-lg">
            1
          </div>
          <img
            src={data.data?.list[0].link}
            alt="Cover"
            className="h-64 w-full rounded-lg shadow-md"
          />
          <div className="mt-4">
            <p className="text-lg font-bold">{data.data?.list[0].name}</p>
            <p className="text-gray-500">{data.data?.list[0].rating}</p>
          </div>
        </div>
        <div className="relative w-40 transform text-center transition hover:scale-105">
          <div className="absolute -right-5 -top-5 rounded-full bg-orange-400 px-3 py-1 text-white shadow-lg">
            3
          </div>
          <img
            src={data.data?.list[2].link}
            alt="Cover"
            className="h-56 w-full rounded-lg shadow-md"
          />
          <div className="mt-4">
            <p className="text-lg font-bold">{data.data?.list[2].name}</p>
            <p className="text-gray-500">{data.data?.list[2].rating}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {restData.map((val, rank) => (
          <div
            key={rank + 4}
            className="flex transform items-center rounded-lg bg-white p-6 shadow-md transition hover:scale-105"
          >
            <span className="w-12 text-3xl font-bold text-gray-700">
              {rank + 4}
            </span>
            <img
              src={val.link}
              alt="Cover"
              className="ml-6 h-28 w-20 rounded-lg shadow-sm"
            />
            <div className="ml-6">
              <p className="text-lg font-bold">{val.name}</p>
              <p className="text-gray-500">{val.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
