import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { AlsetShapesBackground, ServiceCard, ServicesHyperlinkSentence } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Text, Container } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services',
  description: 'Alset Solutions offers comprehensive investment and growth services including business acquisition, lending, scaling partnerships, equity investment, and business transition support for Minnesota businesses.',
  path: '/services',
  keywords: [
    'Minnesota business services',
    'business acquisition Minnesota',
    'business lending Minnesota',
    'business scaling services',
    'equity investment Minnesota',
    'business transition services',
  ],
});

const services = [
  {
    slug: 'acquisition',
    title: 'Acquisition',
    description: "Acquire your business with a partner who understands Minnesota values and will preserve what you've built. We acquire businesses with respect for their legacy and a clear vision for their future.",
    color: 'blue' as const,
    shape: 'triangle' as const,
    href: '/how-it-works/joint-ventures/acquisition',
  },
  {
    slug: 'equity',
    title: 'Equity',
    description: 'Equity investment for businesses ready to accelerate. We take meaningful positions and provide strategic guidance to help you reach the next level.',
    color: 'yellow' as const,
    shape: 'diamond' as const,
    href: '/how-it-works/joint-ventures/equity',
  },
  {
    slug: 'transition',
    title: 'Transition',
    description: "Navigate business transitions with confidence. Whether it's leadership changes, ownership transfers, or strategic pivots, we provide the support and capital to make it smooth.",
    color: 'purple' as const,
    shape: 'plus' as const,
    href: '/how-it-works/joint-ventures/transition',
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
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
        headline="Our Services"
      />

      {/* Services Introduction */}
      <Section spacing="xl" className="bg-white">
        <Container size="md">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
              <p>
                At Alset Solutions, we don&apos;t just invest — we build, scale, and transform businesses.
              </p>
              <p>
                Our services are designed for Minnesota companies that are ready to grow, transition, or find the right partner for the next chapter.
              </p>
              <ServicesHyperlinkSentence />
              <p>
                We work with businesses doing over $1 million in annual sales — companies that form the backbone of Minnesota&apos;s economy. The manufacturers, service providers, and local businesses that keep our communities strong.
              </p>
              <p>
                Our approach is hands-on, patient, and built for the long term. We&apos;re not looking for quick exits or flashy headlines. We&apos;re looking to build something that lasts.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Cards Grid */}
      <Section spacing="xl" className="bg-zinc-50">
        <Container size="lg">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  href={service.href}
                  color={service.color}
                  shape={service.shape}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
