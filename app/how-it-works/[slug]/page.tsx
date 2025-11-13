import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generatePageMetadata, siteConfig } from '@alset/config/metadata';
import { generateBreadcrumbSchema } from '@alset/config/structured-data';
import { AlsetShapesBackground, ContentSection, ContentBlock, ContentHero, FeatureList, ServiceShapesNavigation, ServiceCard } from '@alset/ui';
import { Section } from '@alset/ui/molecules';
import { Text, Container, Button } from '@alset/ui/atoms';

const articles: Record<string, {
  title: string;
  description: string;
  content: string;
}> = {
  'joint-ventures': {
    title: 'Joint-Ventures',
    description: 'Partner with Alset to acquire Minnesota businesses for sale. We form joint ventures with investors, family offices, lenders, and strategic key players to purchase businesses, then Alset grows them.',
    content: ``,
  },
  'inhouse-growth-team': {
    title: 'Inhouse Growth Team',
    description: 'For owners who want to scale instead of sell. Alset runs a full-stack growth agency that helps Minnesota business owners scale—without giving up equity.',
    content: `For Owners Who Want to Scale — Not Sell

If your business has potential, our job is to unlock it.

Alset Solutions runs a full-stack growth agency that helps Minnesota business owners scale—without giving up equity. We don't take ownership. We don't require equity. We build the systems, processes, and strategies that turn good businesses into great ones.

**We don't do vague consulting.**

We build, fix, and grow the parts of your business that make money. Our team works inside your business—implementing solutions, training your team, and creating systems that work long after we're done.

**What We Do**

**Marketing & Brand Growth**

We build brands that sell. From digital marketing and SEO to customer funnels and retention, we create systems that bring in customers on repeat.

Our marketing team handles everything from strategy to execution:

- Digital marketing campaigns across all channels

- Search engine optimization (SEO) and content strategy

- Brand positioning and messaging that resonates

- Customer acquisition funnels that convert

- Email marketing and customer retention programs

- Social media strategy and community building

- Paid advertising campaigns with measurable ROI

We don't just create campaigns—we build marketing systems that generate consistent revenue month after month.

**Technology & Automation**

Your business shouldn't rely on manual work. We integrate software, automate processes, and turn inefficiencies into profit.

Our technology team identifies bottlenecks and builds solutions:

- CRM and sales automation systems

- Workflow automation that eliminates repetitive tasks

- Data integration between your tools and platforms

- Custom software solutions for unique business needs

- E-commerce platforms and online sales systems

- Inventory and operations management systems

- Reporting dashboards that give you real-time insights

We turn technology into a competitive advantage, not a cost center.

**Operational Performance**

We rebuild operations to run smoother, faster, and stronger. Better systems mean less chaos and more margin.

Our operations team optimizes how your business runs:

- Process mapping and workflow redesign

- Team structure and role optimization

- Quality control and standard operating procedures

- Supply chain and vendor management

- Inventory optimization and cost reduction

- Customer service systems that create loyalty

- Performance metrics and KPIs that drive results

We create operations that scale with your growth, not against it.

**Revenue Acceleration**

We focus on what moves the needle: sales. Our team tests, scales, and systematizes campaigns that produce measurable revenue growth.

Our revenue team is laser-focused on growth:

- Sales process optimization and training

- Pricing strategy and revenue model refinement

- New product or service launch strategies

- Market expansion and geographic growth

- Partnership and channel development

- Customer lifetime value optimization

- Conversion rate improvement across all touchpoints

We measure everything. If it doesn't move revenue, we don't do it.

**Strategic Direction**

Every decision compounds. We help you plan the next 12, 24, and 36 months—so your business grows by design, not by accident.

Our strategy team provides the roadmap:

- Long-term vision and goal setting

- Quarterly planning and milestone tracking

- Market analysis and competitive positioning

- Growth opportunity identification

- Resource allocation and investment planning

- Risk assessment and mitigation strategies

- Exit planning and business valuation preparation

We help you make decisions today that create value tomorrow.

**Why Owners Work With Us**

You get a complete growth team—marketing, operations, technology, and strategy—all in one place. No juggling multiple agencies. No coordinating between vendors. One team, one mission: grow your business.

You keep 100% ownership. This isn't a partnership where you give up equity. This isn't a consulting engagement where you pay for advice. This is a growth agency that works inside your business to create real results.

We provide the growth engine your business never had. Most businesses have the potential to grow—they just lack the systems, processes, and expertise to unlock it. We bring all of that to the table.

You scale faster, more profitably, and with less stress. Growth doesn't have to mean chaos. With the right systems and team in place, scaling becomes predictable and manageable.

**This isn't consulting. It's partnership without dilution.**

If your business is ready to grow but not ready to sell—Alset is your growth team.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  
  if (!article) {
    return generatePageMetadata({
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
      path: '/how-it-works',
    });
  }

  const keywords = slug === 'joint-ventures' 
    ? [
        'joint venture partnerships',
        'business acquisition Minnesota',
        'investment partnerships',
        'Minnesota business acquisition',
        'capital partners',
        'family office investment',
        'SBA lenders',
        'strategic investors',
      ]
    : [
        'business growth agency',
        'scale business without selling',
        'growth services Minnesota',
        'business scaling',
        'marketing automation',
        'operational improvement',
        'revenue acceleration',
      ];

  return generatePageMetadata({
    title: `${article.title} — How It Works | Alset Solutions`,
    description: article.description,
    path: `/how-it-works/${slug}`,
    keywords: [
      ...keywords,
      'Minnesota business',
      'business growth',
      'Alset Solutions',
    ],
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'How It Works', url: `${siteConfig.url}/how-it-works` },
    { name: article.title, url: `${siteConfig.url}/how-it-works/${slug}` },
  ]);

  // Parse content into structured sections with better flow
  const parseContent = () => {
    const paragraphs = article.content.split('\n\n').filter(p => p.trim());
    const sections: Array<{
      type: 'hero' | 'section' | 'subsection';
      title?: string;
      subtitle?: string;
      content: Array<{ type: 'paragraph' | 'list' | 'emphasis' | 'subsection'; text: string; items?: string[] }>;
    }> = [];

    let currentSection: typeof sections[0] | null = null;
    let introTitle: string | null = null;
    let introParagraphs: string[] = [];

    paragraphs.forEach((paragraph, index) => {
      const trimmed = paragraph.trim();
      const isBoldOnly = trimmed.match(/^\*\*[^*]+\*\*$/) && !trimmed.includes('\n');
      
      // Handle intro title (for inhouse-growth-team)
      if (index === 0 && trimmed.includes('—') && !trimmed.includes('**')) {
        introTitle = trimmed;
        return;
      }

      // Collect intro paragraphs (before first major section)
      if (!isBoldOnly && !trimmed.startsWith('- ') && !currentSection) {
        // Check if this looks like it should be a section start
        const looksLikeSection = trimmed.length < 50 && 
          (trimmed.match(/^(How|What|Why|After|The|Join|This)/i) || trimmed.includes(':'));
        
        if (!looksLikeSection) {
          introParagraphs.push(trimmed);
          return;
        }
      }
      
      // Check if it's a major section heading (H2)
      if (isBoldOnly) {
        const headingText = trimmed.replace(/\*\*/g, '');
        const isH2 = headingText.match(/^(How|What|Why|After|The|Join|This)/i) ||
          headingText.length > 25 ||
          !currentSection;
        
        if (isH2) {
          // Save previous section
          if (currentSection) {
            sections.push(currentSection);
          }
          // Start new major section
          currentSection = {
            type: 'section',
            title: headingText,
            content: [],
          };
          return;
        } else {
          // This is an H3 subsection
          if (currentSection) {
            currentSection.content.push({
              type: 'subsection',
              text: headingText,
            });
          }
          return;
        }
      }

      // Check if it's a list
      if (trimmed.startsWith('- ')) {
        const listItems = trimmed.split('\n')
          .filter(item => item.trim().startsWith('- '))
          .map(item => item.replace(/^-\s+/, '').trim());
        
        if (listItems.length > 0 && currentSection) {
          currentSection.content.push({
            type: 'list',
            text: '',
            items: listItems,
          });
        }
        return;
      }

      // Regular paragraph
      if (currentSection) {
        // Check if it's emphasis (starts with **)
        const isEmphasis = trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length < 100;
        currentSection.content.push({
          type: isEmphasis ? 'emphasis' : 'paragraph',
          text: trimmed,
        });
      }
    });

    // Add final section
    if (currentSection) {
      sections.push(currentSection);
    }

    return { introTitle, introParagraphs, sections };
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <AlsetShapesBackground 
        headline={article.title}
        subtitle={article.description}
        showShapes={false}
      />

      {/* Back Link */}
      <div className="bg-white border-b border-gray-100">
        <Container size="lg">
          <div className="max-w-4xl mx-auto px-6 md:px-8 py-6">
            <Link 
              href="/how-it-works" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
              Back to How It Works
            </Link>
          </div>
        </Container>
      </div>

      {/* Article Content */}
      {(() => {
        const { introTitle, introParagraphs, sections } = parseContent();
        const renderParagraph = (text: string, emphasis = false) => {
          const parts: (string | JSX.Element)[] = [];
          const regex = /\*\*(.*?)\*\*/g;
          let lastIndex = 0;
          let match;
          
          while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
              parts.push(text.substring(lastIndex, match.index));
            }
            parts.push(<strong key={`bold-${match.index}`}>{match[1]}</strong>);
            lastIndex = regex.lastIndex;
          }
          
          if (lastIndex < text.length) {
            parts.push(text.substring(lastIndex));
          }
          
          if (parts.length === 0) {
            parts.push(text);
          }

          return parts;
        };

        return (
          <>
            {/* Hero Section */}
            {(introTitle || introParagraphs.length > 0 || slug === 'joint-ventures') && (
              <div className="bg-white">
                <ContentHero
                  title={article.title}
                  subtitle={introTitle || undefined}
                  description={introParagraphs.length > 0 ? introParagraphs[0] : (slug === 'joint-ventures' ? article.description : undefined)}
                >
                  {introParagraphs.slice(1).map((para, idx) => (
                    <ContentBlock key={idx} size="md">
                      {renderParagraph(para)}
                    </ContentBlock>
                  ))}
                </ContentHero>
              </div>
            )}

            {/* Content Sections - Only show for non-joint-ventures pages */}
            {slug !== 'joint-ventures' && sections.map((section, sectionIndex) => {
              const isAlternating = sectionIndex % 2 === 1;
              const variant = isAlternating ? 'highlight' : 'default';
              
              return (
                <ContentSection
                  key={sectionIndex}
                  title={section.title}
                  variant={variant}
                >
                  {section.content.map((item, itemIndex) => {
                    if (item.type === 'subsection') {
                      // Check if next item is a list to reduce spacing
                      const nextIsList = section.content[itemIndex + 1]?.type === 'list';
                      return (
                        <div key={itemIndex} className={nextIsList ? 'mb-3' : 'mb-6'}>
                          <Text
                            as="h3"
                            variant="subheading"
                            className="text-xl md:text-2xl font-semibold text-gray-900 mb-3"
                          >
                            {item.text}
                          </Text>
                        </div>
                      );
                    }
                    
                    if (item.type === 'list' && item.items) {
                      return (
                        <FeatureList
                          key={itemIndex}
                          items={item.items}
                          columns={item.items.length > 5 ? 2 : 1}
                          className="mb-2"
                        />
                      );
                    }
                    
                    if (item.type === 'emphasis') {
                      return (
                        <ContentBlock key={itemIndex} size="lg" emphasis>
                          {renderParagraph(item.text)}
                        </ContentBlock>
                      );
                    }
                    
                    return (
                      <ContentBlock key={itemIndex} size="md">
                        {renderParagraph(item.text)}
                      </ContentBlock>
                    );
                  })}
                </ContentSection>
              );
            })}

            {/* Other Related Services - Joint-Ventures */}
            {slug === 'joint-ventures' && (
              <Section spacing="xl" className="bg-white">
                <Container size="lg">
                  <div className="max-w-6xl mx-auto">
                    <Text as="h2" variant="subheading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                      Other Related Services
                    </Text>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <ServiceCard
                        title="Acquisition"
                        description="Acquire established Minnesota businesses through joint-venture partnerships with qualified capital partners for long-term success."
                        href="/services/acquisition"
                        color="blue"
                        shape="triangle"
                      />
                      <ServiceCard
                        title="Equity"
                        description="Take meaningful equity positions in Minnesota businesses, providing capital and strategic support while you retain control and grow."
                        href="/services/equity"
                        color="yellow"
                        shape="diamond"
                      />
                      <ServiceCard
                        title="Transition"
                        description="Navigate complex transitions—ownership succession, operational restructuring, leadership changes—with capital and expertise."
                        href="/services/transition"
                        color="purple"
                        shape="plus"
                      />
                    </div>
                  </div>
                </Container>
              </Section>
            )}

            {/* Service Shapes Navigation - Only for inhouse-growth-team */}

            {slug === 'inhouse-growth-team' && (
              <ServiceShapesNavigation
                title="Growth Team Services"
                services={[
                  {
                    type: 'square',
                    color: 'green',
                    className: 'bg-green-500',
                    label: 'Lending',
                    href: '/services/lending',
                  },
                  {
                    type: 'circle',
                    color: 'red',
                    className: 'bg-red-500',
                    label: 'Scale',
                    href: '/services/scale',
                  },
                ]}
              />
            )}

            {/* CTA Section */}
            <Section spacing="xl" className="bg-white border-t border-gray-100">
              <Container size="lg">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button variant="primary" size="lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </Container>
            </Section>
          </>
        );
      })()}
    </>
  );
}

