import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = '',
}) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl
        bg-white/10 dark:bg-white/5
        backdrop-blur-lg
        border border-white/20 dark:border-white/10
        ${hover ? 'transition-all duration-300 hover:shadow-glow' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
    >
      {gradient && (
        <div
          className={`absolute inset-0 opacity-10 ${gradient}`}
          style={{ background: `linear-gradient(135deg, ${gradient})` }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
