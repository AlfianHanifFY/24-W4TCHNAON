import React from "react";

export function MustLoginPage() {
  const handleLogin = () => {
    // Logic for login action (e.g., redirect or open a login modal)
    alert("Redirecting to login...");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="rounded bg-[#3C3A3A] p-8 text-center shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold text-white">
          Sorry, you must login first
        </h1>
        <a href="/login">
          <button
            onClick={handleLogin}
            className="rounded bg-gradient-to-r from-[#BA0000] to-[#FF0000] px-4 py-2 text-white hover:scale-105"
          >
            Login
          </button>
        </a>
      </div>
    </div>
  );
}

export default MustLoginPage;
