'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Text } from '../atoms/Text';

export interface ContentBlockProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  emphasis?: boolean;
}

export function ContentBlock({ 
  children, 
  size = 'md',
  className = '',
  emphasis = false
}: ContentBlockProps) {
  const sizeStyles = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl',
    lg: 'text-xl md:text-2xl',
    xl: 'text-2xl md:text-3xl',
  };

  const emphasisStyles = emphasis 
    ? 'font-medium text-gray-900' 
    : 'text-gray-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${className}`}
    >
      <Text
        variant="body"
        className={`${sizeStyles[size]} ${emphasisStyles} leading-relaxed`}
      >
        {children}
      </Text>
    </motion.div>
  );
}

