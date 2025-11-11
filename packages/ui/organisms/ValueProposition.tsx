'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';

export function ValueProposition() {
  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Text as="h2" variant="heading" className="mb-6">
          Who We Are
        </Text>
        <Text variant="body" className="text-gray-600 text-xl">
          Alset is a Minnesota-based private investment company that combines strategic capital 
          with creative problem-solving and cutting-edge technology. We don't just invest—we build, 
          operate, and scale businesses that create lasting value.
        </Text>
      </div>
    </Section>
  );
}

