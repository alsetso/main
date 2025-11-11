import { Metadata } from 'next';
import { generatePageMetadata } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { Section, Text, Card } from '@alset/ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'Marketing & Advertising Investment — Minnesota',
  description: 'Invest in high-growth marketing and advertising businesses in Minnesota. Alset partners with billboard operators, digital agencies, and direct mail companies with strong recurring revenue and market presence.',
  path: '/minnesota/industries/marketing-advertising',
  keywords: [
    'marketing investment Minnesota',
    'advertising investment',
    'billboard investment',
    'direct mail investment',
    'ad campaign investment',
    'Minnesota marketing companies',
    'out-of-home advertising investment',
    'digital marketing agency investment',
    'advertising business acquisition',
  ],
});

const focusAreas = [
  {
    title: 'Billboards & Out-of-Home',
    description: 'Strategic locations for outdoor advertising including digital billboards, transit advertising, and high-traffic display placements.',
    opportunities: [
      'Prime location digital billboards',
      'Highway and interstate placements',
      'Urban transit advertising',
      'Airport and venue displays',
    ],
  },
  {
    title: 'Ad Campaigns',
    description: 'Digital and traditional advertising agencies managing multi-channel campaigns for businesses across industries.',
    opportunities: [
      'Digital marketing agencies',
      'Social media advertising',
      'Search engine marketing',
      'Integrated campaign management',
    ],
  },
  {
    title: 'Direct Mail',
    description: 'Targeted direct mail services, printing, and distribution companies serving local and regional markets.',
    opportunities: [
      'Direct mail printing services',
      'Targeted mailing list management',
      'Postcard and flyer campaigns',
      'Variable data printing',
    ],
  },
];

export default function MarketingAdvertisingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://alset.so' },
    { name: 'Minnesota', url: 'https://alset.so/minnesota' },
    { name: 'Industries', url: 'https://alset.so/minnesota/industries' },
    { name: 'Marketing & Advertising', url: 'https://alset.so/minnesota/industries/marketing-advertising' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <article>
        <Section spacing="xl" className="pt-32 md:pt-40" containerSize="lg">
          <header className="text-center mb-16 max-w-4xl mx-auto">
            <Text as="h1" variant="display" className="mb-6">
              Marketing & Advertising Investment
            </Text>
            <Text variant="subheading" className="text-gray-600 max-w-2xl mx-auto font-normal">
              Investing in marketing and advertising businesses that deliver measurable results through billboards, campaigns, direct mail, and integrated solutions.
            </Text>
          </header>

          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {focusAreas.map((area, index) => (
                <Card key={index} className="p-8">
                  <Text as="h2" variant="heading" className="mb-4">
                    {area.title}
                  </Text>
                  <Text variant="body" className="text-gray-600 mb-6">
                    {area.description}
                  </Text>
                  <div className="space-y-3">
                    <Text as="h3" variant="subheading" className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                      Investment Opportunities
                    </Text>
                    <ul className="space-y-2">
                      {area.opportunities.map((opportunity, oppIndex) => (
                        <li key={oppIndex} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          <Text variant="body" className="text-gray-700">
                            {opportunity}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <Card className="p-8 bg-gray-50 max-w-4xl mx-auto">
              <Text as="h2" variant="heading" className="mb-4 text-center">
                Why Marketing & Advertising?
              </Text>
              <Text variant="body" className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
                Marketing and advertising businesses provide essential services to companies across all industries. With strong recurring revenue from billboard leases, retainer-based agency relationships, and ongoing campaign management, these businesses offer stable cash flow and growth opportunities through market expansion and service diversification.
              </Text>
              <Text variant="body" className="text-gray-700 text-center max-w-2xl mx-auto">
                We focus on marketing and advertising companies with prime asset locations, established client relationships, and proven track records of delivering results. Our investment strategy helps these businesses expand their service offerings, improve operational efficiency, and capture additional market share in Minnesota&apos;s growing economy.
              </Text>
            </Card>
          </section>
        </Section>
      </article>
    </>
  );
}

