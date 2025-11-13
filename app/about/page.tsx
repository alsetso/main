import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { AlsetShapesBackground, ContentSection, ContentBlock } from '@alset/ui';

export const metadata: Metadata = generatePageMetadata({
  title: 'For the Love of Minnesota',
  description: 'We were raised here — where the winters are long, the work is honest, and people still wave when they pass you on the road. Alset Solutions forms partnerships with Minnesota businesses, bringing capital, systems, and strategy to help them scale.',
  path: '/about',
  keywords: [
    'Minnesota investment company',
    'Minnesota private investment',
    'Minnesota business investment',
    'Minnesota entrepreneurs',
    'Minnesota economic development',
  ],
});

const manifestoContent = [
  {
    type: 'paragraph',
    text: `We were raised here —

where the winters are long, the work is honest,

and people still wave when they pass you on the road.`,
  },
  {
    type: 'paragraph',
    text: `Where businesses are built on handshakes, not headlines.`,
  },
  {
    type: 'paragraph',
    text: `Where integrity isn't optional — it's expected.`,
  },
  {
    type: 'paragraph',
    text: `Minnesota has always been more than a place.

It's a mindset.

A quiet determination that says:

we can build anything if we do it right.`,
  },
  {
    type: 'paragraph',
    text: `Alset Solutions was born from that belief.`,
  },
  {
    type: 'paragraph',
    text: `We don't run a fund.

We form partnerships.

We build with owners — not above them.`,
  },
  {
    type: 'paragraph',
    text: `Alset creates joint ventures with small and mid-sized Minnesota businesses,

bringing the capital, systems, and strategy to help them scale —

while keeping founders at the heart of the company they built.`,
  },
  {
    type: 'paragraph',
    text: `We are operators, not spectators.

We grow businesses from the inside out — through leadership, technology, and execution that lasts.`,
  },
  {
    type: 'paragraph',
    text: `Our mission is simple:

help good people build great companies

through partnership, growth, and grit.`,
  },
  {
    type: 'paragraph',
    emphasis: true,
    text: `Because when Minnesota builds,

it builds things that last.`,
  },
];


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
      <ContentSection variant="default">
        {manifestoContent.map((block, index) => (
          <ContentBlock
            key={index}
            size={block.emphasis ? 'lg' : 'md'}
            emphasis={block.emphasis}
            className="whitespace-pre-line"
            >
            {block.text}
          </ContentBlock>
        ))}
      </ContentSection>
    </>
  );
}
