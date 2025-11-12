'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../atoms/Container';
import { Button } from '../atoms/Button';
import { navigationLinks, navigationGroups, routes } from '@alset/config/routes';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      className={`retro-cursor fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container size="xl" className="relative overflow-visible">
        <nav className="flex items-center justify-between h-20 md:h-24 overflow-visible">
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

          <div className="hidden lg:flex items-center space-x-1 overflow-visible">
            {/* Main Navigation */}
            {navigationGroups.main.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
              >
                <Link
                  href={link.path}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            {/* Services Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navigationGroups.main.length, duration: 0.6 }}
              className="relative group"
            >
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
                <div className="py-2">
                  {navigationGroups.services.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium">{link.label}</div>
                      {link.description && (
                        <div className="text-xs text-gray-500 mt-0.5">{link.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (navigationGroups.main.length + 1), duration: 0.6 }}
              className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200"
            >
              <Link href={routes.invest.path}>
                <Button variant="primary" size="sm" className="text-sm font-medium px-4 py-2 rounded-md">
                  {routes.invest.label}
                </Button>
              </Link>
              <Link href={routes.contact.path}>
                <Button variant="secondary" size="sm" className="text-sm font-medium px-4 py-2 rounded-md border border-gray-300">
                  {routes.contact.label}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile/Tablet: Simplified menu */}
          <div className="lg:hidden flex items-center gap-2">
            <Link href={routes.invest.path}>
              <Button variant="primary" size="sm" className="text-xs font-medium px-3 py-1.5 rounded-md">
                {routes.invest.label}
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-900 relative z-[60]"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <motion.svg
                  className="absolute inset-0 w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={false}
                  animate={mobileMenuOpen ? { opacity: 0, rotate: 90 } : { opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
                <motion.svg
                  className="absolute inset-0 w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={false}
                  animate={mobileMenuOpen ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              </div>
            </button>
          </div>

        </nav>

        {/* Mobile menu sidebar */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Sidebar panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 md:hidden flex flex-col overflow-y-auto"
              >
                {/* Sidebar header */}
                <div className="flex items-center p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                </div>

                {/* Navigation links */}
                <nav className="flex-1 overflow-y-auto py-6 px-6">
                  <div className="space-y-6">
                    {/* Main Navigation */}
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                        Main
                      </div>
                      <div className="space-y-1">
                        {navigationGroups.main.map((link, index) => (
                          <motion.div
                            key={link.path}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 + 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <Link
                              href={link.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-base font-medium text-gray-900 hover:text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-all"
                            >
                              {link.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                        Services
                      </div>
                      <div className="space-y-1">
                        {navigationGroups.services.map((link, index) => (
                          <motion.div
                            key={link.path}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (navigationGroups.main.length + index) * 0.05 + 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <Link
                              href={link.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-base font-medium text-gray-900 hover:text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-all"
                            >
                              <div>{link.label}</div>
                              {link.description && (
                                <div className="text-sm text-gray-500 mt-0.5">{link.description}</div>
                              )}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </nav>

                {/* Sidebar footer CTA */}
                <div className="p-6 border-t border-gray-200 space-y-3">
                  {navigationGroups.actions.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (navigationGroups.main.length + navigationGroups.services.length) * 0.05 + 0.2 + index * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link href={link.path} onClick={() => setMobileMenuOpen(false)}>
                        <Button 
                          variant={link.path === routes.invest.path ? 'primary' : 'secondary'} 
                          size="lg" 
                          className="w-full text-base font-medium py-3 rounded-md"
                        >
                          {link.label}
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}

