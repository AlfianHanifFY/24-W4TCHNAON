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

  return <div>kurang parameter oy</div>;
}
