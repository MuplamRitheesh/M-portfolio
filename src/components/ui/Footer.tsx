import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaCode, FaHackerrank, FaHeart, FaArrowUp } from 'react-icons/fa';
import { navLinks, socialLinks } from '../../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative bg-dark-300 dark:bg-dark-400 pt-20 pb-8 overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold gradient-text mb-4 block hover:opacity-90 transition-opacity"
            >
              M Ritheesh
            </button>
            <p className="text-gray-400 mb-6 max-w-xs">
              Full Stack Developer crafting innovative digital experiences.
              Let's build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg
                           bg-white/5 border border-white/10 text-gray-400
                           hover:border-primary-500/50 hover:text-primary-500
                           transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navLinks.slice(0, 6).map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="text-primary-400">Email:</span>{' '}
                <a href="mailto:ritheesh@example.com" className="hover:text-white transition-colors">
                  ritheesh@example.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-primary-400">Location:</span> India
              </p>
              <p className="text-gray-400">
                <span className="text-primary-400">Status:</span>{' '}
                <span className="text-green-400">Available</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-500 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} M Ritheesh. All rights reserved.
          </motion.p>

          <motion.p
            className="text-gray-500 text-sm flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Crafted with{' '}
            <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
            using React & Tailwind CSS
          </motion.p>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-16
                   w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500
                   flex items-center justify-center text-white shadow-lg
                   hover:shadow-glow transition-all duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
