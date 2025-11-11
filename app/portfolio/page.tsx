import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import {
  Hero,
  Section,
  Text,
  Card,
  CallToAction,
} from '@alset/ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'Portfolio - Our Investment Companies',
  description: `Explore ${siteConfig.name}'s portfolio of companies across real estate, home services, healthcare, robotics, and software. Building exceptional businesses through strategic capital and operational excellence.`,
  path: '/portfolio',
  keywords: [
    'portfolio companies',
    'investment portfolio Minnesota',
    'private equity portfolio',
    'portfolio enterprises',
    'Minnesota investment companies',
  ],
});

// Portfolio companies - can be expanded as companies are added
const portfolioCompanies = [
  {
    name: 'Coming Soon',
    industry: 'Portfolio Development',
    description: 'We are actively building our portfolio of exceptional companies. Our focus is on identifying businesses with strong fundamentals, growth potential, and opportunities for technology integration.',
    status: 'active',
  },
];

const industries = siteConfig.industries.map((industry) => ({
  name: industry,
  description: `We seek opportunities in ${industry.toLowerCase()} that align with our investment criteria and strategic vision.`,
}));

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Portfolio', url: `${siteConfig.url}/portfolio` },
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
        subtitle="Our Portfolio"
        title="Building Exceptional Companies"
        description="We invest in and build businesses across multiple industries, combining strategic capital, operational expertise, and technology to create lasting value."
        className="pt-32 md:pt-40"
      />

      <Section spacing="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Text as="h2" variant="heading">
              Portfolio Companies
            </Text>
            <Text variant="body" className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto">
              Our portfolio represents a diverse collection of businesses, each selected for their potential to become leaders in their respective markets.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioCompanies.map((company, index) => (
              <Card key={index} className="p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mb-3">
                    {company.industry}
                  </span>
                  <Text as="h3" variant="subheading" className="text-2xl mb-3">
                    {company.name}
                  </Text>
                </div>
                <Text variant="body" className="text-gray-600 leading-relaxed">
                  {company.description}
                </Text>
                {company.status && (
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {company.status.charAt(0).toUpperCase() + company.status.slice(1)}
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section spacing="xl" className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Text as="h2" variant="heading">
              Our Portfolio Companies
            </Text>
          </div>

          <div className="space-y-4">
            {[
              {
                name: 'MNUDA',
                url: 'https://mnuda.com',
              },
              {
                name: 'Remedy Testing',
                url: 'https://remedytesting.com',
              },
              {
                name: 'Enostics',
                url: 'https://enostics.com',
              },
            ].map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full"
              >
                <div className="flex items-center justify-between p-8 md:p-12 bg-white border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg">
                  <Text as="h3" variant="display" className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    {company.name}
                  </Text>
                  <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-black text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      <Section spacing="xl" className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Text as="h2" variant="heading">
              Focus Industries
            </Text>
            <Text variant="body" className="text-gray-600 text-xl mt-4 max-w-3xl mx-auto">
              We actively seek opportunities across these industries, where we can apply our expertise in operations, technology, and strategic growth.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
                <Text as="h3" variant="subheading" className="text-xl mb-2">
                  {industry.name}
                </Text>
                <Text variant="body" className="text-gray-600 text-sm">
                  {industry.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <Text as="h2" variant="heading">
              Our Investment Approach
            </Text>
            <Text variant="body" className="text-gray-600 text-lg leading-relaxed">
              We don&apos;t just invest—we build. When we acquire a company, we become deeply involved in strategy, operations, and growth. Our portfolio companies benefit from shared infrastructure, technology expertise, and operational support that allows them to focus on what they do best while we handle the rest.
            </Text>
            <Text variant="body" className="text-gray-600 text-lg leading-relaxed">
              Each portfolio company maintains its unique identity and culture while benefiting from the resources and expertise of the Alset platform. This model creates value for our companies, their customers, and our partners.
            </Text>
          </div>
        </div>
      </Section>

      <CallToAction />
    </>
  );
}

