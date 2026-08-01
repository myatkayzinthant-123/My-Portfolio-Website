import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y:40
      }}

      whileInView={{
        opacity: 1,
        y:0
      }}

      transition={{
        duration: 0.5
      }}

      viewport={{
        once: true
      }}

      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
    >

    <Link to={`/projects/${project.id}`}>
      {/* IMAGE */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover hover:scale-105"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-600 mt-3">
          {project.description}
        </p>
    
        {/* TECHNOLOGIES */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech)=> (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Team Roles */}
        {project.roles && (
          <div className="mt-5">
            <h4 className="font-semibold text-gray-800">
              Team Roles
            </h4>

            {project.roles.map((role) => (
              <p
                key={role.name}
                className="text-sm text-gray-600 mt-1"
              >
                <span className="font-medium">
                  {role.title}
                </span>{" "}
                {role.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </Link>

          
    {/* BUTTONS */}
    <div className="flex gap-4 px-6 pb-6">
      <a  
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-700 hover:text-black"
      >
        <FaGithub/> 
        GitHub
      </a>

      <a 
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600"
      > 
        <FaExternalLinkAlt/>
        Demo
      </a>
    </div>

    </motion.div>
  )
}

export default ProjectCard
