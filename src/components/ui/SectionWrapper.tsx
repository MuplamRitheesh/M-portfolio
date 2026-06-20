import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  bgColor?: string;
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  bgColor = '',
}) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-20 px-4 sm:px-6 md:px-8 lg:px-12 ${bgColor} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
