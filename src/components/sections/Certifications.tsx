import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendar, FaCertificate } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { certificationsData } from '../../data/portfolio';

const Certifications: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 via-transparent to-primary-500/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Certifications"
          subtitle="Professional credentials that validate my expertise"
        />

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative h-full bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-6
                           border border-white/20 hover:border-primary-500/50
                           transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${cert.color}
                             flex items-center justify-center mb-4
                             group-hover:scale-110 transition-transform`}
                >
                  <cert.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-primary-500 dark:text-primary-400 font-medium mb-3">
                  {cert.issuer}
                </p>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCertificate className="w-4 h-4" />
                    <span className="truncate">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>

                {/* Verify Button */}
                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 mt-5 inline-flex items-center gap-2
                             text-sm font-medium text-primary-500
                             hover:text-primary-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Verify Credential
                  <FaExternalLinkAlt className="w-3 h-3" />
                </motion.a>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color}
                             opacity-0 group-hover:opacity-10
                             transition-opacity duration-300
                             rounded-2xl pointer-events-none`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;