import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection, ServiceCard } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container, Text } from '@alset/ui/atoms';

type ServiceSlug = 'acquisition' | 'lending' | 'scale' | 'equity' | 'transition';

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
}> = {
  acquisition: {
    title: 'Business Acquisition — Acquire Your Business with Alset',
    description: 'Acquire your Minnesota business with Alset Solutions. We acquire small to mid-size businesses doing over $1M in sales. Fair valuations, comprehensive analysis, and keeping businesses local.',
    content: 'Alset Solutions acquires established Minnesota businesses through carefully structured joint-venture partnerships with qualified capital partners. When a business is listed for sale or succession, we form strategic partnerships with individual investors, family offices, SBA lenders, and industry leaders to purchase companies positioned for long-term success. Alset retains majority ownership and operational control, bringing our proven expertise in operational efficiency, technology integration, marketing acceleration, and systems development to drive sustainable growth. We focus on businesses doing over $1M in total sales, ensuring fair valuations, comprehensive analysis, and keeping businesses local to Minnesota. Our acquisition process begins with a confidential, no-pressure conversation to understand your situation, assess fit, and explore how we can help transition your business to its next phase of growth while preserving its legacy and community impact.',
    keywords: [
      'business acquisition Minnesota',
      'business acquisition',
      'acquire company',
      'business evaluation',
      'private equity acquisition',
      'acquire small business',
      'business analysis Minnesota',
    ],
    contextLink: {
      label: 'Joint-Venture Partnerships',
      href: '/how-it-works/joint-ventures',
      color: 'blue',
    },
    relatedServices: [
      {
        title: 'Equity',
        description: 'Take meaningful equity positions in Minnesota businesses, providing capital and strategic support while you retain control and grow.',
        href: '/services/equity',
        color: 'yellow',
        shape: 'diamond',
      },
      {
        title: 'Transition',
        description: 'Navigate complex transitions—ownership succession, operational restructuring, leadership changes—with capital and expertise.',
        href: '/services/transition',
        color: 'purple',
        shape: 'plus',
      },
    ],
  },
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
  },
  equity: {
    title: 'Equity Investment — Equity Partnerships with Alset',
    description: 'Equity investment and partnerships with Alset Solutions. We take meaningful equity positions in Minnesota businesses, providing capital and strategic support for growth.',
    content: 'Alset Solutions takes meaningful equity positions in Minnesota businesses through our joint-venture partnership model, providing both capital and strategic support while you retain control and continue to grow. Unlike traditional private equity firms that seek majority control, we partner with business owners who want a strategic investor that brings operational expertise, technology resources, and growth systems—not just capital. Our equity partnerships are structured to align incentives: we succeed when you succeed. As equity partners, we provide access to our in-house growth teams, technology resources, marketing capabilities, and strategic guidance while respecting your vision and maintaining your leadership role. This model is ideal for established Minnesota businesses that need capital for expansion, technology upgrades, market expansion, or operational improvements but want to maintain ownership and control. We work with businesses across industries, focusing on companies with strong fundamentals, growth potential, and alignment with our values of building enduring Minnesota enterprises.',
    keywords: [
      'equity investment',
      'equity partnership',
      'business equity',
      'private equity',
      'equity financing',
      'minority stake',
    ],
    contextLink: {
      label: 'Joint-Venture Partnerships',
      href: '/how-it-works/joint-ventures',
      color: 'yellow',
    },
    relatedServices: [
      {
        title: 'Acquisition',
        description: 'Acquire established Minnesota businesses through joint-venture partnerships with qualified capital partners for long-term success.',
        href: '/services/acquisition',
        color: 'blue',
        shape: 'triangle',
      },
      {
        title: 'Transition',
        description: 'Navigate complex transitions—ownership succession, operational restructuring, leadership changes—with capital and expertise.',
        href: '/services/transition',
        color: 'purple',
        shape: 'plus',
      },
    ],
  },
  transition: {
    title: 'Business Transition — Smooth Business Transitions',
    description: 'Business transition services for Minnesota businesses. We help manage ownership transitions, operational restructuring, and organizational changes for sustainable growth.',
    content: 'Alset Solutions helps Minnesota businesses navigate complex transitions—whether it\'s ownership succession, operational restructuring, leadership changes, or organizational transformation. Through our joint-venture partnership model, we provide the capital, strategic guidance, and operational expertise needed to manage change while preserving business continuity and growth momentum. We understand that transitions are critical moments that can make or break a business, which is why we focus on careful planning, clear communication, and systematic execution. Our transition services include ownership transfer planning, leadership development and succession, operational restructuring and optimization, technology and systems modernization, team alignment and culture preservation, and strategic repositioning for new market conditions. We work closely with business owners, family businesses, and management teams to ensure transitions happen smoothly, with minimal disruption to operations, customers, and employees. Whether you\'re planning a generational transfer, responding to market changes, or restructuring for growth, we bring the resources and experience to help your business emerge stronger on the other side.',
    keywords: [
      'business transition',
      'ownership transition',
      'business restructuring',
      'operational transition',
      'leadership transition',
      'business change management',
    ],
    contextLink: {
      label: 'Joint-Venture Partnerships',
      href: '/how-it-works/joint-ventures',
      color: 'purple',
    },
    relatedServices: [
      {
        title: 'Acquisition',
        description: 'Acquire established Minnesota businesses through joint-venture partnerships with qualified capital partners for long-term success.',
        href: '/services/acquisition',
        color: 'blue',
        shape: 'triangle',
      },
      {
        title: 'Equity',
        description: 'Take meaningful equity positions in Minnesota businesses, providing capital and strategic support while you retain control and grow.',
        href: '/services/equity',
        color: 'yellow',
        shape: 'diamond',
      },
    ],
  },
};

const serviceHeroConfig: Record<ServiceSlug, {
  heroTitle: string;
  heroDescription: string;
}> = {
  acquisition: {
    heroTitle: "Ready to Acquire? We're Ready to Help.",
    heroDescription: "We acquire small to mid-size businesses in the Midwest doing over $1M in total sales. Fair valuations, comprehensive analysis, and keeping businesses local — that's the Alset way.",
  },
  lending: {
    heroTitle: 'Access the Capital You Need to Grow',
    heroDescription: 'We help Minnesota businesses connect with lenders and secure financing solutions that support growth and operations.',
  },
  scale: {
    heroTitle: 'Scale Your Business with a Partner',
    heroDescription: "We don't just write checks — we help build what comes next. Through our growth partnership model, we provide capital, technology, and strategic support to help your business scale.",
  },
  equity: {
    heroTitle: 'Partner with Equity, Not Just Capital',
    heroDescription: 'We take meaningful equity positions in Minnesota businesses, providing capital and strategic support while you retain control and grow.',
  },
  transition: {
    heroTitle: 'Navigate Change with Confidence',
    heroDescription: 'We help Minnesota businesses manage ownership transitions, operational restructuring, and organizational changes for sustainable growth.',
  },
};

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

