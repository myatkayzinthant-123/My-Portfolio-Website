import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";


const skills = [

  {
    name: "React",
    icon: <FaReact />,
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
  },

  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
  },

];


const Skills = () => {

  return (

    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-gray-100"
    >

      <div className="max-w-6xl mx-auto px-5">


        <motion.h2

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.5
          }}

          viewport={{
            once:true
          }}

          className="
          text-4xl
          font-bold
          text-center
          "
        >
          Skills
        </motion.h2>



        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          mt-12
          "
        >


          {
            skills.map((skill,index)=>(


              <motion.div

                key={skill.name}


                initial={{
                  opacity:0,
                  y:40
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                transition={{
                  duration:0.5,
                  delay:index * 0.1
                }}


                viewport={{
                  once:true
                }}


                whileHover={{
                  scale:1.05
                }}


                className="group bg-white/70 backdrop-blur border border-gray-200 rounded-2xl p-6
                shadow-sm hover:shadow-xl transition flex flex-col items-center justify-center gap-4"
              >


                <div
                  className="text-5xl text-blue-600 group-hover:scale-110 transition"
                >
                  {skill.icon}
                </div>



                <h3
                  className="font-semibold text-gray-700"
                >
                  {skill.name}
                </h3>


              </motion.div>


            ))
          }


        </div>


      </div>


    </section>

  );

};


export default Skills;