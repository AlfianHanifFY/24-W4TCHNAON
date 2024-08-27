export default async function HomePage() {
  return (
    <main className="m-0 box-border bg-black p-0 text-white">
      <nav className="fixed z-20 flex w-full justify-between bg-black bg-opacity-50 p-4 text-center">
        <a className="ml-4 text-5xl text-red-600">W4CTHNAON</a>
        <div className="">
          <a className="ml-8 mr-8 mt-2 inline-block text-xl text-white">Home</a>
          <a className="ml-8 mr-8 mt-2 inline-block text-xl text-white">
            Trend
          </a>
          <a className="ml-8 mr-8 mt-2 inline-block text-xl text-white">
            My List
          </a>
          <a className="ml-8 mr-8 mt-2 inline-block text-xl text-white">
            Log Out
          </a>
        </div>
      </nav>
      <div className="relative z-10 w-full overflow-hidden">
        <div className="flex w-full">
          <div className="flex-shrink-0 flex-grow-0 basis-full">
            <img className="h-auto w-full" src="/img/got.png" alt="" />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full">
            <img className="h-auto w-full" src="/img/got.png" alt="" />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full">
            <img className="h-auto w-full" src="/img/got.png" alt="" />
          </div>
          <div className="absolute top-40 z-50 ml-80 w-2/4">
            <h4>Welcome to W4CTHNAON</h4>
            <h1 className="text-5xl">Reviews Your Favorite Movies</h1>
            <h1 className="text-5xl">Make Your Own Playlist</h1>
            <p>
              Immerse yourself in the world of cinema with our comprehensive
              platform designed for movie enthusiasts of all kinds. Whether
              youre a casual viewer or a dedicated film critic, our website
              offers everything you need to make informed decisions about what
              to watch next. Dive into our extensive library of film reviews,
              explore movies through tailored search filters, and create custom
              playlists that suit your unique taste.
            </p>
          </div>
          <div className="absolute top-96 z-50 ml-80 mt-20 w-2/4">
            <button className="z-50 rounded-2xl bg-red-600 p-4 text-base font-semibold text-white">
              Start Review
            </button>
          </div>

        {/* Main */}
        <div className="relative flex w-full">
          <img
            className="h-auto w-full opacity-10"
            src="/img/background-home.jpg"
          />
          <div className="absolute mb-24 mr-12 mt-20 w-full">
            <div className="w-full pb-32 pl-28 pr-28 pt-12">
              <h1 className="items-center justify-center text-center text-white">
                Hello, Cinephiles!
              </h1>
              <p className="items-center justify-center text-center text-white">
                Looking for the next great film to watch? Our movie review
                website is your go-to destination! Discover honest and in-depth
                reviews from fellow movie enthusiasts, helping you find the
                perfect film for any mood. Whether you're into action-packed
                blockbusters, heartwarming dramas, or hidden indie gems, our
                platform makes it easy to explore, rate, and share your favorite
                films. Join a community of passionate cinephiles, dive into
                engaging discussions, and make informed decisions on your next
                movie night. Start your cinematic adventure with us today and
                never miss a must-watch movie again!
              </p>
            </div>
            <div className="absolute z-50 ml-14 block w-full items-center justify-center text-4xl">
              Top 10 Movies
            </div>
            <div className="ml-14 mt-16 flex h-96 w-11/12 space-x-4 overflow-x-auto py-5">
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-52 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-56 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-56 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-56 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-56 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-56 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-56 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-56 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-56 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
              <div className="min-w-[144px] p-1 text-center">
                <img
                  className="h-56 w-full rounded-3xl"
                  src="/img/sample-trend.jpg"
                  alt="Sample"
                />
                <div className="mt-1 flex w-full items-center justify-center rounded-2xl bg-red-700 p-1">
                  Action
                </div>
                <h1 className="pb-0 font-bold">Film</h1>
                <p className="pt-0">2022</p>
              </div>
            </div>
            <div className="relative z-10 mb-20 mt-20 flex h-60 w-full items-center bg-white bg-opacity-20 opacity-100">
              <div className="m-12 h-auto w-4/5">
                <h1>Create Your Own Playlist</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam voluptatem illo iste blanditiis odio? Amet molestias
                  laboriosam quae debitis et sint commodi! Autem doloremque
                  aperiam esse incidunt iure deleniti illum?
                </p>
              </div>
              <div className="h-autojustify-center m-8 flex items-center">
                <div className="relative m-1 block h-40 w-40 items-center justify-center rounded-lg">
                  <img
                    className="relative z-10 h-40 w-full object-cover opacity-100"
                    src="/img/playlist-sample.jpg"
                    alt=""
                  />
                  <h1 className="ml-8 text-base">My Playlist</h1>
                </div>
                <div className="relative m-1 block h-40 w-40 items-center justify-center rounded-lg">
                  <img
                    className="relative z-10 h-40 w-full object-cover opacity-100"
                    src="/img/playlist-sample.jpg"
                    alt=""
                  />
                  <h1 className="ml-8 text-base">My Playlist</h1>
                </div>
                <div className="relative m-1 block h-40 w-40 items-center justify-center rounded-lg">
                  <img
                    className="relative z-10 h-40 w-full object-cover opacity-100"
                    src="/img/playlist-sample.jpg"
                    alt=""
                  />
                  <h1 className="ml-8 text-base">My Playlist</h1>
                </div>
                <div className=""></div>
              </div>
            </div>
            {/* Kurang Scrollbar */}
            <div className="relative z-50 mt-8 flex h-12 w-full items-center justify-center p-4">
              <a className="text-2xl text-white" href="">
                See All Recomendation
              </a>
            </div>
            <div className="relative flex h-96 flex-wrap items-center justify-center overflow-y-auto p-4">
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
              <div className="m-4 h-52 w-32">
                <div>
                  <img
                    className="h-48 w-full rounded-none opacity-100"
                    src="/img/sample-recomendation.jpg"
                    alt=""
                  />
                  <h3 className="flex items-center justify-center pb-4">
                    Film
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center p-28 text-center">
              <p>
                Passionate about movies? Here, you have the freedom to share
                your personal thoughts, rate films, and explore a wide range of
                reviews from fellow movie enthusiasts. Whether you’re a casual
                viewer or a seasoned film critic, our platform allows you to
                engage with a growing community of cinephiles who love
                discussing every genre — from blockbuster hits to hidden indie
                gems. Discover new movies, share your insights, and help others
                decide what to watch next. With every review, rating, and
                recommendation, you're contributing to a space where diverse
                opinions on films are valued and celebrated. Explore the
                ever-expanding world of cinema and make your voice heard. Your
                journey into movies starts here — one review at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
