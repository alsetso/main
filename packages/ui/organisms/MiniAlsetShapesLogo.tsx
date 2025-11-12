'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '../motion/variants';

export function MiniAlsetShapesLogo() {
  const shapes = [
    {
      type: 'triangle',
      color: 'blue',
      className: 'bg-blue-500',
      size: 'w-4 h-4',
    },
    {
      type: 'square',
      color: 'green',
      className: 'bg-green-500',
      size: 'w-4 h-4',
    },
    {
      type: 'circle',
      color: 'red',
      className: 'bg-red-500',
      size: 'w-4 h-4',
    },
    {
      type: 'diamond',
      color: 'yellow',
      className: 'bg-yellow-500',
      size: 'w-4 h-4',
    },
    {
      type: 'plus',
      color: 'purple',
      className: 'bg-purple-500',
      size: 'w-4 h-4',
    },
  ];

  return (
    <div className="flex items-end justify-start gap-1.5">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: index * 0.05,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-end justify-center"
        >
          {shape.type === 'triangle' && (
            <div
              className={`${shape.size} ${shape.className}`}
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
          )}
          {shape.type === 'square' && (
            <div className={`${shape.size} ${shape.className}`} />
          )}
          {shape.type === 'circle' && (
            <div className={`${shape.size} ${shape.className} rounded-full`} />
          )}
          {shape.type === 'diamond' && (
            <div
              className={`${shape.size} ${shape.className}`}
              style={{
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
            />
          )}
          {shape.type === 'plus' && (
            <div
              className={`${shape.size} ${shape.className} relative`}
              style={{
                clipPath: 'polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

