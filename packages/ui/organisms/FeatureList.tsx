'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Text } from '../atoms/Text';

export interface FeatureListProps {
  items: (string | ReactNode)[];
  title?: string;
  columns?: 1 | 2;
  className?: string;
}

export function FeatureList({ 
  items, 
  title,
  columns = 1,
  className = ''
}: FeatureListProps) {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`space-y-6 ${className}`}
    >
      {title && (
        <Text
          as="h3"
          variant="subheading"
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
        >
          {title}
        </Text>
      )}
      <ul className={`grid ${gridCols} gap-2 md:gap-2.5 list-none pl-0`}>
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex items-start group"
          >
            <div className="flex-shrink-0 mt-1.5 mr-4">
              <div className="w-2 h-2 rounded-full bg-gray-900 group-hover:bg-gray-700 transition-colors" />
            </div>
            <Text
              variant="body"
              className="text-base md:text-lg text-gray-700 leading-relaxed flex-1"
            >
              {item}
            </Text>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

