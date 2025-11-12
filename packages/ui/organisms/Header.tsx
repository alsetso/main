'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { navigationLinks, routes } from '@alset/config/routes';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container size="xl">
        <nav className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-8 md:h-10 w-auto"
            >
              <Image 
                src="/logo.svg" 
                alt="Alset" 
                width={200}
                height={90}
                className="h-full w-auto"
                priority
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Link
                  href={link.path}
                  className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navigationLinks.length, duration: 0.6 }}
            >
              <Link href={routes.invest.path}>
                <Button variant="primary" size="sm" className="text-sm font-semibold px-4 py-2 rounded-xl">
                  {routes.invest.label}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu with Invest button */}
          <div className="md:hidden flex items-center gap-3">
            <Link href={routes.invest.path}>
              <Button variant="primary" size="sm" className="text-xs font-semibold px-3 py-1.5 rounded-lg">
                {routes.invest.label}
              </Button>
            </Link>
            <button className="p-2 text-gray-900" aria-label="Menu">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </Container>
    </motion.header>
  );
}

