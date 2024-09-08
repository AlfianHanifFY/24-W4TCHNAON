"use client";
import { api } from "~/trpc/react";
import React from "react";

export function FavoriteMovies({ id }) {
  const data = api.movie.getFavorite.useQuery({ userId: id });
  const deleteMovie = api.user.deleteUserFavorite.useMutation();
  const movie = data.data;
  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-3 bg-gray-100 p-4 md:grid-cols-5 md:gap-4">
        {movie?.map((val) => {
          const url_route = "movie-details/" + val.movieId;
          return (
            <div className="rounded-lg bg-white shadow-md hover:scale-105">
              <a href={url_route}>
                <div
                  className="h-72 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${val.poster})` }}
                ></div>
              </a>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  deleteMovie.mutate({
                    userId: id,
                    movieId: val.movieId,
                  });
                  alert(`${val.name} removed from list`);
                }}
              >
                <button className="absolute right-2 top-2 w-10 rounded-full bg-red-600 p-2 text-white opacity-60 transition-opacity duration-300 hover:opacity-100">
                  X
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
}
