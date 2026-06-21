import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaBrain } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { projectsData } from '../../data/portfolio';

const projectCategories = [
  { id: 'all', name: 'All', icon: FaCode },
  { id: 'fullstack', name: 'Full Stack', icon: FaCode },
  { id: 'backend', name: 'Backend', icon: FaServer },
  { id: 'ai', name: 'AI/ML', icon: FaBrain },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 via-transparent to-primary-500/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work that showcases my skills"
        />

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {projectCategories.map((category, index) => (
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
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="h-full bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl
                              border border-white/20 overflow-hidden flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0.6,
                      }}
                    />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500
                                    rounded-full text-white text-xs font-medium">
                        Featured
                      </div>
                    )}

                    {/* Quick Links Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-lg rounded-full
                                   text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-lg rounded-full
                                   text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      {project.title}
                      {project.featured && (
                        <span className="text-xs px-2 py-1 bg-primary-500/20 text-primary-500 rounded-full">
                          Featured
                        </span>
                      )}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary-500/10 text-primary-500 dark:text-primary-400
                                   rounded-lg border border-primary-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-gray-500/10 text-gray-500 dark:text-gray-400
                                       rounded-lg border border-gray-500/20">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex-1 mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                                   bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900
                                   rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaGithub />
                          Code
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                                   bg-gradient-to-r from-primary-500 to-accent-500
                                   text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/muplamritheesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 dark:bg-white/5
                     backdrop-blur-lg border border-white/20 rounded-xl
                     text-gray-700 dark:text-gray-300 font-medium
                     hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
