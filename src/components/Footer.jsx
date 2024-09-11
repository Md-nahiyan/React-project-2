// import React from 'react'
import logos from "../assets/images/svg-image-21.svg";
import logos1 from "../assets/images/svg-image-22.svg";
import logos2 from "../assets/images/svg-image-23.svg";

export default function Footer() {
  return (
    <div>
      <div className='w-[82%] mx-auto bg-[#1f2b37] rounded-[30px] relative'>
        <img src="https://framerusercontent.com/images/JZuLriJ7TC7r3vitihu47GM.svg?scale-down-to=1024" alt="" />

        <div className='w-[43%] mx-auto text-center absolute top-[10%] left-[50%] translate-x-[-50%]'>
          <button className='py-2 px-5 bg-[#344054] mb-7 text-[#ffffff] font-bold  shadow-sm rounded-md uppercase'>Testimonials</button>
          <h1 className='text-[55px] leading-[50px] text-[#ffffff] font-semibold'>Ready to <span className="text-[#1d60f2]">Get Started?</span></h1>
          <p className='text-[18px] text-[#ffffff] leading-[28px] my-8'>Experience the future of business operations with AI automation—increased speed, accuracy, and adaptability, driving overall productivity gains.</p>
          <a href="" className='w-[250px] h-[49px] bg-[#1a5eff] px-[24px] py-[14px] text-white font-bold text-[18px] leading-[27px] rounded-[50px]'>Book Your Free Audit Call</a>
          
        </div>

        <div className="w-[80%]  grid grid-cols-3 mx-auto  absolute top-[75%] left-[50%] translate-x-[-50%]">
            <div className="flex gap-4 mt-9">
                <div className="w-[38px] h-[38px] border border-[#ffffff] rounded-full"><img src={logos} className="w-[20px]   m-auto mt-2" alt="" /></div>
                <div className="w-[38px] h-[38px] border border-[#ffffff] rounded-full"><img src={logos1} className="w-[20px]   m-auto mt-2" alt="" /></div>
                <div className="w-[38px] h-[38px] border border-[#ffffff] rounded-full"><img src={logos2} className="w-[20px]   m-auto mt-2" alt="" /></div>
            </div>
            <div className="w-[70%] mx-auto ">
              <img src="https://framerusercontent.com/images/33ctg4SZtD9gAAbetHuuLUj6TE.png" className="w-[75px]  mx-auto my-3" alt="" />
              <p className="text-center">Build a powerful agency site with Framer.</p>
            </div>
            <div>
              <ul className="menu menu-vertical lg:menu-horizontal text-white rounded-box font-bold text-[16px] ml-[90px] mt-9">
                <li><a >About</a></li>
                <li><a>Contact</a></li>
                <li><a>Blog</a></li>
              </ul>
            </div>
        </div>
      </div>

      <div className="w-[72%] mx-auto py-10 grid grid-cols-2 text-[#1f2b37] text-[16px] font-semibold">
        <p className="">© Mont Limited 2023. All rights reserved</p>
        <a href="" className="text-right">Designed by Tanvir Ashraf</a>
      </div>
    </div>
  )
}
