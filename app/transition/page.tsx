import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection, ServiceCard } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container, Text } from '@alset/ui/atoms';

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

      <ServiceContentSection
        description="Alset Solutions helps Minnesota businesses navigate complex transitions—whether it's ownership succession, operational restructuring, leadership changes, or organizational transformation. Through our joint-venture partnership model, we provide the capital, strategic guidance, and operational expertise needed to manage change while preserving business continuity and growth momentum. We understand that transitions are critical moments that can make or break a business, which is why we focus on careful planning, clear communication, and systematic execution. Our transition services include ownership transfer planning, leadership development and succession, operational restructuring and optimization, technology and systems modernization, team alignment and culture preservation, and strategic repositioning for new market conditions. We work closely with business owners, family businesses, and management teams to ensure transitions happen smoothly, with minimal disruption to operations, customers, and employees. Whether you're planning a generational transfer, responding to market changes, or restructuring for growth, we bring the resources and experience to help your business emerge stronger on the other side."
        contextLink={{
          label: 'Joint-Venture Partnerships',
          href: '/how-it-works/joint-ventures',
          color: 'purple',
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
                title="Equity"
                description="Take meaningful equity positions in Minnesota businesses, providing capital and strategic support while you retain control and grow."
                href="/equity"
                color="yellow"
                shape="diamond"
              />
            </div>
          </div>
        </Container>
      </Section>

      <OtherServicesSection currentService="transition" />
    </>
  );
}

