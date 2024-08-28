"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GenrePage() {
    const [selectedSection, setSelectedSection] = useState<string | null>(null);
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [movies, setMovies] = useState<{ title: string; poster: string; synopsis: string }[]>([]); // State for movies
    const [selectedMovie, setSelectedMovie] = useState<{ title: string; poster: string; synopsis: string } | null>(null); // State for selected movie
    const router = useRouter();

    const genres: string[] = [
        'Romance', 'Action', 'Fantasy', 'Thriller', 'Drama', 'Comedy', 
        'Horror', 'Adventure', 'Mystery'
    ];

    const genremovies: { [key: string]: { title: string; poster: string; synopsis: string }[] } = {
        Romance: [
            { title: 'Romantic Movie 1', poster: 'https://via.placeholder.com/150x220?text=Romantic+Movie+1', synopsis: 'Synopsis for Romantic Movie 1' },
            { title: 'Romantic Movie 2', poster: 'https://via.placeholder.com/150x220?text=Romantic+Movie+2', synopsis: 'Synopsis for Romantic Movie 2' },
            { title: 'Romantic Movie 3', poster: 'https://via.placeholder.com/150x220?text=Romantic+Movie+3', synopsis: 'Synopsis for Romantic Movie 3' },
        ],
        Action: [
            { title: 'Action Movie 1', poster: 'https://via.placeholder.com/150x220?text=Action+Movie+1', synopsis: 'Synopsis for Action Movie 1' },
            { title: 'Action Movie 2', poster: 'https://via.placeholder.com/150x220?text=Action+Movie+2', synopsis: 'Synopsis for Action Movie 2' },
            { title: 'Action Movie 3', poster: 'https://via.placeholder.com/150x220?text=Action+Movie+3', synopsis: 'Synopsis for Action Movie 3' },
        ],
    };

    const mostPopularMovies: { title: string; poster: string; synopsis: string }[] = [
        { title: 'Popular Movie 1', poster: 'https://via.placeholder.com/150x220?text=Popular+Movie+1', synopsis: 'Synopsis for Popular Movie 1' },
        { title: 'Popular Movie 2', poster: 'https://via.placeholder.com/150x220?text=Popular+Movie+2', synopsis: 'Synopsis for Popular Movie 2' },
        { title: 'Popular Movie 3', poster: 'https://via.placeholder.com/150x220?text=Popular+Movie+3', synopsis: 'Synopsis for Popular Movie 3' },
    ];

    const newReleaseMovies: { title: string; poster: string; synopsis: string }[] = [
        { title: 'New Release 1', poster: 'https://via.placeholder.com/150x220?text=New+Release+1', synopsis: 'Synopsis for New Release 1' },
        { title: 'New Release 2', poster: 'https://via.placeholder.com/150x220?text=New+Release+2', synopsis: 'Synopsis for New Release 2' },
        { title: 'New Release 3', poster: 'https://via.placeholder.com/150x220?text=New+Release+3', synopsis: 'Synopsis for New Release 3' },
    ];

    const handleSectionClick = (section: string) => {
        setSelectedSection(section);
        setSelectedGenre(null);
        setSelectedMovie(null);
        if (section === 'Most Popular') {
            setMovies(mostPopularMovies);
        } else if (section === 'New Release') {
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

    const handleMovieClick = (movie: { title: string; poster: string; synopsis: string }) => {
        setSelectedMovie(movie);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="relative flex h-screen bg-gray-100 pt-16 font-ysabeau">
            {/* Sidebar */}
            <div className="bg-white shadow-md w-1/4 p-6 rounded-lg">
                <ul className="space-y-4">
                    <li>
                        <button 
                            className={`w-full text-left p-3 rounded-lg font-medium tracking-wide transition-colors duration-200 ${selectedSection === 'Most Popular' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            onClick={() => handleSectionClick('Most Popular')}
                        >
                            MOST POPULAR
                        </button>
                    </li>
                    <li>
                        <button 
                            className={`w-full text-left p-3 rounded-lg font-medium tracking-wide transition-colors duration-200 ${selectedSection === 'New Release' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            onClick={() => handleSectionClick('New Release')}
                        >
                            NEW RELEASE
                        </button>
                    </li>
                    <li>
                        <button 
                            className={`w-full text-left p-3 rounded-lg font-medium tracking-wide transition-colors duration-200 ${selectedSection === 'Genres' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            onClick={() => setSelectedSection('Genres')}
                        >
                            GENRES
                        </button>
                        {selectedSection === 'Genres' && (
                            <ul className="space-y-2 mt-4 ml-4">
                                {genres.map((genre) => (
                                    <li key={genre}>
                                        <button
                                            className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${selectedGenre === genre ? 'bg-gray-400 text-black' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
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
                <div className="border border-gray-200 p-8 rounded-lg bg-white shadow-md">
                    {selectedSection === 'Most Popular' && (
                        <>
                            <h2 className="text-3xl font-bold text-gray-800">Most Popular Movies</h2>
                            <div className="mt-4 grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
                                {movies.map((movie) => (
                                    <div 
                                        key={movie.title} 
                                        className="text-center cursor-pointer"
                                        onClick={() => handleMovieClick(movie)}
                                    >
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            className="w-32 h-auto rounded-lg shadow-md mx-auto"
                                        />
                                        <h3 className="mt-2 text-lg font-semibold text-gray-800 w-32 mx-auto">{movie.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {selectedSection === 'New Release' && (
                        <>
                            <h2 className="text-3xl font-bold text-gray-800">New Release Movies</h2>
                            <div className="mt-4 grid grid-cols-2 gap-1  md:grid-cols-3 lg:grid-cols-4">
                                {movies.map((movie) => (
                                    <div 
                                        key={movie.title} 
                                        className="text-center cursor-pointer"
                                        onClick={() => handleMovieClick(movie)}
                                    >
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            className="w-32 h-auto rounded-lg shadow-md mx-auto"
                                        />
                                        <h3 className="mt-2 text-lg font-semibold text-gray-800 w-32 mx-auto">{movie.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {selectedSection === 'Genres' && selectedGenre && (
                        <>
                            <h2 className="text-3xl font-bold text-gray-800">{selectedGenre} Movies</h2>
                            <div className="mt-4 grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
                                {movies.map((movie) => (
                                    <div 
                                        key={movie.title} 
                                        className="text-center cursor-pointer"
                                        onClick={() => handleMovieClick(movie)}
                                    >
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                            className="w-32 h-auto rounded-lg shadow-md mx-auto"
                                        />
                                        <h3 className="mt-2 text-lg font-semibold text-gray-800 w-32 mx-auto">{movie.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {selectedSection === 'Genres' && !selectedGenre && (
                        <h2 className="text-3xl font-bold text-gray-800">Select a Genre</h2>
                    )}
                    {!selectedSection && (
                        <h2 className="text-3xl font-bold text-gray-800">Select a Section</h2>
                    )}
                </div>
                
                {/* Movie Synopsis Modal */}
                {selectedMovie && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h2 className="text-3xl font-bold text-gray-800">{selectedMovie.title}</h2>
                            <img 
                                src={selectedMovie.poster} 
                                alt={selectedMovie.title} 
                                className="mt-4 w-full h-auto rounded-lg shadow-md"
                            />
                            <p className="mt-4 text-lg text-gray-700">{selectedMovie.synopsis}</p>
                            <button
                                className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}