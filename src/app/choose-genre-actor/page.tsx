/* eslint-disable react/jsx-key */
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export default function Preference() {
  const router = useRouter();
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/api/auth/signin");
      window.location.reload();
    },
  });

  const popularActors = [
    "Leonardo DiCaprio",
    "Margot Robbie",
    "Ryan Gosling",
    "Emma Stone",
    "Brad Pitt",
    "Tom Hanks",
    "Joaquin Phoenix",
    "Robert De Niro",
    "Scarlett Johansson",
    "Jennifer Lawrence",
    "Robert Downey Jr.",
    "Keanu Reeves",
    "Jake Gyllenhaal",
    "Cate Blanchett",
    "Matthew McConaughey",
    "Christian Bale",
    "Cillian Murphy",
    "Tom Cruise",
    "Meryl Streep",
    "George Clooney",
  ];
  const genres = [
    "Comedy",
    "Adventure",
    "Thriller",
    "Drama",
    "Science Fiction",
    "Action",
    "Music",
    "Romance",
    "History",
    "Crime",
    "Animation",
    "Mystery",
    "Horror",
    "Family",
    "Fantasy",
    "War",
    "Western",
    "TV Movie",
    "Documentary",
  ];
  const countries = [
    "South Korea",
    "Germany",
    "Hong Kong",
    "Canada",
    "Sweden",
    "Ireland",
    "Japan",
    "China",
    "France",
    "Brazil",
    "Italy",
    "Czechia",
    "New Zealand",
    "Australia",
    "India",
    "Spain",
    "Austria",
    "Greece",
    "Netherlands",
    "Taiwan",
    "Poland",
    "Mexico",
    "Finland",
    "Denmark",
    "Singapore",
    "Switzerland",
    "Chile",
    "Belgium",
    "United Arab Emirates",
    "Malta",
    "Hungary",
    "South Africa",
    "Turkey",
    "Bulgaria",
    "Argentina",
    "Iceland",
    "Norway",
    "Indonesia",
    "Slovenia",
    "Iran",
    "Luxembourg",
    "Philippines",
    "Malaysia",
    "Portugal",
    "Serbia",
    "Romania",
    "Colombia",
    "Thailand",
    "Cyprus",
    "Lebanon",
    "Qatar",
    "Bahamas",
    "Puerto Rico",
    "Russian Federation",
    "Cuba",
    "Dominican Republic",
    "Senegal",
    "Bolivarian Republic of Venezuela",
    "Morocco",
    "Croatia",
    "Guatemala",
    "Latvia",
    "Cambodia",
    "Mongolia",
    "Slovakia",
    "Ukraine",
    "Tunisia",
    "Myanmar",
  ];

  const createUserActor = api.user.createUserActor.useMutation();
  const createUserCountry = api.user.createUserCountry.useMutation();
  const creaeUserGenre = api.user.createUserGenre.useMutation();
  const user = data?.user;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-20 p-6 font-light">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@1..1000&family=Montserrat:wght@400&display=swap"
        rel="stylesheet"
      ></link>
      {/* Text Actors and Actresses + Done */}
      <div className="flex flex-row justify-between">
        <div className="text-2xl font-semibold">
          Your Favorite Actors and Actresses
        </div>
        <a href="#" className="text-md font-semibold hover:text-lg">
          Done
        </a>
      </div>

      {/* Actors and Actresses */}
      <>
        <div className="mt-4 grid grid-cols-4 gap-4 bg-white p-4">
          {popularActors.map((val) => {
            return (
              <div className="m-2 rounded-full bg-white shadow-md hover:scale-105">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    createUserActor.mutate({
                      userId: user?.id,
                      actor: val,
                    });
                  }}
                >
                  <div className="ml p-4">
                    <div className="text-center font-semibold">
                      <button>{val}</button>
                    </div>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
      </>
      {/* Text Genre */}
      <div className="flex flex-row justify-between pt-8">
        <div className="text-2xl font-semibold">Your Favorite Genres</div>
      </div>

      {/* Genre */}
      <>
        <div className="mt-4 grid grid-cols-4 gap-4 bg-white p-4">
          {genres.map((val) => {
            return (
              <div className="m-2 rounded-full bg-white shadow-md hover:scale-105">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    creaeUserGenre.mutate({
                      userId: user?.id,
                      genre: val,
                    });
                  }}
                >
                  <div className="ml p-4">
                    <div className="text-center font-semibold">
                      <button>{val}</button>
                    </div>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
      </>

      {/* Countries */}
      <div className="flex flex-row justify-between pt-8">
        <div className="text-2xl font-semibold">Where You Live ?</div>
      </div>
      <>
        <div className="mt-4 grid grid-cols-4 gap-4 bg-white p-4">
          {countries.map((val) => {
            return (
              <div className="m-2 rounded-full bg-white shadow-md hover:scale-105">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    createUserCountry.mutate({
                      userId: user?.id,
                      country: val,
                    });
                  }}
                >
                  <div className="ml p-4">
                    <div className="text-center font-semibold">
                      <button>{val}</button>
                    </div>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
}
