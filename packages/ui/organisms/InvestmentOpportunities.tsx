'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';
import { Card } from '../molecules/Card';

export interface Opportunity {
  title: string;
  industry: string;
  description: string;
  requirements?: string[];
  status: 'open' | 'closed' | 'coming-soon';
}

export interface InvestmentOpportunitiesProps {
  title?: string;
  opportunities: Opportunity[];
}

export function InvestmentOpportunities({ 
  title = 'Open Investment Opportunities',
  opportunities 
}: InvestmentOpportunitiesProps) {
  const statusColors = {
    open: 'bg-green-100 text-green-800 border-green-300',
    closed: 'bg-gray-100 text-gray-800 border-gray-300',
    'coming-soon': 'bg-blue-100 text-blue-800 border-blue-300',
  };

  const statusLabels = {
    open: 'Open',
    closed: 'Closed',
    'coming-soon': 'Coming Soon',
  };

  return (
    <Section spacing="xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Text as="h2" variant="heading">
            {title}
          </Text>
          <Text variant="body" className="text-gray-600 text-xl mt-4">
            Current opportunities for strategic partnerships and investments
          </Text>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Text as="h3" variant="subheading" className="text-2xl mb-2">
                    {opportunity.title}
                  </Text>
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
                    {opportunity.industry}
                  </span>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusColors[opportunity.status]}`}>
                  {statusLabels[opportunity.status]}
                </span>
              </div>
              
              <Text variant="body" className="text-gray-600 mb-6">
                {opportunity.description}
              </Text>
              
              {opportunity.requirements && opportunity.requirements.length > 0 && (
                <div className="pt-4 border-t border-gray-200">
                  <Text variant="body" className="font-semibold mb-2 text-sm">
                    Ideal Profile:
                  </Text>
                  <ul className="space-y-1">
                    {opportunity.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-black mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

