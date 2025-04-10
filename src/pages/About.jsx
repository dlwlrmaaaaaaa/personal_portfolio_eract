import React, { useRef } from 'react'
import myImg from '../assets/picabout.png'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaArrowRight } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { icons } from '../icons'
import { TbTriangle, TbTriangleFilled } from 'react-icons/tb'
import { BsTriangleFill } from 'react-icons/bs'
const About = () => {

  return (
    <>
        <div className="h-[100vh]  flex  px-4 py-10 justify-center items-center bg-secondary">  
      
      <div className=' h-full w-full lg:flex lg:justify-evenly lg:items-center'>
      <div className='flex flex-col gap-4'>
          <p className='text-3xl font-poppins font-semibold italic'><span className="text-primary">About</span> Me</p>

        <p className='lg:w-96 font-poppins'>Not that average pick-me guy. I'm a full-stack developer, designer, and a tech enthusiast. I love to design beautiful and user-friendly interfaces. Always curious to learn new things :)</p>

        <div className='flex gap-5'>
          <button className='bg-primary w-full py-2 font-poppins rounded-md'>My CV</button>
          <button className='border border-primary w-full py-2 font-poppins rounded-md' id='project_btn'><a href="#projects">Projects</a></button>
        </div> 
      <div className="flex gap-5 items-center justify-center">
        <div className=''>
            <a href="https://github.com/dlwlrmaaaaaaa"target='_blank'>
              <FaGithub className="text-3xl hover:text-gray-800"/>
            </a>
        </div>
        <div>
          <a href="www.linkedin.com/in/justin-marucut-6b2646253"target='_blank'>
            <FaLinkedin className="text-3xl hover:text-blue-400"/>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/jstmrct/"target='_blank'>
            <FaInstagram className="text-3xl hover:text-pink-600"/>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/justinmarucute" target='_blank'>
            <FaFacebook className="text-3xl hover:text-blue-500"/>
          </a>
          </div>  
      </div>     
      </div>
      <div
        className="lg:w-96 lg:h-96 bg-primary/60 object-cover "
        style={{
          clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)'
        }}
      >
        <img src={myImg} alt="" className=''/>

      </div>
        
      </div>
    </div>
    <div className="min-h-screen skills w-full lg:py-20 lg:px-40 flex flex-col gap-10 bg-secondary" >
  {/* Programming Languages Section */}
  <div className="flex flex-col gap-10 ">
    <p className="lg:text-3xl font-poppins font-bold flex gap-2 items-center">
      <span className="text-primary">Programming</span> Language <HiArrowRight />
    </p>
    <div className="flex flex-wrap justify-center gap-5">
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.js} alt="JavaScript" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">JavaScript</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.php} alt="PHP" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">PHP</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.java} alt="Java" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Java</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.python} alt="Python" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Python</p>
      </div>
    </div>
  </div>

  {/* Web Development Section */}
  <div className="flex flex-col gap-10">
    <p className="lg:text-3xl font-poppins font-bold flex gap-2 items-center">
      <span className="text-primary">Web</span> Development <HiArrowRight />
    </p>
    <div className="flex flex-wrap justify-center gap-5">
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.react_blue} alt="React" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">React</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.laravel} alt="React" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Laravel</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.node} alt="Node.js" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Node.js</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.express} alt="Express.js" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Express.js</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.django} alt="Express.js" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Django</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.Vite} alt="Vite" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Vite</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.html} alt="Vite" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">HTML</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.cssIcon} alt="CSS" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">CSS</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.tailwind} alt="Tailwind CSS" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Tailwind CSS</p>
      </div>
    </div>
  </div>

  <div className="flex flex-col gap-10">
    <p className="lg:text-3xl font-poppins font-bold flex gap-2 items-center">
      <span className="text-primary">Backend</span>& Databases <HiArrowRight />
    </p>
    <div className="flex flex-wrap justify-center gap-5">
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.mysql} alt="React" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">MySQL</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.mongodb} alt="Node.js" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">MongoDB</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.firebase_colored} alt="Vite" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Firebase</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.postgres} alt="CSS" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">PostgreSQL</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.tailwind} alt="Tailwind CSS" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Tailwind CSS</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.express} alt="Express.js" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Express.js</p>
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-10">
    <p className="lg:text-3xl font-poppins font-bold flex gap-2 items-center">
      <span className="text-primary">DevOps</span>& Clouds <HiArrowRight />
    </p>
    <div className="flex flex-wrap justify-center gap-5">
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.docker} alt="React" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Docker</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.aws} alt="Node.js" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">AWS</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <BsTriangleFill className="w-[80px] h-[80px] object-contain"/>
        <p className="text-lg font-poppins text-center">Vercel</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.netlify} alt="CSS" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Netlify</p>
      </div>
     
    </div>
  </div>
  <div className="flex flex-col gap-10">
    <p className="lg:text-3xl font-poppins font-bold flex gap-2 items-center">
      <span className="text-primary">Tools</span>& Platform<HiArrowRight />
    </p>
    <div className="flex flex-wrap justify-center gap-5">
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.postman} alt="React" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Postman</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.docker} alt="Node.js" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Docker</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
      <img src={icons.git} alt="Node.js" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Git</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.github} alt="CSS" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Github</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.vs} alt="CSS" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">VS Code</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.figma} alt="CSS" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Figma</p>
      </div>
      <div className="lg:w-[150px] lg:h-[150px] w-[120px] h-[120px] rounded-md flex justify-center items-center shadow-md bg-white flex-col">
        <img src={icons.tensorflow} alt="CSS" className="w-[80px] h-[80px] object-contain" />
        <p className="text-lg font-poppins text-center">Tensorflow</p>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default About
