import React from 'react'

export default function Faq() {
  return (
    <div className='w-[72%] mx-auto h-[100vh]'>
      <div className='w-[63%] mx-auto text-center'>
        <button className='py-2 px-5 bg-[#fefeff] mb-7 text-[#1a5eff] font-bold  shadow-sm rounded-md uppercase'>Pricing</button>
        <h1 className='text-[55px] leading-[60px] text-[#1f2c3b] font-bold'>You’ve got questions, we’ve got <span>answers</span></h1>
      </div>

      <div className='w-[63%] mx-auto mt-[50px]'>
        <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>Figuring out which process to enhance using AI can be tricky for business people. If you have a business problem where you feel that the solution might be hidden in data and can't be solved with simple rules, AI could be the answer.

To define an AI use case, you'll need the help of an AI team, the person who knows the most about the issue (the problem owner), and technical specialists who understand how to deal with the problem in the technical world.</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
            <div className="collapse-content">
                <p>hello</p>
            </div>
            </div>
      </div>
    </div>
  )
}
