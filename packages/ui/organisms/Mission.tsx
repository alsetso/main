'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';

export interface MissionProps {
  title?: string;
  paragraphs: string[];
}

export function Mission({ 
  title = 'Our Mission', 
  paragraphs 
}: MissionProps) {
  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto space-y-8">
        <Text as="h2" variant="heading" className="mb-8">
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

