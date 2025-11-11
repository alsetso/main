import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema, generateContactPageSchema } from '@alset/config/structured-data';
import {
  Hero,
  Section,
  Text,
  Card,
} from '@alset/ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us - Get in Touch',
  description: `Contact ${siteConfig.name} to discuss investment opportunities, partnerships, or learn more about our approach to building exceptional companies.`,
  path: '/contact',
  keywords: [
    'contact Alset',
    'Minnesota investment firm contact',
    'investment inquiry',
    'business partnership inquiry',
    'private equity contact',
  ],
});

const contactMethods = [
  {
    title: 'Email',
    description: 'For general inquiries and partnership opportunities',
    value: siteConfig.contact.email,
    link: `mailto:${siteConfig.contact.email}`,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Location',
    description: 'Based in Minnesota, serving opportunities nationwide',
    value: siteConfig.location,
    link: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const inquiryTypes = [
  {
    title: 'Investment Opportunities',
    description: 'If you\'re considering selling your business or seeking a strategic partner, we\'d love to learn more about your company and explore how we might work together.',
  },
  {
    title: 'Portfolio Partnerships',
    description: 'For companies interested in partnering with our portfolio companies or exploring synergies across our network.',
  },
  {
    title: 'General Inquiries',
    description: 'Questions about our approach, investment criteria, or how we might be able to help your business grow.',
  },
];

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` },
  ]);
  const contactPageSchema = generateContactPageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      <Hero
        subtitle="Get in Touch"
        title="Let's Start a Conversation"
        description="Whether you're exploring a partnership, considering selling your business, or want to learn more about our approach, we'd love to hear from you."
        className="pt-32 md:pt-40"
      />

      <Section spacing="xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-gray-400">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <Text as="h3" variant="subheading" className="text-xl mb-2">
                      {method.title}
                    </Text>
                    <Text variant="body" className="text-gray-600 mb-3">
                      {method.description}
                    </Text>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <Text variant="body" className="font-medium">
                        {method.value}
                      </Text>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section spacing="xl" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Text as="h2" variant="heading">
              What We&apos;re Looking For
            </Text>
            <Text variant="body" className="text-gray-600 text-xl mt-4">
              We&apos;re actively seeking opportunities across our focus industries
            </Text>
          </div>

          <div className="space-y-6">
            {inquiryTypes.map((inquiry, index) => (
              <Card key={index} className="p-8">
                <Text as="h3" variant="subheading" className="text-xl mb-3">
                  {inquiry.title}
                </Text>
                <Text variant="body" className="text-gray-600 leading-relaxed">
                  {inquiry.description}
                </Text>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section spacing="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <Text as="h2" variant="heading">
              Next Steps
            </Text>
            <Text variant="body" className="text-gray-600 text-lg leading-relaxed">
              Reach out to us at{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              {' '}to start a conversation. We typically respond within 24-48 hours and are happy to schedule a call to discuss your business, our approach, and how we might work together.
            </Text>
            <Text variant="body" className="text-gray-600 text-lg leading-relaxed">
              For investment opportunities, please include information about your company, industry, revenue, and what you&apos;re looking for in a partner. All inquiries are treated with complete confidentiality.
            </Text>
          </div>
        </div>
      </Section>
    </>
  );
}

