import { useNavigate } from "react-router-dom"
import { IoIosArrowDropleft } from 'react-icons/io';

export default function Nav2() {

    const nav = useNavigate();

  return (
    <nav className='flex w-full  p-4'>
    <div className='flex items-center gap-2'>
      <button className='hover:scale-110 duration-300' onClick={() => nav(-1)}><IoIosArrowDropleft size={30} /></button>
      <h1 className='text-2xl font-bold text-gray-600 '>Wanderleaf</h1>
    </div>
  </nav>
  )
}
