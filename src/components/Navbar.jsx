import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <nav className='fixed top-0 left-0 w-full bg-white shadow z-50'>
      <div className='max-w-6xl mx-auto flex justify-between items-center p-5'>
        <Link
          to="/"
          className='text-2xl font-bold'
        >
          Myat <span className='text-blue-600'>Dev</span>
        </Link>

        <ul className='hidden md:flex gap-8 items-center'>
          <li>
            <a href="#about">
              About
            </a>
          </li>

          <li>
            <a href="#skills">
              Skills
            </a>
          </li>

          <li>
            <Link to="/projects">
              Projects
            </Link>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <button
          className='md:hidden bg-blue-500 px-3 py-2 rounded text-white hover:bg-blue-700'
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className='md:hidden p-5 bg-white shadow'>
          <a  
            href="#about"
            className='block py-2'
            onClick={closeMenu}
          >
            About
          </a>

          <a  
            href="#skills"
            className='block py-2'
            onClick={closeMenu}
          >
            Skills
          </a>

          <Link 
            to="/projects"
            className='block py-2'
            onClick={closeMenu}
          >
            Projects
          </Link>

          <a
              href="#contact"
              className="block py-2"
              onClick={closeMenu}
            >
              Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
