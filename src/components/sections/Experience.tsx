import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaRocket } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { experienceData } from '../../data/portfolio';

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-accent-500/5" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and career path"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5
                        bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500" />

          {/* Experience Items */}
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } mb-8 md:mb-16`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Mobile: Single Column */}
              {/* Tablet+: Alternating */}
              <div className="flex-1 hidden md:block" />

              {/* Timeline Node */}
              <motion.div
                className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2
                          w-5 h-5 bg-gradient-to-r from-primary-500 to-accent-500
                          rounded-full border-4 border-white dark:border-dark-300
                          z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
              >
                <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}
              >
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-6
                              border border-white/20 hover:border-primary-500/50 transition-all duration-300">
                  {/* Header */}
                  <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500
                                  rounded-lg flex items-center justify-center">
                      <FaBriefcase className="w-5 h-5 text-white" />
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary-500 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className={`flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendar className="w-3 h-3" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`text-gray-600 dark:text-gray-400 text-sm mb-4 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary-500/10 text-primary-500 dark:text-primary-400
                                 rounded-lg border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Ready for Internship Card */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-lg
                        rounded-2xl p-8 border border-primary-500/30 text-center max-w-lg"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(14, 165, 233, 0.2)',
                  '0 0 40px rgba(14, 165, 233, 0.3)',
                  '0 0 20px rgba(14, 165, 233, 0.2)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-accent-500
                            rounded-full flex items-center justify-center">
                <FaRocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Ready for New Opportunities!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                I'm actively seeking internship opportunities in Full Stack Development,
                Java Development, or related fields. Let's connect!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
