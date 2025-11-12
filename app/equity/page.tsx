import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container } from '@alset/ui/atoms';
import { Text, Button } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Equity Investment — Equity Partnerships with Alset',
  description: 'Equity investment and partnerships with Alset Solutions. We take meaningful equity positions in Minnesota businesses, providing capital and strategic support for growth.',
  path: '/equity',
  keywords: [
    'equity investment',
    'equity partnership',
    'business equity',
    'private equity',
    'equity financing',
    'minority stake',
  ],
});

export default function EquityPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Equity', url: `${siteConfig.url}/equity` },
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
        title="Partner with Equity, Not Just Capital"
        description="We take meaningful equity positions in Minnesota businesses, providing capital and strategic support while you retain control and grow."
        service="equity"
      />

      <Section spacing="xl" className="bg-zinc-100">
        <Container size="md">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed">
              If you&apos;re looking for equity investment and a strategic partner to help your business grow, let&apos;s talk.
            </Text>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="min-w-[240px]">
                  Start a Partnership
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

