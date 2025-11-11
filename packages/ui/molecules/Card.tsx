'use client';

import { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface CardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true, ...props }: CardProps) {
  const baseStyles = 'bg-white rounded-lg border border-gray-200 overflow-hidden';
  
  if (!hover) {
    return (
      <div className={`${baseStyles} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

