export default function Preference() {
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
      <div style={{ fontFamily: "Montserrat" }} className="text-sm">
        SELECT AT LEAST 3
      </div>

      {/* Actors and Actresses */}
      <div className="space-y-4">
        <div className="mt-5 flex flex-row justify-between px-10 text-center">
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor A</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor B</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor C</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor D</a>
          </div>
        </div>
        <div className="mt-5 flex flex-row justify-between px-10 text-center">
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor A</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor B</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor C</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor D</a>
          </div>
        </div>
        <div className="mt-5 flex flex-row justify-between px-10 text-center">
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor A</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor B</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor C</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Actor D</a>
          </div>
        </div>
      </div>

      {/* Text Genre */}
      <div className="flex flex-row justify-between pt-8">
        <div className="text-2xl font-semibold">Your Favorite Genres</div>
      </div>
      <div style={{ fontFamily: "Montserrat" }} className="text-sm">
        SELECT AT LEAST 3
      </div>

      {/* Genre */}
      <div className="space-y-4">
        <div className="mt-5 flex flex-row justify-between px-10 text-center">
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Romance</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Thriller</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Drama</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Comedy</a>
          </div>
        </div>
        <div className="mt-5 flex flex-row justify-between px-10 text-center">
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Horror</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Action</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Animation</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Documenter</a>
          </div>
        </div>
        <div className="mt-5 flex flex-row justify-between px-10 text-center">
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Fantasy</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Science Fiction</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Musical</a>
          </div>
          <div className="flex h-[73px] w-[247px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#BA0000] to-[#FF0000] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow delay-300 hover:from-[#a30303] hover:to-[#d40000]">
            <a href="#">Historical</a>
          </div>
        </div>
      </div>
    </div>
  );
}
