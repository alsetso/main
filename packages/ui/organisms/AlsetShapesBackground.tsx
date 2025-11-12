'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { Text } from '../atoms/Text';

export interface AlsetShapesBackgroundProps {
  headline?: string;
  subtitle?: string;
}

export function AlsetShapesBackground({ 
  headline = 'For the Love of Minnesota',
  subtitle = 'We scale or assess small to mid size businesses in the midwest doing over $1m in total sales that support the infrastructure of Minnesota tomorrow.'
}: AlsetShapesBackgroundProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const shapes = [
    {
      type: 'triangle',
      color: 'blue',
      className: 'bg-blue-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Assessment',
      href: '/assessment',
    },
    {
      type: 'square',
      color: 'green',
      className: 'bg-green-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Lending',
      href: '/lending',
    },
    {
      type: 'circle',
      color: 'red',
      className: 'bg-red-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Scale',
      href: '/scale',
    },
    {
      type: 'diamond',
      color: 'yellow',
      className: 'bg-yellow-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Equity',
      href: '/equity',
    },
    {
      type: 'plus',
      color: 'purple',
      className: 'bg-purple-500',
      size: 'w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36',
      label: 'Transition',
      href: '/transition',
    },
  ];

  return (
    <section className="retro-cursor relative w-full bg-zinc-200 pt-[136px] md:pt-[164px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Headline and Subtitle */}
        <div className="text-center mb-8 md:mb-10">
          <Text as="h1" variant="display" className="text-black mb-3 md:mb-4">
            {headline}
          </Text>
          <Text variant="body" className="text-black/70 max-w-3xl mx-auto">
            {subtitle}
          </Text>
        </div>

        {/* Shapes */}
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={shape.href} className="flex flex-col items-center justify-end">
                {shape.type === 'triangle' && (
                  <div
                    className={`${shape.size} ${shape.className} cursor-pointer transition-transform duration-200 group-hover:scale-110`}
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    }}
                  />
                )}
                {shape.type === 'square' && (
                  <div className={`${shape.size} ${shape.className} cursor-pointer transition-transform duration-200 group-hover:scale-110`} />
                )}
                {shape.type === 'circle' && (
                  <div className={`${shape.size} ${shape.className} rounded-full cursor-pointer transition-transform duration-200 group-hover:scale-110`} />
                )}
                {shape.type === 'diamond' && (
                  <div
                    className={`${shape.size} ${shape.className} cursor-pointer transition-transform duration-200 group-hover:scale-110`}
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                  />
                )}
                {shape.type === 'plus' && (
                  <div
                    className={`${shape.size} ${shape.className} relative cursor-pointer transition-transform duration-200 group-hover:scale-110`}
                    style={{
                      clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)',
                    }}
                  />
                )}
                {/* Hover Label */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute -bottom-6 md:-bottom-8 lg:-bottom-10 whitespace-nowrap pointer-events-none"
                >
                  <Text variant="caption" className="text-xs md:text-sm font-medium text-black">
                    {shape.label}
                  </Text>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

