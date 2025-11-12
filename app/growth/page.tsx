import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { Hero } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container } from '@alset/ui/atoms';
import { Text, Button } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Growth Services — Branding, Advertising & Sales Optimization',
  description: 'Professional growth services for Minnesota businesses. We provide branding, online advertising, and sales funnel optimization to help your company scale.',
  path: '/growth',
  keywords: [
    'business growth services',
    'branding services Minnesota',
    'online advertising',
    'sales funnel optimization',
    'marketing services Minnesota',
    'business automation',
  ],
});

const services = [
  {
    title: 'Branding',
    description: 'Build a brand that resonates with your customers and stands out in the market. We help you define your unique value proposition, create compelling visual identity, and develop messaging that connects with your target audience.',
    features: [
      'Brand strategy and positioning',
      'Visual identity design',
      'Brand messaging and voice',
      'Market differentiation',
      'Brand consistency across all touchpoints',
    ],
  },
  {
    title: 'Online Advertising',
    description: 'Maximize your reach and ROI with strategic digital advertising campaigns. We manage your online presence across search engines, social media, and display networks to drive qualified leads and conversions.',
    features: [
      'Search engine marketing (SEM)',
      'Social media advertising',
      'Display and retargeting campaigns',
      'Performance tracking and optimization',
      'Conversion-focused ad creative',
    ],
  },
  {
    title: 'Sales Funnel Optimization',
    description: 'Turn more visitors into customers with data-driven funnel optimization. We analyze your customer journey, identify bottlenecks, and implement improvements that increase conversion rates at every stage.',
    features: [
      'Funnel analysis and mapping',
      'Conversion rate optimization',
      'Landing page optimization',
      'Email marketing automation',
      'A/B testing and experimentation',
    ],
  },
];

export default function GrowthPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Growth Services', url: `${siteConfig.url}/growth` },
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
        subtitle="Growth Services"
        title="Scale Your Business with Professional Marketing & Strategy"
        description="We help Minnesota businesses grow through branding, online advertising, and sales funnel optimization. Keep 100% ownership while we handle the marketing and technology."
        className="pt-32 md:pt-40"
      />

      <Section spacing="xl" className="bg-white">
        <Container size="lg">
          <div className="max-w-6xl mx-auto space-y-12 px-4">
            {/* Introduction */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Text variant="body" className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                You've built a solid business. Now it's time to scale.
              </Text>
              <Text variant="body" className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Our growth services give you access to professional marketing, branding, and sales optimization — without giving up ownership or control. We work alongside you to implement systems that drive real results.
              </Text>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border-2 border-gray-200 hover:border-gray-900 transition-all">
                  <div className="space-y-4">
                    <Text variant="body" className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {service.title}
                    </Text>
                    <Text variant="body" className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </Text>
                    <div className="space-y-2 pt-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-900 mt-2"></div>
                          <Text variant="body" className="text-sm text-gray-700 flex-1">
                            {feature}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* How It Works */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-10 mt-12">
              <Text variant="body" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                How It Works
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <Text variant="body" className="text-lg font-semibold text-gray-900">
                    Assessment
                  </Text>
                  <Text variant="body" className="text-sm text-gray-700">
                    We analyze your current marketing, branding, and sales processes to identify opportunities for growth.
                  </Text>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <Text variant="body" className="text-lg font-semibold text-gray-900">
                    Strategy & Implementation
                  </Text>
                  <Text variant="body" className="text-sm text-gray-700">
                    We develop a customized growth plan and implement branding, advertising, and funnel optimizations.
                  </Text>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mx-auto">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <Text variant="body" className="text-lg font-semibold text-gray-900">
                    Optimization & Growth
                  </Text>
                  <Text variant="body" className="text-sm text-gray-700">
                    We continuously monitor performance, optimize campaigns, and scale what's working to drive sustainable growth.
                  </Text>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-6">
              <Text variant="body" className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                Why Choose Alset Growth Services
              </Text>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                  <Text variant="body" className="text-base font-semibold text-gray-900 mb-2">
                    ✓ Keep 100% Ownership
                  </Text>
                  <Text variant="body" className="text-sm text-gray-700">
                    You maintain full control of your business. We're a service provider, not a partner or investor.
                  </Text>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                  <Text variant="body" className="text-base font-semibold text-gray-900 mb-2">
                    ✓ Professional Expertise
                  </Text>
                  <Text variant="body" className="text-sm text-gray-700">
                    Access to marketing, branding, and optimization expertise typically reserved for larger companies.
                  </Text>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                  <Text variant="body" className="text-base font-semibold text-gray-900 mb-2">
                    ✓ Data-Driven Results
                  </Text>
                  <Text variant="body" className="text-sm text-gray-700">
                    Every decision is backed by data. We track, measure, and optimize for real business outcomes.
                  </Text>
                </div>
                <div className="bg-white rounded-xl p-5 border-2 border-gray-200">
                  <Text variant="body" className="text-base font-semibold text-gray-900 mb-2">
                    ✓ Scalable Systems
                  </Text>
                  <Text variant="body" className="text-sm text-gray-700">
                    We build marketing and sales systems that grow with your business, not just one-time campaigns.
                  </Text>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-8 sm:p-10 text-center space-y-6 mt-12">
              <Text as="h2" variant="heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Scale Your Business?
              </Text>
              <Text variant="body" className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how our growth services can help you reach more customers, build a stronger brand, and optimize your sales funnel.
              </Text>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="text-base sm:text-lg font-semibold py-4 px-8 rounded-xl">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

