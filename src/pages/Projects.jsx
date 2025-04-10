import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import data from '../projects.json'
const Projects = () => {
    // const [projects, setProjects] = useState([data])
    // useEffect(() => {
    //     projects.map((data) => {
    //         console.log(data.title)
    //     })
    // }, [])  
  return (
      <>
      <div className="flex flex-col lg:mt-20 bg-secondary p-10">
        <div className='flex flex-col text-center gap-2'>
              <h1 className='text-xl font-poppins font-bold lg:text-4xl'>My <span className='text-primary'>Development Works</span></h1>
              <p className='text-[#7C7C7C] text-xs lg:text-sm'>From desktop tools to web apps and mobile experiences — here’s a peek at what I’ve been working on.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 py-10 lg:grid-cols-5 lg:mx-auto">
          {data.map((data) => (
            
              <Card title={data.title} description={data.description} imageUrl={''}/>
          ))}
          </div>
      </div>
      </>
  )
}

export default Projects