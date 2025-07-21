import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Database,
  Server,
  GitBranch,
  KeyRound,
  Braces,
  Paintbrush,
  PenTool,
  FlaskConical,
} from "lucide-react";


const Skills: React.FC = () => {
  const skills = [
    { name: "MongoDB", level: 5, icon: <Database className="w-8 h-8" /> },
    { name: "Express.js", level: 5, icon: <Zap className="w-8 h-8" /> },
    { name: "React.js", level: 5, icon: <Braces className="w-8 h-8" /> },
    { name: "Node.js", level: 5, icon: <Server className="w-8 h-8" /> },
    { name: "JavaScript", level: 5, icon: <Braces className="w-8 h-8" /> },
    { name: "JWT Auth", level: 5, icon: <KeyRound className="w-8 h-8" /> },
    { name: "REST APIs", level: 5, icon: <Server className="w-8 h-8" /> },
    { name: "Git & GitHub", level: 5, icon: <GitBranch className="w-8 h-8" /> },
    {
      name: "Tailwind CSS",
      level: 4,
      icon: <Paintbrush className="w-8 h-8" />,
    },
    { name: "Figma", level: 3, icon: <PenTool className="w-8 h-8" /> },
    { name: "Postman", level: 4, icon: <FlaskConical className="w-8 h-8" /> },
  ];

  const getGlowIntensity = (level: number) => {
    const intensities = {
      5: "shadow-[0_0_20px_rgba(28,146,210,0.6)]",
      4: "shadow-[0_0_15px_rgba(28,146,210,0.4)]",
      3: "shadow-[0_0_10px_rgba(28,146,210,0.3)]",
      2: "shadow-[0_0_8px_rgba(28,146,210,0.2)]",
      1: "shadow-[0_0_5px_rgba(28,146,210,0.1)]",
    };
    return intensities[level as keyof typeof intensities] || intensities[1];
  };

  return (
    <section id="skills" className="py-20 bg-[#0f2027]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Skills
          </h2>
          <div className="w-24 h-1 bg-[#1C92D2] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            My technical expertise across frontend, backend, databases, and
            tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className={`
                relative bg-[#0F2027]/80 backdrop-blur-sm border border-[#1C92D2]/30 
                rounded-xl p-6 hover:border-[#1C92D2] transition-all duration-300
                hover:${getGlowIntensity(skill.level)}
                group cursor-pointer
              `}
            >
              <div className="flex justify-center mb-4">
                <div className="text-[#1C92D2] group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-white">
                {skill.name}
              </h3>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1C92D2]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
