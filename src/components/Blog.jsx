import { motion } from 'framer-motion';

function Blog() {
  const posts = [
    { 
      title: 'Mastering DSA with C++',
      desc: 'Deep dive into essential data structures and algorithms with practical examples.',
      link: 'https://linkedin.com/post/dsa',
      date: 'March 2024'
    },
    { 
      title: 'Building a MERN App',
      desc: 'Step-by-step guide to creating a full-stack application with MongoDB, Express, React, and Node.js',
      link: 'https://x.com/tanish/status/123',
      date: 'February 2024'
    },
    { 
      title: 'React Performance Tips',
      desc: 'Advanced techniques to optimize your React applications for better user experience.',
      link: '#',
      date: 'January 2024'
    },
    { 
      title: 'Web Development Trends 2024',
      desc: 'Exploring the latest technologies and practices in modern web development.',
      link: '#',
      date: 'January 2024'
    }
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
      id="blog"
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
          Blog & Articles
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
          custom={1}
        >
          Sharing knowledge and experiences in web development
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={sectionVariants}
        >
          {posts.map((post, index) => (
            <motion.a
              href={post.link}
              key={post.title}
              className="bg-dark-200/50 backdrop-blur-sm p-8 rounded-xl border border-accent/10 shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <p className="text-gray-400 text-lg">{post.desc}</p>
                <div className="flex items-center text-accent group-hover:translate-x-2 transition-transform">
                  <span>Read Article</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Blog;