'use client';

import { useEffect, useRef } from 'react';
import { useInView as useFramerInView, UseInViewOptions } from 'framer-motion';

export function useInView(options?: UseInViewOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useFramerInView(ref, {
    once: true,
    margin: '-100px',
    ...options,
  });

  return { ref, isInView };
}

export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      const start = rect.top + windowHeight;
      const end = rect.top + elementHeight;
      
      const progress = Math.max(0, Math.min(1, 1 - start / (end - start)));
      scrollYProgress.current = progress;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, scrollYProgress };
}

