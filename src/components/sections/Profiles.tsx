import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaFire, FaMedal, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { profilesData } from '../../data/portfolio';

const Profiles: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="profiles"
      className="py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 via-transparent to-primary-500/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Coding Profiles"
          subtitle="Track my coding journey across competitive programming platforms"
        />

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profilesData.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <motion.div
                className="relative flex flex-col h-full min-h-[320px]
                           bg-white/10 dark:bg-white/5 backdrop-blur-lg
                           rounded-2xl p-6 border border-white/20
                           hover:border-primary-500/50
                           transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.color}`}
                />

                {/* Platform Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${profile.color}
                               flex items-center justify-center`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <profile.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {profile.platform}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      @{profile.username}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3 mb-6 flex-grow">
                  {Object.entries(profile.stats).map(([key, value], i) => (
                    <div
                      key={key}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        {i === 0 && (
                          <FaTrophy className="w-3 h-3 text-yellow-500" />
                        )}
                        {i === 1 && (
                          <FaMedal className="w-3 h-3 text-blue-500" />
                        )}
                        {i === 2 && (
                          <FaFire className="w-3 h-3 text-orange-500" />
                        )}

                        {key.split(/(?=[A-Z])/).join(' ')}:
                      </span>

                      <span
                        className={`font-semibold ${
                          typeof value === 'string' &&
                          (value.includes('+') || value.includes('Star'))
                            ? 'text-primary-500'
                            : 'text-gray-900 dark:text-white'
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visit Button */}
                <motion.button
                  onClick={() =>
                    profile.url &&
                    window.open(
                      profile.url,
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }
                  className={`mt-auto w-full py-3 rounded-lg text-white text-sm font-medium
                             bg-gradient-to-r ${profile.color}
                             hover:opacity-90 transition-opacity
                             flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Profile
                  <FaExternalLinkAlt className="w-3 h-3" />
                </motion.button>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute -inset-0 bg-gradient-to-r ${profile.color}
                             opacity-0 group-hover:opacity-10
                             transition-opacity rounded-2xl pointer-events-none`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;