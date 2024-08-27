"use client";
import { api } from "~/trpc/react";

export function ProfileImage({ params }) {
  const data = api.user.getUser.useQuery({ userId: params });
  const url = data.data[0]?.image;
  return (
    <div>
      <img
        src={url}
        width={500}
        height={500}
        alt="Picture of the author"
        className="mr-5 mt-4 h-24 w-24 max-w-sm rounded-full sm:flex sm:items-center"
      />
    </div>
  );
}
