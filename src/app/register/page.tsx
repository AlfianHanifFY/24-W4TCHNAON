import { useState } from "react";
import { Register } from "../_components/register";
import { api } from "~/trpc/server";

export default function RegisterPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/home-page.jpg')" }}
    >
      <div className="flex min-h-screen items-center justify-center bg-black bg-opacity-50">
        <div className="relative m-2 flex flex-col space-y-4 rounded-xl bg-black bg-opacity-70 text-white shadow-2xl md:m-0 md:max-w-md md:flex-row md:space-y-0">
          {/* left side */}
          <div className="p-4 md:p-6">
            <h2 className="mb-3 text-left font-mono text-xl font-bold">
              W4TCHNAON
            </h2>
            <p className="mb-4 max-w-xs text-left font-sans font-light text-gray-300">
              Register to create your account
            </p>

            <Register />

            {/* middle */}

            {/* border */}
            <div className="mt-5 border-b border-b-gray-600"></div>
            {/* bottom content */}
            <p className="py-3 text-center text-sm font-thin text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-cyan-500 hover:underline">
                Log in
              </a>
              <br />
              or
              <br />
              sign in with
            </p>
            {/* bottom buttons container */}
            <div className="flex justify-center">
              <button className="flex w-32 items-center justify-center space-x-2 rounded border border-gray-600 bg-gray-800 bg-opacity-50 py-2 shadow-sm transition duration-150 hover:translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg">
                <img
                  src="/img/github-logo.png"
                  alt="git"
                  className="mr-1 w-8 rounded-3xl"
                />
                <span className="font-thin text-white">GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
