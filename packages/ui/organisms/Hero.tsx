'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Text } from '../atoms/Text';
import { staggerContainer, staggerItem } from '@motion/variants';

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Hero({ title, subtitle, description, children, className = '' }: HeroProps) {
  return (
    <section className={`relative min-h-[80vh] flex items-center justify-center ${className}`}>
      <Container size="lg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto space-y-8"
        >
          {subtitle && (
            <motion.div variants={staggerItem}>
              <Text variant="body" className="text-gray-600 uppercase tracking-wider font-medium">
                {subtitle}
              </Text>
            </motion.div>
          )}
          
          <motion.div variants={staggerItem}>
            <Text as="h1" variant="display" className="mb-6">
              {title}
            </Text>
          </motion.div>

          {description && (
            <motion.div variants={staggerItem}>
              <Text variant="subheading" className="text-gray-600 max-w-3xl mx-auto font-normal">
                {description}
              </Text>
            </motion.div>
          )}

          {children && (
            <motion.div variants={staggerItem} className="pt-4">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

