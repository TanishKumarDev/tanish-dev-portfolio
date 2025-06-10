import { motion } from 'framer-motion';

function Achievements() {
  const achievements = [
    { title: 'Codeforces Rank: Expert', desc: 'Achieved Expert rating in 2024.' },
    { title: '160 Days DSA Challenge', desc: 'Solved 160 DSA problems in a row.' },
    { title: 'FreeCodeCamp Certification', desc: 'Full-Stack Web Development, 2023.' },
    { title: 'GitHub Streak', desc: '100+ days of consistent contributions.' },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      } 
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      id="achievements" 
      className="relative bg-gradient-to-r from-dark-100 to-dark-200 text-text-primary py-20 px-6 min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
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

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-100 text-transparent bg-clip-text"
          variants={itemVariants}
          custom={0}
        >
          Achievements & Certifications
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
          custom={1}
        >
          Milestones and recognitions in my journey
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={sectionVariants}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-dark-200/50 backdrop-blur-sm p-8 rounded-xl border border-accent/10 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Achievements;