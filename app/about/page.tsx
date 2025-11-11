import { Metadata } from 'next';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { Hero } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Text } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: 'For the Love of Minnesota',
  description: 'We were built here — where the winters are long, the people are steady, and doing things right still matters. Minnesota taught us that hard work is the first investment, and community is the greatest return.',
  path: '/about',
  keywords: [
    'Minnesota investment company',
    'Minnesota private investment',
    'Minnesota business investment',
    'Minnesota entrepreneurs',
    'Minnesota economic development',
  ],
});

const manifestoSections = [
  {
    content: `We were built here — where the winters are long, the people are steady, and doing things right still matters.

Minnesota taught us that hard work is the first investment, and community is the greatest return.`,
  },
  {
    content: `At Alset Solutions, we believe in building things that last.

Not just apps, or ads, or spreadsheets — but real businesses, owned by real people, doing real good.`,
  },
  {
    content: `We see a state full of quiet builders — small business owners, creators, and innovators who wake up every day to push their craft forward.

They don't ask for handouts. They ask for clarity, strategy, and someone who believes in them.`,
  },
  {
    content: `That's why we exist.

We bring the tools of tomorrow — capital, creativity, and code — to help local businesses thrive today.

We invest where it matters most: in people, purpose, and potential.`,
  },
  {
    content: `We are not here to follow trends.

We are here to lead transformation — to help rebuild Minnesota's economic foundation from the inside out.

To make our towns stronger, our entrepreneurs bolder, and our communities more connected.`,
  },
  {
    content: `Because the future won't be built in boardrooms or Silicon Valley — it will be built right here.

By those who choose to believe in something bigger than themselves.

By those who plant roots, not just stakes.`,
  },
  {
    content: `We are Alset Solutions — a private investment and technology company born from the heart of Minnesota.

We're here to create value that lasts, opportunity that multiplies, and a future we can all be proud of.`,
  },
  {
    content: `Build smarter. Invest deeper. Grow together.

That's the Alset way.

That's the Minnesota way.`,
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

      <Hero
        title="For the Love of Minnesota"
        className="pt-32 md:pt-40"
      />

      <article>
        {manifestoSections.map((section, index) => (
          <Section
            key={index}
            spacing={index === 0 ? 'xl' : 'lg'}
            className={index === 0 ? '' : 'pt-0'}
            containerSize="md"
          >
            <Text
              as="p"
              variant="body"
              className="text-lg md:text-xl leading-relaxed text-gray-700 whitespace-pre-line text-center max-w-4xl mx-auto"
            >
              {section.content}
            </Text>
          </Section>
        ))}
      </article>
    </>
  );
}
