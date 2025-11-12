import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container } from '@alset/ui/atoms';
import { Text, Button } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Business Transition — Smooth Business Transitions',
  description: 'Business transition services for Minnesota businesses. We help manage ownership transitions, operational restructuring, and organizational changes for sustainable growth.',
  path: '/transition',
  keywords: [
    'business transition',
    'ownership transition',
    'business restructuring',
    'operational transition',
    'leadership transition',
    'business change management',
  ],
});

export default function TransitionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Transition', url: `${siteConfig.url}/transition` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <ServiceHero
        title="Navigate Change with Confidence"
        description="We help Minnesota businesses manage ownership transitions, operational restructuring, and organizational changes for sustainable growth."
        service="transition"
      />

      <Section spacing="xl" className="bg-zinc-100">
        <Container size="md">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Let's discuss your transition needs and explore solutions that can help your business navigate change successfully.
            </Text>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="min-w-[240px]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

