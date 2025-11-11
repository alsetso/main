import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { Hero } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Text, Button } from '@alset/ui/atoms';
import { Container } from '@alset/ui/atoms';

export const metadata: Metadata = generatePageMetadata({
  title: `${siteConfig.name} — Moving Minnesota Forward`,
  description: 'We\'re a private investment and technology company that helps small businesses grow through capital, creativity, and code. We believe innovation begins with people — and that Minnesota\'s builders deserve tools built for them.',
  path: '/',
  keywords: [
    'Minnesota investment firm',
    'Minnesota technology company',
    'small business growth',
    'Minnesota innovation',
  ],
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section — Identity + Emotion */}
      <section className="min-h-screen flex items-center justify-center bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-12 py-32">
          <Text as="h1" variant="display" className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8">
            Moving Minnesota Forward
          </Text>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <Text variant="body" className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We&apos;re a private investment and technology company that helps small businesses grow through capital, creativity, and code.
            </Text>
            <Text variant="body" className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We believe innovation begins with people — and that Minnesota&apos;s builders deserve tools built for them.
            </Text>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/about">
              <Button variant="primary" size="lg" className="min-w-[200px]">
                Our Manifesto
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="min-w-[200px]">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The Statement — Purpose */}
      <Section spacing="xl" className="bg-white">
        <Container size="md">
          <Text 
            as="p" 
            variant="body" 
            className="text-2xl md:text-3xl lg:text-4xl font-serif md:font-mono text-center leading-relaxed text-gray-900 max-w-4xl mx-auto whitespace-pre-line"
          >
            {`We believe the next generation of great companies

won't be built in Silicon Valley —

they'll be built in communities that care.

Alset exists to prove that Minnesota

can be the blueprint for sustainable innovation —

where creativity and capital move in harmony.`}
          </Text>
        </Container>
      </Section>

      {/* 3. The Three Pillars — What We Do */}
      <Section spacing="xl" className="bg-gray-50">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
            <div className="text-center space-y-4">
              <Text as="h3" variant="heading" className="text-4xl md:text-5xl mb-6">
                Build
              </Text>
              <Text variant="body" className="text-lg text-gray-700 leading-relaxed">
                We help businesses modernize with websites, AI automation, and digital systems.
              </Text>
            </div>
            
            <div className="text-center space-y-4">
              <Text as="h3" variant="heading" className="text-4xl md:text-5xl mb-6">
                Invest
              </Text>
              <Text variant="body" className="text-lg text-gray-700 leading-relaxed">
                We partner with founders and investors to fund local growth opportunities.
              </Text>
            </div>
            
            <div className="text-center space-y-4">
              <Text as="h3" variant="heading" className="text-4xl md:text-5xl mb-6">
                Scale
              </Text>
              <Text variant="body" className="text-lg text-gray-700 leading-relaxed">
                We expand what&apos;s working — through marketing, strategy, and partnerships.
              </Text>
            </div>
          </div>

          <div className="text-center">
            <Link href="/about">
              <Button variant="secondary" size="lg">
                Learn How We Work
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 4. The Philosophy — "Why We Exist" */}
      <Section spacing="xl" className="bg-gray-100">
        <Container size="md">
          <div className="space-y-8 max-w-4xl mx-auto">
            <Text variant="body" className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              We&apos;re not an agency. We&apos;re not just an investment firm.
            </Text>
            <Text variant="body" className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              We&apos;re the bridge between vision and execution — between the idea and the infrastructure that makes it real.
            </Text>
            <Text variant="body" className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              We don&apos;t sell services. We build ecosystems.
            </Text>
            <Text variant="body" className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              We don&apos;t take clients. We take partners.
            </Text>
            <Text variant="body" className="text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold">
              Our goal is simple: make Minnesota one of the most innovative and collaborative states in America.
            </Text>
          </div>
        </Container>
      </Section>

      {/* 5. The Approach — How We Operate */}
      <Section spacing="xl" className="bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <Text as="h3" variant="heading" className="text-3xl md:text-4xl mb-4">
                  Start with Value
                </Text>
                <Text variant="body" className="text-lg text-gray-700 leading-relaxed">
                  We give every business free clarity tools: audits, roadmaps, and performance insights.
                </Text>
              </div>
              
              <div>
                <Text as="h3" variant="heading" className="text-3xl md:text-4xl mb-4">
                  Build with Intention
                </Text>
                <Text variant="body" className="text-lg text-gray-700 leading-relaxed">
                  When we commit, we integrate technology, marketing, and capital into one strategy.
                </Text>
              </div>
              
              <div>
                <Text as="h3" variant="heading" className="text-3xl md:text-4xl mb-4">
                  Grow Together
                </Text>
                <Text variant="body" className="text-lg text-gray-700 leading-relaxed">
                  We take shared upside — through performance, profit, or equity.
                </Text>
              </div>
              
              <Text variant="body" className="text-lg text-gray-600 italic">
                Every engagement is designed to create real progress, not endless meetings.
              </Text>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-12 min-h-[400px] flex items-center justify-center">
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
                <div className="space-y-4">
                  <div className="w-32 h-2 bg-gray-300 mx-auto"></div>
                  <div className="w-32 h-2 bg-gray-300 mx-auto"></div>
                  <div className="w-32 h-2 bg-gray-300 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. The Minnesota Section — The Heart */}
      <Section spacing="xl" className="bg-white border-t border-b border-gray-200">
        <Container size="md">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Text as="h2" variant="heading" className="text-5xl md:text-6xl mb-8">
              Born in Minnesota.<br />Built for Everywhere.
            </Text>
            <Text variant="body" className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We started here because this is where integrity, grit, and innovation still mean something.
            </Text>
            <Text variant="body" className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We build companies that honor that spirit — and export it to the world.
            </Text>
          </div>
        </Container>
      </Section>

      {/* 7. Testimonials / Trust */}
      <Section spacing="xl" className="bg-white">
        <Container size="md">
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="text-center">
              <Text as="p" variant="body" className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
                &quot;Alset doesn&apos;t just advise — they build alongside you.&quot;
              </Text>
            </div>
            
            <div className="text-center">
              <Text as="p" variant="body" className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
                &quot;They made us believe our small business could compete with anyone.&quot;
              </Text>
            </div>
            
            <div className="text-center">
              <Text as="p" variant="body" className="text-xl md:text-2xl text-gray-800 italic leading-relaxed">
                &quot;Smart, honest, Minnesota-grown innovation.&quot;
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. Call to Action — Invitation */}
      <Section spacing="xl" className="bg-gray-50">
        <Container size="md">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <Text as="h2" variant="heading" className="text-5xl md:text-6xl mb-8">
              Ready to Build What&apos;s Next?
            </Text>
            <Text variant="body" className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Whether you&apos;re a small business owner, a local investor, or a creative visionary —
            </Text>
            <Text variant="body" className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              we&apos;d love to collaborate.
            </Text>
            
            <Link href="/contact">
              <Button variant="primary" size="lg" className="min-w-[240px]">
                Let&apos;s Start →
              </Button>
            </Link>
            
            <Text variant="caption" className="text-gray-500 mt-12 block">
              {siteConfig.name} — For the love of Minnesota.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
}
