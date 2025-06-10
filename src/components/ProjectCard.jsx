import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function ProjectCard({ project, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#64FFDA",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div 
        className="overflow-hidden rounded-xl mb-4 relative group"
        whileHover="hover"
      >
        <motion.img
          src={project.screenshot}
          alt={`${project.name} screenshot`}
          className="w-full h-48 object-cover rounded-lg"
          variants={imageVariants}
        />
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      <motion.h3 
        className="text-xl font-semibold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
      >
        {project.name}
      </motion.h3>
      
      <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>

      {project.problem && (
        <p className="text-sm text-gray-400 mt-2">
          <span className="font-medium text-accent">Problem Solved:</span> {project.problem}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((tech) => (
          <motion.span
            key={tech}
            className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.2)" }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="mt-auto pt-4 flex gap-4">
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm group"
          variants={linkVariants}
          whileHover="hover"
        >
          <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform duration-300" /> 
          Live Demo
        </motion.a>
        <motion.a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm group"
          variants={linkVariants}
          whileHover="hover"
        >
          <FaGithub className="group-hover:rotate-12 transition-transform duration-300" /> 
          GitHub
        </motion.a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;