import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { achievementsData } from '../../data/portfolio';

const Achievements: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-accent-500/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Achievements"
          subtitle="Milestones and recognition throughout my journey"
        />

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                className="relative bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-6
                          border border-white/20 hover:border-primary-500/50
                          transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Decorative Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color}
                               opacity-10 rounded-full blur-2xl transform translate-x-16 -translate-y-16
                               group-hover:opacity-20 transition-opacity`} />

                <div className="relative flex items-start gap-4">
                  {/* Icon Container */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color}
                                flex items-center justify-center shadow-lg
                                group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      {achievement.date && (
                        <span className="text-xs text-gray-600 dark:text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                          {achievement.date}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color}
                               transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left
                               hidden md:block`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
