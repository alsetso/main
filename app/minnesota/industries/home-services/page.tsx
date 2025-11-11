import { Metadata } from 'next';
import { generatePageMetadata } from '@config/metadata';
import { generateBreadcrumbSchema } from '@config/structured-data';
import { Section, Text, Card } from '@ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Service Businesses Investment — Minnesota',
  description: 'Invest in recession-resistant home service businesses in Minnesota. Alset partners with established roofing, HVAC, electrical, and plumbing companies with strong recurring revenue and growth potential.',
  path: '/minnesota/industries/home-services',
  keywords: [
    'home services investment',
    'roofing business investment Minnesota',
    'HVAC company investment',
    'electrical contractor investment',
    'Minnesota trades investment',
    'plumbing business investment',
    'home service acquisition',
    'contractor investment Minnesota',
    'trades business investment',
  ],
});

const serviceCategories = [
  {
    title: 'Roofing',
    description: 'Residential and commercial roofing contractors with established customer bases and recurring revenue streams.',
    valueDrivers: [
      'Recurring maintenance contracts',
      'Storm damage repair opportunities',
      'Strong local market presence',
      'Skilled workforce retention',
    ],
  },
  {
    title: 'HVAC',
    description: 'Heating, ventilation, and air conditioning service providers serving residential and commercial markets.',
    valueDrivers: [
      'Seasonal service agreements',
      'Installation and replacement revenue',
      'Emergency service premium pricing',
      'Technology integration opportunities',
    ],
  },
  {
    title: 'Electrical',
    description: 'Licensed electrical contractors handling residential, commercial, and industrial projects.',
    valueDrivers: [
      'New construction and renovation work',
      'Electrical panel upgrades',
      'Smart home integration services',
      'Commercial maintenance contracts',
    ],
  },
  {
    title: 'Plumbing & Other Trades',
    description: 'Essential plumbing services and complementary trades that serve critical homeowner needs.',
    valueDrivers: [
      'Emergency service calls',
      'Preventive maintenance programs',
      'Bathroom and kitchen remodels',
      'Water heater and appliance installation',
    ],
  },
];

export default function HomeServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://alset.so' },
    { name: 'Minnesota', url: 'https://alset.so/minnesota' },
    { name: 'Industries', url: 'https://alset.so/minnesota/industries' },
    { name: 'Home Service Businesses', url: 'https://alset.so/minnesota/industries/home-services' },
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
              Home Service Businesses Investment
            </Text>
            <Text variant="subheading" className="text-gray-600 max-w-2xl mx-auto font-normal">
              Essential service providers that deliver consistent demand, recurring revenue, and strong margins in Minnesota's residential and commercial markets.
            </Text>
          </header>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {serviceCategories.map((category, index) => (
                <Card key={index} className="p-8">
                  <Text as="h2" variant="heading" className="mb-4">
                    {category.title}
                  </Text>
                  <Text variant="body" className="text-gray-600 mb-6">
                    {category.description}
                  </Text>
                  <div className="space-y-3">
                    <Text as="h3" variant="subheading" className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                      Value Drivers
                    </Text>
                    <ul className="space-y-2">
                      {category.valueDrivers.map((driver, driverIndex) => (
                        <li key={driverIndex} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          <Text variant="body" className="text-gray-700">
                            {driver}
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
                Why Home Services?
              </Text>
              <Text variant="body" className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
                Home service businesses offer recession-resistant demand, high customer retention, and opportunities for operational improvement through technology, marketing, and process optimization. These essential services maintain strong margins and recurring revenue streams.
              </Text>
              <Text variant="body" className="text-gray-700 text-center max-w-2xl mx-auto">
                We target established home service companies with proven track records, loyal customer bases, and opportunities for growth through strategic investments in technology, marketing, and operational efficiency. Our approach helps these businesses scale while maintaining the quality and service that built their reputation.
              </Text>
            </Card>
          </section>
        </Section>
      </article>
    </>
  );
}

