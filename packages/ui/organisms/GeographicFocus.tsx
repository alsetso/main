'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';

export interface GeographicFocusProps {
  title?: string;
  paragraphs: string[];
}

export function GeographicFocus({ 
  title = 'Rooted in Minnesota',
  paragraphs 
}: GeographicFocusProps) {
  return (
    <Section spacing="xl" className="bg-gray-50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Text as="h2" variant="heading" className="mb-6">
          {title}
        </Text>
        {paragraphs.map((paragraph, index) => (
          <Text 
            key={index} 
            variant="body" 
            className="text-gray-600 text-xl leading-relaxed"
          >
            {paragraph}
          </Text>
        ))}
      </div>
    </Section>
  );
}

