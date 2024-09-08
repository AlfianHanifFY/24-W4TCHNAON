"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { useSession } from "next-auth/react";

export default function GenrePage() {
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
  const [showSidebar, setShowSidebar] = useState(false); // Sidebar visibility state

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
    setShowSidebar(false); // Close sidebar when a section is selected
  };

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
    setSelectedMovie(null);
    setMovies(genremovies[genre] || []);
    setShowSidebar(false); // Close sidebar when a genre is selected
  };

  const handleMovieClick = (movie: {
    id: string;
    name: string;
    link: string;
    rating: string;
  }) => {
    setSelectedMovie(movie);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative bg-gray-100 pt-16">
      <div
        className={`flex flex-col md:flex-row ${selectedSection === null ? "h-screen" : "h-full"}`}
      >
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white p-4 shadow-lg transition-transform md:relative md:translate-x-0 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto">
            <ul className="mt-20 space-y-2 md:space-y-4">
              <li>
                <button
                  className={`w-full rounded-lg p-3 text-left font-medium tracking-wide transition-colors duration-200 ${
                    selectedSection === "Most Popular"
                      ? "bg-gray-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => handleSectionClick("Most Popular")}
                >
                  MOST POPULAR
                </button>
              </li>
              <li>
                <button
                  className={`w-full rounded-lg p-3 text-left font-medium tracking-wide transition-colors duration-200 ${
                    selectedSection === "New Release"
                      ? "bg-gray-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => handleSectionClick("New Release")}
                >
                  NEW RELEASE
                </button>
              </li>
              <li>
                <button
                  className={`w-full rounded-lg p-3 text-left font-medium tracking-wide transition-colors duration-200 ${
                    selectedSection === "Genres"
                      ? "bg-gray-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedSection("Genres")}
                >
                  GENRES
                </button>
                {selectedSection === "Genres" && (
                  <ul className="ml-4 mt-4 space-y-2">
                    {genres.map((genre) => (
                      <li key={genre}>
                        <button
                          className={`w-full rounded-lg p-3 text-left transition-colors duration-200 ${
                            selectedGenre === genre
                              ? "bg-gray-400 text-black"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
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
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          <button
            onClick={toggleSidebar}
            className="m-4 w-32 rounded-lg bg-gray-500 p-2 text-white md:hidden"
          >
            {showSidebar ? "Filter" : "Filter"}
          </button>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-md md:p-8">
            {selectedSection === "Most Popular" && (
              <>
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  Most Popular Movies
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                  {movies.map((movie) => (
                    <a href={`movie-details/${movie.id}`} key={movie.id}>
                      <div className="cursor-pointer text-center hover:scale-105">
                        <img
                          src={movie.link}
                          alt={movie.name}
                          className="mx-auto h-auto w-28 rounded-lg shadow-md md:w-32"
                        />
                        <h3 className="mx-auto mt-2 w-28 text-sm font-semibold text-gray-800 md:w-32 md:text-lg">
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
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  New Release Movies
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                  {movies.map((movie) => (
                    <a href={`movie-details/${movie.id}`} key={movie.id}>
                      <div className="cursor-pointer text-center hover:scale-105">
                        <img
                          src={movie.link}
                          alt={movie.name}
                          className="mx-auto h-auto w-28 rounded-lg shadow-md md:w-32"
                        />
                        <h3 className="mx-auto mt-2 w-28 text-sm font-semibold text-gray-800 md:w-32 md:text-lg">
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
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  {selectedGenre} Movies
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {movies.map((movie) => (
                    <a href={`movie-details/${movie.id}`} key={movie.id}>
                      <div className="cursor-pointer text-center hover:scale-105">
                        <img
                          src={movie.link}
                          alt={movie.name}
                          className="mx-auto h-auto w-28 rounded-lg shadow-md md:w-32"
                        />
                        <h3 className="mx-auto mt-2 w-28 text-sm font-semibold text-gray-800 md:w-32 md:text-lg">
                          {movie.name}
                        </h3>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            )}
            {selectedSection === "Genres" && !selectedGenre && (
              <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                Select a Genre
              </h2>
            )}
            {!selectedSection && (
              <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                Select a Section
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
