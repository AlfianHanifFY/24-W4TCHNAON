import Image from 'next/image'
export default function ProfilePage() {
    return (
        <div className='flex'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            {/* left navbar */}
            <div className='w-1/4 h-screen bg-[#B3B3B3]'>
                <a href='#' className='flex w-full h-14 mt-16 bg-[#555555] justify-center items-center'>
                    <i className='left-4 text-2xl absolute bx bxs-user'></i>
                    <p className=''>USER INFO</p>
                </a>
                <a href='http://localhost:3001/folder-page/favorite' className='flex w-full h-14 my-4 justify-center items-center'>
                    <i className='left-4 text-2xl absolute bx bxs-heart'></i>
                    <p className=''>FAVORITE</p>
                </a>
                <a href='http://localhost:3001/folder-page/watch-later' className='flex w-full h-14 my-4 justify-center items-center'>
                    <i className='left-4 text-2xl absolute bx bxs-star'></i>
                    <p className=''>WATCH LATER</p>
                </a>
            </div>

            <div className='w-full h-auto'>
                <div className='ml-20 mr-20 justify-center'>
                    <Image
                        src="/profile/sample-black.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className='mt-4 w-24 h-24 rounded-full sm:items-center sm:flex max-w-sm mx-auto'
                    />
                    <div className="mt-4 p-6 max-w-sm mx-auto bg-slate-100 rounded-xl items-center space-x-4">
                        <div className="space-y-2">
                            <p className="text-center text-black font-semibold">
                                Username
                            </p>
                        </div>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-1/2'>
                            <p className='text-left italic mt-4 justify-content-center'>NAME</p>
                        </div>
                        <div className='w-1/2 ml-2'>
                            <p className='text-left italic mt-4 justify-content-center'>EMAIL</p>
                        </div>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-1/2 mr-2'>
                            <p>Enter Username</p>
                        </div>
                        <div className='w-1/2 ml-2'>
                            <p>Enter Email</p>
                        </div>
                    </div>
                    <p className='text-left italic mt-4 justify-content-center mb-4'>FAVORITE GENRE</p>
                    <div className="flex flex-row">
                        <button className="px-10 py-1 mr-4 text-sm text-black-600 bg-white hover:bg-black font-semibold rounded-full border hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Genre 1</button>
                        <button className="px-10 py-1 mr-4 text-sm text-black-600 bg-white hover:bg-black font-semibold rounded-full border hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Genre 1</button>
                        <button className="px-10 py-1 mr-4 text-sm text-black-600 bg-white hover:bg-black font-semibold rounded-full border hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Genre 1</button>
                    </div>
                    <p className='text-left italic mt-4 justify-content-center mb-4'>FAVORITE ACTOR</p>
                    <div className="flex flex-row">
                        <button className="px-10 py-1 mr-4 text-sm text-black-600 bg-white hover:bg-black font-semibold rounded-full border hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Genre 1</button>
                        <button className="px-10 py-1 mr-4 text-sm text-black-600 bg-white hover:bg-black font-semibold rounded-full border hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Genre 1</button>
                        <button className="px-10 py-1 mr-4 text-sm text-black-600 bg-white hover:bg-black font-semibold rounded-full border hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Genre 1</button>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button className="px-10 py-1 mr-4 text-sm text-black-600 bg-white hover:bg-black font-semibold rounded-full border hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 mt-4">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}