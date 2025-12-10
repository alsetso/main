'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { Text } from '../atoms/Text';
import { InteractiveSubtitle } from './InteractiveSubtitle';

export interface AlsetShapesBackgroundProps {
  headline?: string;
  subtitle?: string | ReactNode;
  fullHeight?: boolean;
  showShapes?: boolean;
  externalHoveredIndices?: number[];
  onShapeHover?: (shapeIndex: number | null, shapeInfo: { label: string; color: string } | null) => void;
  useInteractiveSubtitle?: boolean;
}

export function AlsetShapesBackground({ 
  headline = 'For the Love of Minnesota',
  subtitle,
  fullHeight = false,
  showShapes = true,
  externalHoveredIndices = [],
  onShapeHover,
  useInteractiveSubtitle = true
}: AlsetShapesBackgroundProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredLink, setHoveredLink] = useState<'joint-ventures' | 'growth-team' | null>(null);
  const [hoveredShape, setHoveredShape] = useState<{ index: number; label: string; color: string } | null>(null);

  const shapes = [
    {
      type: 'triangle',
      color: 'blue',
      className: 'bg-blue-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Acquisition',
      href: '/how-it-works/joint-ventures/acquisition',
    },
    {
      type: 'square',
      color: 'green',
      className: 'bg-green-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Lending',
      href: '/how-it-works/inhouse-growth-team/lending',
    },
    {
      type: 'circle',
      color: 'red',
      className: 'bg-red-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Scale',
      href: '/how-it-works/inhouse-growth-team/scale',
    },
    {
      type: 'diamond',
      color: 'yellow',
      className: 'bg-yellow-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Equity',
      href: '/how-it-works/joint-ventures/equity',
    },
    {
      type: 'plus',
      color: 'purple',
      className: 'bg-purple-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Transition',
      href: '/how-it-works/joint-ventures/transition',
    },
  ];
  
  // Combine internal, external, and link hover states
  const getHoveredIndices = () => {
    const indices: number[] = [];
    
    // Add shape hover
    if (hoveredIndex !== null) {
      indices.push(hoveredIndex);
    }
    
    // Add external hover
    indices.push(...externalHoveredIndices);
    
    // Add link hover: [0, 3, 4] for joint-ventures (triangle, diamond, plus), [1, 2] for growth team (square, circle)
    if (hoveredLink === 'joint-ventures') {
      indices.push(0, 3, 4);
    } else if (hoveredLink === 'growth-team') {
      indices.push(1, 2);
    }
    
    return [...new Set(indices)]; // Remove duplicates
  };

  const isHovered = (index: number) => {
    return getHoveredIndices().includes(index);
  };

  const handleShapeHover = (index: number | null) => {
    setHoveredIndex(index);
    if (index !== null) {
      const shape = shapes[index];
      const shapeInfo = { index, label: shape.label, color: shape.color };
      setHoveredShape(shapeInfo);
      if (onShapeHover) {
        onShapeHover(index, { label: shape.label, color: shape.color });
      }
    } else {
      setHoveredShape(null);
      if (onShapeHover) {
        onShapeHover(null, null);
      }
    }
  };

  const handleLinkHover = (type: 'joint-ventures' | 'growth-team' | null) => {
    setHoveredLink(type);
  };

  // Determine which subtitle to use
  const displaySubtitle = subtitle !== undefined 
    ? subtitle 
    : useInteractiveSubtitle 
      ? <InteractiveSubtitle 
          onLinkHover={handleLinkHover}
          hoveredShape={hoveredShape}
        />
      : 'We acquire Minnesota businesses through joint-venture partnerships — and we run a full growth agency for owners who want to scale instead of sell.';

  return (
    <section className={`retro-cursor relative w-full bg-zinc-200 ${fullHeight ? 'min-h-screen flex flex-col justify-center' : 'pt-[136px] md:pt-[164px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24'} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Headline and Subtitle */}
        <div className="text-center mb-8 md:mb-10">
          <Text as="h1" variant="display" className="text-black mb-3 md:mb-4">
            {headline.split(' of ').map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <>
                    {' of'}
                    <br />
                  </>
                )}
              </span>
            ))}
          </Text>
          {typeof displaySubtitle === 'string' ? (
            <Text variant="body" className="text-black/70 max-w-3xl mx-auto">
              {displaySubtitle}
            </Text>
          ) : (
          <Text variant="body" className="text-black/70 max-w-3xl mx-auto">
            {displaySubtitle}
          </Text>
          )}
        </div>

        {/* Shapes */}
        {showShapes && (
        <div className="flex items-end justify-center gap-3 md:gap-4 lg:gap-5">
          {shapes.map((shape, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center justify-end relative group"
              onMouseEnter={() => handleShapeHover(index)}
              onMouseLeave={() => handleShapeHover(null)}
              onTouchStart={() => handleShapeHover(index)}
              onTouchEnd={() => {
                // Delay clearing to allow tap to register
                setTimeout(() => handleShapeHover(null), 300);
              }}
            >
              <Link href={shape.href} className="flex flex-col items-center justify-end touch-manipulation">
                {shape.type === 'triangle' && (
                  <div
                    className={`${shape.size} ${shape.className} cursor-pointer transition-transform duration-200 ${isHovered(index) ? 'scale-110' : 'group-hover:scale-110'} active:scale-105`}
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    }}
                  />
                )}
                {shape.type === 'square' && (
                  <div className={`${shape.size} ${shape.className} cursor-pointer transition-transform duration-200 ${isHovered(index) ? 'scale-110' : 'group-hover:scale-110'} active:scale-105`} />
                )}
                {shape.type === 'circle' && (
                  <div className={`${shape.size} ${shape.className} rounded-full cursor-pointer transition-transform duration-200 ${isHovered(index) ? 'scale-110' : 'group-hover:scale-110'} active:scale-105`} />
                )}
                {shape.type === 'diamond' && (
                  <div
                    className={`${shape.size} ${shape.className} cursor-pointer transition-transform duration-200 ${isHovered(index) ? 'scale-110' : 'group-hover:scale-110'} active:scale-105`}
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                  />
                )}
                {shape.type === 'plus' && (
                  <div
                    className={`${shape.size} ${shape.className} relative cursor-pointer transition-transform duration-200 ${isHovered(index) ? 'scale-110' : 'group-hover:scale-110'} active:scale-105`}
                    style={{
                      clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)',
                    }}
                  />
                )}
                {/* Hover/Touch Label - Show on mobile too */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: isHovered(index) ? 1 : 0,
                    y: isHovered(index) ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-6 md:-bottom-8 lg:-bottom-10 whitespace-nowrap pointer-events-none md:block"
                >
                  <Text variant="caption" className="text-xs md:text-sm font-medium text-black">
                    {shape.label}
                  </Text>
                </motion.div>
                {/* Mobile: Always show label below shape */}
                <div className="mt-2 md:hidden">
                  <Text variant="caption" className="text-xs font-medium text-black">
                    {shape.label}
                  </Text>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

