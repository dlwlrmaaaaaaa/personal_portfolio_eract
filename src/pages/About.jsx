import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const TimelineItem = ({ delay = 0, title, duration, description, school, isLast }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="relative flex items-start gap-3 mb-10" ref={ref}>
      {/* Timeline Circle & Line */}
      {isLast &&
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: delay + 0.2 }}
      className="bg-gray-100 p-3 rounded-lg shadow-md"
    >
      <p className="font-bold text-sm font-poppins">{school}</p>
      <p className="text-xs text-gray-600 mb-1 font-poppins">{duration}</p>
      {title && <p className="text-sm font-medium ont-poppins">{title}</p>}
      {description && <p className="text-xs text-gray-700 ont-poppins">{description}</p>}
      
    </motion.div>}
      
      <div className="flex flex-col items-center min-w-[20px]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.4, delay }}
          className="w-4 h-4 bg-primary rounded-full"
        />

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: isInView ? '100px' : '0px' }}
            transition={{ duration: 0.4, delay }}
            className="w-1 bg-black"
          />
  
      </div>

      {/* Content */}
      {!isLast &&
      <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay: delay + 0.2 }}
      className="bg-gray-100 p-3 rounded-lg shadow-md"
    >
      <p className="font-bold text-sm font-poppins">{school}</p>
      <p className="text-xs text-gray-600 mb-1 font-poppins">{duration}</p>
      {title && <p className="text-sm font-medium ont-poppins">{title}</p>}
      {description && <p className="text-xs text-gray-700 ont-poppins">{description}</p>}
      
    </motion.div>}
    </div>
  )
}
import { IoPerson } from "react-icons/io5";

const About = () => {
  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      duration: '2021-2025',
      description: 'Graduated with a GPA of 1.50',
      school: 'University of Caloocan City',
      delay: 0,
    },
    {
      title: 'STEM',
      duration: '2019-2021',
      description: 'Graduated with Honors',
      school: 'Arellano University Jose Rizal High School',
      delay: 0.3,
    },
  ]

  return (
    <div className="flex flex-col px-4 py-10">
      <p className="text-2xl font-semibold text-center font-poppins">
        <span className="text-primary">About</span> me
      </p>

      <div className='lg:flex'>
      <div className="pt-6 lg:flex-1 lg:flex lg:flex-col lg:items-center">
        <p className="text-lg font-semibold text-center mb-6 font-poppins">EDUCATION</p>

        {education.map((item, index) => (
          <TimelineItem
            key={index}
            delay={item.delay}
            title={item.title}
            description={item.description}
            school={item.school}
            duration={item.duration}
            isLast={index === education.length - 1}
          />
        ))}
      </div>

      <div className='mx-10 lg:flex-1'>
        <p className="text-lg font-semibold text-center mb-6 font-poppins">INTERNSHIP EXPERIENCE</p>
        <div className="flex flex-col justify-center items-center font-poppins bg-white shadow-md p-5">
           <div className="flex flex-col">
           <p className='flex gap-2 items-center'><FaLocationDot/> Quezon City, Philippines</p>
            <p className='flex gap-2 items-center'><FaBuilding/> Department Of Agriculture</p>
            <p className='flex gap-2 items-center'><IoPerson/> Full-stack Developer</p>
           </div>
           <p className='text-center py-5 font-semibold '>
           We developed a Ticket Management System using React and Laravel, and also assisted in maintaining and enhancing an existing system built with Laravel Livewire and Alpine.js. Additionally, I provided user support by responding to telephone inquiries and collaborated closely with the team to improve overall system functionality and user experience.
           </p>
        </div>      
        </div>
      </div>

    </div>
  )
}

export default About
