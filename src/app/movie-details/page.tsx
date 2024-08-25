/* eslint-disable @next/next/no-img-element */
"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Input } from "postcss";
import { api } from "~/trpc/react";
import { MovieDetailsTop } from "../_components/movie-details-top";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Profile() {
  const router = useRouter();
  const { data } = useSession();

  return (
    <div>
      <MovieDetailsTop userId={data?.user?.id} />
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
