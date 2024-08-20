import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <div className="flex items-center justify-center min-h-screen bg-rose-500">
          <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
            {/* left side */}
            <div className="p-6 md:p-20">
              <h2 className="font-mono mb-5 text-4xl font-bold">
                  Log in
              </h2>
              <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
                wathnaon
              </p>
              <input 
              type="text"
              className="w-full p-6 border border-gray-300 rounded-md
              placeholder:font-sans placehorder:font-light"
              placeholder="Enter your email address" />
            <div/>
            {/* middle */}
            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <div className="font-thin text-cyan-1000">Forgot Password</div>
              <button className="w-full md:w-auto flex justify-center 
              items-center p-6 space-x-4 font-sans font-bold text-white
              rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 
              hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition 
              hover:-translate-y-0.5 duration-150">
                <span>Next</span>
              </button>
            </div>
            {/* border */}
            <div className="mt-12 border-b border-b-gray-300"></div>
            {/* bottom content */}
            <p className="py-6 text-sm font-thin text-center text-gray-400">
              or sign in with
            </p>
            {/* bottom buttons container */}
            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center py-2
              space-x-3 border border-gray-300 rounded shadow-sm
              hover:bg-opacity-30 hover:shadow-lg hover:translate-y-0.5
               transition duration-150 md:w-1/2">
                <img src="" alt="git" className="w-9" />
                <span className="font-thin">
                  github
                </span>
              </button>
            </div>
              {/* right side */}
            </div>
            <div className="md:block bg-slate-600 w-[430px]"></div>
          </div>
        </div>

        
      </main>
    </HydrateClient>
  );
}
