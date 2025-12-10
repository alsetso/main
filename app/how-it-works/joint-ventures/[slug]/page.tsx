import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection, ServiceCard, JVComparisonBlock } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container, Text } from '@alset/ui/atoms';

type JVSlug = 'acquisition' | 'equity' | 'transition';

const jvServices: Record<JVSlug, {
  title: string;
  description: string;
  content: string;
  keywords: string[];
  contextLink: {
    label: string;
    href: string;
    color: 'blue' | 'yellow' | 'purple';
  };
  relatedServices: Array<{
    title: string;
    description: string;
    href: string;
    color: 'blue' | 'yellow' | 'purple';
    shape: 'triangle' | 'diamond' | 'plus';
  }>;
}> = {
  acquisition: {
    title: 'Acquisition JV — Business Acquisition with Alset',
    description: 'A structured acquisition partnership where Alset takes operational leadership and the owner receives liquidity through a full or majority sale, with optional ongoing equity.',
    content: 'An Acquisition Joint Venture is designed for owners who want to sell now or step out of daily operations with confidence. Instead of a traditional sale where everything changes overnight, Alset forms a dedicated JV to acquire and operate the company with long-term stability. The structure works for businesses doing $1M–$20M+ in annual revenue and can be funded through Alset capital, SBA lending, or outside partners when needed. Sellers can exit fully, retain minority equity, or continue in an advisory role. The outcome is liquidity, continuity, and a modern operator committed to keeping the business local and growing.',
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
        description: 'A growth-focused partnership where the owner remains in control while Alset invests energy, capability, and operating strength in exchange for equity.',
        href: '/how-it-works/joint-ventures/equity',
        color: 'yellow',
        shape: 'diamond',
      },
      {
        title: 'Transition',
        description: 'A multi-year, staged succession plan where ownership and leadership transfer gradually from the founder to Alset, ensuring continuity, stability, and a smooth handoff.',
        href: '/how-it-works/joint-ventures/transition',
        color: 'purple',
        shape: 'plus',
      },
    ],
  },
  equity: {
    title: 'Equity JV — Equity Partnerships with Alset',
    description: 'A growth-focused partnership where the owner remains in control while Alset invests energy, capability, and operating strength in exchange for equity.',
    content: 'An Equity Joint Venture is ideal for owners who want to keep their business but need a committed partner to scale it. No sale is required — the owner stays in control while Alset invests energy, systems, and operational expertise in exchange for an equity position, typically 10%–40% depending on contribution and needs. This model fits companies with strong demand but limited capacity, outdated operations, or untapped growth opportunities. Together, we build value, increase profitability, and expand the company while aligning incentives around shared long-term equity growth.',
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
        description: 'A structured acquisition partnership where Alset takes operational leadership and the owner receives liquidity through a full or majority sale, with optional ongoing equity.',
        href: '/how-it-works/joint-ventures/acquisition',
        color: 'blue',
        shape: 'triangle',
      },
      {
        title: 'Transition',
        description: 'A multi-year, staged succession plan where ownership and leadership transfer gradually from the founder to Alset, ensuring continuity, stability, and a smooth handoff.',
        href: '/how-it-works/joint-ventures/transition',
        color: 'purple',
        shape: 'plus',
      },
    ],
  },
  transition: {
    title: 'Transition JV — Smooth Business Transitions',
    description: 'A multi-year, staged succession plan where ownership and leadership transfer gradually from the founder to Alset, ensuring continuity, stability, and a smooth handoff.',
    content: 'A Transition Joint Venture is built for owners who want to step back gradually rather than exit all at once. Structured over 2–5 years, this model creates a clear, staged transfer of leadership, decision-making, and ownership from the founder to Alset. The result is a smooth, stable succession with no shocks to employees or customers. Transition JVs often combine partial buyouts, earn-outs, seller financing, and incremental equity transfers to match the owner\'s financial needs and timeline. This approach preserves legacy, protects culture, and ensures the business enters its next chapter with confidence.',
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
        description: 'A structured acquisition partnership where Alset takes operational leadership and the owner receives liquidity through a full or majority sale, with optional ongoing equity.',
        href: '/how-it-works/joint-ventures/acquisition',
        color: 'blue',
        shape: 'triangle',
      },
      {
        title: 'Equity',
        description: 'A growth-focused partnership where the owner remains in control while Alset invests energy, capability, and operating strength in exchange for equity.',
        href: '/how-it-works/joint-ventures/equity',
        color: 'yellow',
        shape: 'diamond',
      },
    ],
  },
};

const serviceHeroConfig: Record<JVSlug, {
  heroTitle: string;
  heroDescription: string;
}> = {
  acquisition: {
    heroTitle: "Ready to Exit? We're Ready to Acquire.",
    heroDescription: "A structured acquisition partnership where Alset takes operational leadership and the owner receives liquidity through a full or majority sale, with optional ongoing equity.",
  },
  equity: {
    heroTitle: 'Stay, Grow, and Share the Upside',
    heroDescription: 'A growth-focused partnership where the owner remains in control while Alset invests energy, capability, and operating strength in exchange for equity.',
  },
  transition: {
    heroTitle: 'A Gradual Glide Path to Retirement',
    heroDescription: 'A multi-year, staged succession plan where ownership and leadership transfer gradually from the founder to Alset, ensuring continuity, stability, and a smooth handoff.',
  },
};

export async function generateStaticParams() {
  return Object.keys(jvServices).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = jvServices[slug as JVSlug];
  
  if (!service) {
    return generatePageMetadata({
      title: 'Joint Venture Not Found',
      description: 'The requested joint venture could not be found.',
      path: '/how-it-works/joint-ventures',
    });
  }

  return generatePageMetadata({
    title: service.title,
    description: service.description,
    path: `/how-it-works/joint-ventures/${slug}`,
    keywords: [
      ...service.keywords,
      'Minnesota business',
      'Alset Solutions',
    ],
  });
}

export default async function JVPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = jvServices[slug as JVSlug];

  if (!service) {
    notFound();
  }

  const heroConfig = serviceHeroConfig[slug as JVSlug];
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'How It Works', url: `${siteConfig.url}/how-it-works` },
    { name: 'Joint Ventures', url: `${siteConfig.url}/how-it-works/joint-ventures` },
    { name: service.title.split(' — ')[0], url: `${siteConfig.url}/how-it-works/joint-ventures/${slug}` },
  ]);

  // Map slug to service type for ServiceHero
  const serviceTypeMap: Record<JVSlug, 'acquisition' | 'lending' | 'scale' | 'equity' | 'transition'> = {
    acquisition: 'acquisition',
    equity: 'equity',
    transition: 'transition',
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
        service={serviceTypeMap[slug as JVSlug]}
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

      <JVComparisonBlock />
    </>
  );
}
