import { Metadata } from 'next';
import { generatePageMetadata } from '@config/metadata';
import { generateBreadcrumbSchema } from '@config/structured-data';
import { Section, Text, Card } from '@ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'Artificial Intelligence Investment — Minnesota',
  description: 'Partner with Alset to invest in cutting-edge AI companies developing proprietary software, intellectual property, and robotics solutions. We identify high-growth AI startups with strong competitive advantages in Minnesota.',
  path: '/minnesota/industries/artificial-intelligence',
  keywords: [
    'AI investment Minnesota',
    'artificial intelligence investment',
    'software investment Minnesota',
    'robotics investment',
    'IP investment',
    'technology investment',
    'AI startup investment',
    'machine learning investment',
    'SaaS investment Minnesota',
    'automation investment',
  ],
});

const focusAreas = [
  {
    title: 'Software & Code',
    description: 'AI-powered software solutions, SaaS platforms, and proprietary codebases that solve real business problems at scale.',
    opportunities: [
      'Enterprise AI software platforms',
      'Machine learning infrastructure',
      'Automated workflow solutions',
      'Data analytics and insights platforms',
    ],
  },
  {
    title: 'Intellectual Property',
    description: 'Patents, algorithms, and proprietary technology that provide competitive advantages and licensing opportunities.',
    opportunities: [
      'AI algorithm patents',
      'Proprietary data models',
      'Technology licensing opportunities',
      'Research and development assets',
    ],
  },
  {
    title: 'Robotics',
    description: 'Autonomous systems, robotic automation, and AI-driven physical solutions transforming industries.',
    opportunities: [
      'Industrial automation robots',
      'Service and delivery robots',
      'Autonomous systems integration',
      'Robotics-as-a-Service platforms',
    ],
  },
];

export default function ArtificialIntelligencePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://alset.so' },
    { name: 'Minnesota', url: 'https://alset.so/minnesota' },
    { name: 'Industries', url: 'https://alset.so/minnesota/industries' },
    { name: 'Artificial Intelligence', url: 'https://alset.so/minnesota/industries/artificial-intelligence' },
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
              Artificial Intelligence Investment
            </Text>
            <Text variant="subheading" className="text-gray-600 max-w-2xl mx-auto font-normal">
              Investing in the future of technology through AI companies developing software, code, intellectual property, and robotics solutions with exceptional growth potential.
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
                Why Artificial Intelligence?
              </Text>
              <Text variant="body" className="text-gray-700 text-center max-w-2xl mx-auto mb-6">
                AI represents the next frontier of technological innovation, with massive market opportunities across every industry. We invest in companies with proprietary technology, strong IP portfolios, and scalable business models that can deliver exceptional returns as AI adoption accelerates.
              </Text>
              <Text variant="body" className="text-gray-700 text-center max-w-2xl mx-auto">
                Our investment approach focuses on AI companies that demonstrate clear competitive advantages through unique algorithms, proprietary datasets, or innovative applications. We seek businesses with strong technical teams, defensible market positions, and clear paths to scale.
              </Text>
            </Card>
          </section>
        </Section>
      </article>
    </>
  );
}

