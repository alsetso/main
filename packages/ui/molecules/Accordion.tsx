'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Text } from '../atoms/Text';
import { smoothTransition } from '../motion/transitions';

export interface AccordionItemProps {
  title: string;
  emoji?: string;
  children?: ReactNode;
  content?: string | ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
}

function AccordionItem({ title, emoji, children, content, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  // Use content prop if provided, otherwise use children
  const displayContent = content !== undefined ? content : children;

  useEffect(() => {
    const measureHeight = () => {
      // Use the measure ref which is always rendered (but hidden) to get accurate height
      if (measureRef.current) {
        const height = measureRef.current.scrollHeight;
        if (height > 0) {
          setContentHeight(height);
        }
      }
    };

    // Measure on mount
    measureHeight();

    // Measure when content changes or when opening
    const timeoutId = setTimeout(measureHeight, 10);
    
    return () => clearTimeout(timeoutId);
  }, [displayContent, isOpen]);

  // Re-measure on window resize
  useEffect(() => {
    const handleResize = () => {
      if (measureRef.current) {
        const height = measureRef.current.scrollHeight;
        if (height > 0) {
          setContentHeight(height);
    }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="border-b border-gray-200 last:border-b-0 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 md:py-8 px-6 md:px-8 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            {emoji && (
              <span className="text-2xl md:text-3xl flex-shrink-0" aria-hidden="true">
                {emoji}
              </span>
            )}
            <Text as="h3" variant="subheading" className="text-xl md:text-2xl lg:text-3xl">
              {title}
            </Text>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={smoothTransition}
            className="flex-shrink-0"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* Hidden measurement div - always rendered to measure height */}
      <div
        ref={measureRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          height: 'auto',
          width: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <div className="pt-4 border-t border-gray-100">
            <Text
              variant="body"
              className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed whitespace-pre-line"
            >
              {displayContent}
            </Text>
          </div>
        </div>
      </div>

      {/* Visible animated content */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? contentHeight : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={smoothTransition}
        style={{ overflow: 'hidden' }}
      >
        <div 
          id={`accordion-content-${title}`}
          ref={contentRef}
          className="px-6 md:px-8 pb-6 md:pb-8"
        >
          <div className="pt-4 border-t border-gray-100">
            <Text
              variant="body"
              className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed whitespace-pre-line"
            >
              {displayContent}
            </Text>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Accordion({ items, className = '' }: AccordionProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${className}`}>
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
}
