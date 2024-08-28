"use client";

import { api } from "~/trpc/react";

export function MovieDetailsSimiliar({ id }) {
  const movies = api.movie.getRecommendationByMovie.useQuery({
    movieId: id,
  });
  const id1 = movies.data?.movieRecomendation[0].id;
  const id2 = movies.data?.movieRecomendation[1].id;
  const id3 = movies.data?.movieRecomendation[2].id;
  const id4 = movies.data?.movieRecomendation[3].id;
  const id5 = movies.data?.movieRecomendation[4].id;
  const id6 = movies.data?.movieRecomendation[5].id;
  const id7 = movies.data?.movieRecomendation[6].id;

  const arr = [id1, id2, id3, id4, id5, id6, id7];

  return (
    <div className="relative mt-16 flex space-x-7 pb-10">
      {arr.map((id) => {
        const movie = api.movie.getMovieDetail.useQuery({ movieId: id });
        const url = movie.data?.poster[0]?.link;
        return (
          <span className="box-content h-auto w-auto overflow-hidden rounded-md bg-[#B3B3B3] shadow-xl">
            <img src={url} alt="Movie Poster" width={500} height={300} />
          </span>
        );
      })}
    </div>
  );
}
