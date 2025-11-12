import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { AlsetShapesBackground } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Text, Container } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'For the Love of Minnesota',
  description: 'We were built here — where the winters are long, the people are steady, and doing things right still matters. Minnesota taught us that hard work is the first investment, and community is the greatest return.',
  path: '/about',
  keywords: [
    'Minnesota investment company',
    'Minnesota private investment',
    'Minnesota business investment',
    'Minnesota entrepreneurs',
    'Minnesota economic development',
  ],
});

const manifestoIntro = {
  emoji: '🩵',
  title: 'The Alset Manifesto: For the Love of Minnesota',
  content: `We were raised here — where the winters are long, the work is honest, and people still wave when they pass each other on the road.

Where businesses are built on handshakes, not headlines.

Where integrity isn't an option — it's the baseline.

Minnesota has always been more than a state. It's a mindset.

A quiet determination that says: we can build anything if we do it right.

Alset Solutions was born from that belief.

We are a private investment firm and growth partner built for a new era of Minnesota business.

Our mission is simple: help good people build great companies — through capital, creativity, and code.`,
};


export default function ManifestoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Manifesto', url: `${siteConfig.url}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <AlsetShapesBackground 
        headline="Alset Manifesto"
        subtitle="For the Love of Minnesota"
      />

      {/* The Alset Manifesto Section */}
      <Section spacing="xl" className="bg-white">
        <Container size="md">
          <div className="max-w-4xl mx-auto space-y-6">
            <Text
              variant="body"
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line"
            >
              {manifestoIntro.content}
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
}
