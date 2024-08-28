"use client";

import React, { useState } from 'react';


interface DropdownProps {
    selectedSection: string;
    sections: string[];
    onSectionClick: (section: string) => void;
}


const Dropdown: React.FC<DropdownProps> = ({ selectedSection, sections, onSectionClick }) => {
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
                className="bg-red-600 font-ysabeau text-white py-2 px-4 rounded inline-flex items-center"
                aria-haspopup="true" 
                aria-expanded={isOpen}
            >
                {selectedSection} ▼
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1 font-ysabeau" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {sections.map((section) => (
                            <button 
                                key={section}
                                className="block w-full text-left px-4 py-2 text-gray-700  hover:bg-gray-100 font-ysabeau" 
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
                <div 
                    key={movie.title} 
                    className="text-center cursor-pointer"
                >
                    <img 
                        src={movie.posterUrl} 
                        alt={movie.title} 
                        className="w-full h-56 object-cover rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-800 font-ysabeau">
                        {movie.title}
                    </p>
                </div>
            ))}
        </div>
    );
};

// Main MyList Component
const MyList: React.FC = () => {
    const [selectedSection, setSelectedSection] = useState<string>('Watch List'); // Default to Watch List
    const sections: string[] = ['Watch List', 'Favorite'];

    // Mock data for movies
    const watchListMovies: { title: string; posterUrl: string }[] = [
        { title: 'Movie 1', posterUrl: 'https://via.placeholder.com/150' },
        { title: 'Movie 2', posterUrl: 'https://via.placeholder.com/150' },
        { title: 'Movie 3', posterUrl: 'https://via.placeholder.com/150' },
        { title: 'Movie 4', posterUrl: 'https://via.placeholder.com/150' },
    ];

    const favoriteMovies: { title: string; posterUrl: string }[] = [
        { title: 'Favorite 1', posterUrl: 'https://via.placeholder.com/150' },
        { title: 'Favorite 2', posterUrl: 'https://via.placeholder.com/150' },
        { title: 'Favorite 3', posterUrl: 'https://via.placeholder.com/150' },
        { title: 'Favorite 4', posterUrl: 'https://via.placeholder.com/150' },
    ];

    const handleSectionClick = (section: string) => {
        setSelectedSection(section);
    };

    return (
        <main className="container mx-auto px-4">
            <div className='mb-20'>
                NAVBAR
            </div>
            <div className="flex justify-end mb-4">
                <Dropdown 
                    selectedSection={selectedSection} 
                    sections={sections} 
                    onSectionClick={handleSectionClick}
                />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 font-ysabeau mb-5">
                {selectedSection === 'Watch List' ? 'Your Watch List' : 'Your Favorite Movies'}
            </h2>

            <MovieGrid 
                movies={selectedSection === 'Watch List' ? watchListMovies : favoriteMovies} 
            />
        </main>
    );
}

export default MyList;
