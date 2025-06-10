import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        staggerChildren: 0.2 
      } 
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeOut',
        type: "spring",
        stiffness: 100
      } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      className="relative bg-gradient-to-r from-dark-100 to-dark-200 text-text-primary py-20 px-6 min-h-screen flex items-center justify-center overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
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

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        <motion.div 
          className="relative"
          variants={imgVariants}
          animate={floatingAnimation}
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl transform scale-110" />
          <motion.img
            src="/profile.jpeg"
            alt="Tanish, Full-Stack Developer"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-accent relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </motion.div>

        <motion.div
          variants={textVariants}
          custom={0}
          className="mt-8"
        >
          <h2 className="text-xl text-accent mb-2">Welcome to my portfolio</h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-accent">Tanish</span>
          </h1>
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              2000,
              'DSA Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl md:text-3xl text-text-secondary"
            repeat={Infinity}
          />
        </motion.div>

        {/* <motion.p
          className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed"
          variants={textVariants}
          custom={1}
        >
          Building modern web applications with a focus on clean code and exceptional user experiences.
        </motion.p> */}

        <motion.div
          className="mt-12 flex flex-wrap gap-6 justify-center"
          variants={textVariants}
          custom={2}
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-accent text-dark-100 rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Projects</span>
            <span className="text-xl">→</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:bg-opacity-10 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Me</span>
            <span className="text-xl">✉</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a 
            href="#about" 
            className="text-text-secondary hover:text-accent transition-colors"
            aria-label="Scroll to About section"
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              fill="currentColor" 
              viewBox="0 0 16 16"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;