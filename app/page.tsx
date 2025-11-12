import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { AlsetShapesBackground } from '@alset/ui';
import { Text, Button } from '@alset/ui/atoms';
import { CyclingText } from './components/CyclingText';

export const metadata: Metadata = generatePageMetadata({
  title: 'Alset Solutions, Inc. — Private Investment • Local Assessment • Growth Partnership',
  description: 'Alset Solutions is a Minnesota-based private investment and growth firm. We pool local capital to assess strong businesses and properties — then grow them through technology, marketing, and operational excellence.',
  path: '/',
  keywords: [
    'Minnesota private investment',
    'business assessment Minnesota',
    'growth partnership',
    'local capital pool',
    'Minnesota investment firm',
    'business growth Minnesota',
  ],
});

export default function HomePage() {
  return (
    <>
      {/* 0. Shapes Background Hero */}
      <AlsetShapesBackground />

      {/* 1. Compact Hero Section — Notion/Airtable Style */}
      <section className="relative w-full bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="space-y-8">
            {/* Main Content */}
            <div className="space-y-6">
              <Text as="h2" variant="heading" className="text-gray-900">
                We <CyclingText words={['Invest', 'Buy', 'Grow', 'Sell']} interval={3300} className="text-gray-900" /> — Together.
              </Text>
              
              <div className="space-y-3">
                <Text variant="body" className="text-gray-700">
                  Alset Solutions is a Minnesota-based private investment and growth firm.
                </Text>
                <Text variant="body" className="text-gray-600">
                  We pool local capital to assess strong businesses and properties — then grow them through technology, marketing, and operational excellence.
                </Text>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/invest" className="flex-1">
                <Button variant="primary" size="md" className="w-full font-medium py-2.5 rounded-md">
                  Join the Capital Pool
                </Button>
              </Link>
              <Link href="/get-started" className="flex-1">
                <Button variant="secondary" size="md" className="w-full font-medium py-2.5 rounded-md border border-gray-300">
                  Sell or Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
