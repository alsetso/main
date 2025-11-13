import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { ServiceHero, ServiceContentSection, OtherServicesSection } from '@alset/ui';

export const metadata: Metadata = generatePageMetadata({
  title: 'Business Lending — Access Capital for Your Business',
  description: 'Access business financing and capital solutions through Alset Solutions. We help Minnesota businesses connect with lenders and secure the funding they need to grow.',
  path: '/lending',
  keywords: [
    'business financing',
    'business loans Minnesota',
    'capital access',
    'business funding',
    'commercial lending',
    'SBA loans',
  ],
});

export default function LendingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Lending', url: `${siteConfig.url}/lending` },
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
        title="Access the Capital You Need to Grow"
        description="We help Minnesota businesses connect with lenders and secure financing solutions that support growth and operations."
        service="lending"
      />

      <ServiceContentSection
        description="Alset Solutions helps Minnesota businesses access the capital they need to grow through our lending facilitation services, part of our comprehensive inhouse growth team offering. We understand that securing the right financing—whether it's working capital, equipment loans, SBA loans, or expansion capital—can be challenging for growing businesses. That's why we work as your strategic partner to connect you with the right lenders, prepare compelling loan applications, and structure financing solutions that align with your growth plans. Our team has deep relationships with SBA lenders, commercial banks, alternative lenders, and private capital sources across Minnesota and the Midwest. We help you navigate the lending landscape, identify the best financing options for your situation, prepare documentation, and negotiate terms that support your business objectives. Beyond just securing capital, we ensure your financing strategy integrates with your overall growth plan, helping you use capital efficiently to drive revenue, improve operations, and build long-term value. Whether you need funding for expansion, equipment, inventory, technology, or working capital, we help you access the right financing at the right time."
        contextLink={{
          label: 'Inhouse Growth Team',
          href: '/how-it-works/inhouse-growth-team',
          color: 'green',
        }}
      />

      <OtherServicesSection currentService="lending" />
    </>
  );
}

