import { signIn } from "~/auth";

export default function Loginpage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/home-page.jpg')" }}
    >
      <div className="flex min-h-screen items-center justify-center bg-black bg-opacity-50">
        <div className="relative m-2 flex flex-col space-y-4 rounded-xl bg-white shadow-2xl md:m-0 md:max-w-md md:flex-row md:space-y-0">
          {/* left side */}
          <div className="p-4 md:p-6">
            <h2 className="mb-3 text-left font-mono text-xl font-bold">
              Watchnaon (nanti pake logo)
            </h2>
            <p className="mb-4 max-w-xs text-left font-sans font-light text-gray-600">
              login (bebas mau di ubah dulu)
            </p>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 p-2 placeholder:font-sans placeholder:font-light"
              placeholder="Enter your email address"
            />
            <input
              type="password"
              className="mt-3 w-full rounded-md border border-gray-300 p-2 placeholder:font-sans placeholder:font-light"
              placeholder="Enter your password"
            />
            {/* middle */}
            <div className="mt-3 flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0">
              <div className="text-center font-light text-cyan-700 md:text-left">
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button className="flex w-full items-center justify-center space-x-2 rounded-md border bg-cyan-700 p-2 px-4 font-sans font-bold text-white shadow-sm shadow-cyan-100 transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-lg md:w-auto">
                <span>Log in</span>
              </button>
            </div>
            {/* border */}
            <div className="mt-5 border-b border-b-gray-300"></div>
            {/* bottom content */}
            <p className="py-3 text-center text-sm font-thin text-gray-500">
              register
              <br />
              or
              <br />
              sign in with
            </p>
            {/* bottom buttons container */}
            <div className="flex justify-center">
              <form
                action={async (formData) => {
                  "use server";
                  await signIn("github", formData);
                }}
              >
                <button className="flex w-32 items-center justify-center space-x-2 rounded border border-gray-300 py-2 shadow-sm transition duration-150 hover:translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg">
                  <img
                    src="/path/to/github-logo.png"
                    alt="git"
                    className="w-5"
                  />
                  <span className="font-thin">GitHub</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
