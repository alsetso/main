import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection, ServiceCard, JVComparisonBlock } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container, Text } from '@alset/ui/atoms';

// This file is now empty - lending and scale have been moved to /growth-team
type ServiceSlug = never;

type Service = {
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
};

const services: Record<ServiceSlug, Service> = {} as Record<ServiceSlug, Service>;

const serviceHeroConfig: Record<ServiceSlug, {
  heroTitle: string;
  heroDescription: string;
}> = {} as Record<ServiceSlug, { heroTitle: string; heroDescription: string }>;

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    'slug-service': slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ 'slug-service': string }> }): Promise<Metadata> {
  const { 'slug-service': slug } = await params;
  const service: Service | undefined = services[slug as ServiceSlug];
  
  if (!service) {
    return generatePageMetadata({
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
      path: '/services',
    });
  }

  // Type assertion needed because ServiceSlug is 'never' but service exists after null check
  const validService = service as Service;

  return generatePageMetadata({
    title: validService.title,
    description: validService.description,
    path: `/services/${slug}`,
    keywords: [
      ...validService.keywords,
      'Minnesota business',
      'Alset Solutions',
    ],
  });
}

export default async function ServicePage({ params }: { params: Promise<{ 'slug-service': string }> }) {
  const { 'slug-service': slug } = await params;
  const service: Service | undefined = services[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  // Type assertion needed because ServiceSlug is 'never' but service exists after null check
  const validService = service as Service;

  const heroConfig: { heroTitle: string; heroDescription: string } | undefined = serviceHeroConfig[slug as ServiceSlug];
  
  if (!heroConfig) {
    notFound();
  }
  
  // Type assertion needed because ServiceSlug is 'never' but heroConfig exists after null check
  const validHeroConfig = heroConfig as { heroTitle: string; heroDescription: string };
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: validService.title.split(' — ')[0], url: `${siteConfig.url}/services/${slug}` },
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
        title={validHeroConfig.heroTitle}
        description={validHeroConfig.heroDescription}
        service={slug as ServiceSlug}
      />

      <ServiceContentSection
        description={validService.content}
        contextLink={validService.contextLink}
      />

      {/* JV Comparison Block - Only for Joint-Venture services */}
      {validService.relatedServices && validService.relatedServices.length > 0 && (
        <JVComparisonBlock />
      )}

      {/* Related Services - Only for Joint-Venture services */}
      {validService.relatedServices && validService.relatedServices.length > 0 && (
        <Section spacing="xl" className="bg-white">
          <Container size="lg">
            <div className="max-w-6xl mx-auto">
              <Text as="h2" variant="subheading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Other Joint-Venture Services
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {validService.relatedServices.map((related) => (
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

