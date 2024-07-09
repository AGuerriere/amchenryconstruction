import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Contacts from "@/components/Contacts"


export default function About() {
  return (
    <>
      <Navbar />
      <Header white_text="About" black_text="Us" img="warehouse" />
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center`">
          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-10 mb-16 gap-5">
              <h2 className="md:col-span-2 lg:col-span-1 text-gray-900 tracking-wide mb-5 overflow-hidden text-ellipsis">Our Story</h2>
              <div className="lg:col-span-2">
                <p className="mb-5">
                  At A McHenry Construction, a family-run business based in Ballycastle, Northern Ireland, we take pride in our over 40 years of experience in the construction industry, earning a reputation for excellence, quality, and integrity.
                </p>
                <p>
                  Founded in 1999 by Alastair McHenry, our company is now proudly led by his sons, Shane and Mark, who continue to uphold the high standards and values that have been the cornerstone of our success.                 </p>
              </div>
              <div className="lg:col-span-2">
                <p className="mb-5">
                  Alastair&apos;s vision was to create homes that not only meet but exceed client expectations, and his commitment to quality craftsmanship and attention to detail quickly set us apart in our industry.                </p>
                <p>
                  Today, Shane and Mark honour this legacy by integrating innovative ideas and modern techniques into our projects while maintaining the traditional values that have always defined our work.                </p>
                <div className="flex justify-start mt-10">
                  <Image src="/images/nhbc.webp" alt="NHBC" width={100} height={50} />
                </div>
              </div>
            </div>
            <div className="w-full bg-[url('/images/colorful-houses.webp')] bg-cover bg-no-repeat bg-center min-h-fit mb-10">
              <div className="bg-green-gradient h-full min-h-[430px] p-10 flex flex-col justify-center items-center text-center">
                <h2 className="text-white mb-5">Our <span className="text-gray-900">Team</span></h2>
                <p className="text-white mb-5">Our team is comprised of skilled professionals who are passionate about what they do. From architects and designers to builders and project managers, everyone at A McHenry  Construction shares a common goal: to deliver exceptional homes that our clients will love for years to come. We believe in fostering a collaborative environment where every team  member&apos;s expertise contributes to the success of each project.</p>

              </div>
            </div>
            <Contacts />
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}