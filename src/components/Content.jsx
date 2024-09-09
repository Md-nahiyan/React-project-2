import React from 'react'
import logo from '../assets/images/svg-image-17.jpg';
export default function Content() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-8 w-[72%] mx-auto h-[100vh] pt-[160px]'>
        <div>
        <button className='py-2 px-5 bg-[#fefeff] text-[#1a5eff] font-bold  shadow-sm rounded-md'>CONTENT BLOCK</button>
        <h1 className='text-[55px] leading-[69px] text-[#202b38] font-bold py-10'>Workflows with our AI automation <span>expertise</span></h1>
        <p className='text-[#414244] text-[19px] font-bold'>Revolutionize tasks, reduce errors, and boost efficiency with intelligent technology, streamlining operations for unparalleled productivity.</p>
            <div className='flex gap-5'>
                <div className="form-control pt-2">
                    <label className="cursor-pointer label inline-block">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                </label>
                </div>
                <p className='pt-3 text-[#414244] font-bold'>Functional sections</p>
            </div>
            <div className='flex gap-5 mb-10'>
                <div className="form-control pt-2">
                    <label className="cursor-pointer label inline-block">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                </label>
                </div>
                <p className='pt-3 text-[#414244] font-bold'>Easy to customize</p>
            </div>
            <a href="" className=' w-[250px] h-[49px] bg-[#1a5eff] px-[24px] py-[14px] text-white font-bold text-[18px] leading-[27px] rounded-[50px]'>Book Your Free Audit Call</a>
        </div>

        <div>
            <img src="https://framerusercontent.com/images/RIu7ujIfc3SKq931mOnyFqKaEaY.png" alt="" />
        </div>
      </div>


      <div className='bg-[#f6f6f6]  w-[72%] mx-auto h-[100vh]'>
        <div className='grid grid-cols-2 gap-5'>
            <div>
                <img src="https://framerusercontent.com/images/cbIdsCeoBI32SK33j3fHyQ7Fb4.png?scale-down-to=512" alt="image" />
            </div>

            <div className=''>
                <button className='py-2 px-5 bg-[#fefeff] mb-10 text-[#1a5eff] font-bold  shadow-sm rounded-md'>CONTENT BLOCK</button>
                <h1  className='mb-7 text-[55px] leading-[69px] text-[#202b38] font-bold'>Harnessing AI for business success</h1>

                <div className=' flex gap-5 items-center w-[580px] h-[90px] rounded-[20px] border border-spacing-1 hover:bg-[#1A5EFF] content'>
                    <i className="fa-solid fa-bars w-[63px] h-[63px] ml-3 my-2 bg-white text-center pt-4 text-[#295ed4] text-[30px] rounded-lg"></i>
                    <p className='w-[370px] items-center text-[#323232] text-[20px] leading-6 font-bold hover:text-white'>Boosts efficiency and cuts cost with AI powered automation </p>
                    <i className="fa-solid fa-arrow-right rounded-full text-[#000000] border border-[#000000] w-[48px] h-[48px] ml-4  bg-white text-center pt-3.5 text-[20px]"></i>
                </div>

                <div className=' flex gap-5 items-center w-[580px] h-[90px] rounded-[20px] border border-spacing-1 mt-5 hover:bg-[#1A5EFF] content hover:cursor-pointer'>
                    <img src={logo} alt="" className='w-[63px] h-[63px] ml-3 my-2 bg-white text-center pt-4 text-[#295ed4] text-[30px] rounded-lg'/>
                    <p className='w-[370px] items-center text-[#323232] text-[20px] leading-6 font-bold hover:text-white'>optimize operations, minimize error, and save resources </p>
                    <i className="fa-solid fa-arrow-right rounded-full text-[#000000] border border-[#000000] w-[48px] h-[48px] ml-4  bg-white text-center pt-3.5 text-[20px]"></i>
                </div>

                <p className='my-10 text-[20px] leading-[27px] font-semibold text-[#5f5f5f]'>“Couldn’t be happier with the work the guys from XYZ Agency did for us. Made sales 10x more efficient.”</p>

                <div className='flex gap-5'>
                    <img src="https://framerusercontent.com/images/G3MEsoXQjALKfj8Ya1mIWgFMuc.jpg?scale-down-to=1024" className='w-[100px] h-[100px] rounded-full bg-cover bg-center bg-no-repeat ' alt="" />
                    <div className='mt-3'>
                        <p className='text-[#5f5f5f] text-[18px] font-bold'>William James</p>
                        <p className='text-[#000000] text-[18px mt-4]'>CEO, XYZ Company</p>
                    </div>
                </div>
            </div>
            

        </div>
      </div>
    </div>
  )
}
