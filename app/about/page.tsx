import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import {
  Hero,
  Mission,
  Values,
  PortfolioModel,
  GeographicFocus,
  Vision,
} from '@alset/ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us',
  description: `Learn about ${siteConfig.name}'s mission, values, and approach to building a portfolio of technology-driven enterprises across multiple industries.`,
  path: '/about',
  keywords: [
    'private investment firm Minnesota',
    'business ownership technology company',
    'building and managing portfolio enterprises',
    'Minnesota investment company',
    'technology-driven investment',
  ],
});

const missionParagraphs = [
  `At Alset, we believe the best businesses are built at the intersection of proven 
  fundamentals and innovative thinking. Our mission is to identify, acquire, and grow 
  companies that can benefit from strategic capital, operational expertise, and 
  technology integration.`,
  `We're not traditional investors who simply write checks and wait. We're builders who 
  roll up our sleeves and work alongside management teams to unlock potential, streamline 
  operations, and accelerate growth.`,
];

const values = [
  {
    title: 'Long-Term Thinking',
    description: 'We measure success in years and decades, not quarters. Our patient capital approach allows companies to make decisions that create sustainable value.',
  },
  {
    title: 'Operational Excellence',
    description: 'We believe great businesses are built on strong fundamentals. We focus on operations, processes, and systems that drive efficiency and quality.',
  },
  {
    title: 'Technology Enablement',
    description: "Modern technology isn't optional - it's essential. We help our companies leverage the right tools to compete and win in their markets.",
  },
  {
    title: 'Partnership Mindset',
    description: 'We succeed when our partners succeed. We build genuine relationships based on trust, transparency, and mutual respect.',
  },
  {
    title: 'Continuous Learning',
    description: 'Every company and industry teaches us something new. We stay curious, adaptable, and committed to growth.',
  },
  {
    title: 'Community Impact',
    description: "As a Minnesota-based firm, we're invested in our local economy and committed to creating opportunities in our community.",
  },
];

const portfolioModelItems = [
  {
    title: 'Strategic Diversification',
    description: `We intentionally build across multiple industries—real estate, home services, 
    and healthcare. This diversification isn't just about risk 
    management; it creates opportunities for cross-pollination of ideas, shared 
    resources, and synergies between companies.`,
  },
  {
    title: 'Active Ownership',
    description: `We're not passive investors. When we acquire a business, we become deeply involved 
    in strategy, operations, and growth initiatives. Our team brings expertise in 
    finance, technology, marketing, and operations to support our portfolio companies.`,
  },
  {
    title: 'Shared Infrastructure',
    description: `Our portfolio companies benefit from shared services including technology 
    infrastructure, financial systems, HR resources, and marketing capabilities. 
    This centralized support allows management teams to focus on what they do best.`,
  },
];

const geographicFocusParagraphs = [
  `While we evaluate opportunities nationally, we're proud to be based in Minnesota. 
  Our state has a rich tradition of entrepreneurship, innovation, and business excellence. 
  We're committed to contributing to this legacy by building companies that create jobs, 
  serve customers exceptionally well, and strengthen our local economy.`,
  `The Midwest work ethic—characterized by integrity, humility, and grit—informs 
  everything we do.`,
];

const visionDescription = `We envision Alset as a portfolio of exceptional businesses that are leaders in their 
respective markets, known for operational excellence, customer satisfaction, and 
innovative thinking. We're building for the long term—creating companies that will 
thrive for generations.`;

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'About Us', url: `${siteConfig.url}/about` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Hero
        subtitle="About Alset"
        title="Building the Future of Business"
        description="Alset Solutions, Inc. is a Minnesota S-Corp and private investment firm combining strategic capital, creative thinking, and modern technology to build exceptional companies."
        className="pt-32 md:pt-40"
      />
      <Mission paragraphs={missionParagraphs} />
      <Values values={values} />
      <PortfolioModel
        subtitle="Diversified by design, unified by excellence"
        items={portfolioModelItems}
      />
      <GeographicFocus paragraphs={geographicFocusParagraphs} />
      <Vision description={visionDescription} />
    </>
  );
}

