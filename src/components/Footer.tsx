import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#131224] p-10">
      <div className="flex flex-col md:flex-row mb-16">
        <div className="md:w-1/2">
          <h5 className="text-white">Building Dreams, <span className="text-teal-600">One Brick at a time</span></h5>
        </div>
        <div className="flex md:justify-end md:w-1/2">
          <button className="md:w-[250px] text-white bg-[#149696] p-5 h-fit">Contact Us <Image src="/images/right-arrow.svg" alt="link icon" width={20} height={15} className="inline" /></button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="flex flex-row gap-8">
            <div>
              <Image src="/images/nhbc.webp" alt="NHBC" width={100} height={50} />
            </div>
            <div>
              <Image
                src="/images/logo-white.webp"
                width={163}
                height={80}
                alt="A McHenry Construction logo"
              />
            </div>
          </div>
          <div className="flex w-[80px] justify-between mt-5 mb-5">
            <Image src="/images/facebook.webp" alt="NHBC" width={20} height={20}/>
            <Image src="/images/instagram.webp" alt="NHBC" width={20} height={20} />
          </div>
        </div>
        <div className="flex md:justify-end md:w-1/2">
          <ul className="md:w-[250px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Developments</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}