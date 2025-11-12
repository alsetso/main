import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { Text, Button } from '@alset/ui/atoms';
import { Section } from '@alset/ui/molecules';

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            {/* Header */}
            <div className="text-center space-y-3 sm:space-y-4">
              <Text as="h1" variant="display" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Roofing and Siding North of Twin Cities
              </Text>
              <Text variant="body" className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 font-medium">
                Anoka County, MN
              </Text>
            </div>

            {/* Deal Overview */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <Text variant="body" className="text-xs text-gray-600 font-medium mb-1.5 sm:mb-2">
                    Deal Size
                  </Text>
                  <Text variant="body" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    $2,000,000
                  </Text>
                  <Text variant="body" className="text-xs sm:text-sm text-gray-600 mt-1">
                    Enterprise Value
                  </Text>
                </div>
                
                <div>
                  <Text variant="body" className="text-xs text-gray-600 font-medium mb-1.5 sm:mb-2">
                    Deal Type
                  </Text>
                  <Text variant="body" className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                    SBA 7(a) + Seller Financing + Investor Capital Pool
                  </Text>
                </div>
                
                <div>
                  <Text variant="body" className="text-xs text-gray-600 font-medium mb-1.5 sm:mb-2">
                    Use of Funds
                  </Text>
                  <Text variant="body" className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                    Acquisition deposit + working capital + transition cushion
                  </Text>
                </div>
              </div>
            </div>

            {/* Funding Breakdown */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6">
              <Text as="h2" variant="heading" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Funding Breakdown
              </Text>
              
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
                          Source
                        </Text>
                      </th>
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
                          Amount
                        </Text>
                      </th>
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
                          % of Total
                        </Text>
                      </th>
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
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
                        <td className="py-4 px-6">
                          <Text variant="body" className={`text-sm ${item.isTotal ? 'font-bold' : 'font-medium'} text-gray-900`}>
                            {item.source}
                          </Text>
                        </td>
                        <td className="py-4 px-6">
                          <Text variant="body" className={`text-sm ${item.isTotal ? 'font-bold' : ''} text-gray-900`}>
                            {item.amount}
                          </Text>
                        </td>
                        <td className="py-4 px-6">
                          <Text variant="body" className={`text-sm ${item.isTotal ? 'font-bold' : ''} text-gray-900`}>
                            {item.percentage}
                          </Text>
                        </td>
                        <td className="py-4 px-6">
                          <Text variant="body" className="text-sm text-gray-700">
                            {item.notes}
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Mobile Cards */}
              <div className="md:hidden space-y-2">
                {fundingBreakdown.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-3 ${item.isTotal ? 'bg-gray-50 border-gray-300' : 'border-gray-200'}`}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <Text variant="body" className={`text-sm ${item.isTotal ? 'font-bold' : 'font-semibold'} text-gray-900`}>
                          {item.source}
                        </Text>
                        <div className="text-right">
                          <Text variant="body" className={`text-sm ${item.isTotal ? 'font-bold' : 'font-semibold'} text-gray-900`}>
                            {item.amount}
                          </Text>
                          <Text variant="body" className="text-xs text-gray-600 ml-2">
                            {item.percentage}
                          </Text>
                        </div>
                      </div>
                      <Text variant="body" className="text-xs text-gray-700">
                        {item.notes}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Investor Snapshot */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6">
              <Text as="h2" variant="heading" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Investor Snapshot
              </Text>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <Text variant="body" className="text-xs text-gray-600 font-medium mb-1.5 sm:mb-2">
                    Investment Range
                  </Text>
                  <Text variant="body" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    $50,000 – $400,000
                  </Text>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <Text variant="body" className="text-xs text-gray-600 font-medium mb-1.5 sm:mb-2">
                    Weighted Leverage
                  </Text>
                  <Text variant="body" className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                    Every $1 invested controls roughly $5 in business value through SBA leverage.
                  </Text>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <Text variant="body" className="text-xs text-gray-600 font-medium mb-1.5 sm:mb-2">
                    Projected ROI
                  </Text>
                  <Text variant="body" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    20–30% within 24–36 months
                  </Text>
                </div>
              </div>
              
              <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                  <Text variant="body" className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Security
                  </Text>
                  <Text variant="body" className="text-xs sm:text-sm md:text-base text-gray-700">
                    Backed by $235K+ in equipment, $200K+ in cash and receivables, and full SBA collateral.
                  </Text>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <Text variant="body" className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 mb-1.5 sm:mb-2">
                    Equity Control
                  </Text>
                  <Text variant="body" className="text-xs sm:text-sm md:text-base text-gray-700">
                    Alset retains 100% ownership and management of the company.
                  </Text>
                </div>
              </div>
            </div>

            {/* Use of Investor Funds */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6">
              <Text as="h2" variant="heading" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Use of Investor Funds
              </Text>
              
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
                          Category
                        </Text>
                      </th>
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
                          Allocation
                        </Text>
                      </th>
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
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
                        <td className="py-4 px-6">
                          <Text variant="body" className={`text-sm ${item.isTotal ? 'font-bold' : 'font-medium'} text-gray-900`}>
                            {item.category}
                          </Text>
                        </td>
                        <td className="py-4 px-6">
                          <Text variant="body" className={`text-sm ${item.isTotal ? 'font-bold' : ''} text-gray-900`}>
                            {item.allocation}
                          </Text>
                        </td>
                        <td className="py-4 px-6">
                          <Text variant="body" className="text-sm text-gray-700">
                            {item.purpose}
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Mobile Cards */}
              <div className="md:hidden space-y-2">
                {useOfFunds.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-3 ${item.isTotal ? 'bg-gray-50 border-gray-300' : 'border-gray-200'}`}
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <Text variant="body" className={`text-sm ${item.isTotal ? 'font-bold' : 'font-semibold'} text-gray-900`}>
                          {item.category}
                        </Text>
                        <Text variant="body" className={`text-sm ${item.isTotal ? 'font-bold' : 'font-semibold'} text-gray-900`}>
                          {item.allocation}
                        </Text>
                      </div>
                      <Text variant="body" className="text-xs text-gray-700">
                        {item.purpose}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Investor Example */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6">
              <Text as="h2" variant="heading" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Investor Example
              </Text>
              
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
                          Investor Contribution
                        </Text>
                      </th>
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
                          Projected Return (24 mo)
                        </Text>
                      </th>
                      <th className="text-left py-4 px-6">
                        <Text variant="subheading" className="text-sm font-semibold text-gray-900">
                          Projected Return (36 mo)
                        </Text>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {investorExamples.map((example, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-4 px-6">
                          <Text variant="body" className="text-base font-bold text-gray-900">
                            {example.contribution}
                          </Text>
                        </td>
                        <td className="py-4 px-6">
                          <Text variant="body" className="text-base font-semibold text-gray-900">
                            {example.return24mo}
                          </Text>
                        </td>
                        <td className="py-4 px-6">
                          <Text variant="body" className="text-base font-semibold text-gray-900">
                            {example.return36mo}
                          </Text>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Mobile Cards */}
              <div className="md:hidden space-y-2">
                {investorExamples.map((example, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <div className="space-y-2">
                      <Text variant="body" className="text-xs text-gray-600 font-medium">
                        Investment
                      </Text>
                      <Text variant="body" className="text-base font-bold text-gray-900">
                        {example.contribution}
                      </Text>
                      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-200">
                        <div>
                          <Text variant="body" className="text-xs text-gray-600 font-medium mb-1">
                            24 months
                          </Text>
                          <Text variant="body" className="text-sm font-semibold text-gray-900">
                            {example.return24mo}
                          </Text>
                        </div>
                        <div>
                          <Text variant="body" className="text-xs text-gray-600 font-medium mb-1">
                            36 months
                          </Text>
                          <Text variant="body" className="text-sm font-semibold text-gray-900">
                            {example.return36mo}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
}

