import React from 'react'

export default function Content() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-6 w-[72%] mx-auto h-[100vh]'>
        <div>
        <button className='py-2 px-5 bg-[#fefeff] text-[#1a5eff] font-bold  shadow-sm rounded-md'>CONTENT BLOCK</button>
        <h1 className='text-[55px] leading-[69px] text-[#202b38] font-bold py-10'>Workflows with our AI automation <span>expertise</span></h1>
        <p className='text-[##4e4e4e] text-[18px]'>Revolutionize tasks, reduce errors, and boost efficiency with intelligent technology, streamlining operations for unparalleled productivity.</p>
            <div className='flex gap-5'>
                <div className="form-control pt-2">
                    <label className="cursor-pointer label inline-block">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                </label>
                </div>
                <p className='pt-3 text-[3#404346]'>Functional sections</p>
            </div>
            <div className='flex gap-5 mb-10'>
                <div className="form-control pt-2">
                    <label className="cursor-pointer label inline-block">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                </label>
                </div>
                <p className='pt-3 text-[3#404346]'>Easy to customize</p>
            </div>
            <a href="" className=' w-[250px] h-[49px] bg-[#1a5eff] px-[24px] py-[14px] text-white font-bold text-[18px] leading-[27px] rounded-[50px]'>Book Your Free Audit Call</a>
        </div>

        <div>
            <img src="https://framerusercontent.com/images/RIu7ujIfc3SKq931mOnyFqKaEaY.png" alt="" />
        </div>
      </div>
    </div>
  )
}
