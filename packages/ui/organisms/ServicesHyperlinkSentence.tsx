'use client';

import Link from 'next/link';
import { Text } from '../atoms/Text';

interface ServiceLink {
  text: string;
  href: string;
  color: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  shape: 'triangle' | 'square' | 'circle' | 'diamond' | 'plus';
}

const colorClasses = {
  blue: {
    text: 'text-blue-600',
    hover: 'hover:text-blue-700',
    bg: 'bg-blue-500',
  },
  green: {
    text: 'text-green-600',
    hover: 'hover:text-green-700',
    bg: 'bg-green-500',
  },
  red: {
    text: 'text-red-600',
    hover: 'hover:text-red-700',
    bg: 'bg-red-500',
  },
  yellow: {
    text: 'text-yellow-600',
    hover: 'hover:text-yellow-700',
    bg: 'bg-yellow-500',
  },
  purple: {
    text: 'text-purple-600',
    hover: 'hover:text-purple-700',
    bg: 'bg-purple-500',
  },
};

const serviceLinks: ServiceLink[] = [
  {
    text: 'sell your business',
    href: '/services/acquisition',
    color: 'blue',
    shape: 'triangle',
  },
  {
    text: 'secure financing',
    href: '/services/lending',
    color: 'green',
    shape: 'square',
  },
  {
    text: 'scale operations',
    href: '/services/scale',
    color: 'red',
    shape: 'circle',
  },
  {
    text: 'give up equity for growth',
    href: '/services/equity',
    color: 'yellow',
    shape: 'diamond',
  },
  {
    text: 'navigate a transition',
    href: '/services/transition',
    color: 'purple',
    shape: 'plus',
  },
];

const getShapeIcon = (shape: ServiceLink['shape'], color: ServiceLink['color']) => {
  const bgClass = colorClasses[color].bg;
  const baseClasses = `w-2 h-2 ${bgClass} inline-block flex-shrink-0`;
  
  switch (shape) {
    case 'triangle':
      return (
        <span 
          className={baseClasses}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
      );
    case 'square':
      return <span className={baseClasses} />;
    case 'circle':
      return <span className={`${baseClasses} rounded-full`} />;
    case 'diamond':
      return (
        <span
          className={baseClasses}
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
      );
    case 'plus':
      return (
        <span
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

const getServiceTitle = (text: string): string => {
  const titleMap: Record<string, string> = {
    'sell your business': 'Acquisition',
    'secure financing': 'Lending',
    'scale operations': 'Scale',
    'give up equity for growth': 'Equity',
    'navigate a transition': 'Transition',
  };
  return titleMap[text] || text;
};

export function ServicesHyperlinkSentence() {
  return (
    <p>
      Whether you're looking to{' '}
      {serviceLinks.map((link, index) => {
        const colors = colorClasses[link.color];
        
        return (
          <span key={link.href} className="relative inline-block">
            <Link
              href={link.href}
              className={`underline transition-colors group touch-manipulation ${colors.text} ${colors.hover}`}
            >
              {link.text}
            </Link>
            {/* Popup tooltip - positioned relative to parent span */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
              <span className="bg-black text-white text-xs font-medium px-3 py-2 rounded shadow-xl flex items-center gap-2 inline-block">
                {getShapeIcon(link.shape, link.color)}
                {getServiceTitle(link.text)}
              </span>
              {/* Arrow pointer */}
              <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
            </span>
            {index < serviceLinks.length - 1 && (index === serviceLinks.length - 2 ? ', or ' : ', ')}
          </span>
        );
      })}
      {' '}we bring the capital, creativity, and technology to make it happen.
    </p>
  );
}

