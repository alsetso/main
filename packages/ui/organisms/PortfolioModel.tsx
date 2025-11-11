'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';

export interface PortfolioModelItem {
  title: string;
  description: string;
}

export interface PortfolioModelProps {
  title?: string;
  subtitle?: string;
  items: PortfolioModelItem[];
}

export function PortfolioModel({ 
  title = 'Our Portfolio Model',
  subtitle,
  items 
}: PortfolioModelProps) {
  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <Text as="h2" variant="heading" className="mb-6">
            {title}
          </Text>
          {subtitle && (
            <Text variant="body" className="text-gray-600 text-xl">
              {subtitle}
            </Text>
          )}
        </div>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index}>
              <Text as="h3" variant="subheading" className="mb-4">
                {item.title}
              </Text>
              <Text variant="body" className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

