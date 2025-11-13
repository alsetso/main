import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection, ServiceCard } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container, Text } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Business Acquisition — Acquire Your Business with Alset',
  description: 'Acquire your Minnesota business with Alset Solutions. We acquire small to mid-size businesses doing over $1M in sales. Fair valuations, comprehensive analysis, and keeping businesses local.',
  path: '/acquisition',
  keywords: [
    'business acquisition Minnesota',
    'business acquisition',
    'acquire company',
    'business evaluation',
    'private equity acquisition',
    'acquire small business',
    'business analysis Minnesota',
  ],
});

export default function AcquisitionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Acquisition', url: `${siteConfig.url}/acquisition` },
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
        title="Ready to Acquire? We're Ready to Help."
        description="We acquire small to mid-size businesses in the Midwest doing over $1M in total sales. Fair valuations, comprehensive analysis, and keeping businesses local — that's the Alset way."
        service="acquisition"
      />

      <ServiceContentSection
        description="Alset Solutions acquires established Minnesota businesses through carefully structured joint-venture partnerships with qualified capital partners. When a business is listed for sale or succession, we form strategic partnerships with individual investors, family offices, SBA lenders, and industry leaders to purchase companies positioned for long-term success. Alset retains majority ownership and operational control, bringing our proven expertise in operational efficiency, technology integration, marketing acceleration, and systems development to drive sustainable growth. We focus on businesses doing over $1M in total sales, ensuring fair valuations, comprehensive analysis, and keeping businesses local to Minnesota. Our acquisition process begins with a confidential, no-pressure conversation to understand your situation, assess fit, and explore how we can help transition your business to its next phase of growth while preserving its legacy and community impact."
        contextLink={{
          label: 'Joint-Venture Partnerships',
          href: '/how-it-works/joint-ventures',
          color: 'blue',
        }}
      />

      {/* Related Joint-Venture Services */}
      <Section spacing="xl" className="bg-white">
        <Container size="lg">
          <div className="max-w-6xl mx-auto">
            <Text as="h2" variant="subheading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Other Joint-Venture Services
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard
                title="Equity"
                description="Take meaningful equity positions in Minnesota businesses, providing capital and strategic support while you retain control and grow."
                href="/equity"
                color="yellow"
                shape="diamond"
              />
              <ServiceCard
                title="Transition"
                description="Navigate complex transitions—ownership succession, operational restructuring, leadership changes—with capital and expertise."
                href="/transition"
                color="purple"
                shape="plus"
              />
            </div>
          </div>
        </Container>
      </Section>

      <OtherServicesSection currentService="acquisition" />
    </>
  );
}
