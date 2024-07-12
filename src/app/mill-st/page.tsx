import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import Lightbox from "@/components/Lightbox"

const images = [
  '/images/projects/mill_st/concepts/1.webp',
  '/images/projects/mill_st/concepts/2.webp',
  '/images/projects/mill_st/concepts/3.webp',
  '/images/projects/mill_st/concepts/4.webp',
  '/images/projects/mill_st/concepts/5.webp',
  '/images/projects/mill_st/concepts/6.webp',
  '/images/projects/mill_st/concepts/7.webp',
  '/images/projects/mill_st/concepts/8.webp',
  '/images/projects/mill_st/concepts/9.webp',
  '/images/projects/mill_st/1.webp',
  '/images/projects/mill_st/2.webp',
  '/images/projects/mill_st/3.webp',
  '/images/projects/mill_st/4.webp',
  '/images/projects/mill_st/5.webp',
  '/images/projects/mill_st/6.webp',
  '/images/projects/mill_st/7.webp',
  '/images/projects/mill_st/8.webp',
  '/images/projects/mill_st/9.webp',
  '/images/projects/mill_st/10.webp',
  '/images/projects/mill_st/11.webp',
  '/images/projects/mill_st/12.webp',
  '/images/projects/mill_st/13.webp',
  '/images/projects/mill_st/14.webp',
  '/images/projects/mill_st/15.webp',
  '/images/projects/mill_st/16.webp',
  '/images/projects/mill_st/17.webp',
  '/images/projects/mill_st/18.webp',
  '/images/projects/mill_st/19.webp',
  '/images/projects/mill_st/20.webp',
  '/images/projects/mill_st/21.webp',
  '/images/projects/mill_st/22.webp',
  '/images/projects/mill_st/23.webp',
  '/images/projects/mill_st/24.webp',
  '/images/projects/mill_st/25.webp',
  '/images/projects/mill_st/26.webp',
  '/images/projects/mill_st/27.webp',
  '/images/projects/mill_st/28.webp',
  '/images/projects/mill_st/29.webp',
  '/images/projects/mill_st/30.webp',
  '/images/projects/mill_st/31.webp',
  '/images/projects/mill_st/32.webp',
  '/images/projects/mill_st/33.webp',
  '/images/projects/mill_st/34.webp',
  '/images/projects/mill_st/35.webp',
  '/images/projects/mill_st/36.webp',
  '/images/projects/mill_st/37.webp',
];

export default function MillSt() {
  return (
    <>
      <Navbar />
      <Header white_text="Dunamallaght" black_text="Park" img="projects/dunamallaght_park/1" />
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center">
          <main>
            <div className="flex flex-col md:flex-row mt-10 mb-10 gap-10">
              <div className="flex flex-col gap-5 w-full md:w-1/2">
                <Link href="/developments"><div className="flex flex-row"><Image src="/images/left-arrow.svg" alt="back button" width={15} height={15} /><p className="text-teal-600 pl-3">return to developments</p></div></Link>
                <h6 className="mb-5">Description</h6>
                <p>Located in the heart of Ballycastle, this charming development features a limited number of family homes, with only three houses left starting at £325,000. These homes offer modern living areas, high-quality finishes, and convenient access to local amenities.</p>
              </div>
              <div className="flex flex-col gap-5 w-full md:w-1/2">
                <h6 className="mb-5">Project info:</h6>
                <div>
                  <span className="text-xl tracking-wider leading-7 text-gray-900">
                    Location:&nbsp;
                  </span>
                  <span>
                    Mill Street, Ballycastle, Northern Ireland
                  </span>
                </div>
                <div>
                  <span className="text-xl tracking-wider leading-7 text-gray-900">
                    Property type:&nbsp;
                  </span>
                  <span>
                    Residential
                  </span>
                </div>
                <div>
                  <span className="text-xl tracking-wider leading-7 text-gray-900">
                    No. of units:&nbsp;
                  </span>
                  <span>
                    4
                  </span>
                </div>
                <div>
                  <span className="text-xl tracking-wider leading-7 text-gray-900">
                    Status:&nbsp;
                  </span>
                  <span>
                    Completed
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <Lightbox images={images} />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}