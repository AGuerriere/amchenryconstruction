import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import DevelopmentCard from "@/components/DevelopmentCard"

export default function Developments() {
  return (
    <>
      <Navbar />
      <Header white_text="Explore our" black_text="Developments" img="workers" />
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center">
          <main className="mb-10">
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
                <DevelopmentCard
                  imagePath="/images/projects/mill_st/7.webp"
                  noticeColor="#139FD3CC"
                  noticeContent="In Construction - 2 Left"
                  location="Mill St, Ballycastle, Co. Antrim"
                />
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
                <DevelopmentCard
                  imagePath="/images/projects/dunamallaght_park/1.webp"
                  noticeColor="#FFFF007F"
                  noticeContent="Completed - Sold Out"
                  location="Dunamallaght Park, Ballycastle, Co. Antrim"
                />
              </Link>
              {/* card */}
              <Link href="dunamallaght-road2">
                <DevelopmentCard
                  imagePath="/images/projects/dunamallaght_road2/3.webp"
                  noticeColor="#FFFF007F"
                  noticeContent="Completed - Sold Out"
                  location="Dunamallaght Road, Ballycastle, Co. Antrim"
                />
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
                <DevelopmentCard
                  imagePath="/images/projects/dunamallaght_road1/28.webp"
                  noticeColor="#FFFF007F"
                  noticeContent="Completed - Sold Out"
                  location="Dunamallaght Road, Ballycastle, Co. Antrim"
                />
              </Link>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}