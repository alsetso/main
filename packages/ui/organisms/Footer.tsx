'use client';

import Link from 'next/link';
import { Container } from '../atoms/Container';
import { Text } from '../atoms/Text';
import { siteConfig } from '@alset/config/metadata';
import { navigationLinks } from '@alset/config/routes';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 md:py-24">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Text as="h3" variant="subheading" className="text-white">
                Alset
              </Text>
            </Link>
            <Text variant="body" className="text-gray-400 max-w-md">
              {siteConfig.tagline}
            </Text>
            <div className="mt-6 space-y-1">
              <Text variant="caption" className="text-gray-500">
                Alset Solutions, Inc. — Minnesota S-Corp
              </Text>
              <Text variant="caption" className="text-gray-500">
                {siteConfig.location}
              </Text>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <Text as="h4" variant="body" className="font-semibold mb-4 text-white">
              Navigation
            </Text>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <Text as="h4" variant="body" className="font-semibold mb-4 text-white">
              Industries
            </Text>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/minnesota/industries/real-estate"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/minnesota/industries/home-services"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home Services
                </Link>
              </li>
              <li>
                <Link
                  href="/minnesota/industries/artificial-intelligence"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/minnesota/industries/marketing-advertising"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Marketing & Advertising
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <Text variant="caption" className="text-gray-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </Text>
          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

