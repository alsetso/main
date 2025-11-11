import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import {
  Hero,
  ValueProposition,
  Industries,
  Approach,
  CallToAction,
} from '@alset/ui';

export const metadata: Metadata = generatePageMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: '/',
  keywords: [
    'Minnesota investment firm',
    'technology investment',
    'private equity Minnesota',
    'portfolio management',
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero
        subtitle="Minnesota Investment Company"
        title="For the Love of Minnesota"
        description="Building and managing a diverse portfolio of enterprises across real estate, home services, and healthcare."
        className="pt-32 md:pt-40"
      />
      <ValueProposition />
      <Industries />
      <Approach />
      <CallToAction />
    </>
  );
}

