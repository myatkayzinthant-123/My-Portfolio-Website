import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const onSubmit = (data) => {
    console.log(data);

    reset()
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-6xl mx-auto px-5">

        <motion.div
          initial={{
            opacity: 0,
            y:40
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
            Contact Me
          </h2>

          <p className="text-center text-gray-600 mt-4">
            Feel free to contact me for opportunities or collaborations.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            {/* CONTACT INFO */}
            <div>
              <h3 className="text-2xl font-semibold">
                Let's work together
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                I am currently looking for frontend developer opportunies and exciting projects.
              </p>

              <div className="mt-8 space-y-5">
                <a 
                  href="mailto:myatthant68@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                >
                  <FaEnvelope/>
                  Email
                </a>

                <a 
                  href="https://github.com/myatkayzinthant-123"
                  target="_blank"
                  rel="noopener noreferrer"  
                  className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
                >
                  <FaGithub/>
                  GitHub
                </a>
              </div>
            </div>

            {/* Contact Form */}
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="ma-w-xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow space-y-5"
          >
            <div>
              <input
                {...register("name", {required: "Name is required"})}
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email"
                  }
                })}
                placeholder="Your email"
                className="w-full border rounded-lg px-4 py-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <textarea
              {...register("message", {
                required: "Message is required"
              })}
              row="5"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-3"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">
                {errors.message.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>

             
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
