import React from 'react'
import mypic_wb from '../assets/mypic_wb.png'
import hacker from '../assets/hacker.png'
import { FaHands } from "react-icons/fa6";
const Home = () => {
  return (
   <>
     <div className='border h-[90vh] flex flex-col items-center gap-5 py-20'>
         <div className='w-[200px] h-[200px] rounded-full bg-primary overflow-hidden '>
            <img src={mypic_wb} alt=""  />
          
         </div>
         <h1 className='flex items-center gap-2 font-poppins text-lg'> <FaHands/>  Hi, I’m Justin Marucut  </h1>
         <div className='flex items-center flex-col gap-4'>
            <p className='flex text-5xl font-poppins gap-2 font-bold items-center'>Passionate <span className='bg-primary flex items-center rounded-md px-2'>Full-Stack <img src={hacker} alt="" /> Developer</span></p>
            <p className='flex text-5xl font-poppins gap-2 font-bold items-center'>
            <span className='bg-primary flex items-center rounded-md px-2 py-3'>Building End-to-End</span> Web & Mobile Solutions
            </p>
            <p className='w-[700px] text-center py-4 text-[#7C7C7C]'>I'm a fresh graduate with practical experience in commissioning projects, now diving full-time into full-stack development with a passion for clean code and creative UI.</p>
        </div>
     </div>
   </>
  )
}

export default Home;