import { MetadataRoute } from 'next';
import { siteConfig } from '@alset/config/metadata';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/alset_emblem.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/fav.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  };
}

