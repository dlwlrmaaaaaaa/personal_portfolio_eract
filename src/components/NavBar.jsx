import React, { useState } from 'react'
import { FaBars  } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaCloudDownloadAlt } from "react-icons/fa";


export const NavBar = () => {
  const [isClick, setIsClick] = useState(false)
    const handleClick = () => {
        setIsClick(!isClick)
    }

    const navName = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about'},
        {name: 'Projects', link: '/projects'},
        {name: 'Contact', link: '/contact'},     
    ]

    const navBar = () => {
        return navName.map((item, index) => {
            return (
                <li key={index} className='underline-hover transition-all font-poppins '>
                    <a href={item.link}>{item.name}</a>
                </li>
                )
            })
    }

  return (
    <>
        {/* <div className="flex justify-between items-center p-3">
        <div className='flex gap-2'>
            <BsInstagram/>
            <BsLinkedin/>
            <BsGithub/>
            <BsFacebook/>
        </div>
        <div className='flex gap-2'>
            <BsInstagram/>
            <BsLinkedin/>
            <BsGithub/>
            <BsFacebook/>
        </div> <div className='flex gap-2'>
            <BsInstagram/>
            <BsLinkedin/>
            <BsGithub/>
            <BsFacebook/>
        </div>
        </div> */}

            <div className="flex justify-between p-4 lg:py-4 lg:px-10 ">
                <div className='flex gap-2'>
                    <BsInstagram className='text-xl'/>
                    <BsLinkedin className='text-xl'/>
                    <BsGithub className='text-xl'/>
                    <BsFacebook className='text-xl'/>
                </div>
                   { !isClick ?
                    <FaBars className='cursor-pointer lg:hidden ' onClick={handleClick}/>
                    :
                    <ImCross className='cursor-pointer lg:hidden transition-all' onClick={handleClick}/>
                    }
                    <ul className='lg:flex gap-10 items-center justify-center hidden'> 
                        {navBar()}
                    </ul>
                    <button className='flex  items-center gap-1 bg-primary px-4 py-1 rounded-md font-poppins lg:flex hidden'>
                        Download CV <FaCloudDownloadAlt/>
                    </button>
            </div>

            { isClick && <div className='h-52 flex flex-col lg:hidden'>
                    <ul className=' flex w-full h-full flex-col gap-5 items-center justify-center'> 
                        {navBar()}
                    </ul>
            </div>}

    </>
  )
}
