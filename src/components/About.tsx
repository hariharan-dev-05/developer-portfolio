import { motion } from "framer-motion";
import { Code, Coffee, Users, Zap } from "lucide-react";
import hariharan from "../assets/Hariharan.png"

const About: React.FC = () => {
  const traits = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Problem Solver",
      description:
        "I love breaking down complex problems into elegant solutions",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Continuous Learner",
      description:
        "Always staying updated with the latest technologies and best practices",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication skills",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Focused",
      description: "Committed to writing clean, efficient, and scalable code",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0F2027]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#1C92D2] mx-auto"></div>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              {/* <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-[#1C92D2] to-[#0F2027] rounded-2xl shadow-2xl flex items-center justify-center border border-[#1C92D2]/30"> */}
              <div className="max-w-96 h-90 mx-auto lg:mx-0 rounded-2xl shadow-2xl flex items-center justify-center border border-[#1C92D2]/30">
                {/* <div className="text-6xl font-bold text-white">JD</div> */}
                <img
                  src={hariharan}
                  alt="Hariharan Image"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Passionate Full-Stack Developer
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              With over 1 year of hands-on experience in the MERN stack, I craft
              scalable, high-performance web applications that deliver seamless
              and intuitive user experiences. What began as a curiosity about
              how the web works has grown into a deep-rooted passion for solving
              real-world problems through technology.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              I believe in writing clean, maintainable code and staying aligned
              with the latest trends and best practices in the tech ecosystem.
              Beyond coding, I actively contribute to open-source projects,
              mentor budding developers, and continuously explore emerging tools
              and technologies.
            </p>

            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              {traits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-[#1C92D2]/10 border border-[#1C92D2]/30 p-4 rounded-lg hover:bg-[#1C92D2]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-[#1C92D2] mb-2">{trait.icon}</div>
                  <h4 className="mb-1 font-semibold text-white">
                    {trait.title}
                  </h4>
                  <p className="text-sm text-gray-300">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
