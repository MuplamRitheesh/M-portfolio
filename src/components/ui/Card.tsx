import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  glow?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glass = true,
  glow = false,
  gradient = false,
  onClick,
}) => {
  const baseClasses = `
    ${glass ? 'bg-white/10 dark:bg-white/5 backdrop-blur-lg' : 'bg-white dark:bg-dark-200'}
    ${glass ? 'border border-white/20 dark:border-white/10' : 'border border-gray-200 dark:border-gray-700'}
    rounded-xl overflow-hidden
    ${hover ? 'transition-all duration-300 hover:shadow-glow dark:hover:shadow-glow hover:-translate-y-2' : ''}
    ${glow ? 'shadow-glow' : ''}
    ${gradient ? 'gradient-border' : ''}
  `;

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  overlayContent?: React.ReactNode;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  className = '',
  overlay = true,
  overlayContent,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      )}
      {overlayContent && (
        <div className="absolute inset-0 flex items-center justify-center">
          {overlayContent}
        </div>
      )}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
}) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = '',
}) => {
  return (
    <h3
      className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${className}`}
    >
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = '',
}) => {
  return (
    <p className={`text-gray-600 dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
};

export default Card;
