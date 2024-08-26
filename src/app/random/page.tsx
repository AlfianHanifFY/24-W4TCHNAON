import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
export default function Random() {
    return (
        <div className="p-12">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@1..1000&family=Montserrat:wght@400&display=swap" rel="stylesheet"></link>

            {/* Also Like + Refresh */}
            <div className='flex items-center justify-between'>
                <div className="text-3xl font-semibold">You May Also Like</div>
                <div className='flex items-center justify-center px-7 py-1 text-[#BA0000] bg-[#F5F5F5] rounded-full border-[#BA0000] border-2 hover:bg-[#BA0000] hover:text-white'>
                    <i className='bx bx-refresh '></i> {/* Icon */}
                <a href="#">Refresh</a>
                </div>
            </div>
            {/* Judul */}
            <div className="relative flex mt-12 ml-20">
                <div className="flex flex-row">
                    <div className="box-content w-52 h-64 shadow-xl bg-[#B3B3B3] rounded-md transition-transform duration-300 ease-in-out hover:scale-105"></div>
                    <div className="flex flex-col">
                        <div className="text-4xl pl-12 font-bold"> Judul </div>
                    
                        {/* Genres */}
                        <div className=" flex flex-row items-center ">
                            <div className="flex space-x-2 pl-12 mt-5 font-normal">
                                <span className="px-5 py-1 bg-[#F5F5F5] rounded-full">Genre 1</span>
                                <span className="px-5 py-1 bg-[#F5F5F5] rounded-full">Genre 2</span>
                                <span className="px-5 py-1 bg-[#F5F5F5] rounded-full">Genre 3</span>
                            </div>

                            {/* Watch Later */}
                            <div className="relative left-52 delay-300 cursor-pointer transition-shadow font-normal px-11 py-2 bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full flex items-center text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] space-x-2">
                                <i className="bx bx-time-five"></i> {/* Icon */}
                                <a href="#">Watch Later</a>
                            </div>
                        </div>

                        {/* Views + Rating */}
                        <div className="bg-transparent pl-12 mt-3 flex items-center space-x-3">
                            <span className="text-3xl">
                                <i className='bx bxs-show'></i>
                            </span>
                            <span className="ml-2 px-3  bg-[#D9D9D9] rounded-full font-normal italic">Jumlah Views</span>
                            <span className="text-2xl">
                                <i className='bx bxs-star text-yellow-300'></i>
                                <i className='bx bxs-star  text-yellow-300'></i>
                                <i className='bx bxs-star  text-yellow-300'></i>
                                <i className='bx bxs-star  text-yellow-300'></i>
                                <i className='bx bxs-star-half  text-yellow-300' ></i>
                            </span>
                            <span className="ml-2 px-3  bg-[#D9D9D9] rounded-full font-normal italic">4.5/5.0</span>
                            
                            {/* Add to List */}
                            <Menu as="div" className="relative inline-block text-left left-32 ">
                                <div>
                                    <MenuButton className="inline-flex delay-300 cursor-pointer transition-shadow font-normal px-9 py-2 bg-gradient-to-r from-[#BA0000] to-[#FF0000] rounded-full items-center text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:from-[#a30303] hover:to-[#d40000] space-x-1">
                                        <i className='bx bx-plus'></i>
                                        <span>Add to List</span>
                                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-white" />
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
                        </div>
                        {/* Details (link to details movie) */}
                        <div className='pl-12 mt-3'>
                            <a href="#" className='font-normal text-sm text-red-500 border-b-2 border-red-500'>See Details</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Line */}
            <div className="h-0.5 bg-[#757575] mt-10 mx-20"></div>

            {/* Storyline */}
            <div className='flex flex-col mx-20 mt-4  space-y-3'>
                <div className='text-lg font-semibold ml-14'>Storyline</div>
                <div className="p-16 w-full h-20 bg-[#D9D9D9] rounded-xl"></div>
            </div>
        </div>
    );
}
