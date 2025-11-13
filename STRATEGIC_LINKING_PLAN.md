# Strategic Linking Plan: Shapes → How It Works → Services

## Current Structure Analysis

### Shapes & Their Associations
- **Triangle (Blue) - Acquisition** → Joint Ventures
- **Square (Green) - Lending** → Inhouse Growth Team  
- **Circle (Red) - Scale** → Inhouse Growth Team
- **Diamond (Yellow) - Equity** → Joint Ventures
- **Plus (Purple) - Transition** → Joint Ventures

### Page Hierarchy
1. **How It Works Pages** (Strategic Approach)
   - `/how-it-works/joint-venture-partnerships`
   - `/how-it-works/inhouse-growth-team`

2. **Service Pages** (Specific Services)
   - `/acquisition`
   - `/lending`
   - `/scale`
   - `/equity`
   - `/transition`

## Recommended Linking Strategy

### Option 1: Approach-First Navigation (RECOMMENDED)
**User Journey: Approach → Service → Action**

1. **Shapes → How It Works Pages**
   - Shapes link directly to the relevant "How It Works" page
   - Explains the strategic approach first
   - User understands the context before diving into specifics

2. **How It Works Pages → Service Pages**
   - Each how-it-works page links to its related service pages
   - Provides detailed information about specific services
   - Clear "Learn More" or "Explore [Service]" CTAs

3. **Service Pages → How It Works Pages**
   - Service pages link back to the relevant how-it-works page
   - Provides context: "This service is part of our [Approach]"
   - Breadcrumb navigation

**Benefits:**
- Educational flow: Understand approach → Learn specifics → Take action
- Better SEO: How-it-works pages rank for strategic queries
- Clearer user journey: Less confusion about what each service means

### Option 2: Service-First Navigation
**User Journey: Service → Approach → Action**

1. **Shapes → Service Pages**
   - Shapes link directly to service pages
   - User gets specific information immediately

2. **Service Pages → How It Works Pages**
   - Service pages prominently link to the relevant approach
   - "Part of our [Approach]" section

**Benefits:**
- Faster access to specific information
- Better for users who know what they want

### Option 3: Dual Navigation (Hybrid)
**User Journey: Flexible**

1. **Shapes → Both Options**
   - Primary link to how-it-works page
   - Secondary link/button to service page
   - Or: Shape hover shows both options

2. **Cross-linking Throughout**
   - How-it-works pages link to services
   - Service pages link to how-it-works
   - Clear navigation between all levels

**Benefits:**
- Maximum flexibility
- Users can choose their path
- More complex to implement

## Recommended Implementation: Option 1

### Shape Links
- Triangle, Diamond, Plus → `/how-it-works/joint-venture-partnerships`
- Square, Circle → `/how-it-works/inhouse-growth-team`

### How It Works Pages Should Include:
1. **Service Cards Section** - Visual cards linking to each related service
2. **"Related Services" Section** - List of services with descriptions and links
3. **Clear CTAs** - "Explore [Service Name]" buttons

### Service Pages Should Include:
1. **Context Banner** - "Part of our [Approach Name]" with link
2. **Breadcrumb** - Home → How It Works → Service
3. **Back to Approach Link** - "← Back to [Approach Name]"

## Implementation Priority

1. **Phase 1: Update Shape Links**
   - Change shape hrefs to point to how-it-works pages
   - Test hover states still work

2. **Phase 2: Add Service Cards to How-It-Works Pages**
   - Create visual service cards on each how-it-works page
   - Link to individual service pages

3. **Phase 3: Add Context to Service Pages**
   - Add "Part of our approach" section
   - Add breadcrumbs and back links

4. **Phase 4: Cross-linking Optimization**
   - Ensure all pages link to related content
   - Add "Related Services" sections where appropriate

