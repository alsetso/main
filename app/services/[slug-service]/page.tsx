import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection, ServiceCard, JVComparisonBlock } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container, Text } from '@alset/ui/atoms';

// This file is now empty - lending and scale have been moved to /growth-team
type ServiceSlug = never;

const services: Record<ServiceSlug, {
  title: string;
  description: string;
  content: string;
  keywords: string[];
  contextLink: {
    label: string;
    href: string;
    color: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  };
  relatedServices?: Array<{
    title: string;
    description: string;
    href: string;
    color: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
    shape: 'triangle' | 'square' | 'circle' | 'diamond' | 'plus';
  }>;
}> = {};

const serviceHeroConfig: Record<ServiceSlug, {
  heroTitle: string;
  heroDescription: string;
}> = {};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    'slug-service': slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ 'slug-service': string }> }): Promise<Metadata> {
  const { 'slug-service': slug } = await params;
  const service = services[slug as ServiceSlug];
  
  if (!service) {
    return generatePageMetadata({
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
      path: '/services',
    });
  }

  return generatePageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    keywords: [
      ...service.keywords,
      'Minnesota business',
      'Alset Solutions',
    ],
  });
}

export default async function ServicePage({ params }: { params: Promise<{ 'slug-service': string }> }) {
  const { 'slug-service': slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  const heroConfig = serviceHeroConfig[slug as ServiceSlug];
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: service.title.split(' — ')[0], url: `${siteConfig.url}/services/${slug}` },
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
        title={heroConfig.heroTitle}
        description={heroConfig.heroDescription}
        service={slug as ServiceSlug}
      />

      <ServiceContentSection
        description={service.content}
        contextLink={service.contextLink}
      />

      {/* JV Comparison Block - Only for Joint-Venture services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <JVComparisonBlock />
      )}

      {/* Related Services - Only for Joint-Venture services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <Section spacing="xl" className="bg-white">
          <Container size="lg">
            <div className="max-w-6xl mx-auto">
              <Text as="h2" variant="subheading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Other Joint-Venture Services
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.relatedServices.map((related) => (
                  <ServiceCard
                    key={related.href}
                    title={related.title}
                    description={related.description}
                    href={related.href}
                    color={related.color}
                    shape={related.shape}
                  />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      <OtherServicesSection currentService={slug} />
    </>
  );
}

