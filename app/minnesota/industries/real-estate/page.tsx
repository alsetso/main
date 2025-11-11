import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema, generateArticleSchema } from '@alset/config/structured-data';
import { Section, Text, Card } from '@alset/ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'Real Estate Investment — Minnesota',
  description: 'Strategic real estate investments in Minnesota residential and commercial properties. Alset identifies high-value opportunities with strong cash flow, appreciation potential, and value-add possibilities.',
  path: '/minnesota/industries/real-estate',
  keywords: [
    'Minnesota real estate investment',
    'residential property investment',
    'commercial real estate Minnesota',
    'real estate private equity',
    'multi-family investment Minnesota',
    'commercial property investment',
    'real estate acquisition Minnesota',
    'property investment firm',
  ],
});

const focusAreas = [
  {
    title: 'Residential Real Estate',
    description: 'Single-family homes, multi-family properties, and residential developments that offer stable cash flow and appreciation potential.',
    highlights: [
      'Multi-family apartment complexes',
      'Single-family rental portfolios',
      'Residential development projects',
      'Value-add opportunities',
    ],
  },
  {
    title: 'Commercial Real Estate',
    description: 'Office buildings, retail spaces, industrial properties, and mixed-use developments in prime Minnesota locations.',
    highlights: [
      'Office and retail properties',
      'Industrial and warehouse facilities',
      'Mixed-use developments',
      'Commercial redevelopment projects',
    ],
  },
];

export default function RealEstatePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://alset.so' },
    { name: 'Minnesota', url: 'https://alset.so/minnesota' },
    { name: 'Industries', url: 'https://alset.so/minnesota/industries' },
    { name: 'Real Estate', url: 'https://alset.so/minnesota/industries/real-estate' },
  ]);
  const articleSchema = generateArticleSchema({
    headline: 'Real Estate Investment — Minnesota',
    description: 'Strategic real estate investments in Minnesota residential and commercial properties. Alset identifies high-value opportunities with strong cash flow, appreciation potential, and value-add possibilities.',
    url: `${siteConfig.url}/minnesota/industries/real-estate`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <article>
        <Section spacing="xl" className="pt-32 md:pt-40" containerSize="lg">
          <header className="text-center mb-16 max-w-4xl mx-auto">
            <Text as="h1" variant="display" className="mb-6">
              Real Estate Investment
            </Text>
            <Text variant="subheading" className="text-gray-600 max-w-2xl mx-auto font-normal">
              Strategic property investments across residential and commercial sectors, targeting high-value opportunities with strong returns and long-term appreciation.
            </Text>
          </header>

          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
                      Investment Focus
                    </Text>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          <Text variant="body" className="text-gray-700">
                            {highlight}
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
                Why Real Estate?
              </Text>
              <Text variant="body" className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
                Real estate provides stable cash flow, tax advantages, and long-term appreciation. We focus on properties with strong fundamentals, prime locations, and opportunities for value enhancement through strategic improvements and management.
              </Text>
              <Text variant="body" className="text-gray-700 text-center max-w-2xl mx-auto">
                Our real estate investment strategy targets properties in growing Minnesota markets with strong demographic trends, economic development, and infrastructure investment. We seek opportunities where our operational expertise and capital can unlock value through renovations, repositioning, and improved property management.
              </Text>
            </Card>
          </section>
        </Section>
      </article>
    </>
  );
}

