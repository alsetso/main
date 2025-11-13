'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Text } from '../atoms/Text';

export interface ContentHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function ContentHero({ 
  title, 
  subtitle, 
  description,
  children,
  className = ''
}: ContentHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24 space-y-8 ${className}`}
    >
      {subtitle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Text
            as="h1"
            variant="subheading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            {subtitle}
          </Text>
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-6"
      >
        {description && (
          <Text
            variant="body"
            className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed"
          >
            {description}
          </Text>
        )}
        
        {children}
      </motion.div>
    </motion.div>
  );
}

