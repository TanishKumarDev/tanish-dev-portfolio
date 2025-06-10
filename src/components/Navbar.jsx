import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
    hover: { scale: 1.05, color: '#64FFDA', transition: { duration: 0.3 } },
  };

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 40
      } 
    },
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'bg-dark-100/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold text-text-primary"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-accent">T</span>anish
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-text-primary hover:text-accent transition-colors"
                variants={linkVariants}
                custom={i}
                whileHover="hover"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-dark-200 text-text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? '🌞' : '🌙'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-text-primary p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-6 relative"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.span
                className="absolute w-full h-0.5 bg-text-primary rounded-full"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                animate={{
                  rotate: isOpen ? 45 : 0,
                  translateY: isOpen ? 0 : -8
                }}
              />
              <motion.span
                className="absolute w-full h-0.5 bg-text-primary rounded-full"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.span
                className="absolute w-full h-0.5 bg-text-primary rounded-full"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                animate={{
                  rotate: isOpen ? -45 : 0,
                  translateY: isOpen ? 0 : 8
                }}
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-dark-100/95 backdrop-blur-md md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-2xl text-text-primary hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                    variants={linkVariants}
                    custom={i}
                    whileHover="hover"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => setIsDark(!isDark)}
                  className="p-3 rounded-full bg-dark-200 text-text-primary text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isDark ? '🌞' : '🌙'}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;