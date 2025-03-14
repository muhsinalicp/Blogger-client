import React from 'react'
import Nav2 from './Nav2'
import Footer from './Footer'
import { useQuery } from '@tanstack/react-query'
import { VscLoading } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';
import { fetchDynamicBlogs } from '../../queryOptions/fetchBlogs';
import { CgCalendar } from 'react-icons/cg';
import { BsCalendarEvent } from 'react-icons/bs';


export default function ViewBlogs() {
    
    const {id} = useParams();


    const {data,isLoading} = useQuery({
        queryKey:["blog"],
        queryFn:()=>fetchDynamicBlogs(id)
    }
    );
    

    if (isLoading) return <div className='w-screen h-screen flex justify-center items-center'><VscLoading size={50} className='animate-spin'/></div>


  return (
    <div className='w-screen h-fit overflow-x-hidden'>
        <Nav2/>

        {/* blog section  */}
        <div className='grid grid-cols-3 p-4'>
            {/* left side  */}
            <div className='col-span-2  p-4'>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold  text-2xl tracking-wide'>{data.title}</h1>
                    <div className='flex items-center gap-1'>
                        <img src={data.author.image} className='size-6' alt="profile pic" />
                        <h2 className='tracking-wide font-semibold'>{data.author.name} </h2>
                        <span className='flex items-center px-4'><BsCalendarEvent size={20}/> {data.postedAt}</span>
                    </div>

                    <div className='w-full h-fit py-4'>
                        <img src={data.image} alt="w-full h-full" />
                    </div>

                    <div>
                        <p className='py-2 text-justify'>"{data.content}"</p>
                        <p className='py-2 text-justify tracking-wide'>{data.blog}</p>
                    </div>

                </div>

            </div>

            {/* right side  */}
            <div className=' p-4'>
                <h1 className='text-xl font-bold'>Top Authors</h1>
            </div>
        </div>

        <Footer/>
        
    </div>
  )
}
