"use client";
import { api } from "~/trpc/react";
import { MovieRecomendation } from "../_components/movie-recomendation";
import { MovieRecomendationByActorGenre } from "../_components/movie-recomendation-by-actor-genre";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { MovieRecomendationByLocation } from "../_components/movie-recomendation-by-location";

export default function Recommendation() {
  const router = useRouter();
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
      window.location.reload();
    },
  });
  const user = data?.user;
  const country = api.user.getUserCountry.useQuery({ userId: user?.id });

  const userMovie = api.movie.getFavorite.useQuery({ userId: user?.id });

  return (
    <>
      <div className="mb-20">navbar</div>
      <div className="mb-3 ml-4">
        <a href="http://localhost:3000/choose-genre-actor">
          <button>
            <div className="flex items-center justify-center rounded-full border-2 border-[#BA0000] bg-[#F5F5F5] px-7 py-1 text-[#BA0000] hover:bg-[#BA0000] hover:text-white">
              <i className="bx bx-refresh"></i> {/* Icon */}
              Choose Your Preference
            </div>
          </button>
        </a>
      </div>
      <div className="ml-4 text-2xl font-bold text-black">
        Based on your Preference
      </div>
      <MovieRecomendationByActorGenre
        actor={["Tom Hanks", "Leonardo DiCaprio"]}
        genre={["Drama", "Action"]}
      />
      <div className="ml-4 text-2xl font-bold text-black">
        Movie from your neighbor
      </div>
      <MovieRecomendationByLocation params={country} />

      {userMovie.data?.map((val) => {
        return (
          <>
            <MovieRecomendation movieId={val.movieId} refName={val.name} />{" "}
          </>
        );
      })}
    </>
  );
}
