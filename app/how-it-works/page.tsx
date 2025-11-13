import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { AlsetShapesBackground } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Text, Container, Button } from '@alset/ui/atoms';
import { Card } from '@alset/ui/molecules';

export const metadata: Metadata = generatePageMetadata({
  title: 'How It Works — Alset Solutions',
  description: 'Learn about our two core approaches: Joint Venture Partnerships and our Inhouse Growth Team. Discover how we help Minnesota businesses grow and scale.',
  path: '/how-it-works',
  keywords: [
    'joint venture partnerships',
    'growth agency',
    'business partnership',
    'Minnesota business growth',
    'investment partnership',
  ],
});

const articles = [
  {
    slug: 'joint-ventures',
    title: 'Joint-Ventures',
    description: 'Alset Solutions acquires established Minnesota businesses through carefully structured joint-ventures with qualified capital partners to purchase, operate, and grow companies positioned for long-term success.',
  },
  {
    slug: 'inhouse-growth-team',
    title: 'Inhouse Growth Team',
    description: 'For owners who want to scale instead of sell. Alset runs a full-stack growth agency that helps Minnesota business owners scale—without giving up equity.',
  },
];

export default function HowItWorksPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'How It Works', url: `${siteConfig.url}/how-it-works` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <AlsetShapesBackground 
        headline="How It Works"
        subtitle="Two paths to growth: partnerships and expertise"
        showShapes={false}
      />

      {/* Articles Grid */}
      <Section spacing="xl" className="bg-white">
        <Container size="lg">
          <div className="max-w-6xl mx-auto space-y-12">
            <header className="text-center max-w-3xl mx-auto">
              <Text as="h2" variant="heading" className="mb-4">
                Our Approach
              </Text>
              <Text variant="body" className="text-lg text-gray-600">
                We offer two distinct paths to help Minnesota businesses grow and scale.
              </Text>
            </header>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8" aria-label="How It Works Articles">
              {articles.map((article) => (
                <article key={article.slug}>
                  <Link href={`/how-it-works/${article.slug}`} className="block h-full">
                    <Card className="p-8 h-full">
                      <div className="space-y-4">
                        <Text as="h3" variant="subheading" className="text-2xl md:text-3xl text-gray-900">
                          {article.title}
                        </Text>
                        <Text variant="body" className="text-gray-600 leading-relaxed">
                          {article.description}
                        </Text>
                        <div className="pt-4">
                          <Text variant="body" className="text-sm font-medium text-gray-900 inline-flex items-center">
                            Learn more →
                          </Text>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </article>
              ))}
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
}

