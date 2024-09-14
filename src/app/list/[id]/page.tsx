/* eslint-disable react/jsx-key */
"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export default function ListPage({ params }) {
  const router = useRouter();
  const id = params.id;
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });
  const user = data?.user;
  const userList = api.user.getUserListById.useQuery({ listId: id });
  const movie = api.user.getUserListMovie.useQuery({ listId: id });
  const deleteMovie = api.user.deleteUserListMovie.useMutation();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen overflow-scroll bg-black">
      <div
        className={`mt-16 flex items-center rounded-lg p-8 ${userList.data?.list[0]?.header}`}
      >
        <div className="hidden md:block">
          <div
            className={`flex h-40 w-40 items-center justify-center rounded-md ${userList.data?.list[0]?.prop}`}
          >
            <Image
              src={userList.data?.list[0]?.icon}
              width={60}
              height={60}
              alt="icon"
            />
          </div>
        </div>

        <div className="ml-6">
          <p className="text-sm text-gray-300">List</p>
          <h1 className="text-6xl font-bold text-white">
            {userList.data?.list[0]?.name}
          </h1>
          <p className="mt-2 text-lg text-gray-400">
            created by {userList.data?.list[0]?.creator} • {movie.data?.length}{" "}
            movies
          </p>
        </div>
      </div>
      <div className="hidden p-8 md:block">
        <div className="table w-full border-separate border-spacing-3 text-white">
          <div className="mb-2 table-header-group divide-y-2 divide-white border">
            <div className="table-row">
              <div className="table-cell text-left">#</div>
              <div className="table-cell text-left">Title</div>
              <div className="table-cell text-left"></div>
              <div className="table-cell text-left">Tag Line</div>
              <div className="table-cell text-left">Duration</div>
              <div className="table-cell text-left">Action</div>
            </div>
          </div>
          <div className="table-row-group text-gray-400">
            {movie.data?.map((val, index) => {
              return (
                <div className="table-row align-middle">
                  <div className="table-cell align-middle">{index + 1}</div>
                  <div className="table-cell align-middle">
                    <img
                      src={val.poster}
                      className="h-16 w-16 rounded-md object-cover hover:scale-105"
                      alt="Poster"
                    />
                  </div>
                  <div className="table-cell align-middle text-white">
                    {val.name}
                  </div>
                  <div className="table-cell align-middle">{val.tagline}</div>
                  <div className="table-cell align-middle">{val.duration}</div>
                  <div className="table-cell align-middle">
                    <div className="flex flex-row gap-5">
                      <a href={`/movie-details/${val.movieId}`}>
                        <button>
                          <Image
                            src="/icon/eye-icon.png"
                            width={20}
                            height={20}
                            alt="eye icon"
                          />
                        </button>
                      </a>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          deleteMovie.mutate({
                            listId: userList.data?.list[0]?.listId,
                            movieId: val.movieId,
                          });
                          alert(`${val.name} removed from list`);
                        }}
                      >
                        <button>
                          <Image
                            src="/icon/trash-icon.png"
                            width={20}
                            height={20}
                            alt="trash icon"
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="block p-8 md:hidden">
        <div className="table w-full border-separate border-spacing-3 text-white">
          <div className="mb-2 table-header-group divide-y-2 divide-white border">
            <div className="table-row">
              <div className="table-cell text-left">#</div>
              <div className="table-cell text-left">Title</div>
              <div className="table-cell text-left"></div>
              <div className="table-cell text-left">Action</div>
            </div>
          </div>
          <div className="table-row-group text-gray-400">
            {movie.data?.map((val, index) => {
              return (
                <div className="table-row align-middle">
                  <div className="table-cell align-middle">{index + 1}</div>
                  <div className="table-cell align-middle">
                    <img
                      src={val.poster}
                      className="h-16 w-16 rounded-md object-cover hover:scale-105"
                      alt="Poster"
                    />
                  </div>
                  <div className="table-cell align-middle text-white">
                    {val.name}
                  </div>
                  <div className="table-cell align-middle">
                    <div className="flex flex-row gap-5">
                      <a href={`/movie-details/${val.movieId}`}>
                        <button>
                          <Image
                            src="/icon/eye-icon.png"
                            width={20}
                            height={20}
                            alt="eye icon"
                          />
                        </button>
                      </a>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          deleteMovie.mutate({
                            userId: user?.id,
                            movieId: val.movieId,
                          });
                          alert(`${val.name} removed from list`);
                        }}
                      >
                        <button>
                          <Image
                            src="/icon/trash-icon.png"
                            width={20}
                            height={20}
                            alt="trash icon"
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
