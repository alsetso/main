import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { Text, Button } from '@alset/ui/atoms';
import { Section } from '@alset/ui/molecules';
import { Container } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'Roofing and Siding Anoka — Investment Opportunity',
  description: 'Investment opportunity in Anoka County, MN: $2M deal with SBA 7(a) financing. Projected 20–30% ROI within 24–36 months.',
  path: '/opportunities/roofing-and-siding-anoka',
  keywords: [
    'Anoka County investment',
    'roofing business investment',
    'SBA 7(a) investment',
    'Minnesota business opportunity',
  ],
});

export default function RoofingAndSidingAnokaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://alset.so' },
    { name: 'Opportunities', url: 'https://alset.so/opportunities' },
    { name: 'Roofing and Siding Anoka', url: 'https://alset.so/opportunities/roofing-and-siding-anoka' },
  ]);

  const fundingBreakdown = [
    {
      source: 'SBA Loan',
      amount: '$1,400,000',
      percentage: '70%',
      notes: 'Primary acquisition financing (10-year term)',
    },
    {
      source: 'Seller Financing (Standby)',
      amount: '$200,000',
      percentage: '10%',
      notes: 'Deferred payments, interest-only for 12 months',
    },
    {
      source: 'Investor Capital Pool (Alset Raise)',
      amount: '$400,000',
      percentage: '20%',
      notes: 'Covers SBA down payment + operating reserves',
    },
    {
      source: 'Total Deal Value',
      amount: '$2,000,000',
      percentage: '100%',
      notes: 'All-in acquisition structure',
      isTotal: true,
    },
  ];

  const useOfFunds = [
    {
      category: 'SBA Down Payment',
      allocation: '$200,000',
      purpose: 'Required buyer equity injection',
    },
    {
      category: 'Operating Capital',
      allocation: '$150,000',
      purpose: 'Growth buffer and seasonal liquidity',
    },
    {
      category: 'Closing, Legal, and Fees',
      allocation: '$25,000',
      purpose: 'SBA origination, appraisal, legal',
    },
    {
      category: 'Marketing & Expansion',
      allocation: '$25,000',
      purpose: 'Immediate growth into Hennepin County',
    },
    {
      category: 'Total Raise',
      allocation: '$400,000',
      purpose: 'Fully allocated working capital plan',
      isTotal: true,
    },
  ];

  const investorExamples = [
    {
      contribution: '$50,000',
      return24mo: '$62,500 (25%)',
      return36mo: '$67,500 (35%)',
    },
    {
      contribution: '$100,000',
      return24mo: '$125,000 (25%)',
      return36mo: '$135,000 (35%)',
    },
    {
      contribution: '$200,000',
      return24mo: '$250,000 (25%)',
      return36mo: '$270,000 (35%)',
    },
    {
      contribution: '$400,000',
      return24mo: '$500,000 (25%)',
      return36mo: '$540,000 (35%)',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      <Section spacing="xl" className="pt-32 md:pt-40 bg-white">
        <Container size="lg">
          <div className="max-w-6xl mx-auto space-y-12 px-4">
            {/* Header */}
            <div className="text-center space-y-6">
              <Text as="h1" variant="display" className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
                Roofing and Siding North of Twin Cities
              </Text>
              <Text variant="body" className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
                Anoka County, MN
              </Text>
            </div>

            {/* Deal Overview */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-2">
                    Deal Size
                  </Text>
                  <Text variant="body" className="text-2xl sm:text-3xl font-bold text-gray-900">
                    $2,000,000
                  </Text>
                  <Text variant="body" className="text-sm text-gray-600 mt-1">
                    Enterprise Value
                  </Text>
                </div>
                
                <div>
                  <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-2">
                    Deal Type
                  </Text>
                  <Text variant="body" className="text-base sm:text-lg font-semibold text-gray-900">
                    SBA 7(a) + Seller Financing + Investor Capital Pool
                  </Text>
                </div>
                
                <div>
                  <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-2">
                    Use of Funds
                  </Text>
                  <Text variant="body" className="text-base sm:text-lg font-semibold text-gray-900">
                    Acquisition deposit + working capital + transition cushion
                  </Text>
                </div>
              </div>
            </div>

            {/* Funding Breakdown */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <Text as="h2" variant="heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Funding Breakdown
              </Text>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          Source
                        </Text>
                      </th>
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          Amount
                        </Text>
                      </th>
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          % of Total
                        </Text>
                      </th>
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          Notes
                        </Text>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fundingBreakdown.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 ${item.isTotal ? 'bg-gray-50 font-semibold' : ''}`}
                      >
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className={`text-sm sm:text-base ${item.isTotal ? 'font-bold' : 'font-medium'} text-gray-900`}>
                            {item.source}
                          </Text>
                        </td>
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className={`text-sm sm:text-base ${item.isTotal ? 'font-bold' : ''} text-gray-900`}>
                            {item.amount}
                          </Text>
                        </td>
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className={`text-sm sm:text-base ${item.isTotal ? 'font-bold' : ''} text-gray-900`}>
                            {item.percentage}
                          </Text>
                        </td>
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className="text-sm sm:text-base text-gray-700">
                            {item.notes}
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor Snapshot */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <Text as="h2" variant="heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Investor Snapshot
              </Text>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-5">
                  <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-2">
                    Investment Range
                  </Text>
                  <Text variant="body" className="text-xl sm:text-2xl font-bold text-gray-900">
                    $50,000 – $400,000
                  </Text>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-5">
                  <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-2">
                    Weighted Leverage
                  </Text>
                  <Text variant="body" className="text-base sm:text-lg font-semibold text-gray-900">
                    Every $1 invested controls roughly $5 in business value through SBA leverage.
                  </Text>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-5">
                  <Text variant="body" className="text-xs sm:text-sm text-gray-600 font-medium mb-2">
                    Projected ROI
                  </Text>
                  <Text variant="body" className="text-xl sm:text-2xl font-bold text-gray-900">
                    20–30% within 24–36 months
                  </Text>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="bg-blue-50 rounded-xl p-5">
                  <Text variant="body" className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    Security
                  </Text>
                  <Text variant="body" className="text-sm sm:text-base text-gray-700">
                    Backed by $235K+ in equipment, $200K+ in cash and receivables, and full SBA collateral.
                  </Text>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-5">
                  <Text variant="body" className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    Equity Control
                  </Text>
                  <Text variant="body" className="text-sm sm:text-base text-gray-700">
                    Alset retains 100% ownership and management of the company.
                  </Text>
                </div>
              </div>
            </div>

            {/* Use of Investor Funds */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <Text as="h2" variant="heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Use of Investor Funds
              </Text>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          Category
                        </Text>
                      </th>
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          Allocation
                        </Text>
                      </th>
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          Purpose
                        </Text>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {useOfFunds.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 ${item.isTotal ? 'bg-gray-50 font-semibold' : ''}`}
                      >
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className={`text-sm sm:text-base ${item.isTotal ? 'font-bold' : 'font-medium'} text-gray-900`}>
                            {item.category}
                          </Text>
                        </td>
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className={`text-sm sm:text-base ${item.isTotal ? 'font-bold' : ''} text-gray-900`}>
                            {item.allocation}
                          </Text>
                        </td>
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className="text-sm sm:text-base text-gray-700">
                            {item.purpose}
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Investor Example */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <Text as="h2" variant="heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Investor Example
              </Text>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          Investor Contribution
                        </Text>
                      </th>
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          Projected Return (24 mo)
                        </Text>
                      </th>
                      <th className="text-left py-4 px-4 sm:px-6">
                        <Text variant="subheading" className="text-sm sm:text-base font-semibold text-gray-900">
                          Projected Return (36 mo)
                        </Text>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {investorExamples.map((example, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className="text-base sm:text-lg font-bold text-gray-900">
                            {example.contribution}
                          </Text>
                        </td>
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className="text-base sm:text-lg font-semibold text-gray-900">
                            {example.return24mo}
                          </Text>
                        </td>
                        <td className="py-4 px-4 sm:px-6">
                          <Text variant="body" className="text-base sm:text-lg font-semibold text-gray-900">
                            {example.return36mo}
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-8 sm:p-10 text-center">
              <Text as="h2" variant="heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Invest?
              </Text>
              <Text variant="body" className="text-base sm:text-lg text-gray-300 mb-6">
                Join the Capital Pool and participate in this opportunity.
              </Text>
              <Link href="/invest">
                <Button variant="secondary" size="lg" className="text-base sm:text-lg font-semibold py-4 px-8 rounded-xl">
                  Join the Capital Pool
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

