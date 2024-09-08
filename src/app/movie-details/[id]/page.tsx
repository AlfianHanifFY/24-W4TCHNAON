/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Input } from "postcss";
import { api } from "~/trpc/react";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { MovieDetailsTop } from "~/app/_components/movie-details-top";
import { MovieDetailsSimiliar } from "~/app/_components/movie-details-similiar";
import { MovieDetailsComment } from "~/app/_components/movie-details-comment";

export default function MovieDetail({ params }) {
  const id = params.id;
  const router = useRouter();
  const { data } = useSession();

  return (
    <div>
      <MovieDetailsTop userId={data?.user?.id} id={id} />
      <div className="z-10 mt-48 h-0.5 bg-[#757575] md:absolute md:left-20 md:right-6">
        <div className="absolute mt-3 items-center justify-between rounded-full bg-[#B3B3B3] px-8 py-1 font-normal italic">
          Similar to
        </div>
        <div className="absolute left-0 right-0 z-10 m-2 mt-14 h-0.5 bg-[#757575]"></div>
        {/* Box */}
        <div className="hidden md:block">
          <MovieDetailsSimiliar id={id} />
          <div className="absolute left-0 right-0 z-10 m-2 h-0.5 bg-[#757575]"></div>
          {/* Comment */}
          <MovieDetailsComment userId={data?.user?.id} movieId={id} />
        </div>
      </div>
      <div className="block w-screen md:hidden">
        <MovieDetailsSimiliar id={id} />
        <div className="absolute left-0 right-0 z-10 m-2 h-0.5 bg-[#757575]"></div>
        {/* Comment */}
        <MovieDetailsComment userId={data?.user?.id} movieId={id} />
      </div>
    </div>
  );
}
