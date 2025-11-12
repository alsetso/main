import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { Hero } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Container } from '@alset/ui/atoms';
import { Text, Button } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Get Started — Partner in Growth with Alset',
  description: 'Partner with Alset Solutions to scale your Minnesota business. We bring capital, structure, and growth strategy to help your business reach its next level.',
  path: '/get-started',
  keywords: [
    'sell business Minnesota',
    'business partnership Minnesota',
    'growth services partnership',
    'business acquisition',
    'sell company Minnesota',
  ],
});

export default function GetStartedPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Get Started', url: `${siteConfig.url}/get-started` },
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
        subtitle="Get Started"
        title="Where Are You in Your Journey?"
        description="Whether you want a strategic partner or you're ready to exit — we work with Minnesota business owners at every stage. No pressure, no assumptions."
        className="pt-32 md:pt-40"
      />

      <Section spacing="xl" className="bg-white">
        <Container size="lg">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 px-4">
            {/* Introduction */}
            <div className="space-y-6">
              <Text variant="body" className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                If you've built a good business in Minnesota, you know what it took — long days, lean years, and a lot of pride.
              </Text>
              <Text variant="body" className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Now, you might be ready for something more: new growth, new systems, or maybe even a well-deserved transition.
              </Text>
            </div>

            {/* That's where Alset comes in */}
            <div className="space-y-4">
              <Text variant="body" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                That's where Alset Solutions comes in.
              </Text>
              <Text variant="body" className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                We're a Minnesota-based private investment firm that partners directly with local business owners.
              </Text>
              <Text variant="body" className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                We bring capital, structure, and growth strategy — not to change who you are, but to help your business reach its next level.
              </Text>
            </div>

            {/* Path Selection */}
            <div className="space-y-8">
              <div className="text-center">
                <Text variant="body" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Where are you in your journey?
                </Text>
                <Text variant="body" className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Every business owner is at a different stage. We work with you exactly where you are — no pressure, no assumptions.
                </Text>
              </div>

              {/* Two Paths */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {/* Path 1: Strategic Partnership */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border-2 border-gray-200 hover:border-gray-900 transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-900 font-bold text-lg">1</span>
                      </div>
                      <Text variant="body" className="text-xl sm:text-2xl font-bold text-gray-900">
                        Strategic Partnership
                      </Text>
                    </div>
                    <Text variant="body" className="text-sm sm:text-base text-gray-600 font-medium">
                      You want a partner to help grow, but you're not ready to exit.
                    </Text>
                    <div className="space-y-2 pt-2">
                      <Text variant="body" className="text-sm text-gray-700">
                        ✓ Capital injection for growth
                      </Text>
                      <Text variant="body" className="text-sm text-gray-700">
                        ✓ Shared ownership structure
                      </Text>
                      <Text variant="body" className="text-sm text-gray-700">
                        ✓ Strategic guidance and support
                      </Text>
                      <Text variant="body" className="text-sm text-gray-700">
                        ✓ You maintain control
                      </Text>
                    </div>
                    <div className="pt-4">
                      <Link href="/contact" className="block">
                        <Button variant="secondary" size="md" className="w-full text-sm sm:text-base font-semibold py-3 rounded-xl">
                          Discuss Partnership
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Path 3: Full Exit */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border-2 border-gray-200 hover:border-gray-900 transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-900 font-bold text-lg">2</span>
                      </div>
                      <Text variant="body" className="text-xl sm:text-2xl font-bold text-gray-900">
                        Full Exit
                      </Text>
                    </div>
                    <Text variant="body" className="text-sm sm:text-base text-gray-600 font-medium">
                      You're ready to sell and transition to your next chapter.
                    </Text>
                    <div className="space-y-2 pt-2">
                      <Text variant="body" className="text-sm text-gray-700">
                        ✓ Fair market valuation
                      </Text>
                      <Text variant="body" className="text-sm text-gray-700">
                        ✓ Local, trusted buyer
                      </Text>
                      <Text variant="body" className="text-sm text-gray-700">
                        ✓ Smooth transition
                      </Text>
                      <Text variant="body" className="text-sm text-gray-700">
                        ✓ Business stays in Minnesota
                      </Text>
                    </div>
                    <div className="pt-4">
                      <Link href="/contact" className="block">
                        <Button variant="secondary" size="md" className="w-full text-sm sm:text-base font-semibold py-3 rounded-xl">
                          Explore Sale
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Services Note */}
              <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 text-center mt-8">
                <Text variant="body" className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Looking for Growth Services Instead?
                </Text>
                <Text variant="body" className="text-sm sm:text-base text-gray-700 mb-4">
                  If you want branding, online advertising, or sales funnel optimization without giving up ownership, check out our Growth Services.
                </Text>
                <Link href="/growth">
                  <Button variant="secondary" size="md" className="text-sm sm:text-base font-semibold py-3 px-6 rounded-xl">
                    Explore Growth Services
                  </Button>
                </Link>
              </div>

              {/* Not Sure Section */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center mt-8">
                <Text variant="body" className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Not sure which path is right for you?
                </Text>
                <Text variant="body" className="text-sm sm:text-base text-gray-700 mb-4">
                  That's okay. Many business owners start with a conversation to explore their options. We'll help you understand what makes sense for your situation.
                </Text>
                <Link href="/contact">
                  <Button variant="ghost" size="md" className="text-sm sm:text-base font-semibold py-3 px-6 rounded-xl">
                    Let's Talk It Through
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

