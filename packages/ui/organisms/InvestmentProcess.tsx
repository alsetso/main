'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface InvestmentProcessProps {
  title?: string;
  steps: ProcessStep[];
}

export function InvestmentProcess({ 
  title = 'Our Investment Process',
  steps 
}: InvestmentProcessProps) {
  return (
    <Section spacing="xl" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Text as="h2" variant="heading">
            {title}
          </Text>
          <Text variant="body" className="text-gray-600 text-xl mt-4">
            How we evaluate and structure partnerships
          </Text>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <Text as="h3" variant="subheading" className="mb-4 text-xl">
                  {step.title}
                </Text>
                <Text variant="body" className="text-gray-600 leading-relaxed">
                  {step.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

