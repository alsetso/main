'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';
import { siteConfig } from '@alset/config/metadata';

export function CallToAction() {
  return (
    <Section spacing="xl" className="bg-black text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Text as="h2" variant="heading" className="text-white">
          Let's Build Together
        </Text>
        <Text variant="body" className="text-gray-300 text-xl">
          Whether you're an entrepreneur looking for a partner or have an opportunity 
          to discuss, we'd love to hear from you.
        </Text>
        <div className="pt-6">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-black hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </Section>
  );
}

