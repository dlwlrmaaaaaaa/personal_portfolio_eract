import React, { useEffect, useState } from 'react'
import mobile from '../assets/mobile-portrait.png'
import react from '../assets/react.png'
import django from '../assets/django.png'
import firebase from '../assets/firebase.png'

const Card = ({ title, description, imgUrl }) => {
   

  return (
    <div className='w-screen lg:w-[300px] lg:h-[450px] bg-white shadow-md h-96 flex flex-col justify-center items-center rounded-md'>
        <div className="h-36 w-36 rounded-full  overflow-hidden flex items-center p-2">
                <img src={mobile} alt="" />
        </div>
        <div className="flex flex-col font-poppins text-center px-10">
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='text-xs'>{description}</p>
            <div className="flex items-center justify-center gap-10 p-5">
            <img src={react} alt="" className='w-8 h-8'/>
            <img src={django} alt="" className='w-8 h-8'/>
            <img src={firebase} alt="" className='w-8 h-8'/>
            </div>
            <div className=' flex items-center justify-center gap-5'>
                <button className="w-full bg-primary text-center px-2 py-1 font-semibold text-sm rounded-sm">
                    Live Demo
                </button>
                <button className="w-full bg-primary text-center px-2 py-1 font-semibold text-sm rounded-sm">
                    Code
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card