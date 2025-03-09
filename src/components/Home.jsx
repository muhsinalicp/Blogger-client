import React from 'react'
import Hero from './homecomp/Hero'
import Footer from './homecomp/Footer'
import BlogSection from './homecomp/BlogSection'
import axios from 'axios'
import TopLocation from './homecomp/TopLocation'

function Home() {

  return (
    <div className='font-body'>
        <Hero/>
        <BlogSection/>
        <TopLocation/>
        <Footer/>
    </div>
  )
}

export default Home