import React from 'react'

export default function Process() {
  return (
    <div className='w-[72%] mx-auto  pt-[20px] grid grid-cols-2 gap-5'>
      <div className='justify-center items-start flex flex-col'>
         <button className='py-2 px-5 bg-[#fefeff] mb-7 text-[#1a5eff] font-bold  shadow-sm rounded-md uppercase'>Testimonials</button>
        <h1 className='text-[55px] leading-[50px] text-[#1f2c3b] font-semibold pb-10'>How to get started</h1>
        <p className='text-[#4e4e4e] mb-10 text-[18px]'>Unleash the power of AI automation to transform routine processes, ensuring precision, 24/7 availability, and significant cost savings.</p>
        <a href="" className='w-[250px] h-[49px] bg-[#1a5eff] px-[24px] mt-10 py-[14px] text-white font-bold text-[18px] leading-[27px] rounded-[50px]'>Book Your Free Audit Call</a>
      </div>

      <div className=''>
          <div className='mb-4'>
                <article
                    className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                    >
                    <span className="inline-block rounded text-blue-600 py-5 text-[26px] font-bold">
                       01
                    </span>
                    <h2 href="#">
                        <h3 className="mt-0.5 text-[25px] font-semibold text-gray-900">
                        Book a discovery call
                        </h3>
                    </h2>
                    <p className="mt-2 line-clamp-3 text-[18px] text-gray-500">
                        Book your free discovery call by clicking one of the buttons on this page.
                    </p>
                    <a href="#" className="group mt-4 inline-flex items-center gap-1 text-[18px] font-bold text-blue-600">
                        Get Started
                        <span aria-hidden="true" className="block transition-all group-hover:mr-0.5 rtl:rotate-180 bg-[#e3e8fc] w-[35px] h-[35px] rounded-full items-center justify-center flex text-[22px] ml-3">
                        &rarr;
                        </span>
                    </a>
                </article>
          </div>

          <div className='mb-4'>
            <article
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                >
                <span className="inline-block rounded text-blue-600 py-5 text-[26px] font-bold">
                   02
                </span>

                <h2 href="#">
                    <h3 className="mt-0.5 text-[25px] font-semibold text-gray-900">
                    Get a personal growth strategy
                    </h3>
                </h2>

                <p className="mt-2 line-clamp-3 text-[18px] text-gray-500">
                On this call, we'll assess your business and start working on your personal growth strategy.
                </p>

                <a href="#" className="group mt-4 inline-flex items-center gap-1 text-[18px] font-bold text-blue-600">
                    Get Started

                    <span aria-hidden="true" className="block transition-all group-hover:mr-0.5 rtl:rotate-180 bg-[#e3e8fc] w-[35px] h-[35px] rounded-full items-center justify-center flex text-[22px] ml-3">
                    &rarr;
                    </span>
                </a>
            </article>
        </div>

        <div className='mb-4'>
            <article
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                >
                <span className="inline-block rounded text-blue-600 py-5 text-[26px] font-bold">
                   03
                </span>

                <h2 href="#">
                    <h3 className="mt-0.5 text-[25px] font-semibold text-gray-900">
                    Onboarding
                    </h3>
                </h2>

                <p className="mt-2 line-clamp-3 text-[18px] text-gray-500">
                After the strategy is complete, we will onboard you onto our softwares to ensure a smooth process.
                </p>

                <a href="#" className="group mt-4 inline-flex items-center gap-1 text-[18px] font-bold text-blue-600">
                    Get Started

                    <span aria-hidden="true" className="block transition-all group-hover:mr-0.5 rtl:rotate-180 bg-[#e3e8fc] w-[35px] h-[35px] rounded-full items-center justify-center flex text-[22px] ml-3">
                    &rarr;
                    </span>
                </a>
            </article>
         </div>

         <div>
            <article
                className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
                >
                <span className="inline-block rounded text-blue-600 py-5 text-[26px] font-bold">
                   04
                </span>

                <h2 href="#">
                    <h3 className="mt-0.5 text-[25px] font-semibold text-gray-900">
                    Implementation & results
                    </h3>
                </h2>

                <p className="mt-2 line-clamp-3 text-[18px] text-gray-500">
                And finally, we get to implementing the growth strategy and working to see results.
                </p>

                <a href="#" className="group mt-4 inline-flex items-center gap-1 text-[18px] font-bold text-blue-600">
                    Get Started

                    <span aria-hidden="true" className="block transition-all group-hover:mr-0.5 rtl:rotate-180 bg-[#e3e8fc] w-[35px] h-[35px] rounded-full items-center justify-center flex text-[22px] ml-3">
                    &rarr;
                    </span>
                </a>
            </article>
        </div>
      </div>

      
    </div>
  )
}
