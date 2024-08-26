export default function LoginPage() {
  return (
      <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/home-page.jpg')" }}>
          <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
              <div className="relative flex flex-col m-2 space-y-4 bg-black bg-opacity-70 text-white shadow-2xl rounded-xl md:flex-row md:space-y-0 md:m-0 md:max-w-md">
                  {/* Login Form */}
                  <div className="p-4 md:p-6">
                      <h2 className="font-mono mb-3 text-xl font-bold text-left">
                          Watchnaon 
                      </h2>
                      <p className="max-w-xs mb-4 font-sans font-light text-gray-300 text-left">
                          Log in to your account
                      </p>
                      <input
                          type="email"
                          className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 bg-opacity-50 text-white placeholder:text-gray-400
                          placeholder:font-sans placeholder:font-light"
                          placeholder="Enter your email address" 
                      />
                      <input 
                          type="password"
                          className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 bg-opacity-50 text-white placeholder:text-gray-400
                          placeholder:font-sans placeholder:font-light mt-3"
                          placeholder="Enter your password" 
                      />
                      {/* Button and Forgot Password */}
                      <div className="flex flex-col items-center justify-end mt-3 space-y-3 md:flex-row md:space-y-0">
                          <button className="w-full md:w-auto flex justify-center 
                          items-center p-2 space-x-2 font-sans font-bold text-white
                          rounded-md px-4 bg-cyan-700 shadow-cyan-100 
                          hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition 
                          hover:-translate-y-0.5 duration-150">
                              <span>Log in</span>
                          </button>
                      </div>
                      {/* Divider */}
                      <div className="mt-5 border-b border-b-gray-600"></div>
                      {/* Bottom Links */}
                      <p className="py-3 text-sm font-thin text-center text-gray-400">
                          Don't have an account? <a href="/register-page" className="text-cyan-500 hover:underline">Register</a>
                          <br />
                          or
                          <br />
                          sign in with
                      </p>
                      {/* Social Login Button */}
                      <div className="flex justify-center">
                          <button className="flex items-center justify-center py-2
                          space-x-2 border border-gray-600 rounded shadow-sm
                          hover:bg-opacity-30 hover:shadow-lg hover:translate-y-0.5
                          transition duration-150 w-32 bg-gray-800 bg-opacity-50">
                              <img src="/img/github-logo.png" alt="git" className="w-8 mr-1 rounded-3xl" />
                              <span className="font-thin text-white">
                                  Github
                              </span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>     
      </main>
  )
}