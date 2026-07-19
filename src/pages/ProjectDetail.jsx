import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectDetail = () => {
  const {id} = useParams()

  const project = projects.find(
    (project) => project.id === Number(id)
  )

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <h1 className='text-3xl font-bold'>
          Project Not found
        </h1>
      </div>
    )
  }

  return (
   <section className='py-20'>
    <div className='max-w-5xl mx-auto px-5'>

      {/* BACK BUTTON */}
      <Link
        to="/projects"
        className='text-blue-600 hover:underline'
      >
        ← Back to Projects
      </Link>

      {/* PROJECT IMAGE */}
      <img
        src={project.image}
        alt={project.title}
        className='w-full h-96 object-cover rounded-2xl mt-8 shadow-lg'
      />

      {/* CONTENT */}
      <div className='mt-8'>
        <h1 className='text-4xl font-bold'>
          {project.title}
        </h1>

        <p className='text-gray-600 mt-5 text-lg leading-relaxed'>
          {project.description}
        </p>


        {/* TECHNOLOGIES */}
        <div className='mt-8'>
          <h2 className='text-2xl font-semibold'>
            Technologies
          </h2>

          <div className='flex flex-wrap gap-3 mt-4'>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className='px-4 py-2 rounded-full bg-blue-100 text-blue-700'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>


      {/* LINKS */}
      <div className='flex gap-5 mt-10'>
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg'
        >
          <FaGithub/>
            GitHub
        </a>

        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className='flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg'
        >
          <FaExternalLinkAlt/>
          Live Demo
        </a>
      </div>

      </div>

    </div>
   </section>
  )
}

export default ProjectDetail
