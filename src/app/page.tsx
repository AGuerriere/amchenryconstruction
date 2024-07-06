import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center ml-5 mr-5">
      <div className="w-full max-w-[1600px] items-center justify-center">
        <Navbar />
        <header className="text-white min-h-[400px] h-[calc(100vh-100px)] bg-[url('/images/header.webp')] bg-cover bg-no-repeat bg-center absolute left-0 right-0">
          <div className='bg-header-gradient h-full flex'>
            <div className="flex items-center justify-center ml-5 mr-5 w-full">
              <div className='flex flex-col justify-center w-full max-w-[1600px]'>
                <div className="bg-gradient-to-r from-cyan-800 to-teal-600 justify-start items-center gap-2.5 flex w-fit p-3">
                  <div className="text-white text-2xl font-extrabold tracking-wide ">Welcome to <span className="text-gray-900 text-2xl font-extrabold tracking-wide">A McHenry Construction </span></div>
                </div>
                <h1 className='pt-7 text-5xl leading-relaxed font-bold xl:text-7xl md:w-4/5 lg:w-3/5'>
                    Build Dreams,<span className="block leading-relaxed">One Brick at a Time</span>
                </h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
