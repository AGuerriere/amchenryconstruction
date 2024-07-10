import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Developments() {
  return (
    <>
      <Navbar />
      <Header white_text="Our" black_text="Developments" img="workers" />
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center">
          <main>
            <div className="w-full flex flex-col justify-center text-center p-10">
              <h2>
                Explore our<span className="text-teal-600"> Developments</span>
              </h2>
              <p className="p-10">At A McHenry Construction, we take pride in our diverse range of projects that cater to different lifestyles and needs. Explore our developments to find the perfect home for you.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:gap-2 lg:gap-10 mb-10">
              {/* card */}
              <div className="group md:w-1/3 bg-[url('/images/projects/dunamallaght_park/5.webp')] bg-cover bg-no-repeat bg-center">
                <div className="w-full h-[330px] hover:bg-green-gradient flex justify-center items-center text-center">
                  <div className="hidden group-hover:block">
                    <p className="text-white">Explore our</p>
                    <p className="text-white">Luxury Homes</p>
                  </div>
                </div>
              </div>
              {/* card */}
              <div className="group md:w-1/3 bg-[url('/images/projects/dunamallaght_road1/61.webp')] bg-cover bg-no-repeat bg-center">
                <div className="w-full h-[330px] hover:bg-green-gradient flex justify-center items-center text-center">
                  <div className="hidden group-hover:block">
                    <p className="text-white">Explore our</p>
                    <p className="text-white">Bespoke Homes</p>
                  </div>
                </div>
              </div>
              {/* card */}
              <div className="group md:w-1/3 bg-[url('/images/projects/dunamallaght_road2/14.webp')] bg-cover bg-no-repeat bg-center">
                <div className="w-full h-[330px] hover:bg-green-gradient flex justify-center items-center text-center">
                  <div className="hidden group-hover:block">
                    <p className="text-white">Explore our</p>
                    <p className="text-white">Family Homes</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}