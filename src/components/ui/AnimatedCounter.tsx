import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  delay = 0,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const delayTimeout = setTimeout(() => {
        let start = 0;
        const end = target;
        const incrementTime = (duration * 1000) / end;
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= end) {
            clearInterval(timer);
          }
        }, incrementTime);

        return () => clearInterval(timer);
      }, delay * 1000);

      return () => clearTimeout(delayTimeout);
    }
  }, [isInView, target, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
