import { projects } from "../data/projects";
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section
        id="projects"
        className='py-24'
    >
        <div className='max-w-6xl mx-auto px-5'>

            <h2 className='text-4xl font-bold text-center'>
                Projects
            </h2>

            <p className='text-center text-gray-600 mt-4'>
                Some projects I have built using modern technologies.
            </p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                {
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Projects
