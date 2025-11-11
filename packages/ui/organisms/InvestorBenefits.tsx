'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';
import { Card } from '../molecules/Card';

export interface Benefit {
  title: string;
  description: string;
}

export interface InvestorBenefitsProps {
  title?: string;
  benefits: Benefit[];
}

export function InvestorBenefits({ 
  title = 'Why Partner With Alset',
  benefits 
}: InvestorBenefitsProps) {
  return (
    <Section spacing="xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Text as="h2" variant="heading">
            {title}
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center">
              <Text as="h3" variant="subheading" className="mb-4 text-xl">
                {benefit.title}
              </Text>
              <Text variant="body" className="text-gray-600">
                {benefit.description}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

