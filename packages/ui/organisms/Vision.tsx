'use client';

import { Section } from '../molecules/Section';
import { Text } from '../atoms/Text';
import { siteConfig } from '@config/metadata';

export interface VisionProps {
  title?: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Vision({ 
  title = 'Our Vision',
  description,
  ctaText = 'Work With Us',
  ctaHref 
}: VisionProps) {
  const href = ctaHref || `mailto:${siteConfig.contact.email}`;

  return (
    <Section spacing="xl">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Text as="h2" variant="heading" className="mb-6">
          {title}
        </Text>
        <Text variant="body" className="text-gray-600 text-xl leading-relaxed">
          {description}
        </Text>
        <div className="pt-8">
          <a
            href={href}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-black text-white hover:bg-gray-800 transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </Section>
  );
}

