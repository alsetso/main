import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@config/metadata';
import { generateBreadcrumbSchema } from '@config/structured-data';
import {
  Hero,
  InvestmentCriteria,
  InvestorBenefits,
  InvestmentProcess,
  CallToAction,
} from '@ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'Investors - Strategic Partnership Opportunities',
  description: `Explore investment opportunities with ${siteConfig.name}. We're seeking strategic partnerships and acquisitions across real estate, home services, healthcare, robotics, and software.`,
  path: '/investors',
  keywords: [
    'investment opportunities Minnesota',
    'private equity partnerships',
    'business acquisition opportunities',
    'strategic investment partnerships',
    'Minnesota investment firm',
  ],
});

const criteria = [
  {
    title: 'Strong Fundamentals',
    description: 'We look for businesses with proven business models, positive cash flow, and sustainable competitive advantages. Financial health and operational excellence are essential.',
  },
  {
    title: 'Growth Potential',
    description: "While we value stability, we're particularly interested in companies with clear paths to growth through market expansion, technology integration, or operational improvements.",
  },
  {
    title: 'Technology Opportunity',
    description: "We seek businesses where technology can create meaningful value - whether through automation, data analytics, customer experience improvements, or new revenue streams.",
  },
  {
    title: 'Management Alignment',
    description: 'The right partnership requires alignment on vision, values, and long-term goals. We look for management teams who are open to collaboration and growth.',
  },
  {
    title: 'Market Position',
    description: 'We prefer companies with strong market positions, whether as leaders, challengers with clear differentiation, or businesses in attractive niches with growth potential.',
  },
  {
    title: 'Scalability',
    description: "We're interested in businesses that can scale - whether through geographic expansion, technology leverage, operational efficiency, or strategic acquisitions.",
  },
];

const benefits = [
  {
    title: 'Patient Capital',
    description: 'We provide long-term capital without the pressure of short-term exits. Our focus is on building sustainable value over years, not quarters.',
  },
  {
    title: 'Operational Support',
    description: 'Beyond capital, we bring expertise in technology, operations, marketing, and finance. Our team works alongside management to accelerate growth.',
  },
  {
    title: 'Technology Integration',
    description: 'We help companies leverage modern technology to improve operations, enhance customer experiences, and create new revenue opportunities.',
  },
  {
    title: 'Shared Resources',
    description: 'Portfolio companies benefit from shared infrastructure including technology platforms, financial systems, HR resources, and marketing capabilities.',
  },
  {
    title: 'Network Access',
    description: 'Our network of partners, advisors, and industry connections provides valuable resources for business development, talent acquisition, and strategic initiatives.',
  },
  {
    title: 'Proven Track Record',
    description: 'With experience across multiple industries, we bring proven frameworks and best practices that help companies avoid common pitfalls and accelerate success.',
  },
];

const processSteps = [
  {
    number: '1',
    title: 'Initial Inquiry',
    description: "Reach out through our contact form or email. We'll schedule an initial conversation to understand your business, goals, and how we might work together.",
  },
  {
    number: '2',
    title: 'Preliminary Review',
    description: "We conduct an initial assessment to determine if there's a strategic fit. This includes reviewing financials, market position, and growth opportunities.",
  },
  {
    number: '3',
    title: 'Deep Dive',
    description: "If there's mutual interest, we'll conduct a thorough due diligence process, including financial analysis, market research, and operational review.",
  },
  {
    number: '4',
    title: 'Partnership Structure',
    description: 'We work together to design a partnership structure that aligns incentives and supports long-term growth. This could be an acquisition, joint venture, or strategic investment.',
  },
  {
    number: '5',
    title: 'Integration & Growth',
    description: 'Once the partnership is formed, we integrate our resources and expertise to accelerate growth, optimize operations, and build lasting value.',
  },
];

export default function InvestorsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Investors', url: `${siteConfig.url}/investors` },
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
        subtitle="For Investors"
        title="Strategic Partnership Opportunities"
        description="We're actively seeking investment opportunities and strategic partnerships across our focus industries. If you're building, operating, or considering selling a business, let's explore how we can work together."
        className="pt-32 md:pt-40"
      />
      
      <InvestmentProcess steps={processSteps} />
      <InvestmentCriteria criteria={criteria} />
      <InvestorBenefits benefits={benefits} />
      
      <CallToAction />
    </>
  );
}

