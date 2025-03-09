import { useQuery } from '@tanstack/react-query';
import { blogsQueryOptions } from '../../queryOptions/fetchBlogs';
import Navbar from './Navbar'

function Hero() { 
  

  return (
    <div className="bg-[url('/src/assets/hero.jpg')] h-screen w-screen bg-cover">
      <Navbar />

      <div className='h-[60%] w-full flex flex-col font-hero justify-center items-center'>
        <h1 className='text-6xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-2/4 py-4'>
          Capture Moments, Relive Memories
        </h1>
        <p className='text-xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          Write about your adventures, inspire others, and discover new horizons.
        </p>
      </div>

    </div>
  )
}

export default Hero