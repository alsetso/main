import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection, ServiceCard } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container, Text } from '@alset/ui/atoms';

type GrowthTeamSlug = 'lending' | 'scale';

const growthTeamServices: Record<GrowthTeamSlug, {
  title: string;
  description: string;
  content: string;
  keywords: string[];
  contextLink: {
    label: string;
    href: string;
    color: 'green' | 'red';
  };
  relatedServices: Array<{
    title: string;
    description: string;
    href: string;
    color: 'green' | 'red';
    shape: 'square' | 'circle';
  }>;
}> = {
  lending: {
    title: 'Business Lending — Access Capital for Your Business',
    description: 'Access business financing and capital solutions through Alset Solutions. We help Minnesota businesses connect with lenders and secure the funding they need to grow.',
    content: 'Alset Solutions helps Minnesota businesses access the capital they need to grow through our lending facilitation services, part of our comprehensive inhouse growth team offering. We understand that securing the right financing—whether it\'s working capital, equipment loans, SBA loans, or expansion capital—can be challenging for growing businesses. That\'s why we work as your strategic partner to connect you with the right lenders, prepare compelling loan applications, and structure financing solutions that align with your growth plans. Our team has deep relationships with SBA lenders, commercial banks, alternative lenders, and private capital sources across Minnesota and the Midwest. We help you navigate the lending landscape, identify the best financing options for your situation, prepare documentation, and negotiate terms that support your business objectives. Beyond just securing capital, we ensure your financing strategy integrates with your overall growth plan, helping you use capital efficiently to drive revenue, improve operations, and build long-term value. Whether you need funding for expansion, equipment, inventory, technology, or working capital, we help you access the right financing at the right time.',
    keywords: [
      'business financing',
      'business loans Minnesota',
      'capital access',
      'business funding',
      'commercial lending',
      'SBA loans',
    ],
    contextLink: {
      label: 'Inhouse Growth Team',
      href: '/how-it-works/inhouse-growth-team',
      color: 'green',
    },
    relatedServices: [
      {
        title: 'Scale',
        description: 'Growth partnerships that combine capital with operational expertise. We help you scale efficiently, sustainably, and with the right technology infrastructure.',
        href: '/how-it-works/inhouse-growth-team/scale',
        color: 'red',
        shape: 'circle',
      },
    ],
  },
  scale: {
    title: 'Scale Your Business — Growth Partnership with Alset',
    description: 'Partner with Alset Solutions to scale your business. We provide capital, technology, marketing, and strategic support to help Minnesota businesses grow.',
    content: 'Alset Solutions runs a full-stack growth agency that helps Minnesota business owners scale without giving up equity. Through our inhouse growth team, we provide the capital, technology, marketing, operations, and strategic support needed to transform good businesses into great ones—all while you maintain 100% ownership. We don\'t do vague consulting or one-off projects. Instead, we work inside your business, building systems, training teams, and implementing solutions that generate measurable results. Our comprehensive approach covers marketing and brand growth—from digital marketing and SEO to customer acquisition funnels and retention programs; technology and automation—integrating software, automating processes, and turning inefficiencies into profit; operational performance—rebuilding operations to run smoother, faster, and stronger; revenue acceleration—optimizing sales processes, pricing strategies, and conversion rates; and strategic direction—planning the next 12, 24, and 36 months so your business grows by design. We measure everything, focus on what moves revenue, and build systems that work long after we\'re done. If your business has potential but needs the right team, systems, and resources to unlock it, we\'re your growth partner.',
    keywords: [
      'business growth partnership',
      'scale business Minnesota',
      'growth capital',
      'business scaling services',
      'strategic partnership',
      'business growth support',
      'Minnesota business growth',
    ],
    contextLink: {
      label: 'Inhouse Growth Team',
      href: '/how-it-works/inhouse-growth-team',
      color: 'red',
    },
    relatedServices: [
      {
        title: 'Lending',
        description: 'Strategic business financing that supports growth without compromising your vision. We provide capital solutions tailored to your specific needs and timeline.',
        href: '/how-it-works/inhouse-growth-team/lending',
        color: 'green',
        shape: 'square',
      },
    ],
  },
};

const serviceHeroConfig: Record<GrowthTeamSlug, {
  heroTitle: string;
  heroDescription: string;
}> = {
  lending: {
    heroTitle: 'Access the Capital You Need to Grow',
    heroDescription: 'We help Minnesota businesses connect with lenders and secure financing solutions that support growth and operations.',
  },
  scale: {
    heroTitle: 'Scale Your Business with a Partner',
    heroDescription: "We don't just write checks — we help build what comes next. Through our growth partnership model, we provide capital, technology, and strategic support to help your business scale.",
  },
};

export async function generateStaticParams() {
  return Object.keys(growthTeamServices).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = growthTeamServices[slug as GrowthTeamSlug];
  
  if (!service) {
    return generatePageMetadata({
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
      path: '/how-it-works/inhouse-growth-team',
    });
  }

  return generatePageMetadata({
    title: service.title,
    description: service.description,
    path: `/how-it-works/inhouse-growth-team/${slug}`,
    keywords: [
      ...service.keywords,
      'Minnesota business',
      'Alset Solutions',
    ],
  });
}

export default async function GrowthTeamServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = growthTeamServices[slug as GrowthTeamSlug];

  if (!service) {
    notFound();
  }

  const heroConfig = serviceHeroConfig[slug as GrowthTeamSlug];
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'How It Works', url: `${siteConfig.url}/how-it-works` },
    { name: 'Inhouse Growth Team', url: `${siteConfig.url}/how-it-works/inhouse-growth-team` },
    { name: service.title.split(' — ')[0], url: `${siteConfig.url}/how-it-works/inhouse-growth-team/${slug}` },
  ]);

  // Map slug to service type for ServiceHero
  const serviceTypeMap: Record<GrowthTeamSlug, 'lending' | 'scale'> = {
    lending: 'lending',
    scale: 'scale',
  };

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
        service={serviceTypeMap[slug as GrowthTeamSlug]}
      />

      <ServiceContentSection
        description={service.content}
        contextLink={service.contextLink}
      />

      {/* Related Services */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <Section spacing="xl" className="bg-white">
          <Container size="lg">
            <div className="max-w-6xl mx-auto">
              <Text as="h2" variant="subheading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Other Growth Team Services
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
