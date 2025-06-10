import { motion } from 'framer-motion';
import { skills } from '../constants/skills';
import { useState } from 'react';

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const skillVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05,
      rotate: [0, -2, 2, 0],
      transition: {
        rotate: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary via-blue-500 to-blue-600 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Tech Stack & Skills
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          A collection of technologies and tools I work with to bring ideas to life
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 capitalize flex items-center gap-2">
                {category}
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">({items.length})</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    initial="initial"
                    whileHover="hover"
                    variants={skillVariants}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium cursor-pointer
                      transition-all duration-300 ease-in-out transform
                      ${hoveredSkill === skill
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20'
                      }
                      hover:shadow-md hover:-translate-y-0.5
                    `}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;