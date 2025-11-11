'use client';

import { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@alset/ui/motion/variants';
import { Container } from '../atoms/Container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

export function Section({ 
  children, 
  className = '', 
  containerSize = 'lg',
  spacing = 'lg',
  animate = true,
  ...props 
}: SectionProps) {
  const spacings = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-48',
  };

  const content = (
    <section 
      className={`${spacings[spacing]} ${className}`}
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      {content}
    </motion.div>
  );
}

