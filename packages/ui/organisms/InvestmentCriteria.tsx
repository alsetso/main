'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';

export interface Criterion {
  title: string;
  description: string;
}

export interface InvestmentCriteriaProps {
  title?: string;
  criteria: Criterion[];
}

export function InvestmentCriteria({ 
  title = 'What We Look For',
  criteria 
}: InvestmentCriteriaProps) {
  return (
    <Section spacing="xl" className="bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Text as="h2" variant="heading">
            {title}
          </Text>
          <Text variant="body" className="text-gray-600 text-xl mt-4">
            Our investment criteria and what makes a great partnership
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {criteria.map((criterion, index) => (
            <div key={index} className="space-y-4">
              <Text as="h3" variant="subheading" className="text-2xl">
                {criterion.title}
              </Text>
              <Text variant="body" className="text-gray-600 leading-relaxed">
                {criterion.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

