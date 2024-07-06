import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="text-white min-h-[400px] h-[calc(100vh-100px)] bg-[url('/images/header.webp')] bg-cover bg-no-repeat bg-center">
        <div className='bg-header-gradient h-full flex items-center'>
          <div className='flex pl:14 flex-col justify-center h-ful w-full items-center'>
            <h1 className='p-7 text-center text-5xl font-bold leading-normal xl:text-7xl md:w-4/5 lg:w-3/5'>
              Build Dreams,<br></br>One Brick at a Time
            </h1>
          </div>
        </div>
      </header>
    </>
  );
}
