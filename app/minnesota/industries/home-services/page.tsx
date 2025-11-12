import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { Section, Text, Button } from '@alset/ui/index';
import { Container } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Service Businesses Investment — Minnesota',
  description: 'Invest in recession-resistant home service businesses in Minnesota. Alset acquires established roofing, HVAC, electrical, and plumbing companies with strong recurring revenue and growth potential.',
  path: '/minnesota/industries/home-services',
  keywords: [
    'home services investment',
    'roofing business acquisition Minnesota',
    'HVAC company acquisition',
    'selling home service business',
    'Minnesota trades investment',
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
              Recession-resistant. Recurring revenue. Strong margins. Essential services that deliver consistent returns.
            </Text>
          </div>
        </section>

        {/* Dual Audience Sections */}
        <Section spacing="xl" className="bg-gray-50">
          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* For Business Owners */}
              <div className="space-y-8">
                <div>
                  <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-6">
                    Selling Your Business?
                  </Text>
                  <Text variant="body" className="text-lg text-gray-700 leading-relaxed mb-6">
                    We acquire established home service businesses with proven track records. Here&apos;s what you can expect:
                  </Text>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      Fair Valuation
                    </Text>
                    <Text variant="body" className="text-gray-700">
                      We offer competitive valuations based on your business&apos;s true value, not just multiples. We understand the nuances of home service businesses.
                    </Text>
                  </div>
                  
                  <div>
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      Smooth Process
                    </Text>
                    <Text variant="body" className="text-gray-700">
                      We move quickly and transparently. Initial conversation → due diligence → closing typically takes 60-90 days. No endless back-and-forth.
                    </Text>
                  </div>
                  
                  <div>
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      Your Legacy Protected
                    </Text>
                    <Text variant="body" className="text-gray-700">
                      We maintain your brand, your team, and your reputation. We&apos;re not here to change what works — we&apos;re here to scale it.
                    </Text>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link href="/contact">
                    <Button variant="primary" size="lg" className="w-full">
                      Discuss Your Business
                    </Button>
                  </Link>
                </div>
              </div>

              {/* For Investors */}
              <div className="space-y-8">
                <div>
                  <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-6">
                    Investing in Alset?
                  </Text>
                  <Text variant="body" className="text-lg text-gray-700 leading-relaxed mb-6">
                    We&apos;re building a portfolio of essential service businesses. Here&apos;s our investment approach:
                  </Text>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      Proven Strategy
                    </Text>
                    <Text variant="body" className="text-gray-700">
                      We acquire businesses with $500K-$5M revenue, strong fundamentals, and clear growth potential. We focus on operations, not financial engineering.
                    </Text>
                  </div>
                  
                  <div>
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      Value Creation
                    </Text>
                    <Text variant="body" className="text-gray-700">
                      We integrate technology, improve marketing, and optimize operations. Our goal: 2-3x revenue growth within 3-5 years through organic expansion.
                    </Text>
                  </div>
                  
                  <div>
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      Portfolio Synergies
                    </Text>
                    <Text variant="body" className="text-gray-700">
                      Our businesses share infrastructure, technology, and best practices. This creates operational leverage and accelerates growth across the portfolio.
                    </Text>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link href="/contact">
                    <Button variant="secondary" size="lg" className="w-full">
                      Learn More About Investing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Why Home Services - Investment Thesis */}
        <Section spacing="xl" className="bg-gray-50">
          <Container size="md">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                Why Home Services?
              </Text>
              <Text variant="body" className="text-lg md:text-xl text-gray-700 leading-relaxed">
                These essential services maintain consistent demand regardless of economic conditions. High customer retention, strong margins, and recurring revenue streams create stable, predictable returns.
              </Text>
            </div>
          </Container>
        </Section>

        {/* What We Acquire */}
        <Section spacing="xl" className="bg-white">
          <Container size="lg">
            <div className="text-center mb-16">
              <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                What We Acquire
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

        {/* What We Look For - Criteria */}
        <Section spacing="xl" className="bg-white">
          <Container size="md">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center">
                <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                  What We Look For
                </Text>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <Text as="h3" variant="subheading" className="text-xl">
                    $500K - $5M
                  </Text>
                  <Text variant="body" className="text-gray-700 text-sm">
                    Annual Revenue
                  </Text>
                </div>
                
                <div className="text-center space-y-3">
                  <Text as="h3" variant="subheading" className="text-xl">
                    3+ Years
                  </Text>
                  <Text variant="body" className="text-gray-700 text-sm">
                    Established Track Record
                  </Text>
                </div>
                
                <div className="text-center space-y-3">
                  <Text as="h3" variant="subheading" className="text-xl">
                    Strong Margins
                  </Text>
                  <Text variant="body" className="text-gray-700 text-sm">
                    Healthy Profitability
                  </Text>
                </div>
              </div>
              
              <div className="pt-8 text-center">
                <Text variant="body" className="text-gray-700 leading-relaxed">
                  We prioritize businesses with loyal customer bases, recurring revenue streams, and opportunities for growth through technology and operational improvements.
                </Text>
              </div>
            </div>
          </Container>
        </Section>

        {/* Our Process */}
        <Section spacing="xl" className="bg-gray-50">
          <Container size="md">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center">
                <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                  Our Process
                </Text>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      Initial Conversation
                    </Text>
                    <Text variant="body" className="text-gray-700">
                      We learn about your business, your goals, and whether there&apos;s a fit. This is confidential and non-binding.
                    </Text>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      Due Diligence
                    </Text>
                    <Text variant="body" className="text-gray-700">
                      We review financials, operations, and market position. We&apos;re thorough but efficient — typically 30-45 days.
                    </Text>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      Closing & Transition
                    </Text>
                    <Text variant="body" className="text-gray-700">
                      We finalize terms, close the transaction, and begin the transition. We work closely with you to ensure a smooth handoff.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Final CTA */}
        <Section spacing="xl" className="bg-white">
          <Container size="md">
            <div className="text-center space-y-8 max-w-2xl mx-auto">
              <Text as="h2" variant="heading" className="text-3xl md:text-4xl mb-4">
                Ready to Start a Conversation?
              </Text>
              <Text variant="body" className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re a business owner exploring options or an investor interested in backing our strategy, we&apos;d love to talk.
              </Text>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </article>
    </>
  );
}
