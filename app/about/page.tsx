import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { AlsetShapesBackground, AlsetManifest } from '@alset/ui';

export const metadata: Metadata = generatePageMetadata({
  title: 'For the Love of Minnesota',
  description: 'We were raised here — where winters are unforgiving, but people aren\'t. Alset Solutions forms partnerships with Minnesota businesses, bringing capital, systems, and strategy to help them scale.',
  path: '/about',
  keywords: [
    'Minnesota investment company',
    'Minnesota private investment',
    'Minnesota business investment',
    'Minnesota entrepreneurs',
    'Minnesota economic development',
  ],
});


export default function ManifestoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Manifesto', url: `${siteConfig.url}/about` },
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
        headline="Alset Manifesto"
        subtitle="For the Love of Minnesota"
        showShapes={false}
      />

      {/* The Alset Manifesto Section */}
      <AlsetManifest />
    </>
  );
}
