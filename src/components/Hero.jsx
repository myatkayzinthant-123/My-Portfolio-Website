import React from 'react'
import profile from "../assets/profile.png"
import { FaGithub } from 'react-icons/fa'
import { motion } from "framer-motion";

const Hero = () => {
  return (
   <section className='min-h-screen flex items-center pt-20'>

    <div className='max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center'>

      
      <motion.div
        initial={{
          opacity: 0,
          x: -50
        }}

        animate={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: 0.8
        }}
      >
        <p className='text-blue-600 font-semibold mb-3'>
          Hello, I'm
        </p>

        <h1 className='text-5xl font-bold leading-tight'>
          Myat Kay Zin Thant
        </h1>

        <h2 className='text-2xl mt-4 text-gray-600'>
          Frontend Developer
        </h2>

        <p className='mt-5 text-gray-500 leading-relaxed'>
          I build modren web applications using React, Javascript, Tailwind CSS and other frontend technologies.
        </p>

        {/* BUTTONS */}
        <div className='flex gap-4 mt-8'>
          <a 
            href="#projects"
            className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'
          >
            View Projects
          </a>

          <a 
            href="/myatkayzinthant_cv.pdf"
            target='_blank'
            className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg'  
          >
            Download CV
          </a>
        </div>


        {/* SOCIAL */}
        <div className='flex gap-5 mt-8 text-2xl'>
          <a 
            href="https://github.com/myatkayzinthant-123" 
            target='_blank'
            rel="noopener noreferrer"  
          >
            <FaGithub/>
          </a>
        </div>

      </motion.div>



      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8
        }}

        animate={{
          opacity: 1,
          scale: 1
        }}

        transition={{
          duration: 0.8
        }}

        className='flex justify-center'
      >
        <img
          src={profile}
          alt='profile'
          className='w-72 h-72 rounded-full object-cover shadow-xl'
        />
      </motion.div>

    </div>

   </section>
  )
}

export default Hero
