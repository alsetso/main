'use client';

import Link from 'next/link';
import { Text } from '../atoms/Text';

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  color: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  shape: 'triangle' | 'square' | 'circle' | 'diamond' | 'plus';
  className?: string;
}

const colorClasses = {
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-500',
    hover: 'hover:border-blue-600',
  },
  green: {
    border: 'border-green-500',
    bg: 'bg-green-500',
    hover: 'hover:border-green-600',
  },
  red: {
    border: 'border-red-500',
    bg: 'bg-red-500',
    hover: 'hover:border-red-600',
  },
  yellow: {
    border: 'border-yellow-500',
    bg: 'bg-yellow-500',
    hover: 'hover:border-yellow-600',
  },
  purple: {
    border: 'border-purple-500',
    bg: 'bg-purple-500',
    hover: 'hover:border-purple-600',
  },
};

export function ServiceCard({ 
  title, 
  description, 
  href, 
  color, 
  shape,
  className = ''
}: ServiceCardProps) {
  const colors = colorClasses[color];

  const getShapeElement = () => {
    const baseClasses = `w-5 h-5 ${colors.bg} flex-shrink-0`;
    
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
      case 'square':
        return <div className={baseClasses} />;
      case 'circle':
        return <div className={`${baseClasses} rounded-full`} />;
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
  };

  return (
    <Link
      href={href}
      className={`group block bg-white border-2 ${colors.border} rounded-lg p-6 transition-all ${colors.hover} hover:shadow-md ${className}`}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">
          {getShapeElement()}
        </div>
        <div className="flex-1 min-w-0">
          <Text as="h3" variant="subheading" className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {title}
          </Text>
          <Text variant="body" className="text-sm text-gray-600 leading-relaxed">
            {description}
          </Text>
        </div>
        <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

