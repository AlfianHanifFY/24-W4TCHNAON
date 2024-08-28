import { MovieRecomendation } from "../_components/movie-recomendation";

export default function Recommendation() {
  return (
    <>
      <div className="mb-20">navbar</div>
      <div className="ml-12 text-5xl mb-2 font-bold text-black font-ysabeau flex items-center justify-center">For You Today</div>
      <div className="ml-12 mr-12 mb-10 mt-5 text-base text-black font-ysabeaup flex items-center justify-center text-center">Discover a world of movies handpicked just for you, based on what you love. From heart-pounding action to heartwarming drama and laugh-out-loud comedies, there’s something here for every mood and moment. Dive into a collection that spans across genres, uncover hidden gems, and find your next favorite film. Whether you’re seeking an adrenaline rush, an emotional journey, or just a lighthearted escape, our recommendations are designed to keep you entertained. Your next movie adventure is just a click away, so get ready to be inspired!</div>
      <MovieRecomendation movieId={"1000011"} />
      <MovieRecomendation movieId={"1000001"} />
      <MovieRecomendation movieId={"1000004"} />
      <MovieRecomendation movieId={"1000015"} />
      <MovieRecomendation movieId={"1000013"} />
      <MovieRecomendation movieId={"1000012"} />
    </>
  );
}
