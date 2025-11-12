import { Metadata } from 'next';

export const siteConfig = {
  name: 'Alset',
  domain: 'alset.so',
  url: 'https://alset.so',
  description: 'Minnesota private investment company combining capital, creativity, and technology across real estate, home services, and healthcare.',
  tagline: 'For the Love of Minnesota',
  location: 'Minnesota, USA',
  industries: [
    'Real Estate',
    'Home Services',
    'Healthcare',
  ],
  contact: {
    email: 'alsetsolutionsinc@gmail.com',
  },
  social: {
    twitter: '@alset',
    linkedin: 'https://www.linkedin.com/company/alset-solutions-inc',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION,
  },
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Minnesota private investment company',
    'technology investment firm',
    'private investment firm Minnesota',
    'business ownership technology company',
    'portfolio enterprises',
    'real estate investment',
    'healthcare technology',
    'home services investment',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/alset_emblem.svg',
    shortcut: '/alset_emblem.svg',
    apple: '/alset_emblem.svg',
  },
  verification: {
    ...(siteConfig.verification.google && { google: siteConfig.verification.google }),
    ...(siteConfig.verification.bing && { other: { 'msvalidate.01': siteConfig.verification.bing } }),
  },
};

export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
  type = 'website',
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  
  return {
    title,
    description,
    keywords: [...defaultMetadata.keywords as string[], ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: siteConfig.name,
      locale: 'en_US',
      publishedTime,
      modifiedTime,
      images: [
        {
          url: `${siteConfig.url}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}/og-image.png`],
      creator: siteConfig.social.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

