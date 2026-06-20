import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTrophy, FaCertificate } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';
import { aboutData } from '../../data/portfolio';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: FaTrophy, value: '250+', label: 'Problems Solved' },
    { icon: FaCode, value: '10+', label: 'Projects Built' },
    { icon: FaCertificate, value: '5+', label: 'Certifications' },
    { icon: FaGraduationCap, value: '9.53', label: 'CGPA' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer crafting innovative digital experiences"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image & Decorations */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative Shapes */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary-500/30 rounded-xl"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent-500/30 rounded-xl"
                animate={{ rotate: [0, -90, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-6 backdrop-blur-lg border border-white/10">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop"
                    alt="Developer workspace"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-primary-500 to-primary-600
                            text-white px-4 py-2 rounded-lg shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="font-bold">B.Tech CSE</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-accent-500 to-accent-600
                            text-white px-4 py-2 rounded-lg shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="font-bold">CGPA: 9.53</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              B.Tech Computer Science Student &
              <span className="gradient-text"> Full Stack Developer</span>
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              I'm a passionate B.Tech Computer Science student with a strong foundation
              in full-stack development. With a CGPA of 9.53, I've developed expertise in
              Java, Spring Boot, React.js, and the MERN stack.
            </motion.p>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              I love solving complex problems and building innovative applications that
              make a real impact. My interests span across AI/ML, cloud computing, and
              creating seamless user experiences. I'm constantly exploring new technologies
              and best practices to deliver high-quality solutions.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>Java & Spring Boot</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span>React.js & MERN</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span>REST APIs & Microservices</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span>AI/ML Integration</span>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl p-4
                          border border-white/20 text-center group hover:border-primary-500/50
                          transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
