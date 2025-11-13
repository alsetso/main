'use client';

import Link from 'next/link';
import { Text } from '../atoms/Text';

export interface Service {
  slug: string;
  label: string;
  color: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  shape: 'triangle' | 'square' | 'circle' | 'diamond' | 'plus';
}

const allServices: Service[] = [
  {
    slug: 'acquisition',
    label: 'Acquisition',
    color: 'blue',
    shape: 'triangle',
  },
  {
    slug: 'lending',
    label: 'Lending',
    color: 'green',
    shape: 'square',
  },
  {
    slug: 'scale',
    label: 'Scale',
    color: 'red',
    shape: 'circle',
  },
  {
    slug: 'equity',
    label: 'Equity',
    color: 'yellow',
    shape: 'diamond',
  },
  {
    slug: 'transition',
    label: 'Transition',
    color: 'purple',
    shape: 'plus',
  },
];

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
};

export interface OtherServicesSectionProps {
  currentService: string;
  className?: string;
}

export function OtherServicesSection({ 
  currentService,
  className = ''
}: OtherServicesSectionProps) {
  const otherServices = allServices.filter(service => service.slug !== currentService);

  const getShapeElement = (shape: Service['shape'], color: Service['color']) => {
    const baseClasses = `w-4 h-4 ${colorClasses[color]} flex-shrink-0`;
    
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
    <div className={`bg-zinc-50 border-t border-gray-200 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="mb-6">
          <Text variant="body" className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Other Services
          </Text>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all"
            >
              {getShapeElement(service.shape, service.color)}
              <Text variant="body" className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                {service.label}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

