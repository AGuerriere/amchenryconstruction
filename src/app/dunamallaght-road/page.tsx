import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import Lightbox from "@/components/Lightbox"

const images = [
  '/images/projects/dunamallaght_road1/1.webp',
  '/images/projects/dunamallaght_road1/2.webp',
  '/images/projects/dunamallaght_road1/3.webp',
  '/images/projects/dunamallaght_road1/4.webp',
  '/images/projects/dunamallaght_road1/5.webp',
  '/images/projects/dunamallaght_road1/6.webp',
  '/images/projects/dunamallaght_road1/7.webp',
  '/images/projects/dunamallaght_road1/8.webp',
  '/images/projects/dunamallaght_road1/9.webp',
  '/images/projects/dunamallaght_road1/10.webp',
  '/images/projects/dunamallaght_road1/11.webp',
  '/images/projects/dunamallaght_road1/12.webp',
  '/images/projects/dunamallaght_road1/13.webp',
  '/images/projects/dunamallaght_road1/14.webp',
  '/images/projects/dunamallaght_road1/15.webp',
  '/images/projects/dunamallaght_road1/16.webp',
  '/images/projects/dunamallaght_road1/17.webp',
  '/images/projects/dunamallaght_road1/18.webp',
  '/images/projects/dunamallaght_road1/19.webp',
  '/images/projects/dunamallaght_road1/20.webp',
  '/images/projects/dunamallaght_road1/21.webp',
  '/images/projects/dunamallaght_road1/22.webp',
  '/images/projects/dunamallaght_road1/23.webp',
  '/images/projects/dunamallaght_road1/24.webp',
  '/images/projects/dunamallaght_road1/25.webp',
  '/images/projects/dunamallaght_road1/26.webp',
  '/images/projects/dunamallaght_road1/27.webp',
  '/images/projects/dunamallaght_road1/28.webp',
  '/images/projects/dunamallaght_road1/29.webp',
  '/images/projects/dunamallaght_road1/30.webp',
  '/images/projects/dunamallaght_road1/31.webp',
  '/images/projects/dunamallaght_road1/32.webp',
  '/images/projects/dunamallaght_road1/33.webp',
  '/images/projects/dunamallaght_road1/34.webp',
  '/images/projects/dunamallaght_road1/35.webp',
  '/images/projects/dunamallaght_road1/36.webp',
  '/images/projects/dunamallaght_road1/37.webp',
  '/images/projects/dunamallaght_road1/38.webp',
  '/images/projects/dunamallaght_road1/39.webp',
  '/images/projects/dunamallaght_road1/40.webp',
  '/images/projects/dunamallaght_road1/41.webp',
  '/images/projects/dunamallaght_road1/42.webp',
  '/images/projects/dunamallaght_road1/43.webp',
  '/images/projects/dunamallaght_road1/44.webp',
  '/images/projects/dunamallaght_road1/45.webp',
  '/images/projects/dunamallaght_road1/46.webp',
  '/images/projects/dunamallaght_road1/47.webp',
  '/images/projects/dunamallaght_road1/48.webp',
  '/images/projects/dunamallaght_road1/49.webp',
  '/images/projects/dunamallaght_road1/50.webp',
  '/images/projects/dunamallaght_road1/51.webp',
  '/images/projects/dunamallaght_road1/52.webp',
  '/images/projects/dunamallaght_road1/53.webp',
  '/images/projects/dunamallaght_road1/54.webp',
  '/images/projects/dunamallaght_road1/55.webp',
  '/images/projects/dunamallaght_road1/56.webp',
  '/images/projects/dunamallaght_road1/57.webp',
  '/images/projects/dunamallaght_road1/58.webp',
  '/images/projects/dunamallaght_road1/59.webp',
  '/images/projects/dunamallaght_road1/60.webp',
  '/images/projects/dunamallaght_road1/61.webp',
  '/images/projects/dunamallaght_road1/62.webp',
  '/images/projects/dunamallaght_road1/63.webp',
  '/images/projects/dunamallaght_road1/64.webp',
  '/images/projects/dunamallaght_road1/65.webp',
  '/images/projects/dunamallaght_road1/66.webp',
  '/images/projects/dunamallaght_road1/67.webp',
  '/images/projects/dunamallaght_road1/68.webp',
];

export default function DunamallaghtRoad() {
  return (
    <>
      <Navbar />
      <Header white_text="Dunamallaght" black_text="Road" img="projects/dunamallaght_road1/10" />
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center">
          <main>
            <div className="flex flex-col md:flex-row mt-10 mb-10 gap-10">
              <div className="flex flex-col gap-5 w-full md:w-1/2">
                <Link href="/developments"><div className="flex flex-row"><Image src="/images/left-arrow.svg" alt="back button" width={15} height={15} /><p className="text-teal-600 pl-3">return to developments</p></div></Link>
                <h6 className="mb-5">Description</h6>
                <p>Finished to the absolute highest standards, this luxury home on Dunamallaght Road offers exquisite design and top-tier  craftsmanship. Every detail has been meticulously planned to  provide an unparalleled living experience.</p>
              </div>
              <div className="flex flex-col gap-5 w-full md:w-1/2">
                <h6 className="mb-5">Project Info:</h6>
                <div>
                  <span className="text-xl tracking-wider leading-7 text-gray-900">
                    Location:&nbsp;
                  </span>
                  <span>
                    Dunamallaght Road, Ballycastle, Northern Ireland
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
                    2
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
              <Lightbox images={images}/>
            </div>
          </main>
        </div>
      </div>

      <Footer />

    </>
  )
}