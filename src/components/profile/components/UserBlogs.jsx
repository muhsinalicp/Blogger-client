import React, { useState } from 'react'
import BlogForm from './BlogForm';
import { useQuery } from '@tanstack/react-query';
import { VscLoading } from 'react-icons/vsc';
import { userBlogQueryOptions } from '../../../queryOptions/fetchBlogs';

export default function UserBlogs() {


  const [selected, setSelected] = useState("Your Blogs");



    const items =
    [
      {
        id: 1,
        title: "Your Blogs",
      },
      {
        id: 2,
        title: "Create Blogs",
      }
    ]

    const {data , isLoading , error} = useQuery(userBlogQueryOptions);

    if (isLoading) return <div className='w-screen h-screen flex justify-center items-center'><VscLoading size={50} className='animate-spin'/></div>
    
  return (
    <section className='w-full h-[70vh] py-6 px-12' >
    <div className='h-full w-full outline flex flex-col'>
      <div className=' h-fit   flex  '>
        {items.map(item =>
        (
          <span
            key={item.id}
            onClick={() => setSelected(item.title)}
            className={`flex-1 text-center ${item.title === selected ? "bg-gray-300 hover:bg-gray-300" : ""} hover:bg-gray-200 font-bold cursor-pointer  duration-300 py-2`} >
            {item.title}
          </span>
        )
        )}
      </div>

      <div className=' h-full overflow-scroll'>
        {selected==="Your Blogs" && 
        <div className='grid overflow-y-hidden grid-cols-3 p-4 gap-1'>
          {data.map((item,index)=>(
            <div key={index} className='h-[40vh] shadow-sm hover:scale-101 duration-300'>
              <div className='h-4/5 p-1'>
                <img src={item.image} className='w-full h-full object-cover' alt="" />
              </div>
              <div className='line-clamp-2 tex-xl font-bold tracking-wide p-2'>{item.title}</div>
            </div>
          ))}
        </div>}

        {selected ==="Create Blogs" && <BlogForm/>}

      </div>

    </div>
  </section>
  )
}
