import React from 'react'

export default function Header() {
  return (
    <div>
        <header className=" w-[72%] h-[80px] mx-auto  py-5">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="#">
                    <span className="sr-only">Home</span>
                        <img src="https://framerusercontent.com/images/WvIxk2OsDPSdCdejZp7vMsFKbs.svg" alt="" />
                    </a>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-sm text-[#1f2c4e] ">
                        <li>
                        <a className="text-[19px] leading-[27px] font-semibold transition hover:text-gray-500/75" href="#"> Home </a>
                        </li>

                        <li>
                        <a className=" text-[19px] leading-[27px] font-semibold transition hover:text-gray-500/75" href="#"> About </a>
                        </li>

                        <li>
                        <a className="text-[19px] leading-[27px] font-semibold transition hover:text-gray-500/75" href="#"> Blogs </a>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">

                    <div className="hidden sm:flex">
                        <a
                        className="ankor rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 text-center"
                        href="#"
                        >
                        Get Started
                        </a>
                    </div>
                    </div>

                    <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-10 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </header>
    </div>
  )
}
