'use client';

import Link from 'next/link';
import { Text } from '../atoms/Text';

export interface ServiceContentSectionProps {
  description: string;
  contextLink?: {
    label: string;
    href: string;
    color: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  };
  className?: string;
}

const colorClasses = {
  blue: {
    border: 'border-blue-500',
    text: 'text-blue-600',
    hover: 'hover:text-blue-700',
    bg: 'bg-blue-500',
  },
  green: {
    border: 'border-green-500',
    text: 'text-green-600',
    hover: 'hover:text-green-700',
    bg: 'bg-green-500',
  },
  red: {
    border: 'border-red-500',
    text: 'text-red-600',
    hover: 'hover:text-red-700',
    bg: 'bg-red-500',
  },
  yellow: {
    border: 'border-yellow-500',
    text: 'text-yellow-600',
    hover: 'hover:text-yellow-700',
    bg: 'bg-yellow-500',
  },
  purple: {
    border: 'border-purple-500',
    text: 'text-purple-600',
    hover: 'hover:text-purple-700',
    bg: 'bg-purple-500',
  },
};

export function ServiceContentSection({ 
  description, 
  contextLink,
  className = ''
}: ServiceContentSectionProps) {
  const colors = contextLink ? colorClasses[contextLink.color] : null;

  return (
    <div className={`bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Context Link - Inline with colored accent */}
        {contextLink && colors && (
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className={`w-1 h-6 ${colors.bg} flex-shrink-0`} />
              <div className="flex-1">
                <Text variant="body" className="text-sm text-gray-500 mb-1">
                  Part of our
                </Text>
                <Link href={contextLink.href} className="inline-block">
                  <Text variant="body" className={`text-base font-semibold ${colors.text} ${colors.hover} transition-colors`}>
                    {contextLink.label} →
                  </Text>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="prose prose-lg max-w-none">
          <Text variant="body" className="text-base md:text-lg text-gray-700 leading-relaxed">
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}

