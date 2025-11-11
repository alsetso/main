import { Transition } from 'framer-motion';

export const easeOutExpo: number[] = [0.16, 1, 0.3, 1];
export const easeInOutExpo: number[] = [0.87, 0, 0.13, 1];
export const easeOutQuart: number[] = [0.25, 1, 0.5, 1];
export const cinematicEase: number[] = [0.22, 1, 0.36, 1];

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const smoothTransition: Transition = {
  duration: 0.6,
  ease: cinematicEase,
};

export const fastTransition: Transition = {
  duration: 0.3,
  ease: cinematicEase,
};

export const slowTransition: Transition = {
  duration: 1.2,
  ease: cinematicEase,
};

