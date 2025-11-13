import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection, ServiceCard } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container, Text } from '@alset/ui/atoms';

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

      <ServiceContentSection
        description="Alset Solutions takes meaningful equity positions in Minnesota businesses through our joint-venture partnership model, providing both capital and strategic support while you retain control and continue to grow. Unlike traditional private equity firms that seek majority control, we partner with business owners who want a strategic investor that brings operational expertise, technology resources, and growth systems—not just capital. Our equity partnerships are structured to align incentives: we succeed when you succeed. As equity partners, we provide access to our in-house growth teams, technology resources, marketing capabilities, and strategic guidance while respecting your vision and maintaining your leadership role. This model is ideal for established Minnesota businesses that need capital for expansion, technology upgrades, market expansion, or operational improvements but want to maintain ownership and control. We work with businesses across industries, focusing on companies with strong fundamentals, growth potential, and alignment with our values of building enduring Minnesota enterprises."
        contextLink={{
          label: 'Joint-Venture Partnerships',
          href: '/how-it-works/joint-ventures',
          color: 'yellow',
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
                title="Acquisition"
                description="Acquire established Minnesota businesses through joint-venture partnerships with qualified capital partners for long-term success."
                href="/acquisition"
                color="blue"
                shape="triangle"
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

      <OtherServicesSection currentService="equity" />
    </>
  );
}

