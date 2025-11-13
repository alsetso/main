import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection } from '@alset/ui';

export const metadata: Metadata = generatePageMetadata({
  title: 'Scale Your Business — Growth Partnership with Alset',
  description: 'Partner with Alset Solutions to scale your business. We provide capital, technology, marketing, and strategic support to help Minnesota businesses grow.',
  path: '/scale',
  keywords: [
    'business growth partnership',
    'scale business Minnesota',
    'growth capital',
    'business scaling services',
    'strategic partnership',
    'business growth support',
    'Minnesota business growth',
  ],
});


export default function ScalePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Scale', url: `${siteConfig.url}/scale` },
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
        title="Scale Your Business with a Partner"
        description="We don't just write checks — we help build what comes next. Through our growth partnership model, we provide capital, technology, and strategic support to help your business scale."
        service="scale"
      />

      <ServiceContentSection
        description="Alset Solutions runs a full-stack growth agency that helps Minnesota business owners scale without giving up equity. Through our inhouse growth team, we provide the capital, technology, marketing, operations, and strategic support needed to transform good businesses into great ones—all while you maintain 100% ownership. We don't do vague consulting or one-off projects. Instead, we work inside your business, building systems, training teams, and implementing solutions that generate measurable results. Our comprehensive approach covers marketing and brand growth—from digital marketing and SEO to customer acquisition funnels and retention programs; technology and automation—integrating software, automating processes, and turning inefficiencies into profit; operational performance—rebuilding operations to run smoother, faster, and stronger; revenue acceleration—optimizing sales processes, pricing strategies, and conversion rates; and strategic direction—planning the next 12, 24, and 36 months so your business grows by design. We measure everything, focus on what moves revenue, and build systems that work long after we're done. If your business has potential but needs the right team, systems, and resources to unlock it, we're your growth partner."
        contextLink={{
          label: 'Inhouse Growth Team',
          href: '/how-it-works/inhouse-growth-team',
          color: 'red',
        }}
      />

      <OtherServicesSection currentService="scale" />
    </>
  );
}

