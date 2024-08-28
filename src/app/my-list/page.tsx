"use client";

import React, { useState } from "react";

interface DropdownProps {
  selectedSection: string;
  sections: string[];
  onSectionClick: (section: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedSection,
  sections,
  onSectionClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (section: string) => {
    onSectionClick(section);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center rounded bg-red-600 px-4 py-2 text-white"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedSection} ▼
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {sections.map((section) => (
              <button
                key={section}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface MovieGridProps {
  movies: { title: string; posterUrl: string }[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <div className="mt- grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {movies.map((movie) => (
        <div key={movie.title} className="cursor-pointer text-center">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="h-56 w-full rounded-lg object-cover"
          />
          <p className="mt-2 truncate text-sm font-semibold text-gray-800">
            {movie.title}
          </p>
        </div>
      ))}
    </div>
  );
};

// Main MyList Component
const MyList: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>("Watch List"); // Default to Watch List
  const sections: string[] = ["Watch List", "Favorite"];

  // Mock data for movies
  const watchListMovies: { title: string; posterUrl: string }[] = [
    { title: "Movie 1", posterUrl: "https://via.placeholder.com/150" },
    { title: "Movie 2", posterUrl: "https://via.placeholder.com/150" },
    { title: "Movie 3", posterUrl: "https://via.placeholder.com/150" },
    { title: "Movie 4", posterUrl: "https://via.placeholder.com/150" },
  ];

  const favoriteMovies: { title: string; posterUrl: string }[] = [
    { title: "Favorite 1", posterUrl: "https://via.placeholder.com/150" },
    { title: "Favorite 2", posterUrl: "https://via.placeholder.com/150" },
    { title: "Favorite 3", posterUrl: "https://via.placeholder.com/150" },
    { title: "Favorite 4", posterUrl: "https://via.placeholder.com/150" },
  ];

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <main className="container mx-auto px-4">
      <div className="mb-20">NAVBAR</div>
      <div className="mb-4 flex justify-end">
        <Dropdown
          selectedSection={selectedSection}
          sections={sections}
          onSectionClick={handleSectionClick}
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-800">
        {selectedSection === "Watch List"
          ? "Your Watch List"
          : "Your Favorite Movies"}
      </h2>

      <MovieGrid
        movies={
          selectedSection === "Watch List" ? watchListMovies : favoriteMovies
        }
      />
    </main>
  );
};

export default MyList;
