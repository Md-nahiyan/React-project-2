import React from 'react'

export default function Services() {
  return (
    <div>
      <div className='w-[73%] mx-auto h-[100vh] pt-10'>
        <div className='text-center w-[50%] mx-auto'>
            <button className='py-2 px-5 bg-[#fefeff] text-[#1a5eff] font-bold  shadow-sm rounded-md'>SERVICES</button>
            <h1 className='text-[#222a39] text-[55px] mt-5 leading-[65px] font-bold'><span className='text-[#185fff]'>AI-powered</span> automation services</h1>
        </div>

        <div className='grid grid-cols-2 gap-5 mt-10'>
            <div className='bg-white p-8 rounded-xl'>
            <i className="fa-regular fa-comments text-[50px]"></i>

                <h3  className='pt-9 text-[25px] text-[#202b38] font-bold'>Customer Support Chatbots</h3>
                <p className='pt-4 pb-5 text-[18px] text-[#a4a5a3]'>Streamline operations and enhance productivity with AI-driven automation.</p>
                <a href="" className='text-[#1a5eff] capitalize text-[19px] font-bold'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className='bg-white p-8 rounded-xl'>
                <img  src="https://pb2-production.s3.amazonaws.com/production/uploads/content/image/landing_how_it_works_column_3/launch.png" alt="" />

                <h3  className='pt-9 text-[25px] text-[#202b38] font-bold'>Customer Support Chatbots</h3>
                <p className='pt-4 pb-5 text-[18px] text-[#a4a5a3]'>Streamline operations and enhance productivity with AI-driven automation.</p>
                <a href="" className='text-[#1a5eff] capitalize text-[19px] font-bold'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

             <div className='bg-white p-8 rounded-xl'>
                <img src="https://th.bing.com/th/id/OIP.LpwUX6zNyrh-iiCqokoeKQAAAA?w=50&h=50&rs=1&pid=ImgDetMain" alt="" />
                <h3  className='pt-9 text-[25px] text-[#202b38] font-bold'>Customer Support Chatbots</h3>
                <p className='pt-4 pb-5 text-[18px] text-[#a4a5a3]'>Streamline operations and enhance productivity with AI-driven automation.</p>
                <a href="" className='text-[#1a5eff] capitalize text-[19px] font-bold'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>

             <div className='bg-white p-8 rounded-xl'>
                <img src="https://th.bing.com/th/id/OIP.nvpjaehc2IePL7YHh4vF1gAAAA?w=53&h=53&rs=1&pid=ImgDetMain" alt="" />

                <h3  className='pt-9 text-[25px] text-[#202b38] font-bold'>Customer Support Chatbots</h3>
                <p className='pt-4 pb-5 text-[18px] text-[#a4a5a3]'>Streamline operations and enhance productivity with AI-driven automation.</p>
                <a href="" className='text-[#1a5eff] capitalize text-[19px] font-bold'>Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            
        </div>
      </div>
    </div>
  )
}
