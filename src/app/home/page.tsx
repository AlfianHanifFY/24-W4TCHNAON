export default async function HomePage() {
    return(
    <main className="p-0 m-0 box-border bg-black text-white">
        <nav className="flex justify-between text-center p-4 fixed w-full z-20 bg-black bg-opacity-50">
            <a className="text-5xl text-red-600 ml-4">W4CTHNAON</a>
            <div className="">
                <a className="text-white inline-block mt-2 mr-8 ml-8 text-xl">Home</a>
                <a className="text-white inline-block mt-2 mr-8 ml-8 text-xl">Trend</a>
                <a className="text-white inline-block mt-2 mr-8 ml-8 text-xl">My List</a>
                <a className="text-white inline-block mt-2 mr-8 ml-8 text-xl">Log Out</a>
            </div>
        </nav>
        <div className="overflow-hidden w-full relative z-10">
            <div className="flex w-full">
                <div className="flex-grow-0 flex-shrink-0 basis-full">
                    <img className="w-full h-auto" src="/img/got.png" alt="" />
                </div>
                <div className="flex-grow-0 flex-shrink-0 basis-full">
                    <img className="w-full h-auto" src="/img/got.png" alt="" />
                </div>
                <div className="flex-grow-0 flex-shrink-0 basis-full">
                    <img className="w-full h-auto" src="/img/got.png" alt="" />
                </div>
                <div className="w-2/4 absolute z-50 top-40 ml-80">
                    <h4>Welcome to W4CTHNAON</h4>
                    <h1 className="text-5xl">Reviews Your Favorite Movies</h1>
                    <h1 className="text-5xl">Make Your Own Playlist</h1>
                    <p>Immerse yourself in the world of cinema with our comprehensive platform designed for movie enthusiasts of all kinds. Whether you’re a casual viewer or a dedicated film critic, our website offers everything you need to make informed decisions about what to watch next. Dive into our extensive library of film reviews, explore movies through tailored search filters, and create custom playlists that suit your unique taste.</p>
                </div>
                <div className="w-2/4 absolute z-50 top-96 mt-20 ml-80">
                    <button className="z-50 p-4 bg-red-600 rounded-2xl text-white text-base font-semibold">Start Review</button>
                </div>
            </div>
            
            {/* Main */}
            <div className="w-full relative flex">
                <img className="w-full h-auto opacity-10" src="/img/background-home.jpg"/>
                <div className=" mr-12 w-full absolute mt-20 mb-24">
                <div className="w-full pr-28 pl-28 pb-32 pt-12">
                    <h1 className="text-white items-center justify-center text-center">Hello, Cinephiles!</h1>
                    <p className="text-white items-center justify-center text-center">Looking for the next great film to watch? Our movie review website is your go-to destination! Discover honest and in-depth reviews from fellow movie enthusiasts, helping you find the perfect film for any mood. Whether you're into action-packed blockbusters, heartwarming dramas, or hidden indie gems, our platform makes it easy to explore, rate, and share your favorite films. Join a community of passionate cinephiles, dive into engaging discussions, and make informed decisions on your next movie night. Start your cinematic adventure with us today and never miss a must-watch movie again!</p>
                </div>
                <div className="z-50 block absolute text-4xl items-center ml-14 justify-center w-full">Top 10 Movies</div>
                    <div className="space-x-4 py-5 w-11/12 h-96 ml-14 mt-16 flex overflow-x-auto  ">
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-52 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-56 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-56 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-56 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-56 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-56 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-56 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-56 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-56 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                        <div className="p-1 min-w-[144px] text-center">
                            <img className=" w-full h-56 rounded-3xl" src="/img/sample-trend.jpg" alt="Sample" />
                            <div className="mt-1 w-full bg-red-700 p-1 rounded-2xl justify-center items-center flex">Action</div>
                            <h1 className="font-bold pb-0">Film</h1>
                            <p className="pt-0">2022</p>
                        </div>
                </div>
                    <div className="bg-white bg-opacity-20 flex w-full h-60 relative items-center z-10 opacity-100 mt-20 mb-20">
                        <div className="w-4/5 h-auto m-12">
                            <h1>Create Your Own Playlist</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem illo iste blanditiis odio? Amet molestias laboriosam quae debitis et sint commodi! Autem doloremque aperiam esse incidunt iure deleniti illum?</p>
                        </div>
                        <div className="flex h-autojustify-center items-center m-8">
                            <div className="w-40 h-40 m-1 rounded-lg block justify-center items-center relative">
                                <img className="w-full h-40 object-cover relative z-10 opacity-100 " src="/img/playlist-sample.jpg" alt="" />
                                <h1 className="ml-8 text-base">My Playlist</h1>
                            </div>
                            <div className="w-40 h-40 m-1 rounded-lg block justify-center items-center relative">
                                <img className="w-full h-40 object-cover relative z-10 opacity-100 " src="/img/playlist-sample.jpg" alt="" />
                                <h1 className="ml-8 text-base">My Playlist</h1>
                            </div>
                            <div className="w-40 h-40 m-1 rounded-lg block justify-center items-center relative">
                                <img className="w-full h-40 object-cover relative z-10 opacity-100 " src="/img/playlist-sample.jpg" alt="" />
                                <h1 className="ml-8 text-base">My Playlist</h1>
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                    {/* Kurang Scrollbar */}
                    <div className="z-50 justify-center w-full h-12 relative mt-8 p-4 flex items-center">
                        <a className="text-white text-2xl" href="">See All Recomendation</a>
                    </div>
                    <div className="p-4 h-96 flex flex-wrap relative overflow-y-auto justify-center items-center">
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                        <div className="w-32 h-52 m-4">
                            <div>
                                <img className="w-full opacity-100 h-48 rounded-none" src="/img/sample-recomendation.jpg" alt="" />
                                <h3 className="justify-center items-center flex pb-4">Film</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full p-28 text-center">
                        <p>Passionate about movies? Here, you have the freedom to share your personal thoughts, rate films, and explore a wide range of reviews from fellow movie enthusiasts. Whether you’re a casual viewer or a seasoned film critic, our platform allows you to engage with a growing community of cinephiles who love discussing every genre — from blockbuster hits to hidden indie gems.

                            Discover new movies, share your insights, and help others decide what to watch next. With every review, rating, and recommendation, you're contributing to a space where diverse opinions on films are valued and celebrated. Explore the ever-expanding world of cinema and make your voice heard.

                            Your journey into movies starts here — one review at a time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
) 
}