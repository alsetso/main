'use client';

import Link from 'next/link';
import { Container } from '../atoms/Container';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { navigationLinks, navigationGroups, routes } from '@alset/config/routes';
import { siteConfig } from '@alset/config/metadata';
import { MiniAlsetShapesLogo } from './MiniAlsetShapesLogo';

export function Footer() {
  return (
    <footer className="main-content bg-black w-full max-w-full overflow-x-hidden">
      {/* CTA Section */}
      <div className="w-full max-w-full bg-black border-t border-zinc-800 py-12 md:py-16">
        <Container size="lg">
          <div className="text-center">
            <Text as="h2" variant="heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 break-words overflow-wrap-anywhere px-2">
              Ready to Partner?
            </Text>
            <Text variant="body" className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether you're a business owner looking to scale or sell, or an investor seeking opportunities—let's build something together.
            </Text>
            <Link href={routes.contact.path}>
              <Button variant="secondary" size="lg" className="text-base sm:text-lg md:text-xl font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </Container>
      </div>

      {/* Footer Content */}
      <div className="border-t border-zinc-800 py-12 md:py-16">
        <Container size="lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex justify-start">
                <MiniAlsetShapesLogo />
              </div>
              <Text variant="body" className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                We acquire Minnesota businesses through joint-ventures — and we run an inhouse growth team for owners who want to scale instead of sell.
              </Text>
            </div>
            
            {/* Services Section */}
            <nav className="space-y-4">
              <Text variant="caption" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Services
              </Text>
              <div className="flex flex-col gap-3">
                {navigationGroups.services.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* How It Works Section */}
            <nav className="space-y-4">
              <Text variant="caption" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                How It Works
              </Text>
              <div className="flex flex-col gap-3">
                <Link
                  href="/how-it-works/joint-ventures"
                  className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
                >
                  Joint-Ventures
                </Link>
                <Link
                  href="/how-it-works/inhouse-growth-team"
                  className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
                >
                  Inhouse Growth Team
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
                >
                  Overview
                </Link>
              </div>
            </nav>

            {/* Connect Section */}
            <div className="space-y-4">
              <Text variant="caption" className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Connect
              </Text>
              <div className="flex flex-col gap-3">
                <Link
                  href={routes.home.path}
                  className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
                >
                  Home
                </Link>
                <Link
                  href={routes.about.path}
                  className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
                >
                  {routes.about.label}
                </Link>
                <Link
                  href={routes.contact.path}
                  className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
                >
                  Contact Us
                </Link>
                <Link
                  href={routes.invest.path}
                  className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
                >
                  Invest
                </Link>
                <div className="flex items-center gap-4 pt-2">
                  {siteConfig.social.twitter && (
                    <a
                      href={`https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-300 transition-colors"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {siteConfig.social.linkedin && (
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-300 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Text variant="caption" className="text-xs text-zinc-500">
              Copyright © {new Date().getFullYear()} Alset Solutions, Inc.
            </Text>
          </div>
        </Container>
      </div>
    </footer>
  );
}
