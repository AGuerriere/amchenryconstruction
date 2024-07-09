import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Contacts from "@/components/Contacts"
import Footer from "@/components/Footer"

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <Header white_text="Contact" black_text="Us" img="calling" />
      <div className="flex items-center justify-center ml-5 mr-5">
        <div className="w-full max-w-[1600px] items-center justify-center`">
          <main>
            <div className="flex justify-center items-center w-full lg:p-16 p-8 text-center">
              <h2>
                Contact Us for <span className="text-teal-600">Bespoke Construction</span> Services
              </h2>
            </div>
            <p className="w-full md:w-1/2 pb-5">Whether you’re looking to build a custom home from the ground up or renovate an existing property, our expert team is here to bring your vision to life. Contact us today to start the journey towards creating your perfect living space.</p>
            <Contacts />
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}