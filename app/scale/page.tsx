import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container } from '@alset/ui/atoms';
import { Text, Button } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Scale Your Business — Growth Partnership with Alset',
  description: 'Partner with Alset Solutions to scale your business. We provide capital, technology, marketing, and strategic support to help Minnesota businesses grow.',
  path: '/scale',
  keywords: [
    'business growth partnership',
    'scale business Minnesota',
    'growth capital',
    'business scaling services',
    'strategic partnership',
    'business growth support',
    'Minnesota business growth',
  ],
});


export default function ScalePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Scale', url: `${siteConfig.url}/scale` },
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
        title="Scale Your Business with a Partner"
        description="We don't just write checks — we help build what comes next. Through our growth partnership model, we provide capital, technology, and strategic support to help your business scale."
        service="scale"
      />

      <Section spacing="xl" className="bg-zinc-100">
        <Container size="md">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed">
              If you&apos;re looking to grow your business and need capital, technology, or strategic support, let&apos;s talk about how we can help.
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

