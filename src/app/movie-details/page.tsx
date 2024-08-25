import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
export default function Profile() {
  return (
    <div className="p-6 font-light">
      {/* Background Image */}
      <img
        className="absolute inset-0 z-0 h-[310px] w-full rounded-lg bg-cover bg-center object-cover"
        src="./cover.png"
        alt="image description"
      />

      {/* Box, Title, and Genres */}
      <div className="relative z-10 ml-20 mt-16 flex items-start space-x-4">
        <div className="flex flex-col">
          <div className="box-content h-48 w-40 rounded-md bg-[#B3B3B3] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 sm:h-52 sm:w-48 md:h-64 md:w-52"></div>

          {/* Watch Later */}
          <div className="mt-4 flex flex-col space-y-2 text-center">
            <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-full bg-[#F5F5F5] px-5 py-2 font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:bg-gray-50">
              <i className="bx bx-time-five"></i> {/* Icon */}
              <a href="#">Watch Later</a>
            </div>
            {/* Add to List */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="gap-x-1.0 inline-flex w-52 items-center justify-center rounded-full bg-[#F5F5F5] px-5 py-2 font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <i className="bx bx-plus"></i>
                  Add to List
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-1/2 z-10 mt-2 w-40 origin-top-right -translate-x-1/2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
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
                      <i className="bx bx-plus pr-2"></i>
                      Create List
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            {/* Comments */}
          </div>
          <div className="mt-16 flex flex-col text-center">
            <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-lg bg-[#F5F5F5] px-5 py-4 font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <i className="bx bx-comment-detail"></i> {/* Icon */}
              <a href="#">Show Comments</a>
            </div>
          </div>
        </div>

        {/* Title and Genres */}
        <div className="mt-1 p-3">
          {/* Title */}
          <div className="flex h-20 w-80 items-center rounded-lg bg-[#F5F5F5] p-10 italic">
            <h1 className="text-3xl font-semibold">JUDUL</h1>
          </div>

          {/* Genres */}
          <div className="mt-2 flex space-x-2 font-normal">
            <span className="rounded-full bg-[#F5F5F5] px-5 py-1">Genre 1</span>
            <span className="rounded-full bg-[#F5F5F5] px-5 py-1">Genre 2</span>
            <span className="rounded-full bg-[#F5F5F5] px-5 py-1">Genre 3</span>
          </div>

          {/* Jumlah Views */}
          <div className="flex items-center space-x-3 bg-transparent pt-5">
            <span className="text-3xl">
              <i className="bx bxs-show"></i>
            </span>
            <span className="ml-2 rounded-full bg-[#D9D9D9] px-3 py-1 font-normal italic">
              Jumlah Views
            </span>
            <span className="text-2xl">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </span>
            <span className="ml-2 rounded-full bg-[#D9D9D9] px-3 py-1 font-normal italic">
              4.5/5.0
            </span>
          </div>

          {/* Line */}
          <div className="absolute left-60 right-0 mt-2 h-0.5 bg-[#757575]"></div>

          {/* Details and Cast */}
          <div className="m-7 space-y-4">
            <div className="items-center justify-between space-x-64 font-normal italic">
              <span className="relative rounded-full bg-[#D9D9D9] px-8 py-1">
                Details
              </span>
              <span className="relative rounded-full bg-[#D9D9D9] px-8 py-1">
                Cast
              </span>
            </div>
            {/* Details */}
            <div className="space-x-96">
              <div className="absolute w-80 rounded-xl bg-[#F5F5F5] px-7 py-7">
                <p>Director:</p>
                <p>Country:</p>
                <p>Release Date:</p>
                <p>Duration:</p>
              </div>
              {/* Cast */}
              <div className="space-y-3">
                <span className="relative flex items-center">
                  <span className="z-10 h-10 w-10 rounded-full bg-[#B3B3B3]"></span>
                  <span className="-ml-10 h-10 w-56 rounded-full bg-[#F5F5F5]"></span>
                </span>
                <span className="relative flex items-center">
                  <span className="z-10 h-10 w-10 rounded-full bg-[#B3B3B3]"></span>
                  <span className="-ml-10 h-10 w-56 rounded-full bg-[#F5F5F5]"></span>
                </span>
                <span className="relative flex items-center">
                  <span className="z-10 h-10 w-10 rounded-full bg-[#B3B3B3]"></span>
                  <span className="-ml-10 h-10 w-56 rounded-full bg-[#F5F5F5]"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Line */}
          <div className="absolute left-60 right-0 z-10 mt-2 h-0.5 bg-[#757575]">
            {/* Storyline */}
            <div className="relative m-7 items-center justify-between space-y-3 font-normal italic">
              <span className="relative rounded-full bg-[#D9D9D9] px-8 py-1">
                Storyline
              </span>
              <div className="absolute left-0 right-0 h-36 rounded-xl bg-[#F5F5F5]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-20 right-6 z-10 mt-48 h-0.5 bg-[#757575]">
        <div className="absolute mt-3 items-center justify-between rounded-full bg-[#B3B3B3] px-8 py-1 font-normal italic">
          Similar to
        </div>
        <div className="absolute left-0 right-0 z-10 mt-14 h-0.5 bg-[#757575]"></div>
        {/* Box */}
        <div className="relative mt-16 flex space-x-7 pb-10">
          <span className="box-content h-32 w-24 rounded-md bg-[#B3B3B3] shadow-xl"></span>
          <span className="box-content h-32 w-24 rounded-md bg-[#B3B3B3] shadow-xl"></span>
          <span className="box-content h-32 w-24 rounded-md bg-[#B3B3B3] shadow-xl"></span>
          <span className="box-content h-32 w-24 rounded-md bg-[#B3B3B3] shadow-xl"></span>
          <span className="box-content h-32 w-24 rounded-md bg-[#B3B3B3] shadow-xl"></span>
        </div>
        <div className="absolute left-0 right-0 z-10 h-0.5 bg-[#757575]"></div>
        {/* Comment */}
        <div className="py-8 antialiased">
          <div className="mx-auto max-w-full px-4">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900 lg:text-2xl">
                Discussion
              </h2>
            </div>
            <form className="mb-7">
              <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-[#F5F5F5] px-4 py-2.5 text-center text-xs font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow hover:bg-gray-50"
              >
                Post comment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
