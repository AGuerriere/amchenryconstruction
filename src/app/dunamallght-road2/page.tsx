import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import Lightbox from "@/components/Lightbox"


const images = [
  '/images/projects/dunamallaght_road2/1.webp',
  '/images/projects/dunamallaght_road2/2.webp',
  '/images/projects/dunamallaght_road2/3.webp',
  '/images/projects/dunamallaght_road2/4.webp',
  '/images/projects/dunamallaght_road2/5.webp',
  '/images/projects/dunamallaght_road2/6.webp',
  '/images/projects/dunamallaght_road2/7.webp',
  '/images/projects/dunamallaght_road2/8.webp',
  '/images/projects/dunamallaght_road2/9.webp',
  '/images/projects/dunamallaght_road2/10.webp',
  '/images/projects/dunamallaght_road2/11.webp',
  '/images/projects/dunamallaght_road2/12.webp',
  '/images/projects/dunamallaght_road2/13.webp',
  '/images/projects/dunamallaght_road2/14.webp',
  '/images/projects/dunamallaght_road2/15.webp',
  '/images/projects/dunamallaght_road2/16.webp',
  '/images/projects/dunamallaght_road2/17.webp',
  '/images/projects/dunamallaght_road2/18.webp',
  '/images/projects/dunamallaght_road2/19.webp',
];

export default function DunamallaghtRoad2() {
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
                <p>Finished to the absolute highest standards, this luxury home on Dunamallaght Road offers exquisite design and top-tier craftsmanship. Every detail has been meticulously planned to provide an unparalleled living experience.</p>
              </div>
              <div className="flex flex-col gap-5 w-full md:w-1/2">
                <h6 className="mb-5">Project info:</h6>
                <div>
                  <span className="text-xl tracking-wider leading-7 text-gray-900">
                    Location:&nbsp;
                  </span>
                  <span>
                    Dunamllaght Road, Ballycastle, Northern Ireland
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
                    1
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