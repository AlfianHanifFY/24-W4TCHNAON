/* eslint-disable @next/next/no-img-element */
"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Input } from "postcss";
import { api } from "~/trpc/react";
import { MovieDetailsTop } from "../_components/movie-details-top";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { MovieDetailsSimiliar } from "../_components/movie-details-similiar";
import { MovieDetailsComment } from "../_components/movie-details-comment";
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
        <div className="absolute left-0 right-0 z-10 m-2 mt-14 h-0.5 bg-[#757575]"></div>
        {/* Box */}
        <MovieDetailsSimiliar />
        <div className="absolute left-0 right-0 z-10 m-2 h-0.5 bg-[#757575]"></div>
        {/* Comment */}
        <MovieDetailsComment userId={data?.user?.id} />
      </div>
    </div>
  );
}
