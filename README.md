# Alset.so

A modern, production-ready Next.js 14 application built with TypeScript, Framer Motion, and Tailwind CSS.

## Overview

Alset is a Minnesota-based private investment company combining capital, creativity, and technology. This website showcases our approach, industries, and portfolio model.

## Architecture

This project follows a modular, scalable architecture:

### 🏗️ Structure

```
/app                    # Next.js 14 App Router
  /about               # About Us page
  layout.tsx           # Root layout with SEO
  page.tsx             # Home page
  globals.css          # Global styles

/packages
  /config              # Centralized configuration
    metadata.ts        # SEO & OpenGraph config
    routes.ts          # Route definitions
    structured-data.ts # JSON-LD schema generation
  
  /ui                  # Design system
    /atoms             # Base components (Button, Text, Container)
    /molecules         # Composed components (Section, Card)
    /organisms         # Complex sections (Header, Footer, Hero)
    /motion            # Framer Motion utilities
      variants.ts      # Animation variants
      transitions.ts   # Transition configs
      hooks.ts         # Motion hooks
```

### 🎨 Design Principles

1. **Whitespace + Motion as Structure**: Cinematic feel with intentional spacing
2. **Atomic Design System**: Reusable components from atoms to organisms
3. **Centralized Animation Logic**: All motion utilities in `/packages/ui/motion`
4. **Configurable Metadata**: SEO and routing managed in `/packages/config`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## SEO Features

- ✅ Optimized meta tags and OpenGraph
- ✅ JSON-LD structured data (Organization, Website, Breadcrumbs)
- ✅ Semantic HTML
- ✅ Mobile-responsive
- ✅ Fast page loads with Next.js 14 optimizations

## Key Pages

- **Home** (`/`): Value proposition, industries, approach
- **About** (`/about`): Mission, values, portfolio model, geographic focus

## Package Structure

### @config

Centralized configuration for metadata, routes, and structured data.

```typescript
import { siteConfig, generatePageMetadata } from '@config/metadata';
import { routes } from '@config/routes';
```

### @ui

Design system with atomic components and motion utilities.

```typescript
import { Button, Text, Container } from '@ui/atoms';
import { Section, Card } from '@ui/molecules';
import { Hero, Header, Footer } from '@ui/organisms';
import { fadeInUp, staggerContainer } from '@motion/variants';
```

## Deployment

Optimized for Vercel:

```bash
vercel deploy
```

Or any platform supporting Next.js.

## License

Private - All rights reserved

