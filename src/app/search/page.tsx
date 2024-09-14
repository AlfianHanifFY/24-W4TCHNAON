"use client";
import { useState } from "react";
import Fuse from "fuse.js";
import { api } from "~/trpc/react";

export default function SearchPage() {
  const movies = api.movie.getAllmovies.useQuery();
  const movieData = movies.data;

  // Fuse.js options
  const options = {
    keys: ["name"],
    includeScore: true,
    threshold: 0.3,
  };

  // Create a Fuse instance
  const fuse = new Fuse(movieData, options);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const result = fuse.search(searchTerm);
    setResults(result.slice(0, 10).map(({ item }) => item));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-lg bg-[#3C3A3A] p-4 text-white shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Search</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="mb-4 w-full rounded-lg border p-2 text-black"
        />
        <button
          onClick={handleSearch}
          className="w-full rounded-lg bg-gradient-to-r from-[#BA0000] to-[#FF0000] py-2 text-white"
        >
          Search
        </button>
        <div className="mt-4">
          {results.length > 0 ? (
            <ul className="list-disc pl-5">
              {results.map((item) => (
                <a href={`/movie-details/${item.id}`}>
                  <li
                    key={item.id}
                    className="rounded-lg p-1 hover:bg-gradient-to-r hover:from-[#BA0000] hover:to-[#FF0000]"
                  >
                    <button>{item.name}</button>
                  </li>
                </a>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}
