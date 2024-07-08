import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center">
          <Navbar />
        </div>
      </div>
      <header className="text-white min-h-[400px] h-[calc(100vh-100px)] bg-[url('/images/header.webp')] bg-cover bg-no-repeat bg-center">
        <div className='bg-header-gradient h-full flex'>
          <div className="flex items-center justify-center ml-5 mr-5 w-full">
            <div className='flex flex-col justify-center w-full max-w-[1600px]'>
              <div className="bg-gradient-to-r from-cyan-800 to-teal-600 justify-start items-center gap-2.5 flex w-fit p-3">
                <div className="text-white text-2xl font-extrabold tracking-wide ">Welcome to <span className="text-gray-900 text-2xl font-extrabold tracking-wide">A McHenry Construction </span></div>
              </div>
              <h1 className='pt-7 text-5xl leading-relaxed font-bold xl:text-7xl md:w-4/5 lg:w-3/5 text-white'>
                Build Dreams,<span className="block leading-relaxed font-bold text-white xl:text-7xl text-5xl">One Brick at a Time</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-centerz`">
          <main>
            {/* About Us Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-10 mb-10 gap-5">
              <h3 className="md:col-span-2 lg:col-span-1 text-gray-900 text-[40px] font-extrabold leading-[60px] tracking-wide mb-5 overflow-hidden text-ellipsis">About Us</h3>
              <div className="lg:col-span-2">
                <p className="mb-5">
                  At A McHenry Construction, we have been transforming visions into reality for over 30  years. Based in the heart of Ballycastle, Northern Ireland, our family-run company, founded  by Alastair McHenry in 1999, continues to uphold a tradition of excellence under the  leadership of his sons, Shane and Mark.
                </p>
                <p>
                  We specialise in crafting Luxury Houses, Family  Houses, and bespoke homes, ensuring that every project is completed with the highest quality and finest finishing.
                </p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-teal-600 mb-5">
                  From our humble beginnings, we have grown into a trusted name in the construction industry. Our reputation is built on a commitment to quality, attention to detail, and a passion for  delivering homes that exceed expectations.
                </p>
                <p>
                  Whether you are looking for your first home, a  luxurious retreat, or a bespoke property tailored to your needs, A McHenry Construction is  here to bring your vision to life.
                </p>
                <div className="flex justify-start mt-10">
                  <Image src="/images/nhbc.webp" alt="NHBC" width={100} height={50} />
                </div>
              </div>
            </div>

            {/* Why choose A McHnery Construction */}
            {/* Gradient bar */}
            <div className="bg-gradient-to-r from-cyan-800 to-teal-600 items-center gap-2.5 flex w-full p-3 justify-center mb-10">
              <div className="text-white text-2xl font-extrabold tracking-wide">Why choose <span className="text-gray-900 text-2xl font-extrabold tracking-wide">A McHenry Construction </span></div>
            </div>
            {/* 3 Cards */}
            <div className="flex flex-col md:flex-row justify-between gap-10">
              {/* card */}
              <div className="md:w-1/3">
                <div className="w-full relative h-[430px]">
                  <Image
                    src="/images/workers.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="justify-center mt-8 text-2xl font-medium leading-10 text-gray-900">
                  Expertise and Experience
                </div>
                <div className="justify-center mt-5 w-80 max-w-full">
                  With decades of experience and a team of skilled professionals, we
                  deliver unparalleled craftsmanship.
                </div>
              </div>
              {/* card */}
              <div className="md:w-1/3">
                <div className="w-full relative h-[430px]">
                  <Image
                    src="/images/staircase.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="justify-center mt-8 text-2xl font-medium leading-10 text-gray-900">
                  Quality and Precision
                </div>
                <div className="justify-center mt-5 w-80 max-w-full">
                  We use the finest materials and the latest construction techniques to ensure every home is built to perfection.
                </div>
              </div>
              {/* card */}
              <div className="md:w-1/3">
                <div className="w-full relative h-[430px]">
                  <Image
                    src="/images/family.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="justify-center mt-8 text-2xl font-medium leading-10 text-gray-900">
                Personalised Service
                </div>
                <div className="justify-center mt-5 w-80 max-w-full">
                Our family-run business means we treat  every project with the care and attention it deserves, providing a  personalised touch that larger firms can&apos;t match
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>


    </>
  );
}
