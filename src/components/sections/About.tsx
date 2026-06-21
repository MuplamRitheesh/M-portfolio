import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { Code2, Trophy, Award, GraduationCap, Sparkles, Zap, Target, Rocket } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';
import { SiBoost, SiCodingame } from 'react-icons/si';
import { label } from 'framer-motion/client';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const stats = [
    { icon: Trophy, value: 350, suffix: '+', label: 'Problems Solved', color: 'from-amber-500 to-orange-500' },
    { icon: Code2, value: 7, suffix: '+', label: 'Projects Built', color: 'from-cyan-500 to-blue-500' },
    { icon: Award, value: 5, suffix: '+', label: 'Certifications', color: 'from-violet-500 to-purple-500' },
    { icon: GraduationCap, value: 9, suffix:'.53', label: 'CGPA', color: 'from-emerald-500 to-teal-500' },
  ];

  const highlights = [
    { icon: Zap, text: 'Full Stack Developer', delay: 0.1 },
    { icon: Target, text: 'Problem Solver', delay: 0.2 },
    { icon: Sparkles, text: 'MERN Stack', delay: 0.3 },
    { icon: Rocket, text: 'AI/ML Integration', delay: 0.4 },
  ];

  const education = [
    { degree: 'B.Tech Computer Science', institution: 'SISTK,Puttur', year: '2022 - 2026', gpa: '9.53 CGPA' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
      ref={ref}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="Crafting digital experiences with code and creativity"
        />

        <div className="grid lg:grid-cols-5 gap-16 items-start mt-12">
          {/* Left - 3D Card */}
          <motion.div
            className="lg:col-span-2 relative perspective-1000"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative"
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-violet-500/30 rounded-3xl blur-2xl opacity-60" />

              {/* Main Card */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
                {/* Profile Image with Gradient Border */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 rounded-2xl blur-lg opacity-50" />
                  <div className="relative p-1 bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 rounded-2xl">
                    <img
                      src="images/profile.jpeg"
                      alt="M Ritheesh"
                      className="w-full aspect-square object-cover object-center rounded-xl"
                    />
                  </div>
                </div>

                {/* Name Badge */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Available for Hire
                </motion.div>

                {/* Education Timeline */}
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </h4>
                  {education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      className="relative pl-6 border-l-2 border-gradient-to-b from-cyan-500 to-violet-500"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full" />
                      <h5 className="font-bold text-gray-900 dark:text-white">{edu.degree}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-gray-500 dark:text-gray-500">{edu.year}</span>
                        <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-0.5 rounded-full">{edu.gpa}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animated Heading */}
            <div>
              <motion.h3
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  M Ritheesh
                </span>
              </motion.h3>
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                B.Tech Computer Science Student & Full Stack Developer
              </motion.p>
            </div>

            {/* Description Cards */}
            <div className="space-y-4">
              <motion.div
                className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -2 }}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate B.Tech Computer Science student with a strong foundation
                  in full-stack development. With a CGPA of 9.53, I've developed expertise in
                  Java, Spring Boot, React.js, and the MERN stack.
                </p>
              </motion.div>

              <motion.div
                className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-violet-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -2 }}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I love solving complex problems and building innovative applications that
                  make a real impact. My interests span across AI/ML, cloud computing, and
                  creating seamless user experiences.
                </p>
              </motion.div>
            </div>

            {/* Tech Highlights - Pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="group relative"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + item.delay }}
                >
                  <div className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 px-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-600 hover:border-cyan-500/50 transition-all duration-300 cursor-default">
                    <item.icon className="w-4 h-4 text-cyan-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-5 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-cyan-500/30 transition-all duration-300">
                    <stat.icon className={`w-6 h-6 mb-3 bg-gradient-to-br ${stat.color} bg-clip-text`} style={{ stroke: 'url(#gradient)' }} />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      <AnimatedCounter target={typeof stat.value === 'number' ? stat.value : parseFloat(stat.value)} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
<motion.div
  className="flex flex-row gap-3 pt-4 w-full"
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 1.2 }}
>
  <a
    href="#contact"
    className="flex-1 group relative inline-flex items-center justify-center gap-2
               bg-gradient-to-r from-cyan-500 to-blue-500 text-white
               px-4 py-3 rounded-full font-semibold
               shadow-lg shadow-cyan-500/25
               hover:shadow-xl hover:shadow-cyan-500/40
               transition-all duration-300"
  >
    <span>Let's Connect</span>
    <motion.span
      animate={{ x: [0, 5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      →
    </motion.span>
  </a>

  <a
    href="#projects"
    className="flex-1 group inline-flex items-center justify-center gap-2
               bg-white dark:bg-gray-800
               text-gray-900 dark:text-white
               px-4 py-3 rounded-full font-semibold
               border-2 border-gray-200 dark:border-gray-700
               hover:border-cyan-500/50
               transition-all duration-300"
  >
    <span>View Projects</span>
  </a>
</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
