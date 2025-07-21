import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import useMovieNow from "../assets/UseMoveNow.png";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "useMovieNow",
      description:
        "A responsive React app that lets users search through thousands of movies using the IMDb RapidAPI.",
      image: useMovieNow,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      liveUrl: "https://usemovie-now.vercel.app/",
      githubUrl: "https://github.com/hariharan-dev-05/useMovieNow",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0F2027]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#1C92D2] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#1C92D2]/10 border border-[#1C92D2]/30 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-[#1C92D2] transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-full h-64 p-2 bg-black"
                />
                <div className="absolute inset-0 bg-[#0F2027]/0 group-hover:bg-[#0F2027]/70 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#1C92D2] text-white p-3 rounded-full hover:bg-[#1C92D2]/80 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#1C92D2] text-white p-3 rounded-full hover:bg-[#1C92D2]/80 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#1C92D2]/20 text-[#1C92D2] px-3 py-1 rounded-full text-sm font-medium border border-[#1C92D2]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#1C92D2] hover:text-white transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#1C92D2] hover:text-white transition-colors font-medium"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;