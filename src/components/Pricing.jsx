import React from 'react'
// import Accordion from 'react-bootstrap/Accordion';

export default function Pricing() {
  return (
    <div>
        <div className='text-center mt-10'>
            <button className='py-2 px-5 bg-[#fefeff] mb-7 text-[#1a5eff] font-bold  shadow-sm rounded-md uppercase'>Pricing</button>
            <h1 className='text-[55px] leading-[50px] text-[#1f2c3b] font-bold'>Plans to Fit Your Business</h1>
            <div className='flex gap-5 mx-auto w-[15%] mt-8'>
                <p className='text-[#4e4e4e] font-blod text-[18px] '>Monthly</p>
                <input type="checkbox" className="toggle mt-1" defaultChecked />
                <p className='text-[#4e4e4e] font-blod text-[18px] '>Yearly</p>
            </div>
        </div>
        <div className="w-[75%] mx-auto mt-[20px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1  gap-5 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
                    <div className="divide-y bg-white divide-gray-200 rounded-[35px]  border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8 bg-[#f6f6f6] hover:bg-white m-2 rounded-[25px] hover:shadow-2xl hover:duration-75">
                            <h2 className="text-[18px] font-bold text-[#000000]">
                            Pro
                                {/* <span className="sr-only">Plan</span> */}
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl leading-[49px] font-semibold mb-2 text-[#202b35] sm:text-[55px] block"> $199/m </strong>
                                <span className='text-[18px] text-[#333333] font-bold'>Price breakdown here</span>
                            </p>

                            <a
                            className="mt-4 block rounded-[50px] border border-indigo-600 bg-[#1a5eff] px-12 py-3 text-center text-[18px]  font-medium text-white hover:bg-[#202B38] hover:text-white hover:duration-75 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                            href="#"
                            >
                            Get Started
                            </a>
                            <p className='text-center mt-3 mb-1 text-[16px] text-[#414244] font-semibold'>Got questions? <a href="" className='hover:text-[#1a5eff]'>Talk to an expert.</a></p>
                        </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                            <span className="text-gray-700"> 10 users </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                            <span className="text-gray-700"> 2GB of storage </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                            <span className="text-gray-700"> Email support </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-red-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <span className="text-gray-700"> Help center access </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-red-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <span className="text-gray-700"> Phone support </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-red-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <span className="text-gray-700"> Community access </span>
                        </li>
                        </ul>
                    </div>
                    </div>

                    <div className="divide-y bg-white divide-gray-200 rounded-[35px]  border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8 bg-[#f6f6f6] hover:bg-white m-2 rounded-[25px] hover:shadow-2xl hover:duration-75">
                            <div className='flex justify-start'>
                                <h2 className="text-[18px] font-bold text-[#000000]">
                                Pro
                                    {/* <span className="sr-only">Planpopular</span> */}
                                </h2>
                                <p className='text-[#ffffff] font-bold text-[15px] ml-5 border rounded-2xl bg-[#1262fa] px-3  py-1'>🔥 Popular</p>
                            </div>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl leading-[49px] font-semibold mb-2 text-[#202b35] sm:text-[55px] block"> $599/m </strong>
                                <span className='text-[18px] text-[#333333] font-bold'>Price breakdown here</span>
                            </p>

                            <a
                            className="mt-4 block rounded-[50px] border border-indigo-600 bg-[#1a5eff] px-12 py-3 text-center text-[18px]  font-medium text-white hover:bg-[#202B38] hover:text-white hover:duration-75 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                            href="#"
                            >
                            Get Started
                            </a>
                            <p className='text-center mt-3 mb-1 text-[16px] text-[#414244] font-semibold'>Got questions? <a href="" className='hover:text-[#1a5eff]'>Talk to an expert.</a></p>
                        </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                            <span className="text-gray-700"> 10 users </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                            <span className="text-gray-700"> 2GB of storage </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-indigo-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                            <span className="text-gray-700"> Email support </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-red-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <span className="text-gray-700"> Help center access </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-red-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <span className="text-gray-700"> Phone support </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 text-red-700"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <span className="text-gray-700"> Community access </span>
                        </li>
                        </ul>
                    </div>
                    </div>

                    <div className="divide-y bg-white divide-gray-200 rounded-[35px]  border-gray-200 shadow-sm">
                        <div className="p-6 sm:px-8 bg-[#f6f6f6] hover:bg-white m-2 rounded-[25px] hover:shadow-2xl hover:duration-75">
                            <h2 className="text-[18px] font-bold text-[#000000]">
                            Premium
                                {/* <span className="sr-only">Plan</span> */}
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl leading-[49px] font-semibold mb-2 text-[#202b35] sm:text-[55px] block"> $499/m </strong>
                                <span className='text-[18px] text-[#333333] font-bold'>Price breakdown here</span>
                            </p>

                            <a
                            className="mt-4 block rounded-[50px] border border-indigo-600 bg-[#1a5eff] px-12 py-3 text-center text-[18px]  font-medium text-white hover:bg-[#202B38] hover:text-white hover:duration-75 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                            href="#"
                            >
                            Get Started
                            </a>
                            <p className='text-center mt-3 mb-1 text-[16px] text-[#414244] font-semibold'>Got questions? <a href="" className='hover:text-[#1a5eff]'>Talk to an expert.</a></p>
                        </div>

                    <div className="p-6 sm:px-8">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> 10 users </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> 2GB of storage </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-indigo-700"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-red-700"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                                <span className="text-gray-700"> Help center access </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-red-700"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                                <span className="text-gray-700"> Phone support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-red-700"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                                <span className="text-gray-700"> Community access </span>
                            </li>
                        </ul>

                        {/* accordian */}
                             {/* <div>
                         
                                    <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>

                                </div> */}
                    </div>
                    </div>
                </div>
                </div>
    </div>
  )
}
