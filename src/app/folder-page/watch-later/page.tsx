import Image from 'next/image';

export default function ProfilePage() {
    return (

        <div className='flex'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            {/* left navbar */}
            <div className='w-1/4 h-screen bg-[#B3B3B3]'>
                <a href='http://localhost:3001/folder-page' className='flex w-full h-14 mt-16 justify-center items-center'>
                    <i className='left-4 text-2xl absolute bx bxs-user'></i>
                    <p className=''>USER INFO</p>
                </a>
                <a href='http://localhost:3001/folder-page/favorite' className='flex w-full h-14 my-4 justify-center items-center'>
                    <i className='left-4 text-2xl absolute bx bxs-heart'></i>
                    <p className=''>FAVORITE</p>
                </a>
                <a href='http://localhost:3001/folder-page/watch-later' className='flex w-full h-14 my-4 bg-[#555555] justify-center items-center'>
                    <i className='left-4 text-2xl absolute bx bxs-star'></i>
                    <p className=''>WATCH LATER</p>
                </a>
            </div>

            <div className='w-full h-auto'>
                <div className="relative z-10 flex space-x-4 mt-16 ml-20">
                    <div className="flex flex-col ">
                        <div className="box-content w-40 h-48 sm:w-48 sm:h-52 md:w-52 md:h-64 shadow-xl bg-[#B3B3B3] rounded-md transition-transform duration-300 ease-in-out hover:scale-105">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}