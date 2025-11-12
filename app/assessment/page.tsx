import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container } from '@alset/ui/atoms';
import { Text, Button } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Business Assessment — Assess Your Business with Alset',
  description: 'Assess your Minnesota business with Alset Solutions. We assess small to mid-size businesses doing over $1M in sales. Fair valuations, comprehensive analysis, and keeping businesses local.',
  path: '/assessment',
  keywords: [
    'business assessment Minnesota',
    'business assessment',
    'assess company',
    'business evaluation',
    'private equity assessment',
    'assess small business',
    'business analysis Minnesota',
  ],
});

export default function AssessmentPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Assessment', url: `${siteConfig.url}/assessment` },
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
        title="Ready to Assess? We're Ready to Help."
        description="We assess small to mid-size businesses in the Midwest doing over $1M in total sales. Fair valuations, comprehensive analysis, and keeping businesses local — that's the Alset way."
        service="assessment"
      />

      <Section spacing="xl" className="bg-zinc-100">
        <Container size="md">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Assessing your business is a big decision. We start with a confidential, no-pressure conversation to understand your situation and see if there's a fit.
            </Text>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="min-w-[240px]">
                  Start a Conversation
                </Button>
              </Link>
              <Link href="/valuation">
                <Button variant="secondary" size="lg" className="min-w-[240px]">
                  Get a Valuation
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
