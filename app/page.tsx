import { Metadata } from 'next';
import { generatePageMetadata } from '@alset/config/metadata';
import { HomePageContent } from './components/HomePageContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Alset Solutions, Inc. — Private Investment • Local Assessment • Growth Partnership',
  description: 'We acquire Minnesota businesses through joint-ventures — and we run an inhouse growth team for owners who want to scale instead of sell.',
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
      <HomePageContent />
    </>
  );
}
