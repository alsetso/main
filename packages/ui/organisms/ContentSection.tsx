'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Text } from '../atoms/Text';

export interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'minimal';
}

export function ContentSection({ 
  title, 
  subtitle, 
  children, 
  className = '',
  variant = 'default'
}: ContentSectionProps) {
  const baseStyles = 'py-16 md:py-24';
  const variantStyles = {
    default: 'bg-white',
    highlight: 'bg-zinc-50',
    minimal: 'bg-transparent',
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 space-y-4">
            {title && (
              <Text
                as="h2"
                variant="subheading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                {title}
              </Text>
            )}
            {subtitle && (
              <Text
                variant="body"
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl"
              >
                {subtitle}
              </Text>
            )}
          </div>
        )}
        <div className="space-y-6 md:space-y-8">
          {children}
        </div>
      </div>
    </motion.section>
  );
}

