import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn } from "~/auth";

export default function LoginPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/home-page.jpg')" }}
    >
      <div className="flex min-h-screen items-center justify-center bg-black bg-opacity-50">
        <div className="relative m-2 flex flex-col space-y-4 rounded-xl bg-black bg-opacity-70 text-white shadow-2xl md:m-0 md:max-w-md md:flex-row md:space-y-0">
          {/* Login Form */}
          <div className="p-4 md:p-6">
            <h2 className="mb-3 text-left font-mono text-xl font-bold">
              Watchnaon (nanti pake logo)
            </h2>
            <p className="mb-4 max-w-xs text-left font-sans font-light text-gray-300">
              Log in to your account
            </p>
            <form
              action={async (formData) => {
                "use server";
                try {
                  await signIn("credentials", formData);
                } catch (error) {
                  if (error instanceof AuthError) {
                    return redirect(`/login`);
                  } else {
                    return redirect("/");
                  }
                }
              }}
            >
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full rounded-md border border-gray-600 bg-gray-800 bg-opacity-50 p-2 text-white placeholder:font-sans placeholder:font-light placeholder:text-gray-400"
                  placeholder="Enter your email address"
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-3 w-full rounded-md border border-gray-600 bg-gray-800 bg-opacity-50 p-2 text-white placeholder:font-sans placeholder:font-light placeholder:text-gray-400"
                  placeholder="Enter your password"
                />
              </label>

              {/* Button and Forgot Password */}

              <div className="mt-3 flex flex-col items-center justify-end space-y-3 md:flex-row md:space-y-0">
                <button className="flex w-full items-center justify-center space-x-2 rounded-md border bg-cyan-700 p-2 px-4 font-sans font-bold text-white shadow-sm shadow-cyan-100 transition duration-150 hover:-translate-y-0.5 hover:bg-opacity-90 hover:shadow-lg md:w-auto">
                  <span>Log in</span>
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="mt-5 border-b border-b-gray-600"></div>
            {/* Bottom Links */}
            <p className="py-3 text-center text-sm font-thin text-gray-400">
              Dont have an account?{" "}
              <a href="/register" className="text-cyan-500 hover:underline">
                Register
              </a>
              <br />
              or
              <br />
              sign in with
            </p>
            {/* Social Login Button */}
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <div className="flex justify-center">
                <button className="flex w-32 items-center justify-center space-x-2 rounded border border-gray-600 bg-gray-800 bg-opacity-50 py-2 shadow-sm transition duration-150 hover:translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg">
                  <img
                    src="/img/github-logo.png"
                    alt="git"
                    className="mr-1 w-8 rounded-3xl"
                  />
                  <span className="font-thin text-white">Github</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
