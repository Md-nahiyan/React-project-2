
import InfiniteScroll from './InfiniteScroll'


export default function Testimonials() {
  return (
    <div className='h-[100vh]'>
      <div className='w-[33%] mx-auto text-center'>
        <button className='py-2 px-5 bg-[#fefeff] mb-7 text-[#1a5eff] font-bold  shadow-sm rounded-md uppercase'>Testimonials</button>
        <h1 className='text-[55px] leading-[50px] text-[#1f2c3b] font-bold'>Leading the way in AI automation</h1>
      </div>
      <InfiniteScroll/>
    </div>
  )
}
