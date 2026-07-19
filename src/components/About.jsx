import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className='py-20'>
      <div className='max-w-6xl mx-auto px-5'>

        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.6
          }}

          viewport={{
            once: true
          }}
        >
          <h2 className="text-4xl font-bold text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 mt-10 gap-10 items-center">
            {/* TEXT */}
            <div>
              <p className="text-gray-600 leading-relaxed">
                I am Myat Kay Zin Thant, a frontend developer passionate about building modern and reaponsive wed applications.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed">
                I specialize in React, Javascript, Tailwind CSS, and modern frontend tools. Ienjoy creating clean user interfaces and solving real-world problems through code.
              </p>

              <p>
                Currently, I am improving my skills by building full-stack projects with React, Node.js, Express, and MongoDB.
              </p>
            </div>

            {/* INFO CARD */}
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-5"> 
                Developer Info
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>
                  🎓 Computer Science Student
                </li>

                <li>
                  💻 Frontend Developer
                </li>

                <li>
                  ⚛️ React Developer
                </li>

                 <li>
                  🌎 Myanmar
                </li>
              </ul>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
