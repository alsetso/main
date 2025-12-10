'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Text } from '../atoms/Text';
import { Section } from '../molecules/Section';

export interface JVComparisonBlockProps {
  className?: string;
}

const jvOptions = [
  {
    title: 'Acquisition JV',
    description: 'Choose an Acquisition JV if you want liquidity now and a strong operator to take over.',
    href: '/how-it-works/joint-ventures/acquisition',
    color: 'blue' as const,
    shape: 'triangle' as const,
  },
  {
    title: 'Equity JV',
    description: 'Choose an Equity JV if you want to keep running your business but need a partner to grow.',
    href: '/how-it-works/joint-ventures/equity',
    color: 'yellow' as const,
    shape: 'diamond' as const,
  },
  {
    title: 'Transition JV',
    description: 'Choose a Transition JV if you want to step back gradually over a few years.',
    href: '/how-it-works/joint-ventures/transition',
    color: 'purple' as const,
    shape: 'plus' as const,
  },
];

const colorClasses = {
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-500',
    text: 'text-blue-600',
  },
  yellow: {
    border: 'border-yellow-500',
    bg: 'bg-yellow-500',
    text: 'text-yellow-600',
  },
  purple: {
    border: 'border-purple-500',
    bg: 'bg-purple-500',
    text: 'text-purple-600',
  },
};

function getShapeElement(shape: 'triangle' | 'diamond' | 'plus', color: 'blue' | 'yellow' | 'purple') {
  const colors = colorClasses[color];
  const baseClasses = `w-6 h-6 ${colors.bg} flex-shrink-0`;
  
  switch (shape) {
    case 'triangle':
      return (
        <div
          className={baseClasses}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
      );
    case 'diamond':
      return (
        <div
          className={baseClasses}
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
      );
    case 'plus':
      return (
        <div
          className={baseClasses}
          style={{
            clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)',
          }}
        />
      );
    default:
      return null;
  }
}

export function JVComparisonBlock({ className = '' }: JVComparisonBlockProps) {
  return (
    <Section spacing="xl" className={`bg-zinc-50 ${className}`} containerSize="lg" animate={false}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <Text
            as="h2"
            variant="subheading"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          >
            Which JV Structure Fits You Best?
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jvOptions.map((option, index) => {
            const colors = colorClasses[option.color];
            
            return (
              <motion.div
                key={option.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={option.href}
                  className={`group block bg-white border-2 ${colors.border} rounded-lg p-6 h-full transition-all hover:shadow-lg hover:border-opacity-80`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {getShapeElement(option.shape, option.color)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Text
                        as="h3"
                        variant="subheading"
                        className={`text-lg font-semibold ${colors.text} mb-3 group-hover:opacity-80 transition-opacity`}
                      >
                        {option.title}
                      </Text>
                      <Text
                        variant="body"
                        className="text-sm text-gray-600 leading-relaxed"
                      >
                        {option.description}
                      </Text>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Text
                      variant="body"
                      className="text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors"
                    >
                      Learn more
                    </Text>
                    <svg
                      className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
