import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container } from '@alset/ui/atoms';
import { Text, Button } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Business Lending — Access Capital for Your Business',
  description: 'Access business financing and capital solutions through Alset Solutions. We help Minnesota businesses connect with lenders and secure the funding they need to grow.',
  path: '/lending',
  keywords: [
    'business financing',
    'business loans Minnesota',
    'capital access',
    'business funding',
    'commercial lending',
    'SBA loans',
  ],
});

export default function LendingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Lending', url: `${siteConfig.url}/lending` },
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
        title="Access the Capital You Need to Grow"
        description="We help Minnesota businesses connect with lenders and secure financing solutions that support growth and operations."
        service="lending"
      />

      <Section spacing="xl" className="bg-zinc-100">
        <Container size="md">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Let&apos;s discuss your financing needs and explore solutions that work for your business.
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

