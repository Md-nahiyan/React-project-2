import React from 'react'
// import ScroollImage from './ScroollImage'
// import ScroollImage from './ScroollImage'

export default function Bottom() {
  return (
    <div className=' w-[72%]  mx-auto'>
      <div className='text-center'>
          <h1 className='text-[80px] leading-[85px] text-center font-bold text-[#1e2832] mt-[80px] mx-[140px]'>Save time &
              work smarter 
               with AI Automation
            </h1>
            <p className='w-[500px] mx-auto mt-[20px] font-semibold text-[#424244] text-[18px] leading-[27px] font-inter mb-10'>We help you automate your workflows, automate repetitive tasks, and elevate your business.</p>
            <a href="" className='w-[250px] h-[49px] bg-[#1a5eff] px-[24px] py-[14px] text-white font-bold text-[18px] leading-[27px] rounded-[50px]'>Book Your Free Audit Call</a>

              <div className='grid grid-cols-2 w-[25%] mt-[50px] mx-auto'>
                <div className="avatar-group -space-x-6 rtl:space-x-reverse  ">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://framerusercontent.com/images/sFJggTzla8eMLg8n1AbKDQlyulU.jpg?scale-down-to=1024" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://framerusercontent.com/images/JhbGle453RWF0QjzZnSxbtxRBiA.jpg?scale-down-to=512" />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content w-12">
                      <span>+99</span>
                    </div>
                  </div>
                </div>
                   <div>
                     <a href="" className='text-black text-[18px] leading-[27px] font-semibold'>200+ Happy Client!</a><br/>
                     <a href=""  className='text-black text-[18px] leading-[27px] font-semibold mb-5'>Join them now</a>
                   </div>
              </div>
        </div>


        <div className='w-full px-8 py-10'>
          <iframe className='rounded-[40px]' width="100%" height="676" src="https://www.youtube.com/embed/QbFT7EnofZw" title="Customizing the Rio Template - AI Automation Agency Website Template" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>

        {/* <ScroollImage/> */}
    </div>
  )
}
