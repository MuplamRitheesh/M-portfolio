import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { skillsData } from '../../data/portfolio';

const skillCategories = [
  { id: 'languages', name: 'Languages', icon: '{ }' },
  { id: 'frontend', name: 'Frontend', icon: '</>' },
  { id: 'backend', name: 'Backend', icon: '< />' },
  { id: 'databases', name: 'Databases', icon: '[DB]' },
  { id: 'tools', name: 'Tools', icon: '[T]' },
];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('languages');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentSkills = skillsData[selectedCategory as keyof typeof skillsData] || [];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-accent-500/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies I've been working with"
        />

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-3 rounded-xl font-medium text-sm md:text-base
                        transition-all duration-300 flex items-center gap-2
                        ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                            : 'bg-white/10 dark:bg-white/5 backdrop-blur-lg text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10 border border-white/20'
                        }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-xs font-mono">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="wait">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={`${selectedCategory}-${skill.name}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <motion.div
                  className="relative bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-6
                            border border-white/20 hover:border-primary-500/50
                            transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20
                                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                    </motion.div>

                    {/* Skill Name */}
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white text-center mb-3">
                      {skill.name}
                    </h3>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-200/20 dark:bg-gray-700/30 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>

                    {/* Level Percentage */}
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Tool Tip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2
                              bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900
                              px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100
                              transition-opacity pointer-events-none whitespace-nowrap"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {skill.level}% Proficiency
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-3 px-6 py-4
                        bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl
                        border border-white/20">
            <span className="text-gray-600 dark:text-gray-400">Total Skills:</span>
            <span className="font-bold text-primary-500">
              {Object.values(skillsData).flat().length} Technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
