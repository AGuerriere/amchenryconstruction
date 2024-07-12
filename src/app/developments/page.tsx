import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Developments() {
  return (
    <>
      <Navbar />
      <Header white_text="Explore our" black_text="Developments" img="workers" />
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center">
          <main>
            {/* 
            <div className="flex flex-col md:flex-row justify-between md:gap-2 lg:gap-10 mb-10">

              <div className="group md:w-1/3 bg-[url('/images/projects/dunamallaght_park/5.webp')] bg-cover bg-no-repeat bg-center">
                <div className="w-full h-[330px] hover:bg-green-gradient flex justify-center items-center text-center">
                  <div className="hidden group-hover:flex flex-col justify-center items-center">
                    <p className="text-white">Explore our</p>
                    <p className="text-white">Luxury Homes</p>
                    <div className="border-2 w-fit flex">
                      <Image src="/images/x.svg" alt="link icon" width={50} height={50} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group md:w-1/3 bg-[url('/images/projects/dunamallaght_road1/61.webp')] bg-cover bg-no-repeat bg-center">
                <div className="w-full h-[330px] hover:bg-green-gradient flex justify-center items-center text-center">
                  <div className="hidden group-hover:flex flex-col justify-center items-center">
                    <p className="text-white">Explore our</p>
                    <p className="text-white">Bespoke Homes</p>
                    <div className="border-2 w-fit flex">
                      <Image src="/images/x.svg" alt="link icon" width={50} height={50} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group md:w-1/3 bg-[url('/images/projects/dunamallaght_road2/14.webp')] bg-cover bg-no-repeat bg-center">
                <div className="w-full h-[330px] hover:bg-green-gradient flex justify-center items-center text-center">
                  <div className="hidden group-hover:flex flex-col justify-center items-center">
                    <p className="text-white">Explore our</p>
                    <p className="text-white">Family Homes</p>
                    <div className="border-2 w-fit flex">
                      <Image src="/images/x.svg" alt="link icon" width={50} height={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
 */}
            <div className="w-full flex flex-col justify-center text-center lg:p-5 md:p-3 p2 mt-10">
              <h2 id="family-homes">
                Family<span className="text-teal-600"> Homes</span>
              </h2>
              <p className="md:p-5 p-2">Our family houses are designed with modern living in mind. These homes offer a perfect balance of style, functionality, and affordability, making them ideal for growing families. We pay special attention to detail to ensure that our family homes are not only beautiful but also practical and comfortable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 lg:gap-10">
              {/* card */}
              <Link href="mill-st">
                <div className="">
                  <div className="h-[350px] bg-[url('/images/projects/mill_st/7.webp')] bg-cover bg-no-repeat bg-center flex items-end">
                    <div className="w-full h-[50px] bg-[#139FD3CC] flex p-2 justify-start items-center">
                      <p className="text-white">In Construction - 2 Left</p>
                    </div>
                  </div>
                  <div className="justify-center mt-8 text-2xl font-medium leading-10 text-[#24A8D9]">
                    Mill Street, Ballycastle,
                  </div>
                  <p><span className="font-bold text-gray-900">Location: </span>Mill St, Ballycastle, Co. Antrim</p>
                  <div className="justify-center mb-10 mt-5 w-80 max-w-full">
                    <span className="font-bold text-gray-900">Description: </span> Located in the heart of Ballycastle, this charming development features a limited number of family homes, with only 2 houses left starting at £325,000. These homes offer modern living areas, high-quality finishes, and convenient access to local amenities.
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full flex flex-col justify-center text-center lg:p-5 md:p-3 p2">
              <h2 id="luxury-homes">
                Luxury<span className="text-teal-600"> Homes</span>
              </h2>
              <p className="md:p-5 p-2">We specialize in creating luxurious homes that offer the ultimate in comfort and sophistication. Our luxury houses are designed to meet the highest standards of quality and elegance, providing a perfect sanctuary for those who appreciate the finer things in life.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 lg:gap-10">
              {/* card */}
              <Link href="dunamallaght-park">
                <div className="">
                  <div className="h-[350px] bg-[url('/images/projects/dunamallaght_park/1.webp')] bg-cover bg-no-repeat bg-center flex items-end">
                    <div className="w-full h-[50px] bg-[#FFFF007F] flex p-2 justify-start items-center">
                      <p className="text-white">Completed - Sold Out</p>
                    </div>
                  </div>
                  <div className="justify-center mt-8 text-2xl font-medium leading-10 text-[#24A8D9]">
                    Dunamallaght Park, Ballycastle,
                  </div>
                  <p><span className="font-bold text-gray-900">Location: </span>Dunamallaght Park, Ballycastle, Co. Antrim</p>
                  <div className="justify-center mb-10 mt-5 w-80 max-w-full">
                    <span className="font-bold text-gray-900">Description: </span> This luxury property in Dunamallaght Park boasts contemporary architecture and spacious interiors. Designed for those who appreciate the finer things in life, this home offers a perfect blend of comfort and elegance.
                  </div>
                </div>
              </Link>
              {/* card */}
              <Link href="dunamallaght-road2">
                <div className="">
                  <div className="h-[350px] bg-[url('/images/projects/dunamallaght_road2/3.webp')] bg-cover bg-no-repeat bg-center flex items-end">
                    <div className="w-full h-[50px] bg-[#FFFF007F] flex p-2 justify-start items-center">
                      <p className="text-white">Completed - Sold Out</p>
                    </div>
                  </div>
                  <div className="justify-center mt-8 text-2xl font-medium leading-10 text-[#24A8D9]">
                    Dunamallaght Road, Ballycastle,
                  </div>
                  <p><span className="font-bold text-gray-900">Location: </span>Dunamallaght Road, Ballycastle, Co. Antrim</p>
                  <div className="justify-center mb-10 mt-5 w-80 max-w-full">
                    <span className="font-bold text-gray-900">Description: </span> This luxury home on Dunamallaght Road is crafted to the highest standards, featuring exceptional design and superior craftsmanship. Every detail has been carefully considered to offer an unmatched living experience.
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full flex flex-col justify-center text-center lg:p-5 md:p-3 p2">
              <h2 id="bespoke-homes">
                Bespoke<span className="text-teal-600"> Homes</span>
              </h2>
              <p className="md:p-5 p-2">For clients who have a specific vision for their dream home, we offer bespoke construction services. We work closely with you from the initial concept through to the final finishing touches, ensuring that every aspect of your home is tailored to your unique needs and preferences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 lg:gap-10">
              {/* card */}
              <Link href="dunamallaght-road">
                <div className="">
                  <div className="h-[350px] bg-[url('/images/projects/dunamallaght_road1/28.webp')] bg-cover bg-no-repeat bg-center flex items-end">
                    <div className="w-full h-[50px] bg-[#FFFF007F] flex p-2 justify-start items-center">
                      <p className="text-white">Completed - Sold Out</p>
                    </div>
                  </div>
                  <div className="justify-center mt-8 text-2xl font-medium leading-10 text-[#24A8D9]">
                    Dunamallaght Road, Ballycastle, Co. Antrim
                  </div>
                  <p><span className="font-bold text-gray-900">Location: </span>Dunamallaght Road, Ballycastle, Co. Antrim</p>
                  <div className="justify-center mb-10 mt-5 w-80 max-w-full">
                    <span className="font-bold text-gray-900">Description: </span> Finished to the absolute highest standards, this luxury home on Dunamallaght Road offers exquisite design and top-tier craftsmanship. Every detail has been meticulously planned to provide an unparalleled living experience.
                  </div>
                </div>
              </Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}