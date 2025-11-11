'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';

const pillars = [
  {
    title: 'Capital',
    description: 'We provide patient, strategic capital that supports long-term growth rather than short-term exits.',
  },
  {
    title: 'Creativity',
    description: 'We bring fresh perspectives and innovative thinking to solve complex business challenges.',
  },
  {
    title: 'Technology',
    description: 'We leverage modern technology to optimize operations, enhance customer experiences, and drive scalability.',
  },
];

export function Approach() {
  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto">
        <Text as="h2" variant="heading" className="text-center mb-16">
          Our Approach
        </Text>
        
        <div className="space-y-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="border-l-4 border-black pl-8">
              <Text as="h3" variant="subheading" className="mb-4">
                {pillar.title}
              </Text>
              <Text variant="body" className="text-gray-600 text-lg">
                {pillar.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

