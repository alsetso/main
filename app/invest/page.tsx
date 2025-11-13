import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { AlsetShapesBackground } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Text, Container } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Invest in Alset Solutions',
  description: 'Join Alset Solutions as an individual investor, family office, or lender. Partner with a Minnesota-based private investment firm that builds long-term value through strategic capital, creativity, and technology.',
  path: '/invest',
  keywords: [
    'invest in Alset Solutions',
    'Minnesota investment opportunities',
    'family office investment',
    'private investment firm',
    'Minnesota business investment',
    'lender partnerships',
  ],
});

const investIntro = {
  content: `Alset Solutions is building a capital pool to assess and scale Minnesota businesses.

We're looking for partners who share our vision: patient capital, long-term thinking, and a commitment to building businesses that create lasting value.

Whether you're an individual investor, a family office, or a lender, there's a place for you in what we're building.

We're not chasing quick returns or flashy exits. We're building something that matters — businesses that support Minnesota's economy, create jobs, and strengthen our communities.

Our approach is transparent, hands-on, and built on the same values that make Minnesota businesses strong: integrity, hard work, and doing things right.`,
};

const investorTypes = [
  {
    title: 'Individual Investors',
    description: `Join our capital pool as an individual investor and participate in our portfolio of Minnesota businesses. We offer flexible investment minimums and transparent reporting on every deal.

You'll have access to vetted opportunities in established businesses doing over $1 million in annual sales. We handle the due diligence, operations, and growth strategy — you provide the capital and share in the returns.

Our model is simple: we assess businesses, improve operations, scale with technology, and build long-term value. As an investor, you participate in the upside while we do the work.`,
  },
  {
    title: 'Family Offices',
    description: `Partner with Alset Solutions as a family office seeking direct investment opportunities in Minnesota's business ecosystem. We offer co-investment opportunities, strategic partnerships, and access to our deal flow.

Family offices bring patient capital and strategic thinking — exactly what we value. We can structure investments to align with your family's goals, timeline, and risk profile.

Whether you're looking for diversification, direct business exposure, or a way to support Minnesota's economy, we can create a partnership that works for your family office.`,
  },
  {
    title: 'Lenders',
    description: `Work with Alset Solutions as a lender providing financing for our assessments and growth initiatives. We structure deals that combine SBA loans, seller financing, and our capital pool — creating opportunities for lenders at every level.

We're looking for lenders who understand Minnesota businesses and are willing to work with us on creative deal structures. From SBA 7(a) lenders to private debt providers, we can find the right fit for your lending criteria.

Our track record of operational improvement and growth makes us a strong partner for lenders who want to support businesses that are built to last.`,
  },
];

export default function InvestPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Invest', url: `${siteConfig.url}/invest` },
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
        headline="Invest in Alset Solutions"
      />

      {/* Investment Introduction */}
      <Section spacing="xl" className="bg-white">
        <Container size="md">
          <div className="max-w-4xl mx-auto space-y-6">
            <Text
              variant="body"
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line"
            >
              {investIntro.content}
            </Text>
          </div>
        </Container>
      </Section>

      {/* Investor Types */}
      <Section spacing="xl" className="bg-zinc-50">
        <Container size="md">
          <div className="max-w-4xl mx-auto space-y-12">
            {investorTypes.map((type, index) => (
              <div key={index} className="border-l-4 border-black pl-8">
                <Text as="h3" variant="subheading" className="mb-4 text-2xl md:text-3xl">
                  {type.title}
                </Text>
                <Text variant="body" className="text-gray-600 text-lg md:text-xl leading-relaxed whitespace-pre-line">
                  {type.description}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
