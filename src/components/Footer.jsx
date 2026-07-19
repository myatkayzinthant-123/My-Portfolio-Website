import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10'>
      <div className='max-w-6xl mx-auto px-5'>

        <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
          {/* LOGO */}
          <Link>
            Myat <span className="text-blue-400">Dev</span>
          </Link>

          {/* SOCIAL */}
          <div className='flex gap-5 text-2xl'>
            <a 
              href="https://github.com/myatkayzinthant-123"
              target='_blank'
              rel="noopener noreferrer"
            >
              <FaGithub/>
            </a>
          </div>
        </div>

        <div className='flex space-x-2 justify-center border-t border-gray-700 mt-8 pt-5 text-center text-gray-400'>
          <span className='px-3'> © {new Date().getFullYear()} </span>
          Myat Kay Zin Thant.
          All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
