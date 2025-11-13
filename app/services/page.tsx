import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { AlsetShapesBackground } from '@alset/ui';
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

const servicesIntro = {
  content: `At Alset Solutions, we don't just invest — we build, scale, and transform businesses.

Our services are designed for Minnesota companies that are ready to grow, transition, or find the right partner for the next chapter.

Whether you're looking to sell your business, secure financing, scale operations, raise equity, or navigate a transition, we bring the capital, creativity, and technology to make it happen.

We work with businesses doing over $1 million in annual sales — companies that form the backbone of Minnesota's economy. The manufacturers, service providers, and local businesses that keep our communities strong.

Our approach is hands-on, patient, and built for the long term. We're not looking for quick exits or flashy headlines. We're looking to build something that lasts.`,
};

const services = [
  {
    title: 'Acquisition',
    description: "Acquire your business with a partner who understands Minnesota values and will preserve what you've built. We acquire businesses with respect for their legacy and a clear vision for their future.",
  },
  {
    title: 'Lending',
    description: 'Strategic business financing that supports growth without compromising your vision. We provide capital solutions tailored to your specific needs and timeline.',
  },
  {
    title: 'Scale',
    description: 'Growth partnerships that combine capital with operational expertise. We help you scale efficiently, sustainably, and with the right technology infrastructure.',
  },
  {
    title: 'Equity',
    description: 'Equity investment for businesses ready to accelerate. We take meaningful positions and provide strategic guidance to help you reach the next level.',
  },
  {
    title: 'Transition',
    description: "Navigate business transitions with confidence. Whether it's leadership changes, ownership transfers, or strategic pivots, we provide the support and capital to make it smooth.",
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
            <Text
              variant="body"
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line"
            >
              {servicesIntro.content}
            </Text>
          </div>
        </Container>
      </Section>

      {/* Services List */}
      <Section spacing="xl" className="bg-zinc-50">
        <Container size="md">
          <div className="max-w-4xl mx-auto space-y-12">
            {services.map((service, index) => (
              <div key={index} className="border-l-4 border-black pl-8">
                <Text as="h3" variant="subheading" className="mb-4 text-2xl md:text-3xl">
                  {service.title}
                </Text>
                <Text variant="body" className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  {service.description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

