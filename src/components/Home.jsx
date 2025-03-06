import React from 'react'
import Hero from './homecomp/Hero'
import Footer from './homecomp/Footer'
import BlogSection from './homecomp/BlogSection'

function Home() {
  return (
    <div className='font-body'>
        <Hero/>
        <BlogSection/>
        <Footer/>
    </div>
  )
}

export default Home