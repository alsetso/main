import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@alset/config/metadata';
import { Text, Button } from '@alset/ui/atoms';
import { Section } from '@alset/ui/molecules';

export const metadata: Metadata = generatePageMetadata({
  title: 'Investment Opportunities — Alset Solutions',
  description: 'Explore current investment opportunities in Minnesota home service businesses through Alset Solutions Capital Pool.',
  path: '/opportunities',
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

export default function OpportunitiesPage() {
  return (
    <>
      <Section spacing="xl" className="pt-32 md:pt-40 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Header */}
            <div className="text-center space-y-3 sm:space-y-4">
              <Text as="h1" variant="display" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Investment Opportunities
              </Text>
              <Text variant="body" className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
                Current investment opportunities in Minnesota home service businesses.
              </Text>
            </div>

            {/* Opportunity Cards */}
            <div className="grid gap-4 sm:gap-5 md:gap-6">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 hover:border-gray-300 transition-colors">
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <div>
                      <Text variant="body" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                        {opportunity.title}
                      </Text>
                      <Text variant="body" className="text-sm sm:text-base md:text-lg text-gray-600">
                        {opportunity.location}
                      </Text>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                      <div className="bg-gray-50 rounded-lg p-2.5 sm:p-3">
                        <Text variant="body" className="text-xs text-gray-600 font-medium mb-0.5">
                          Deal Size
                        </Text>
                        <Text variant="body" className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                          {opportunity.dealSize}
                        </Text>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-2.5 sm:p-3">
                        <Text variant="body" className="text-xs text-gray-600 font-medium mb-0.5">
                          Investment Range
                        </Text>
                        <Text variant="body" className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                          {opportunity.investmentRange}
                        </Text>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-2.5 sm:p-3">
                        <Text variant="body" className="text-xs text-gray-600 font-medium mb-0.5">
                          Projected ROI
                        </Text>
                        <Text variant="body" className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                          {opportunity.projectedROI}
                        </Text>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-2.5 sm:p-3">
                        <Text variant="body" className="text-xs text-blue-700 font-medium mb-0.5">
                          Deal Type
                        </Text>
                        <Text variant="body" className="text-xs sm:text-sm md:text-base font-semibold text-blue-900">
                          {opportunity.dealType}
                        </Text>
                      </div>
                    </div>
                    
                    <div className="pt-2 sm:pt-3">
                      <Link href={opportunity.href}>
                        <Button variant="primary" size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg">
                          View Full Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

