
import Header from '../components/Header'
import Bottom from '../components/Bottom'
import Services from '../components/Services'
import Content from '../components/Content'
import Testimonials from '../components/Testimonials'
import Process from '../components/Process'
import Pricing from '../components/Pricing'

import Accordian from '../components/Acordian'

// import './App.css'
export default function Home() {
  return (
    <div className='header-area'>
      <Header/>
      <Bottom/>
      <Services/>
      <Content/>
      <Testimonials/>
      <Process/>
      <Pricing/>
      <Accordian/>
    </div>
  )
}
