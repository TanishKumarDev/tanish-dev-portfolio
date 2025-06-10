import { motion } from 'framer-motion';
import { experiences } from '../constants/experience';

function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      id="experience" 
      className="py-20 px-6 bg-gradient-to-b from-dark-200 to-dark-300 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-accent/5 rounded-full -top-20 -right-20 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-accent/5 rounded-full -bottom-20 -left-20 blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-100 text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Experience / Internships
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          My professional journey and contributions
        </motion.p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h3 
                className="text-xl font-bold text-white mb-1"
                variants={itemVariants}
              >
                {exp.role} <span className="text-accent">@</span> {exp.company}
              </motion.h3>
              <motion.p 
                className="text-gray-400 mb-4"
                variants={itemVariants}
              >
                {exp.duration}
              </motion.p>
              <motion.ul 
                className="list-disc pl-5 text-gray-300 space-y-2 mb-4"
                variants={itemVariants}
              >
                {exp.contributions.map((item) => (
                  <motion.li 
                    key={item}
                    variants={itemVariants}
                    className="text-sm leading-relaxed"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.2)" }}
                    variants={itemVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              {exp.link && (
                <motion.a
                  href={exp.link}
                  className="text-accent hover:text-accent/80 mt-4 inline-flex items-center gap-2 text-sm group"
                  whileHover={{ scale: 1.05 }}
                  variants={itemVariants}
                >
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;