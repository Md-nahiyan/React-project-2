import React from 'react'
import { useRef, useEffect, } from 'react';
import logo from '../assets/images/svg-image-24.svg';
import logo1 from '../assets/images/svg-image-25.svg';
import logo2 from '../assets/images/svg-image-26.svg';
import logo3 from '../assets/images/svg-image-27.svg';

export default function Bottom() {

  const logosRef = useRef(null);
  
  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className=' w-[72%]  mx-auto'>
      <div className='text-center'>
          <h1 className='text-[70px] leading-[85px] text-center font-bold text-[#1e2832] mt-[80px] mx-[110px]'>Save time &
             <span className='text-[#2159ff]'> work smarter <br/></span> 
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

        <p className='text-center font-semibold text-[#414244] text-[18px] leading-[27px] font-inter mb-10'>Trusted by 40+ worldwide clients</p>

        <div>
            <div className="relative font-inter antialiased ">
              <main className="relative flex flex-col justify-center  overflow-hidden">
                <div className="w-full  mx-auto px-4 md:px-6 py-10">
                  <div className="text-center">
    
                  {/* Logo Carousel Animation */}
                  <div
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                  >
                    <ul
                      ref={logosRef}
                      className="flex items-center justify-center gap-7 md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                    >

                      <li>
                          <img src={logo}  alt="" />
                       </li>


                        <li >
                          <img src={logo1}  alt="" />
                       </li>

                        <li >
                          <img src={logo2}  alt="" />
                       </li>

                        <li >
                          <img src={logo3}  alt="" />
                       </li>


                        <li >
                          <img src={logo}  alt="" />
                       </li>

                        <li >
                          <img src={logo1}  alt="" />
                       </li>


                        <li >
                          <img src={logo2}  alt="" />
                       </li>


                        <li >
                          <img src={logo3}  alt="" />
                       </li>
                    </ul>
                  </div>
                  {/* End: Logo Carousel Animation */}
      
                </div>
              </div>
            </main>
            
          </div>
        </div>
        {/* <ScroollImage/> */}
    </div>
  )
}
