import React from 'react'
import Header from '../components/Header'
import Bottom from '../components/Bottom'
import Services from '../components/Services'
import Content from '../components/Content'
// import './App.css'
export default function Home() {
  return (
    <div className='header-area'>
      <Header/>
      <Bottom/>
      <Services/>
      <Content/>
    </div>
  )
}
