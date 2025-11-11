import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { Hero, Button } from '@alset/ui/index';

export const metadata: Metadata = generatePageMetadata({
  title: 'Minnesota Investment Opportunities',
  description: 'Explore high-value investment opportunities across real estate and home services in Minnesota.',
  path: '/minnesota',
  keywords: [
    'Minnesota investments',
    'Minnesota private equity',
    'Minnesota real estate investment',
    'Minnesota business investment',
  ],
});

export default function MinnesotaPage() {
  return (
    <>
      <Hero
        title="Minnesota Investment Opportunities"
        subtitle="Strategic Private Firm Investments"
        description="We identify and invest in high-value opportunities across key industries in Minnesota, focusing on businesses with strong returns and growth potential."
        className="pt-32 md:pt-40"
      >
        <Link href="/minnesota/industries">
          <Button size="lg">
            Explore Industries
          </Button>
        </Link>
      </Hero>
    </>
  );
}

