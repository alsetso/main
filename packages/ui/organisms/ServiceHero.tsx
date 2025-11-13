'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { Text } from '../atoms/Text';

export interface ServiceHeroProps {
  title: string;
  description?: string;
  service: 'acquisition' | 'lending' | 'scale' | 'equity' | 'transition';
}

const serviceConfig = {
  acquisition: {
    type: 'triangle',
    className: 'bg-blue-500',
    size: 'w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40',
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  },
  lending: {
    type: 'square',
    className: 'bg-green-500',
    size: 'w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40',
  },
  scale: {
    type: 'circle',
    className: 'bg-red-500',
    size: 'w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40',
  },
  equity: {
    type: 'diamond',
    className: 'bg-yellow-500',
    size: 'w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40',
    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  },
  transition: {
    type: 'plus',
    className: 'bg-purple-500',
    size: 'w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40',
    clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)',
  },
};

export function ServiceHero({ title, description, service }: ServiceHeroProps) {
  const config = serviceConfig[service];

  return (
    <section className="relative w-full bg-zinc-200 pt-[136px] md:pt-[164px] lg:pt-[180px] pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Shape and Headline */}
        <div className="text-center mb-8 md:mb-10">
          {/* Single Shape */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center justify-center mb-6 md:mb-8"
          >
            {config.type === 'triangle' && 'clipPath' in config && (
              <div
                className={`${config.size} ${config.className}`}
                style={{
                  clipPath: config.clipPath,
                }}
              />
            )}
            {config.type === 'square' && (
              <div className={`${config.size} ${config.className}`} />
            )}
            {config.type === 'circle' && (
              <div className={`${config.size} ${config.className} rounded-full`} />
            )}
            {config.type === 'diamond' && 'clipPath' in config && (
              <div
                className={`${config.size} ${config.className}`}
                style={{
                  clipPath: config.clipPath,
                }}
              />
            )}
            {config.type === 'plus' && 'clipPath' in config && (
              <div
                className={`${config.size} ${config.className} relative`}
                style={{
                  clipPath: config.clipPath,
                }}
              />
            )}
          </motion.div>
          
          <Text as="h1" variant="display" className="text-black">
            {title}
          </Text>
        </div>

        {/* Description */}
        {description && (
          <div className="text-center">
            <Text variant="body" className="text-black/70 max-w-3xl mx-auto">
              {description}
            </Text>
          </div>
        )}
      </div>
    </section>
  );
}

