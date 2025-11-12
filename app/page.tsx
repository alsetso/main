import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { Text, Button } from '@alset/ui/atoms';
import { CyclingText } from './components/CyclingText';

export const metadata: Metadata = generatePageMetadata({
  title: 'Alset Solutions, Inc. — Private Investment • Local Acquisition • Growth Partnership',
  description: 'Alset Solutions is a Minnesota-based private investment and growth firm. We pool local capital to acquire strong businesses and properties — then grow them through technology, marketing, and operational excellence.',
  path: '/',
  keywords: [
    'Minnesota private investment',
    'business acquisition Minnesota',
    'growth partnership',
    'local capital pool',
    'Minnesota investment firm',
    'business growth Minnesota',
  ],
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section — Inline Style */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-6 sm:space-y-8 py-12 sm:py-16">
          {/* Subtitle Badge */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-semibold">
            <span className="px-3 py-1 bg-gray-100 rounded-full">Private Investment</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">Local Acquisition</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full">Growth Partnership</span>
          </div>

          {/* Headline */}
          <Text as="h1" variant="display" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 text-center">
            We <CyclingText words={['Invest', 'Buy', 'Grow', 'Sell']} interval={3300} className="text-gray-900" /> — Together.
          </Text>
          
          {/* Subheadline */}
          <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
            <Text variant="body" className="text-base sm:text-lg md:text-xl text-gray-700 leading-snug font-medium text-center">
              Alset Solutions is a Minnesota-based private investment and growth firm.
            </Text>
            <Text variant="body" className="text-sm sm:text-base md:text-lg text-gray-600 leading-snug text-center">
              We pool local capital to acquire strong businesses and properties — then grow them through technology, marketing, and operational excellence.
            </Text>
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Link href="/invest" className="w-full">
              <Button variant="primary" size="lg" className="w-full text-base sm:text-lg font-semibold py-4 rounded-xl shadow-md">
                Join the Capital Pool
              </Button>
            </Link>
            <Link href="/get-started" className="w-full">
              <Button variant="ghost" size="lg" className="w-full text-base sm:text-lg font-semibold py-4 rounded-xl">
                Sell or Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
