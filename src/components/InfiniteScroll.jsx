import { useRef, useEffect, } from 'react';

export default function InfiniteScroll() {
    // const [bannerOpen, setBannerOpen] = useState(true);
    const logosRef = useRef(null);
  
    useEffect(() => {
      const ul = logosRef.current;
      if (ul) {
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
      }
    }, []);
  
    return (
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
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                >
                  <li className='w-[380px] h-[400px]'>
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className='flex pt-5  px-4 bg-white'>
                                    <div>
                                        <img src="https://framerusercontent.com/images/sFJggTzla8eMLg8n1AbKDQlyulU.jpg?scale-down-to=1024" className='w-[50px] h-[50px] rounded-full' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <h3 className='text-left text-[#202b38] font-semibold'>James Williams</h3>
                                        <p className='font-semibold'>Marketing Director @ ABC</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 sm:p-6 text-left pb-7">
                                   
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 pb-10 text-[18px] font-semibold">
                                        We've tried countless of agencies but this has been the best experience by far… 
                                    </p>

                                    <div className="rating rating-lg input-icon">
                                        <input type="radio" name="rating-9" className="rating-hidden text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2 text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    </div>
                                </div>
                        </article>
                    </li>


                    <li className='w-[380px] h-[400px]'>
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className='flex pt-5  px-4 bg-white'>
                                    <div>
                                        <img src="https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg?scale-down-to=1024" className='w-[50px] h-[50px] rounded-full' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <h3 className='text-left text-[#202b38] font-semibold'>James Williams</h3>
                                        <p className='font-semibold'>Marketing Director @ ABC</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 sm:p-6 text-left pb-7">
                                   
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 pb-10 text-[18px] font-semibold">
                                    Our chatbot has taken over more than 60% of our support tickets, and customers are not even noticing they are talking to AI!"
                                    </p>

                                    <div className="rating rating-lg input-icon">
                                        <input type="radio" name="rating-9" className="rating-hidden text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2 text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    </div>
                                </div>
                        </article>
                    </li>
                    <li className='w-[380px] h-[400px]'>
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className='flex pt-5  px-4 bg-white'>
                                    <div>
                                        <img src="https://framerusercontent.com/images/sFJggTzla8eMLg8n1AbKDQlyulU.jpg?scale-down-to=1024" className='w-[50px] h-[50px] rounded-full' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <h3 className='text-left text-[#202b38] font-semibold'>James Williams</h3>
                                        <p className='font-semibold'>Marketing Director @ ABC</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 sm:p-6 text-left pb-7">
                                   
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 pb-10 text-[18px] font-semibold">
                                        We've tried countless of agencies but this has been the best experience by far… 
                                    </p>

                                    <div className="rating rating-lg input-icon">
                                        <input type="radio" name="rating-9" className="rating-hidden text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2 text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    </div>
                                </div>
                        </article>
                    </li>
                    <li className='w-[380px] h-[400px]'>
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className='flex pt-5  px-4 bg-white'>
                                    <div>
                                        <img src="https://framerusercontent.com/images/sFJggTzla8eMLg8n1AbKDQlyulU.jpg?scale-down-to=1024" className='w-[50px] h-[50px] rounded-full' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <h3 className='text-left text-[#202b38] font-semibold'>James Williams</h3>
                                        <p className='font-semibold'>Marketing Director @ ABC</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 sm:p-6 text-left pb-7">
                                   
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 pb-10 text-[18px] font-semibold">
                                    Our chatbot has taken over more than 60% of our support tickets, and customers are not even noticing they are talking to AI!"
                                    </p>

                                    <div className="rating rating-lg input-icon">
                                        <input type="radio" name="rating-9" className="rating-hidden text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2 text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    </div>
                                </div>
                        </article>
                    </li>
                    <li className='w-[380px] h-[400px]'>
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className='flex pt-5  px-4 bg-white'>
                                    <div>
                                        <img src="https://framerusercontent.com/images/sFJggTzla8eMLg8n1AbKDQlyulU.jpg?scale-down-to=1024" className='w-[50px] h-[50px] rounded-full' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <h3 className='text-left text-[#202b38] font-semibold'>James Williams</h3>
                                        <p className='font-semibold'>Marketing Director @ ABC</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 sm:p-6 text-left pb-7">
                                   
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 pb-10 text-[18px] font-semibold">
                                        We've tried countless of agencies but this has been the best experience by far… 
                                    </p>

                                    <div className="rating rating-lg input-icon">
                                        <input type="radio" name="rating-9" className="rating-hidden text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2 text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    </div>
                                </div>
                        </article>
                    </li>
                    <li className='w-[380px] h-[400px]'>
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className='flex pt-5  px-4 bg-white'>
                                    <div>
                                        <img src="https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg?scale-down-to=1024" className='w-[50px] h-[50px] rounded-full' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <h3 className='text-left text-[#202b38] font-semibold'>James Williams</h3>
                                        <p className='font-semibold'>Marketing Director @ ABC</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 sm:p-6 text-left pb-7">
                                   
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 pb-10 text-[18px] font-semibold">
                                    Our chatbot has taken over more than 60% of our support tickets, and customers are not even noticing they are talking to AI!"
                                    </p>

                                    <div className="rating rating-lg input-icon">
                                        <input type="radio" name="rating-9" className="rating-hidden text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2 text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    </div>
                                </div>
                        </article>
                    </li>
                    <li className='w-[380px] h-[400px]'>
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className='flex pt-5  px-4 bg-white'>
                                    <div>
                                        <img src="https://framerusercontent.com/images/sFJggTzla8eMLg8n1AbKDQlyulU.jpg?scale-down-to=1024" className='w-[50px] h-[50px] rounded-full' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <h3 className='text-left text-[#202b38] font-semibold'>James Williams</h3>
                                        <p className='font-semibold'>Marketing Director @ ABC</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 sm:p-6 text-left pb-7">
                                   
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 pb-10 text-[18px] font-semibold">
                                        We've tried countless of agencies but this has been the best experience by far… 
                                    </p>

                                    <div className="rating rating-lg input-icon">
                                        <input type="radio" name="rating-9" className="rating-hidden text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2 text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    </div>
                                </div>
                        </article>
                    </li>
                    <li className='w-[380px] h-[400px]'>
                        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                <div className='flex pt-5  px-4 bg-white'>
                                    <div>
                                        <img src="https://framerusercontent.com/images/0OjdTxpLdqgvqtgZDfcw2aJjgOU.jpg?scale-down-to=1024" className='w-[50px] h-[50px] rounded-full' alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <h3 className='text-left text-[#202b38] font-semibold'>James Williams</h3>
                                        <p className='font-semibold'>Marketing Director @ ABC</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 sm:p-6 text-left pb-7">
                                   
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 pb-10 text-[18px] font-semibold">
                                    Our chatbot has taken over more than 60% of our support tickets, and customers are not even noticing they are talking to AI!"
                                    </p>

                                    <div className="rating rating-lg input-icon">
                                        <input type="radio" name="rating-9" className="rating-hidden text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2 text-[#1a5eff]" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" defaultChecked />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                        <input type="radio" name="rating-9" className="mask mask-star-2" />
                                    </div>
                                </div>
                        </article>
                    </li>
                </ul>
              </div>
              {/* End: Logo Carousel Animation */}
  
            </div>
          </div>
        </main>
        
      </div>
    );
}
