import { motion } from 'framer-motion';

function Footer() {
  const footerLinks = [
    { name: 'Resume', href: '/resume.pdf', icon: '📄' },
    { name: 'GitHub', href: 'https://github.com/tanish', icon: '💻' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/tanish', icon: '🔗' },
    { name: 'LeetCode', href: 'https://leetcode.com/tanish', icon: '🧠' },
    { name: 'Hashnode', href: 'https://hashnode.com/@tanish', icon: '✍️' },
    { name: 'X (Twitter)', href: 'https://x.com/tanish', icon: '🐦' },
  ];

  return (
    <motion.footer
      className="bg-gradient-to-r from-dark-100 to-dark-200 text-text-secondary py-10 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Left: Branding */}
        <motion.div
          className="text-sm text-gray-400"
          whileHover={{ scale: 1.02 }}
        >
          <p>
            © 2025 <span className="text-accent font-semibold">Tanish</span>. Personal Portfolio.
          </p>
          <p className="mt-1">
            Frontend Developer · UI/UX Enthusiast · Lifelong Learner
          </p>
        </motion.div>

        {/* Right: Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          {footerLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors flex items-center gap-1 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
