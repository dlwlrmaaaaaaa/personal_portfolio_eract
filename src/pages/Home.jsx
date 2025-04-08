import React from 'react'
import mypic_wb from '../assets/mypic_wb.png'
import hacker from '../assets/hacker.png'
import check from '../assets/check.png'
import { FaHands, FaArrowDown } from "react-icons/fa6";
const Home = () => {
  return (
   <>
     <div className='lg:h-[90vh] flex flex-col items-center gap-5 py-20'>
         <div className='w-20 h-20 rounded-full lg:w-[200px] lg:h-[200px]  bg-primary overflow-hidden '>
            <img src={mypic_wb} alt=""  className=''/>
         </div>
         <h1 className='flex items-center gap-2 font-poppins text-xs lg:text-lg'> <FaHands/>  Hi, I’m Justin Marucut  </h1>
         <div className='flex items-center flex-col gap-4'>
            <p className='flex text-sm lg:text-5xl font-poppins lg:gap-2 font-bold items-center'>Passionate <span className='bg-primary flex items-center rounded-md px-2'>Full-Stack <img src={hacker} className='w-7 ' alt="" /> Developer</span></p>
            <p className='flex text-sm lg:text-5xl font-poppins gap-2 font-bold items-center'>
            <span className='bg-primary flex items-center rounded-md px-2 py-1 lg:py-3'>Building End-to-End</span> Web & Mobile Solutions
            </p>
            <p className='w-full lg:w-[700px] text-center py-4 text-[#7C7C7C] lg:text-sm text-xs'>I'm a fresh graduate with practical experience in commissioning projects, now diving full-time into full-stack development with a passion for clean code and creative UI.</p>
            <button className='text-xs lg:text-lg flex items-center bg-primary lg:px-4 lg:py-2 rounded-md font-poppins gap-2 px-3 py-1 font-semibold'><a href="">Explore Portolio</a> <FaArrowDown/></button>       
        </div>
     </div>
     <div className="w-full overflow-hidden bg-secondary mt-10 h-20 lg:h-40">
                <div className="marquee whitespace-nowrap flex gap-20 items-center justify-center h-full">
                  {[1, 2].map((_, i) => (
                    <React.Fragment key={i}>
                      <div className="flex items-center gap-4">
                        <img src={check} alt="" className="w-5 h-5 lg:w-16 lg:h-16" />
                        <p className="text-xs lg:text-2xl  font-poppins">Full-stack Development</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <img src={check} alt="" className="w-5 h-5 lg:w-16 lg:h-16" />
                        <p className="text-xs lg:text-2xl  font-poppins">Web Development</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <img src={check} alt="" className="w-5 h-5 lg:w-16 lg:h-16" />
                        <p className="text-xs lg:text-2xl  font-poppins">Mobile Development</p>
                      </div>
                    </React.Fragment>
                  ))}
        </div>
      </div>

   </>
  )
}

export default Home;