import { motion } from 'framer-motion';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tanish29', icon: '🔗' },
    { name: 'GitHub', url: 'https://github.com/TanishKumarDev', icon: '💻' },
    { name: 'X', url: 'https://x.com/tanish_29', icon: '🐦' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-dark-100">
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          variants={itemVariants}
        >
          <div className="w-full md:w-1/3">
            <motion.div 
              className="relative w-64 h-64 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-accent/20 rounded-3xl -rotate-6"></div>
              <img
                src="/profile.jpeg"
                alt="Tanish"
                className="relative w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <motion.h2 
              className="text-4xl font-bold text-text-primary"
              variants={itemVariants}
            >
              About <span className="text-accent">Me</span>
            </motion.h2>

            <motion.p 
              className="text-lg text-text-secondary leading-relaxed"
              variants={itemVariants}
            >
              Hi! I'm Tanish, a passionate Full-Stack Developer with a knack for building scalable web apps using the MERN stack. I also love diving into Data Structures and Algorithms, solving complex problems with C++ and sharing my knowledge.
            </motion.p>

            <motion.p 
              className="text-lg text-text-secondary leading-relaxed"
              variants={itemVariants}
            >
              My focus is on crafting efficient, user-friendly solutions—whether it's a dynamic web app or a DSA visualizer to help others learn. I thrive on challenges and continuous learning!
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              variants={itemVariants}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-primary hover:text-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 pt-6"
              variants={itemVariants}
            >
              <div className="bg-dark-200 px-4 py-2 rounded-full text-text-secondary">
                🚀 MERN Stack
              </div>
              <div className="bg-dark-200 px-4 py-2 rounded-full text-text-secondary">
                💻 C++
              </div>
              <div className="bg-dark-200 px-4 py-2 rounded-full text-text-secondary">
                🎯 DSA
              </div>
              <div className="bg-dark-200 px-4 py-2 rounded-full text-text-secondary">
                ⚡ Problem Solving
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;