import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { Section, Text, Card, Button } from '@alset/ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'Investment Industries — Minnesota',
  description: 'Discover Alset\'s focus industries for high-value private firm investments in Minnesota: real estate, home services, artificial intelligence, and marketing & advertising. Explore investment opportunities across these sectors.',
  path: '/minnesota/industries',
  keywords: [
    'Minnesota investment industries',
    'real estate investment Minnesota',
    'home services investment',
    'AI investment Minnesota',
    'marketing advertising investment',
    'private investment firm Minnesota',
    'business investment opportunities',
    'Minnesota investment sectors',
  ],
});

const industries = [
  {
    title: 'Real Estate',
    description: 'Strategic investments in residential and commercial properties that deliver strong returns and long-term value.',
    href: '/minnesota/industries/real-estate',
    categories: ['Residential', 'Commercial'],
  },
  {
    title: 'Home Service Businesses',
    description: 'Essential service providers including roofing, HVAC, electrical, plumbing, and other high-demand trades.',
    href: '/minnesota/industries/home-services',
    categories: ['Roofing', 'HVAC', 'Electrical', 'Plumbing'],
  },
  {
    title: 'Artificial Intelligence',
    description: 'Cutting-edge AI companies developing software, code, intellectual property, and robotics solutions.',
    href: '/minnesota/industries/artificial-intelligence',
    categories: ['Software', 'Code & IP', 'Robotics'],
  },
  {
    title: 'Marketing & Advertising',
    description: 'Out-of-home advertising, digital campaigns, direct mail, and integrated marketing solutions.',
    href: '/minnesota/industries/marketing-advertising',
    categories: ['Billboards', 'Ad Campaigns', 'Direct Mail'],
  },
];

export default function IndustriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://alset.so' },
    { name: 'Minnesota', url: 'https://alset.so/minnesota' },
    { name: 'Industries', url: 'https://alset.so/minnesota/industries' },
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
        <Section spacing="xl" className="pt-32 md:pt-40">
          <header className="text-center mb-16 max-w-4xl mx-auto">
            <Text as="h1" variant="display" className="mb-6">
              Our Investment Industries
            </Text>
            <Text variant="subheading" className="text-gray-600 max-w-2xl mx-auto font-normal">
              We focus on industries with proven track records of high returns and strong growth potential in Minnesota&apos;s private market.
            </Text>
          </header>
        
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <Text as="h2" variant="heading" className="mb-4">
                    {industry.title}
                  </Text>
                  <Text variant="body" className="text-gray-600 mb-6">
                    {industry.description}
                  </Text>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <Link href={industry.href}>
                    <Button variant="secondary" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        </Section>
      </article>
    </>
  );
}

