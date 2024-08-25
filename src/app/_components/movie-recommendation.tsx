"use client";
import {api} from "~/trpc/react";
import React from 'react';

export default function MovieLeaderboard() {
    return (
        <main className="p-8 bg-gray-50 min-h-screen">
        
            <div className='mb-10'>
                <nav className="flex justify-center items-center py-4 shadow-sm bg-white rounded-lg">
                    <p className="text-lg font-semibold">Leaderboard</p>
                </nav>
            </div>

            <div className="flex justify-center mb-12">
                <div className="px-6 py-3 text-black bg-white-600 rounded-full">
                    Based On Rating
                </div>
            </div>

            <div className="flex justify-center mb-16 space-x-8">
                <div className="relative text-center w-40 transform transition hover:scale-105">
                    <div className="absolute -top-5 -right-5 px-3 py-1 text-white bg-gray-400 rounded-full shadow-lg ">
                        2
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Cover" className="w-full h-56 rounded-lg shadow-md" />
                    <div className="mt-4">
                        <p className="font-bold text-lg">Title 2</p>
                        <p className="text-gray-500">12345</p>
                    </div>
                </div>
                <div className="relative text-center w-48 transform transition hover:scale-105">
                    <div className="absolute -top-6 -right-6 px-3 py-1 text-white bg-yellow-400 rounded-full shadow-lg">
                        1
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Cover" className="w-full h-64 rounded-lg shadow-md" />
                    <div className="mt-4">
                        <p className="font-bold text-lg">Title 1</p>
                        <p className="text-gray-500">12345</p>
                    </div>
                </div>
                <div className="relative text-center w-40 transform transition hover:scale-105">
                    <div className="absolute -top-5 -right-5 px-3 py-1 text-white bg-orange-400 rounded-full shadow-lg">
                        3
                    </div>
                    <img src="https://via.placeholder.com/150" alt="Cover" className="w-full h-56 rounded-lg shadow-md" />
                    <div className="mt-4">
                        <p className="font-bold text-lg">Title 3</p>
                        <p className="text-gray-500">12345</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto space-y-6 max-w-3xl">
                {[4, 5, 6, 7].map(rank => (
                    <div key={rank} className="flex items-center p-6 bg-white rounded-lg shadow-md transform transition hover:scale-105">
                        <span className="text-3xl font-bold text-gray-700 w-12">{rank}</span>
                        <img src="https://via.placeholder.com/150" alt="Cover" className="w-20 h-28 ml-6 rounded-lg shadow-sm" />
                        <div className="ml-6">
                            <p className="font-bold text-lg">Title {rank}</p>
                            <p className="text-gray-500">12345</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}