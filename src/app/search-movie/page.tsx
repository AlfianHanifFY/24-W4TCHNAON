"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";

export default function GenrePage() {
  const router = useRouter();
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
      window.location.reload();
    },
  });
  const user = data?.user;

  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [movies, setMovies] = useState<
    { id: string; name: string; link: string; rating: string }[]
  >([]); // State for movies
  const [selectedMovie, setSelectedMovie] = useState<{
    id: string;
    name: string;
    link: string;
    rating: string;
  } | null>(null); // State for selected movie

  const genres = [
    "Comedy",
    "Adventure",
    "Thriller",
    "Drama",
    "Science Fiction",
    "Action",
    "Music",
    "Romance",
    "History",
    "Crime",
    "Animation",
    "Mystery",
    "Horror",
    "Family",
    "Fantasy",
    "War",
    "Western",
    "TV Movie",
    "Documentary",
  ];

  const genremovies = genres.reduce((acc, genre) => {
    acc[genre] = api.movie.getMovieByGenreList.useQuery({ genre }).data?.list;
    return acc;
  }, {});

  const mostPopularMovies = api.movie.getPopularMovie.useQuery().data?.list;

  const newReleaseMovies = api.movie.getLatestMovie.useQuery().data?.list;

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    setSelectedGenre(null);
    setSelectedMovie(null);
    if (section === "Most Popular") {
      setMovies(mostPopularMovies);
    } else if (section === "New Release") {
      setMovies(newReleaseMovies);
    } else {
      setMovies([]);
    }
  };

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
    setSelectedMovie(null);
    setMovies(genremovies[genre] || []);
  };

  const handleMovieClick = (movie: {
    id: string;
    name: string;
    link: string;
    rating: string;
  }) => {
    setSelectedMovie(movie);
  };
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div
      className={`relative flex ${selectedSection === null ? "h-screen" : "h-full"} bg-gray-100 pt-16`}
    >
      {/* Sidebar */}
      <div className="w-1/4 rounded-lg bg-white p-6 shadow-md">
        <ul className="space-y-4">
          <li>
            <button
              className={`w-full rounded-lg p-3 text-left font-medium tracking-wide transition-colors duration-200 ${selectedSection === "Most Popular" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => handleSectionClick("Most Popular")}
            >
              MOST POPULAR
            </button>
          </li>
          <li>
            <button
              className={`w-full rounded-lg p-3 text-left font-medium tracking-wide transition-colors duration-200 ${selectedSection === "New Release" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => handleSectionClick("New Release")}
            >
              NEW RELEASE
            </button>
          </li>
          <li>
            <button
              className={`w-full rounded-lg p-3 text-left font-medium tracking-wide transition-colors duration-200 ${selectedSection === "Genres" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setSelectedSection("Genres")}
            >
              GENRES
            </button>
            {selectedSection === "Genres" && (
              <ul className="ml-4 mt-4 space-y-2">
                {genres.map((genre) => (
                  <li key={genre}>
                    <button
                      className={`w-full rounded-lg p-3 text-left transition-colors duration-200 ${selectedGenre === genre ? "bg-gray-400 text-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                      onClick={() => handleGenreClick(genre)}
                    >
                      {genre}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md">
          {selectedSection === "Most Popular" && (
            <>
              <h2 className="text-3xl font-bold text-gray-800">
                Most Popular Movies
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-5">
                {movies.map((movie) => (
                  <a href={`http://localhost:3000/movie-details/${movie.id}`}>
                    <div className="cursor-pointer text-center hover:scale-105">
                      <img
                        src={movie.link}
                        alt={movie.name}
                        className="mx-auto h-auto w-32 rounded-lg shadow-md"
                      />
                      <h3 className="mx-auto mt-2 w-32 text-lg font-semibold text-gray-800">
                        {movie.name}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
          {selectedSection === "New Release" && (
            <>
              <h2 className="text-3xl font-bold text-gray-800">
                New Release Movies
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
                {movies.map((movie) => (
                  <a href={`http://localhost:3000/movie-details/${movie.id}`}>
                    <div
                      key={movie.id}
                      className="cursor-pointer text-center hover:scale-105"
                    >
                      <img
                        src={movie.link}
                        alt={movie.name}
                        className="mx-auto h-auto w-32 rounded-lg shadow-md"
                      />
                      <h3 className="mx-auto mt-2 w-32 text-sm font-semibold text-gray-800">
                        {movie.name}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
          {selectedSection === "Genres" && selectedGenre && (
            <>
              <h2 className="text-3xl font-bold text-gray-800">
                {selectedGenre} Movies
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
                {movies.map((movie) => (
                  <a href={`http://localhost:3000/movie-details/${movie.id}`}>
                    <div
                      key={movie.id}
                      className="cursor-pointer text-center hover:scale-105"
                    >
                      <img
                        src={movie.link}
                        alt={movie.name}
                        className="mx-auto h-auto w-32 rounded-lg shadow-md"
                      />
                      <h3 className="mx-auto mt-2 w-32 text-lg font-semibold text-gray-800">
                        {movie.name}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
          {selectedSection === "Genres" && !selectedGenre && (
            <h2 className="text-3xl font-bold text-gray-800">Select a Genre</h2>
          )}
          {!selectedSection && (
            <h2 className="text-3xl font-bold text-gray-800">
              Select a Section
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
