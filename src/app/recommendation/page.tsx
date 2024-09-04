"use client";
import { api } from "~/trpc/react";
import { MovieRecomendation } from "../_components/movie-recomendation";
import { MovieRecomendationByActorGenre } from "../_components/movie-recomendation-by-actor-genre";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { MovieRecomendationByLocation } from "../_components/movie-recomendation-by-location";

export default function Recommendation() {
  const mostPopularMovies = api.movie.getPopularMovieRecomendation.useQuery();
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-gray-800">New Release Movies</h2>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
        {mostPopularMovies.data?.list.map((movie) => (
          <a href={`movie-details/${movie.id}`}>
            <div
              key={movie.id}
              className="cursor-pointer text-center hover:scale-105"
            >
              <img
                src={movie.link}
                alt={movie.name}
                className="mx-auto h-auto w-48 rounded-lg shadow-md"
              />
              <h3 className="mx-auto mt-2 w-32 text-sm font-semibold text-gray-800">
                {movie.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
