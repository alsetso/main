'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';
import { Card } from '../molecules/Card';

const industries = [
  {
    title: 'Real Estate',
    description: 'Strategic property investments and development projects that reshape communities and create sustainable value.',
  },
  {
    title: 'Home Services',
    description: 'Modernizing essential services through technology integration and operational excellence.',
  },
  {
    title: 'Healthcare',
    description: 'Investing in innovative healthcare solutions that improve patient outcomes and operational efficiency.',
  },
  {
    title: 'Robotics',
    description: 'Supporting automation and robotics companies that are transforming industries.',
  },
  {
    title: 'Software',
    description: 'Backing software companies building tools that solve real business problems at scale.',
  },
  {
    title: 'Innovation',
    description: 'Exploring emerging opportunities at the intersection of technology and traditional industries.',
  },
];

export function Industries() {
  return (
    <Section spacing="xl" className="bg-gray-50">
      <div className="text-center mb-16">
        <Text as="h2" variant="heading">
          Our Focus Industries
        </Text>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => (
          <Card key={index} className="p-8">
            <Text as="h3" variant="subheading" className="mb-4 text-2xl">
              {industry.title}
            </Text>
            <Text variant="body" className="text-gray-600">
              {industry.description}
            </Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}

