'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';

export interface Value {
  title: string;
  description: string;
}

export interface ValuesProps {
  title?: string;
  values: Value[];
  columns?: 1 | 2 | 3;
}

export function Values({ 
  title = 'Our Values', 
  values,
  columns = 2 
}: ValuesProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <Section spacing="xl" className="bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <Text as="h2" variant="heading" className="text-center mb-16">
          {title}
        </Text>
        
        <div className={`grid ${gridCols[columns]} gap-12`}>
          {values.map((value, index) => (
            <div key={index} className="space-y-4">
              <Text as="h3" variant="subheading" className="text-2xl">
                {value.title}
              </Text>
              <Text variant="body" className="text-gray-600 leading-relaxed">
                {value.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

