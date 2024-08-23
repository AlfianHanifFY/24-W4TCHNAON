import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
export default function Profile() {
    return (
        <div className="font-light p-6 ">
            {/* Background Image */}
            <img 
                className="absolute inset-0 z-0 object-cover bg-cover bg-center h-[310px] w-full rounded-lg" 
                src="./cover.png" 
                alt="image description"
            />

            {/* Box, Title, and Genres */}
            <div className="relative z-10 flex items-start space-x-4 mt-16 ml-20">
                <div className="flex flex-col ">
                    <div className="box-content w-40 h-48 sm:w-48 sm:h-52 md:w-52 md:h-64 shadow-xl bg-[#B3B3B3] rounded-md transition-transform duration-300 ease-in-out hover:scale-105"></div>
                    
                    {/* Watch Later */}
                    <div className="flex flex-col mt-4 space-y-2 text-center">
                        <div className="delay-300 cursor-pointer transition-shadow font-normal px-5 py-2 bg-[#F5F5F5] rounded-full flex items-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 justify-center space-x-2">
                            <i className="bx bx-time-five"></i> {/* Icon */}
                            <a href="#">Watch Later</a>
                        </div>
                        {/* Add to List */}
                        <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="inline-flex justify-center items-center gap-x-1.0 rounded-full bg-[#F5F5F5] w-52 px-5 py-2 font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <i className='bx bx-plus'></i>
                            Add to List
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                            </MenuButton>
                        </div>

                        <MenuItems
                            transition
                            className="left-1/2 -translate-x-1/2 absolute z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                            <div className="py-1 ">
                            <MenuItem>
                                <a
                                href="#"
                                className="block px-4 py-2 text-center text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                >
                                My List 1
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                href="#"
                                className="block px-4 py-2 text-center text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                >
                                My List 2
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                href="#"
                                className="block px-4 py-2 text-center text-sm text-gray-500 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                >
                                <i className='pr-2 bx bx-plus'></i>
                                Create List
                                </a>
                            </MenuItem>
                            </div>
                        </MenuItems>
                        </Menu>
                    {/* Comments */}    
                    </div>
                    <div className="flex flex-col mt-16 text-center">
                        <div className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer font-normal px-5 py-4 bg-[#F5F5F5] rounded-lg flex items-center justify-center space-x-2">
                        <i className='bx bx-comment-detail'></i> {/* Icon */}
                            <a href="#">Show Comments</a>
                        </div>
                    </div>
                </div>

                {/* Title and Genres */}
                <div className="p-3 mt-1">
                    {/* Title */}
                    <div className="bg-[#F5F5F5] w-80 h-20 rounded-lg flex p-10 italic items-center">
                        <h1 className="text-3xl font-semibold">JUDUL</h1>
                    </div>

                    {/* Genres */}
                    <div className="flex space-x-2 mt-2 font-normal">
                        <span className="px-5 py-1 bg-[#F5F5F5] rounded-full">Genre 1</span>
                        <span className="px-5 py-1 bg-[#F5F5F5] rounded-full">Genre 2</span>
                        <span className="px-5 py-1 bg-[#F5F5F5] rounded-full">Genre 3</span>
                    </div>

                    {/* Jumlah Views */}
                    <div className="bg-transparent pt-5 flex items-center space-x-3">
                        <span className="text-3xl">
                            <i className='bx bxs-show'></i>
                        </span>
                        <span className="ml-2 px-3 py-1 bg-[#D9D9D9] rounded-full font-normal italic">Jumlah Views</span>
                        <span className="text-2xl">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star-half' ></i>
                        </span>
                        <span className="ml-2 px-3 py-1 bg-[#D9D9D9] rounded-full font-normal italic">4.5/5.0</span>
                    </div>

                    {/* Line */}
                    <div className="absolute left-60 right-0 h-0.5 bg-[#757575] mt-2"></div>

                    {/* Details and Cast */}
                    <div className="m-7 space-y-4 ">
                        <div className="font-normal space-x-64 italic justify-between items-center">
                            <span className="relative px-8 py-1 bg-[#D9D9D9] rounded-full">Details</span>
                            <span className="relative px-8 py-1 bg-[#D9D9D9] rounded-full">Cast</span>
                        </div>
                        {/* Details */}
                        <div className="space-x-96">
                            <div className="absolute bg-[#F5F5F5] rounded-xl w-80 px-7 py-7 ">
                                <p>Director:</p>
                                <p>Country:</p>
                                <p>Release Date:</p>
                                <p>Duration:</p>
                            </div>
                            {/* Cast */}
                            <div className="space-y-3">
                            <span className="relative flex items-center">
                                <span className="w-10 h-10 bg-[#B3B3B3] rounded-full z-10"></span>
                                <span className="w-56 h-10 bg-[#F5F5F5] -ml-10 rounded-full"></span>
                            </span>
                            <span className="relative flex items-center">
                                <span className="w-10 h-10 bg-[#B3B3B3] rounded-full z-10"></span>
                                <span className="w-56 h-10 bg-[#F5F5F5] -ml-10 rounded-full"></span>
                            </span>
                            <span className="relative flex items-center">
                                <span className="w-10 h-10 bg-[#B3B3B3] rounded-full z-10"></span>
                                <span className="w-56 h-10 bg-[#F5F5F5] -ml-10 rounded-full"></span>
                            </span>
                            </div>
                        </div>
                    </div>

                    {/* Line */}
                    <div className="absolute left-60 z-10 right-0 h-0.5 bg-[#757575] mt-2 ">
                        {/* Storyline */}
                        <div className="relative m-7 space-y-3 font-normal italic justify-between items-center">
                                <span className="relative px-8 py-1 bg-[#D9D9D9] rounded-full">Storyline</span>
                                <div className="absolute left-0 right-0 h-36 bg-[#F5F5F5] rounded-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute mt-48 left-20 z-10 right-6 h-0.5 bg-[#757575] ">
                <div className="absolute mt-3 px-8 py-1 bg-[#B3B3B3] rounded-full font-normal italic justify-between items-center ">Similar to</div>
                <div className="absolute mt-14 left-0 z-10 right-0 h-0.5 bg-[#757575] "></div>
                {/* Box */}
                <div className="mt-16 pb-10 flex relative space-x-7">
                    <span className="box-content w-24 h-32 shadow-xl bg-[#B3B3B3] rounded-md"></span>
                    <span className="box-content w-24 h-32 shadow-xl bg-[#B3B3B3] rounded-md"></span>
                    <span className="box-content w-24 h-32 shadow-xl bg-[#B3B3B3] rounded-md"></span>
                    <span className="box-content w-24 h-32 shadow-xl bg-[#B3B3B3] rounded-md"></span>
                    <span className="box-content w-24 h-32 shadow-xl bg-[#B3B3B3] rounded-md"></span>
                </div>
                <div className="absolute left-0 z-10 right-0 h-0.5 bg-[#757575] "></div>
                {/* Comment */}
                <div className="py-8 antialiased">
                <div className="max-w-full mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900">Discussion</h2>
                    </div>
                    <form className="mb-7">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                            <label htmlFor="comment" className="sr-only">Your comment</label>
                            <textarea id="comment" rows="6"
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  "
                                placeholder="Write a comment..." required></textarea>
                        </div>
                        <button type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center transition-shadow bg-[#F5F5F5] rounded-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 justify-center ">
                            Post comment
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}
