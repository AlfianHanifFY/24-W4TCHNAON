import { MovieRecomendation } from "../_components/movie-recomendation";

export default function Recommendation() {
  return (
    <>
      <div className="mb-20">navbar</div>
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
