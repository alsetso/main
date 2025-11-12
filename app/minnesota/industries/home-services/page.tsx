import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { Section, Text, Button } from '@alset/ui/index';
import { Container } from '@alset/ui/atoms';

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
  ],
});

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
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center bg-white px-6 md:px-12 lg:px-24 pt-32 md:pt-40">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Text as="h1" variant="display" className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
              Home Service Businesses
            </Text>
            <Text variant="body" className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Essential services that deliver consistent demand, recurring revenue, and strong margins.
            </Text>
          </div>
        </section>

        {/* Why Home Services */}
        <Section spacing="xl" className="bg-gray-50">
          <Container size="md">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                Why Home Services?
              </Text>
              <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Recession-resistant demand. High customer retention. Strong margins. These essential services maintain consistent revenue streams regardless of economic conditions.
              </Text>
            </div>
          </Container>
        </Section>

        {/* What We Invest In */}
        <Section spacing="xl" className="bg-white">
          <Container size="lg">
            <div className="text-center mb-16">
              <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                What We Invest In
              </Text>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-4">
                <Text as="h3" variant="subheading" className="text-2xl md:text-3xl">
                  Roofing
                </Text>
                <Text variant="body" className="text-gray-700 leading-relaxed">
                  Residential and commercial roofing contractors with established customer bases and recurring maintenance contracts.
                </Text>
              </div>
              
              <div className="space-y-4">
                <Text as="h3" variant="subheading" className="text-2xl md:text-3xl">
                  HVAC
                </Text>
                <Text variant="body" className="text-gray-700 leading-relaxed">
                  Heating, ventilation, and air conditioning service providers with seasonal agreements and emergency service capabilities.
                </Text>
              </div>
              
              <div className="space-y-4">
                <Text as="h3" variant="subheading" className="text-2xl md:text-3xl">
                  Electrical
                </Text>
                <Text variant="body" className="text-gray-700 leading-relaxed">
                  Licensed electrical contractors handling residential, commercial, and smart home integration projects.
                </Text>
              </div>
              
              <div className="space-y-4">
                <Text as="h3" variant="subheading" className="text-2xl md:text-3xl">
                  Plumbing & Other Trades
                </Text>
                <Text variant="body" className="text-gray-700 leading-relaxed">
                  Essential plumbing services and complementary trades serving critical homeowner and commercial needs.
                </Text>
              </div>
            </div>
          </Container>
        </Section>

        {/* What We Look For */}
        <Section spacing="xl" className="bg-gray-50">
          <Container size="md">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center">
                <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                  What We Look For
                </Text>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Text as="h3" variant="subheading" className="text-xl mb-2">
                    Established Track Record
                  </Text>
                  <Text variant="body" className="text-gray-700">
                    Proven businesses with loyal customer bases and consistent revenue.
                  </Text>
                </div>
                
                <div>
                  <Text as="h3" variant="subheading" className="text-xl mb-2">
                    Growth Potential
                  </Text>
                  <Text variant="body" className="text-gray-700">
                    Opportunities to scale through technology, marketing, and operational improvements.
                  </Text>
                </div>
                
                <div>
                  <Text as="h3" variant="subheading" className="text-xl mb-2">
                    Strong Fundamentals
                  </Text>
                  <Text variant="body" className="text-gray-700">
                    Healthy margins, recurring revenue streams, and a reputation for quality service.
                  </Text>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* How We Help */}
        <Section spacing="xl" className="bg-white">
          <Container size="md">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center">
                <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                  How We Help
                </Text>
              </div>
              
              <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                We bring capital, technology, and operational expertise to help established home service businesses scale while maintaining the quality and service that built their reputation.
              </Text>
            </div>
          </Container>
        </Section>

        {/* Call to Action */}
        <Section spacing="xl" className="bg-gray-50">
          <Container size="md">
            <div className="text-center space-y-8 max-w-2xl mx-auto">
              <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                Have a Business to Discuss?
              </Text>
              <Text variant="body" className="text-lg text-gray-700 leading-relaxed">
                We&apos;re always looking for established home service businesses with strong fundamentals and growth potential.
              </Text>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </article>
    </>
  );
}
