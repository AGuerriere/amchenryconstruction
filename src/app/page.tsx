import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import GradientTitle from "@/components/GradientTitle";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="text-white min-h-[400px] h-[calc(100vh-100px)] bg-[url('/images/header.webp')] bg-cover bg-no-repeat bg-center">
        <div className='bg-header-gradient h-full flex'>
          <div className="flex items-center justify-center ml-5 mr-5 w-full">
            <div className='flex flex-col justify-center w-full max-w-[1600px]'>
              <GradientTitle whiteText="Welcome to " blackText="A. McHenry Construction" />
              <h1 className='pt-7 md:w-4/5 lg:w-3/5 text-white'>
                Build Dreams,<br></br>One Brick at a Time
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center`">
          <main>
            {/* About Us Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-10 mb-16 gap-5">
              <h2 className="md:col-span-2 lg:col-span-1 text-gray-900 tracking-wide mb-5 overflow-hidden text-ellipsis">About Us</h2>
              <div className="lg:col-span-2">
                <p className="mb-5">
                  At A. McHenry Construction, we have been transforming visions into reality for over 40  years. Based in the heart of Ballycastle, Co.Antrim, our family-run company, founded  by Alastair McHenry in the 80s, continues to uphold a tradition of excellence under the  leadership of his sons, Shane and Mark.
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
            {/* Section 1*/}
            <div className="flex flex-col md:flex-row justify-between md:gap-2 lg:gap-10 mb-10">
              {/* card */}
              <div className="md:w-1/3">
                <div className="w-full relative h-[430px]">
                  <Image
                    src="/images/workers.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by A McHenry Constructions"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="justify-center mt-8 text-2xl font-medium leading-10 text-gray-900">
                  Expertise and Experience
                </div>
                <div className="justify-center mb-10 mt-5 w-80 max-w-full">
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
                    alt="Picture of a house in Ballycastle built by A McHenry Constructions"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="justify-center mt-8 text-2xl font-medium leading-10 text-gray-900">
                  Quality and Precision
                </div>
                <div className="justify-center mb-10 mt-5 w-80 max-w-full">
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
                    alt="Picture of a house in Ballycastle built by A McHenry Constructions"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="justify-center mt-8 text-2xl font-medium leading-10 text-gray-900">
                  Personalised Service
                </div>
                <div className="justify-center mb-10 mt-5 w-80 max-w-full">
                  Our family-run business means we treat  every project with the care and attention it deserves, providing a  personalised touch that larger firms can&apos;t match
                </div>
              </div>
            </div>
            {/* Section 2*/}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-16">
              <div className="col-span-1 md:col-span-3 lg:col-span-2 w-full relative min-h-[430px]">
                <Image
                  src="/images/kitchen.webp"
                  fill
                  sizes="100%"
                  alt="Picture of a house in Ballycastle built by A McHenry Constructions"
                  className="w-auto object-cover z-0"
                />
              </div>
              <div className="col-span-1 w-full bg-[url('/images/car.webp')] bg-cover bg-no-repeat bg-center min-h-fit ">
                <div className="bg-[#131224D9] min-h-h-full p-10 flex flex-col justify-between h-full">
                  <div>
                    <h6 className="text-white mb-5">Family Homes</h6>
                    <p className="text-white mb-5">Affordable yet stylish, our family homes are designed with modern living in mind. These houses provide a perfect balance of functionality and beauty for growing families.</p>
                  </div>
                  <a href="https://www.amchenryconstruction.com/developments#family-homes" className="self-center mt-auto">
                    <img src="/images/button.svg" alt="link icon" width="70" height="50" />
                  </a>
                </div>
              </div>

              <div className="col-span-1 w-full bg-[url('/images/living-room.webp')] bg-cover bg-no-repeat bg-center min-h-fit ">
                <div className="bg-[#149696D9] min-h-h-full p-10 flex flex-col justify-between h-full">
                  <div>
                    <h6 className="text-white mb-5">Luxury Homes</h6>
                    <p className="text-white mb-5">Experience the pinnacle of luxury living with our exquisitely designed and meticulously crafted homes. Perfect for those seeking the ultimate in comfort and elegance.</p>
                  </div>
                  <a href="https://www.amchenryconstruction.com/developments#luxury-homes" className="self-center mt-auto">
                    <img src="/images/button.svg" alt="link icon" width="70" height="50" />
                  </a>
                </div>
              </div>

              <div className="col-span-1 w-full bg-[url('/images/car.webp')] bg-cover bg-no-repeat bg-center min-h-fit ">
                <div className="bg-[#131224D9] min-h-h-full p-10 flex flex-col justify-between h-full">
                  <div>
                    <h6 className="text-white mb-5">Bespoke Homes</h6>
                    <p className="text-white mb-5">Do you have a specific vision for your dream home? We offer bespoke construction services, working closely with you to create a home that reflects your unique style and requirements.</p>
                  </div>
                  <a href="https://www.amchenryconstruction.com/developments#bespoke-homes" className="self-center mt-auto">
                    <img src="/images/button.svg" alt="link icon" width="70" height="50" />
                  </a>
                </div>
              </div>
            </div>
            {/* Secttion 3 */}
            <div className="mb-16">
              <h2 className="md:col-span-2 lg:col-span-1 text-gray-900 tracking-wide mb-5 overflow-hidden text-ellipsis">Our Clients</h2>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="w-full relative min-h-[380px] lg:w-1/2">
                  <Image
                    src="/images/planning.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by A McHenry Constructions"
                    className="w-auto object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h6 className="mb-5">Our clientele includes</h6>
                  <ul className="list-disc list-inside">
                    <li className="mb-3">
                      <span className="text-xl tracking-wider leading-7 text-gray-900">
                        First-time Home Buyers:&nbsp;
                      </span>
                      <span>
                        Couples starting their journey together and looking for a beautiful,
                        affordable home.
                      </span>
                    </li>
                    <li className="mb-3">
                      <span className="text-xl tracking-wider leading-7 text-gray-900">
                        Upsizing Couples:&nbsp;
                      </span>
                      <span>
                        Families needing more space and seeking a high-end living
                        experience.
                      </span>
                    </li>
                    <li className="mb-3">
                      <span className="text-xl tracking-wider leading-7 text-gray-900">
                        Holiday Makers:&nbsp;
                      </span>
                      <span>
                        Individuals and families desiring a second home along the stunning
                        Northern Ireland coast.
                      </span>
                    </li>
                    <li className="mb-3">
                      <span className="text-xl tracking-wider leading-7 text-gray-900">
                        Retirees:&nbsp;
                      </span>
                      <span>
                        Those looking to downsize or upsize, finding the perfect place to
                        enjoy their retirement.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Section 4 */}
            <div className="w-full bg-[url('/images/colorful-houses.webp')] bg-cover bg-no-repeat bg-center min-h-fit mb-10">
              <div className="bg-green-gradient h-full p-10 flex flex-col justify-center items-center">
                <h2 className="text-white mb-5">Our <span className="text-gray-900">Portfolio</span></h2>
                <p className="text-white mb-5">Take a look at some of our completed projects to see the quality and craftsmanship that  define A McHenry Construction.</p>
                <a href="https://www.amchenryconstruction.com/developments#" className="self-center mt-auto"><Image src="/images/button.svg" alt="link icon" width={50} height={50} /></a>
              </div>
            </div>
            {/* Secttion 5 */}
            <Contacts />
          </main>
        </div>
      </div>
      <Footer />


    </>
  );
}
