"use client";

import { api } from "~/trpc/react";

export function MovieRecomendation({ movieId, refName }) {
  const movies = api.movie.getRecommendationByMovie.useQuery({
    movieId: movieId,
  });

  const id1 = movies.data?.movieRecomendation[0].id;
  const id2 = movies.data?.movieRecomendation[1].id;
  const id3 = movies.data?.movieRecomendation[2].id;
  const id4 = movies.data?.movieRecomendation[3].id;
  const id5 = movies.data?.movieRecomendation[4].id;
  const id6 = movies.data?.movieRecomendation[5].id;

  const arr = [id1, id2, id3, id4, id5, id6];
  return (
    <>
      <div className="my-4 ml-4 text-2xl font-bold text-black">
        <p>Because You Likes "{refName}"</p>
      </div>
      <div className="mt-4 grid grid-cols-6 gap-4 bg-white p-4">
        {arr.map((id) => {
          const movie = api.movie.getMoviePoster.useQuery({ movieId: id });
          const url = movie.data?.list[0]?.link;
          const url_route = "movie-details/" + id;
          return (
            <div className="rounded-lg bg-white shadow-md hover:scale-105">
              <a href={url_route}>
                <div
                  className="h-64 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
                <div className="p-4">
                  <div className="text-center font-semibold">
                    {movie.data?.list[0]?.name}
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Number(movie.data?.list[0]?.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.104 3.396a1 1 0 00.95.69h3.573c.969 0 1.371 1.24.588 1.81l-2.892 2.103a1 1 0 00-.364 1.118l1.104 3.396c.3.921-.755 1.688-1.538 1.118l-2.893-2.103a1 1 0 00-1.175 0l-2.892 2.103c-.783.57-1.838-.197-1.539-1.118l1.105-3.396a1 1 0 00-.364-1.118L2.336 8.823c-.783-.57-.381-1.81.588-1.81h3.573a1 1 0 00.95-.69l1.104-3.396z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
