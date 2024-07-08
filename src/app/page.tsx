import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

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
              <h1 className='pt-7 md:w-4/5 lg:w-3/5 text-white'>
                Build Dreams,<br></br>One Brick at a Time
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-centerz`">
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
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
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
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
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
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
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
                  alt="Picture of a house in Ballycastle built by McHenry Bros"
                  className="w-auto object-cover z-0"
                />
              </div>
              <div className="col-span-1 w-full bg-[url('/images/car.webp')] bg-cover bg-no-repeat bg-center min-h-fit ">
                <div className="bg-[#131224D9] h-full p-10">
                  <h6 className="text-white mb-5">Luxury Homes</h6>
                  <p className="text-white mb-5">Experience the pinnacle of luxury living with our exquisitely designed and meticulously  crafted homes. Perfect for those seeking the ultimate in comfort and elegance.</p>
                  <Image src="/images/button.svg" alt="link icon" width={70} height={50} />
                </div>
              </div>
              <div className="col-span-1 w-full bg-[url('/images/living-room.webp')] bg-cover bg-no-repeat bg-center min-h-fit ">
                <div className="bg-[#149696D9] h-full p-10">
                  <h6 className="text-white mb-5">Luxury Homes</h6>
                  <p className="text-white mb-5">Experience the pinnacle of luxury living with our exquisitely designed and meticulously  crafted homes. Perfect for those seeking the ultimate in comfort and elegance.</p>
                  <Image src="/images/button.svg" alt="link icon" width={70} height={50} />
                </div>
              </div>
              <div className="col-span-1 w-full bg-[url('/images/car.webp')] bg-cover bg-no-repeat bg-center min-h-fit ">
                <div className="bg-[#131224D9] h-full p-10">
                  <h6 className="text-white mb-5">Luxury Homes</h6>
                  <p className="text-white mb-5">Experience the pinnacle of luxury living with our exquisitely designed and meticulously  crafted homes. Perfect for those seeking the ultimate in comfort and elegance.</p>
                  <Image src="/images/button.svg" alt="link icon" width={70} height={50} />
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
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h6 className="mb-5">Our clientele includes</h6>
                  <ul className="list-disc list-inside">
                    <li className="mb-3">
                      <span className="text-xl tracking-wider leading-7 text-gray-900">
                        First-time Home Buyers:
                      </span>
                      <span>
                        Couples starting their journey together and looking for a beautiful,
                        affordable home.
                      </span>
                    </li>
                    <li className="mb-3">
                      <span className="text-xl tracking-wider leading-7 text-gray-900">
                        Upsizing Couples:
                      </span>
                      <span>
                        Families needing more space and seeking a high-end living
                        experience.
                      </span>
                    </li>
                    <li className="mb-3">
                      <span className="text-xl tracking-wider leading-7 text-gray-900">
                        Holiday Makers:
                      </span>
                      <span>
                        Individuals and families desiring a second home along the stunning
                        Northern Ireland coast.
                      </span>
                    </li>
                    <li className="mb-3">
                      <span className="text-xl tracking-wider leading-7 text-gray-900">
                        Retirees:
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
                <Image src="/images/button.svg" alt="link icon" width={50} height={50} />
              </div>
            </div>
            {/* Secttion 5 */}
            <div className="mb-16">
              <h2 className="md:col-span-2 lg:col-span-1 text-gray-900 tracking-wide mb-5 overflow-hidden text-ellipsis">Our Clients</h2>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2">
                  <h6 className="mb-5">Contact us</h6>
                  <ul>
                    <li className="mb-3">
                      Ready to start building your dream home?
                    </li>
                    <li className="mb-3">
                      Get in touch with us today to discuss your project.
                    </li>
                    <li className="mb-3">
                      Call <span className="text-teal-600">Shane</span> at <span className="text-teal-600">07894 401453</span><br />
                      or call <span className="text-teal-600">Mark</span> at <span className="text-teal-600">07894 401453</span>
                    </li>
                    <li>Alternatively send us an email at <span className="text-teal-600"><a href="mailto:info@amchenryconstruction.com">info@amchenryconstruction.com</a></span> .</li><br />
                    <li className="mb-3">
                      Our office: <br />
                      6 Dunamallaght Crescent,<br />
                      Ballycastle<br />
                      BT54 6PP<br />
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2">
                  <iframe
                    className="w-full h-full min-h-[300px] border-none"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277.1920094619345!2d-6.239991522618915!3d55.19740187288378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861d3e0481c799d%3A0xaf3939874646fa50!2sA%20McHenry%20Construction!5e0!3m2!1sen!2sit!4v1720470747907!5m2!1sen!2sit"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />


    </>
  );
}
