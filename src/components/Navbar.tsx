'use client'

import Image from "next/image";
import { useState } from "react"
import Link from "next/link";

export default function Navbar() {
  const [hidden, toggleHidden] = useState(1)

  function triggerToggle() {
    const toggle = hidden === 1 ? 0 : 1;
    toggleHidden(toggle);
  }


  const [status, statusHidden] = useState(1)
  function showEyeConditionsSubMenu() {
    const toggle = status === 1 ? 0 : 1;
    statusHidden(toggle);
  }

  const [statusEyeTests, statusEyeTestsHidden] = useState(1)
  function showEyeTestsSubMenu() {
    const toggle = statusEyeTests === 1 ? 0 : 1;
    statusEyeTestsHidden(toggle);
  }


  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex h-[100px] md:justify-between items-center text-sm lg:text-xl pl-2 pr-2">
        <div className="">
          <Link
            href="/">
            <Image
              src="/images/logo.png"
              width={163}
              height={80}
              alt="A McHenry Construction logo"
            />
          </Link>
        </div>
        <Link href="/" className="active:text-black">Home</Link>
        <Link href="/about" className="active:text-black">About Us</Link>
        <Link href="/developments" className="active:text-black">Developments</Link>
        <Link href="/contacts" className="active:text-black">Contact Us</Link>
      </nav>

      {/* Mobile navbar closed */}
      <nav className={`${hidden === 1 ? 'flex' : 'hidden'} lg:hidden p-2 justify-between items-center h-[100px]`}>
        <Link
          href="/">
          <Image
            src="/images/logo.png"
            width={230}
            height={64}
            alt="A McHenry Construction logo"
            className="pr-5"
          />
        </Link>
        <Image
          src="/images/menu.svg"
          width={50}
          height={50}
          alt="Open Navbar"
          onClick={() => triggerToggle()}
          className=" mr-5"
        />
      </nav>
      {/* Mobile navbar open */}
      <nav className={`${hidden === 1 ? 'hidden' : 'flex'} bg-white flex-col w-[100vw] h-[100vh] pt-4 fixed top-0 left-0 z-[100] items-center text-xl`}>
        <div>
          <Link
            href="/"
            onClick={() => triggerToggle()}>
            <Image
              src="/images/logo.png"
              width={200}
              height={54}
              alt="A McHenry Construction logo"
            />
          </Link>
        </div>
        <Image
          src="/images/close.svg"
          width={20}
          height={20}
          alt="Close navbar"
          className="fixed text-teal-700 top-12 right-7"
          onClick={() => triggerToggle()}
        />
        <div className="flex flex-col h-2/5 items-center justify-between">
          <Link href="/" className="active:text-black" onClick={() => triggerToggle()}>Home</Link>
          <Link href="/about" className="active:text-black" onClick={() => triggerToggle()}>About Us</Link>
          <Link href="/developments" className="active:text-black" onClick={() => triggerToggle()}>Developments</Link>
          <Link href="/contacts" className="active:text-black" onClick={() => triggerToggle()}>Contact us</Link>
        </div>
      </nav>
    </>
  )
}