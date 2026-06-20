import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaHackerrank,
  FaDownload,
  FaEnvelope,
} from 'react-icons/fa';
import Typewriter from '../ui/Typewriter';
import { heroData, socialLinks } from '../../data/portfolio';

const Hero: React.FC = () => {
  const handleNavClick = (action: string) => {
    if (action === 'resume') {
      window.open(heroData.resumeUrl, '_blank');
    } else {
      const element = document.getElementById(action);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl top-1/4 -left-48"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-accent-500/20 rounded-full blur-3xl bottom-1/4 -right-48"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-primary-400/10 rounded-full blur-2xl top-1/2 left-1/2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Greeting */}
            <motion.p
              className="text-primary-400 dark:text-primary-300 text-lg md:text-xl font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {heroData.name}
            </motion.h1>

            {/* Typewriter Title */}
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typewriter
                words={heroData.titles}
                className="text-primary-400 dark:text-primary-300"
                typingSpeed={80}
                deletingSpeed={40}
                pauseTime={2500}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-300 text-base sm:text-lg max-w-xl mb-8 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Building innovative web applications with cutting-edge technologies.
              Passionate about clean code, scalable architectures, and exceptional
              user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => handleNavClick('resume')}
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600
                        text-white rounded-lg font-medium shadow-lg hover:shadow-glow
                        transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download Resume
              </motion.button>

              <motion.button
                onClick={() => handleNavClick('contact')}
                className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20
                        text-white rounded-lg font-medium hover:bg-white/20 hover:shadow-glow
                        transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-lg rounded-lg text-white
                           border border-white/20 hover:bg-white/20 hover:scale-110
                           transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative">
              {/* Animated Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background:
                    'linear-gradient(45deg, #0ea5e9, #d946ef, #0ea5e9, #d946ef)',
                  backgroundSize: '400% 400%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full blur-3xl" />

              {/* Profile Image Container */}
              <motion.div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
                          rounded-full overflow-hidden border-4 border-white/20
                          bg-gradient-to-br from-primary-500/20 to-accent-500/20"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(14, 165, 233, 0.3)',
                    '0 0 60px rgba(217, 70, 239, 0.3)',
                    '0 0 30px rgba(14, 165, 233, 0.3)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src={heroData.profileImage}
                  alt={heroData.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600
                          rounded-2xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-3xl">{'</>'}</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-8 w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600
                          rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-2xl">{'{ }'}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
