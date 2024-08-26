import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Profile() {
    return (
        <div className="font-light p-6">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@1..1000&family=Montserrat:wght@400&display=swap" rel="stylesheet"></link>
            {/* Text Actors and Actresses + Done */}
            <div className='flex flex-row justify-between'>
                <div className="text-2xl font-semibold">Your Favorite Actors and Actresses</div>
                <a href="#" className='text-md font-semibold hover:text-lg'>Done</a>
            </div>
            <div style={{ fontFamily: 'Montserrat' }} className='text-sm'>SELECT AT LEAST 3</div>

            {/* Actors and Actresses */}
            <div className='space-y-4'>
                <div className="flex flex-row px-10 mt-5 text-center justify-between">
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor A</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor B</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor C</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor D</a>
                    </div>
                </div>
                <div className="flex flex-row px-10 mt-5 text-center justify-between">
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor A</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor B</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor C</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor D</a>
                    </div>
                </div>
                <div className="flex flex-row px-10 mt-5 text-center justify-between">
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor A</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor B</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor C</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Actor D</a>
                    </div>
                </div>
            </div>

            {/* Text Genre */}
            <div className='flex flex-row pt-8 justify-between'>
                <div className="text-2xl font-semibold">Your Favorite Genres</div>
            </div>
            <div style={{ fontFamily: 'Montserrat' }} className='text-sm'>SELECT AT LEAST 3</div>

            {/* Genre */}
            <div className='space-y-4'>
                <div className="flex flex-row px-10 mt-5 text-center justify-between">
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Romance</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Thriller</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Drama</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Comedy</a>
                    </div>
                </div>
                <div className="flex flex-row px-10 mt-5 text-center justify-between">
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Horror</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Action</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Animation</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Documenter</a>
                    </div>
                </div>
                <div className="flex flex-row px-10 mt-5 text-center justify-between">
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Fantasy</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Science Fiction</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Musical</a>
                    </div>
                    <div className="delay-300 cursor-pointer transition-shadow font-semibold w-[247px] h-[73px] bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] flex justify-center items-center">
                        <a href="#">Historical</a>
                    </div>
                </div>
            </div>
        </div>

    );
}
