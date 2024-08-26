/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false); // State to manage success message

  const router = useRouter();

  const handleSubmit = api.user.register.useMutation({
    onSuccess: () => {
      setSuccess(true); // Show success message
      setTimeout(() => {
        setSuccess(false);
        router.push("/login"); // Redirect after showing the message
      }, 2000); // Show the message for 3 seconds before redirecting
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit.mutate({
            name: name,
            email: email,
            password: password,
          });
        }}
      >
        <input
          type="text"
          className="w-full rounded-md border border-gray-600 bg-gray-800 bg-opacity-50 p-2 text-white placeholder:font-sans placeholder:font-light placeholder:text-gray-400"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="mt-3 w-full rounded-md border border-gray-600 bg-gray-800 bg-opacity-50 p-2 text-white placeholder:font-sans placeholder:font-light placeholder:text-gray-400"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="mt-3 w-full rounded-md border border-gray-600 bg-gray-800 bg-opacity-50 p-2 text-white placeholder:font-sans placeholder:font-light placeholder:text-gray-400"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-3 flex flex-col items-center justify-end space-y-3 md:flex-row md:space-y-0">
          <button className="flex w-full items-center justify-center space-x-2 rounded-md border bg-cyan-700 p-2 px-4 font-sans font-bold text-white shadow-sm shadow-cyan-100 transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-lg md:w-auto">
            <span>Register</span>
          </button>
        </div>
      </form>

      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-green-400 p-4 text-center shadow-lg">
            <p className="font-bold text-gray-800">Registration Success!</p>
          </div>
        </div>
      )}
    </div>
  );
}
