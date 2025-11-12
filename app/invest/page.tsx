import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@alset/config/metadata';
import { Text, Button } from '@alset/ui/atoms';
import { Section } from '@alset/ui/molecules';
import { Container } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Investment Opportunities — Alset Solutions',
  description: 'Explore current investment opportunities in Minnesota home service businesses through Alset Solutions Capital Pool.',
  path: '/invest',
  keywords: [
    'investment opportunities',
    'Minnesota business investment',
    'home services investment',
    'Alset opportunities',
  ],
});

const opportunities = [
  {
    title: 'Roofing and Siding North of Twin Cities',
    location: 'Anoka County, MN',
    dealSize: '$2,000,000',
    dealType: 'SBA 7(a) + Seller Financing + Investor Capital Pool',
    investmentRange: '$50,000 – $400,000',
    projectedROI: '20–30% within 24–36 months',
    href: '/opportunities/roofing-and-siding-anoka',
  },
];

export default function InvestPage() {
  return (
    <>
      <Section spacing="xl" className="pt-32 md:pt-40 bg-white">
        <Container size="lg">
          <div className="max-w-6xl mx-auto space-y-12 px-4">
            {/* Header */}
            <div className="text-center space-y-6">
              <Text as="h1" variant="display" className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                Investment Opportunities
              </Text>
              <Text variant="body" className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
                Current investment opportunities in Minnesota home service businesses.
              </Text>
            </div>

            {/* Opportunity Cards */}
            <div className="grid gap-6 sm:gap-8">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow">
                  <div className="space-y-6">
                    <div>
                      <Text variant="body" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        {opportunity.title}
                      </Text>
                      <Text variant="body" className="text-base sm:text-lg text-gray-600">
                        {opportunity.location}
                      </Text>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-1">
                          Deal Size
                        </Text>
                        <Text variant="body" className="text-lg sm:text-xl font-bold text-gray-900">
                          {opportunity.dealSize}
                        </Text>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-4">
                        <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-1">
                          Investment Range
                        </Text>
                        <Text variant="body" className="text-lg sm:text-xl font-bold text-gray-900">
                          {opportunity.investmentRange}
                        </Text>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-4">
                        <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-1">
                          Projected ROI
                        </Text>
                        <Text variant="body" className="text-lg sm:text-xl font-bold text-gray-900">
                          {opportunity.projectedROI}
                        </Text>
                      </div>
                      
                      <div className="bg-blue-50 rounded-xl p-4">
                        <Text variant="body" className="text-xs sm:text-sm text-blue-700 font-medium mb-1">
                          Deal Type
                        </Text>
                        <Text variant="body" className="text-sm sm:text-base font-semibold text-blue-900">
                          {opportunity.dealType}
                        </Text>
                      </div>
                    </div>

                    {/* Revenue & Growth Projections */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                      <Text variant="body" className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                        Revenue & Growth Projections
                      </Text>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-1">
                            2026 Revenue (Est.)
                          </Text>
                          <Text variant="body" className="text-xl sm:text-2xl font-bold text-gray-900">
                            $4M
                          </Text>
                        </div>
                        <div>
                          <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-1">
                            2026 Net Earnings
                          </Text>
                          <Text variant="body" className="text-xl sm:text-2xl font-bold text-gray-900">
                            $400K
                          </Text>
                        </div>
                        <div>
                          <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-1">
                            2030 Projected Revenue
                          </Text>
                          <Text variant="body" className="text-xl sm:text-2xl font-bold text-gray-900">
                            $8M
                          </Text>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Link href={opportunity.href}>
                        <Button variant="primary" size="lg" className="w-full sm:w-auto text-base sm:text-lg font-semibold py-4 px-8 rounded-xl">
                          View Full Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

