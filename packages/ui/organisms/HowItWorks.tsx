'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';
import { Card } from '../molecules/Card';
import { Container } from '../atoms/Container';

const investmentOfferings = [
  {
    title: 'Equity investments & acquisitions',
    description: 'We acquire equity positions in small to mid-size businesses, building a portfolio of companies with strong growth potential.',
  },
  {
    title: 'Portfolio company equity',
    description: 'We take meaningful equity stakes in our portfolio companies, aligning our success with the businesses we invest in.',
  },
  {
    title: 'Private investment capital pool',
    description: 'Our private investment firm deploys capital from our dedicated fund to acquire and build businesses.',
  },
  {
    title: 'Strategic partnerships',
    description: 'We structure partnerships that provide capital, expertise, and growth support to help businesses scale.',
  },
];

const growthOfferings = [
  {
    title: 'Marketing and brand strategy',
    description: 'Comprehensive brand development and marketing campaigns that drive growth.',
  },
  {
    title: 'Automation and software development',
    description: 'Custom software solutions and process automation to scale operations.',
  },
  {
    title: 'Business systems and digital infrastructure',
    description: 'Modern technology infrastructure that supports sustainable growth.',
  },
  {
    title: 'Revenue expansion and performance campaigns',
    description: 'Data-driven initiatives to accelerate revenue and optimize performance.',
  },
];

export function HowItWorks() {
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <Text as="h2" variant="heading" className="mb-6">
            How It Works
          </Text>
          <Text variant="body" className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Alset is the rare partner that can fund your business and help it scale — from concept to execution.
          </Text>
        </div>

        {/* Two Routes */}
        <div className="space-y-24 mb-24">
          {/* Private Investment Firm */}
          <div className="space-y-8">
            <div className="max-w-3xl">
              <Text as="h3" variant="subheading" className="text-3xl md:text-4xl mb-4">
                Private Investment Firm
              </Text>
              <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                We build and acquire small to mid-size businesses, taking equity positions in portfolio companies through our private investment firm&apos;s capital pool.
              </Text>
              <Text variant="body" className="text-lg text-gray-600 leading-relaxed italic">
                Our investment philosophy is simple: build long-term value through strategy, structure, and stewardship — not speculation.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {investmentOfferings.map((offering, index) => (
                <Card key={index} className="p-8" hover={false}>
                  <Text as="h4" variant="subheading" className="text-xl mb-3">
                    {offering.title}
                  </Text>
                  <Text variant="body" className="text-gray-600">
                    {offering.description}
                  </Text>
                </Card>
              ))}
            </div>
          </div>

          {/* Growth Partner */}
          <div className="space-y-8">
            <div className="max-w-3xl">
              <Text as="h3" variant="subheading" className="text-3xl md:text-4xl mb-4">
                Growth Partner
              </Text>
              <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                We don&apos;t just write checks — we help build what comes next.
              </Text>
              <Text variant="body" className="text-lg text-gray-600 leading-relaxed italic">
                Through our in-house creative and technical capabilities, we give businesses the tools and expertise they need to grow.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {growthOfferings.map((offering, index) => (
                <Card key={index} className="p-8" hover={false}>
                  <Text as="h4" variant="subheading" className="text-xl mb-3">
                    {offering.title}
                  </Text>
                  <Text variant="body" className="text-gray-600">
                    {offering.description}
                  </Text>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <Text as="h3" variant="subheading" className="text-2xl md:text-3xl mb-4">
              Our Investment Approach
            </Text>
            <Text variant="body" className="text-lg text-gray-700 max-w-3xl mx-auto">
              We focus on acquiring equity in small to mid-size businesses across various industries. Through our private investment firm&apos;s capital pool, we build a portfolio of companies where we can add value through capital, strategy, and operational support.
            </Text>
          </div>
        </div>
      </Container>
    </Section>
  );
}

