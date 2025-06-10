import { motion } from 'framer-motion';

function Contact() {
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

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const socialLinks = [
    { name: 'Email', href: 'mailto:tanish@example.com', icon: '✉️' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/tanish', icon: '🔗' },
    { name: 'X', href: 'https://x.com/tanish', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/tanish', icon: '💻' },
  ];

  return (
    <motion.section
      id="contact"
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
          Let's Connect
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg"
          variants={itemVariants}
          custom={1}
        >
          Open to opportunities—let's create something amazing together!
        </motion.p>

        <motion.form 
          className="max-w-md mx-auto space-y-6 mb-12"
          variants={formVariants}
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div variants={itemVariants} custom={2}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-dark-200/50 backdrop-blur-sm rounded-xl border border-accent/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
            />
          </motion.div>
          
          <motion.div variants={itemVariants} custom={3}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-dark-200/50 backdrop-blur-sm rounded-xl border border-accent/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
            />
          </motion.div>

          <motion.div variants={itemVariants} custom={4}>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-4 bg-dark-200/50 backdrop-blur-sm rounded-xl border border-accent/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
            ></textarea>
          </motion.div>

          <motion.div variants={itemVariants} custom={5}>
            <motion.button
              type="submit"
              className="w-full bg-accent text-dark-100 px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <motion.span
                className="text-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.form>

        <motion.div 
          className="flex flex-wrap gap-6 justify-center"
          variants={itemVariants}
          custom={6}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl group-hover:rotate-12 transition-transform">{link.icon}</span>
              <span className="font-medium">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;