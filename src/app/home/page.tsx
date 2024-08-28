export default async function HomePage() {
  return (
    <main className="font-ysabeau m-0 box-border bg-black p-0 text-white">
      <div className="relative z-10 w-full overflow-hidden">
        <div className="flex w-full">
          <div className="flex-shrink-0 flex-grow-0 basis-full">
            <img className="h-auto w-full" src="/img/home.png" alt="" />
          </div>
          <div className="absolute top-40 z-50 ml-96 w-2/4">
            <h4 className="my-16 text-2xl">Welcome to W4CTHNAON</h4>
            <h1 className="text-5xl">Reviews Your Favorite Movies</h1>
            <h1 className="mb-12 text-5xl">Make Your Own List</h1>
            <p>
              Immerse yourself in the world of cinema with our comprehensive
              platform designed for movie enthusiasts of all kinds. Whether
              you’re a casual viewer or a dedicated film critic, our website
              offers everything you need to make informed decisions about what
              to watch next. Dive into our extensive library of film reviews,
              explore movies through tailored search filters, and create custom
              playlists that suit your unique taste.
            </p>
          </div>

          {/* Main */}
        </div>
        <div>
          <h1 className="flex items-center justify-center text-2xl font-bold text-white">
            Team Collaborators
          </h1>
        </div>
        <div className="relative mb-20 flex h-auto flex-wrap items-center justify-center overflow-y-hidden p-4 pl-32 pr-32">
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/surya.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Surya Suharna
              </h1>
              <p className="text-xs italic text-white">Frontend Developer</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/soni.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Ahmad Wicaksono
              </h1>
              <p className="text-xs italic text-white">Frontend Developer</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/kaindra.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Bayu Kaindra
              </h1>
              <p className="text-xs italic text-white">Frontend Developer</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/persada.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Persada Ramiiza
              </h1>
              <p className="text-xs italic text-white">Frontend Developer</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/heleni.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Heleni Gratia
              </h1>
              <p className="text-xs italic text-white">Frontend Developer</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/alfian.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Alfian Hanif
              </h1>
              <p className="text-xs italic text-white">Backend Developer</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/rafen.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">Rafen Max</h1>
              <p className="text-xs italic text-white">Data Science</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/kenlyn.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Kenlyn Tesalonika
              </h1>
              <p className="text-xs italic text-white">Data Science</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/amudi.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Amudi Purba
              </h1>
              <p className="text-xs italic text-white">Data Science</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/irdina.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Irdina Ilmuna
              </h1>
              <p className="text-xs italic text-white">Product Manager</p>
            </div>
          </div>
          <div className="relative m-4 h-40 w-32 rounded-xl">
            <img className="h-auto w-auto" src="/img/sonya.png" alt="" />
            <div>
              <h1 className="mt-2 text-sm font-medium text-white">
                Sonya Putri
              </h1>
              <p className="text-xs italic text-white">UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className="relative mb-8 flex items-center justify-center">
          <div className="block">
            <h1 className="mt-2 flex items-center justify-center text-sm font-light text-white">
              © School of Electrical Engineering and Informatics - Computing
              2023
            </h1>
            <p className="flex items-center justify-center text-xs italic text-white">
              Bandung Institute of Technology
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
