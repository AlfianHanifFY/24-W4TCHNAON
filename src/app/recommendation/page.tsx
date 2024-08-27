import { MovieRecomendation } from "../_components/movie-recomendation";

export default function Recommendation() {
  return (
    <>
      <div className="mb-20">navbar</div>
      <div className="mb-3 ml-4">
        <a>
          <button>
            <div className="flex items-center justify-center rounded-full border-2 border-[#BA0000] bg-[#F5F5F5] px-7 py-1 text-[#BA0000] hover:bg-[#BA0000] hover:text-white">
              <i className="bx bx-refresh"></i> {/* Icon */}
              Choose Your Preference
            </div>
          </button>
        </a>
      </div>
      <div className="ml-4 text-2xl font-bold text-black">For You Today</div>
      <MovieRecomendation movieId={"1000011"} />
      <MovieRecomendation movieId={"1000001"} />
      <MovieRecomendation movieId={"1000004"} />
      <MovieRecomendation movieId={"1000015"} />
      <MovieRecomendation movieId={"1000013"} />
      <MovieRecomendation movieId={"1000012"} />
    </>
  );
}
