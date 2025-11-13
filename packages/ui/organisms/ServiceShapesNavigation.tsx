'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';
import { Text } from '../atoms/Text';

export interface ServiceShapesNavigationProps {
  services: Array<{
    type: 'triangle' | 'square' | 'circle' | 'diamond' | 'plus';
    color: string;
    className: string;
    label: string;
    href: string;
  }>;
  title?: string;
  className?: string;
}

export function ServiceShapesNavigation({ 
  services, 
  title,
  className = ''
}: ServiceShapesNavigationProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`py-16 md:py-24 bg-white ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {title && (
          <div className="text-center mb-12 md:mb-16">
            <Text as="h2" variant="subheading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {title}
            </Text>
          </div>
        )}
        
        <div className="flex items-end justify-center gap-6 md:gap-8 lg:gap-10 flex-wrap">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center justify-end relative group"
            >
              <Link href={service.href} className="flex flex-col items-center justify-end">
                {service.type === 'triangle' && (
                  <div
                    className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 ${service.className} cursor-pointer transition-transform duration-200 group-hover:scale-110`}
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    }}
                  />
                )}
                {service.type === 'square' && (
                  <div className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 ${service.className} cursor-pointer transition-transform duration-200 group-hover:scale-110`} />
                )}
                {service.type === 'circle' && (
                  <div className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 ${service.className} rounded-full cursor-pointer transition-transform duration-200 group-hover:scale-110`} />
                )}
                {service.type === 'diamond' && (
                  <div
                    className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 ${service.className} cursor-pointer transition-transform duration-200 group-hover:scale-110`}
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                  />
                )}
                {service.type === 'plus' && (
                  <div
                    className={`w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 ${service.className} relative cursor-pointer transition-transform duration-200 group-hover:scale-110`}
                    style={{
                      clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)',
                    }}
                  />
                )}
                
                {/* Label */}
                <div className="mt-4 md:mt-6 lg:mt-8 text-center">
                  <Text variant="caption" className="text-xs md:text-sm font-medium text-gray-900">
                    {service.label}
                  </Text>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

