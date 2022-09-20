import { Variants } from 'framer-motion';

export const sentenceVariant: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const letterVariant: Variants = {
  hidden: { opacity: 0.2 },
  visible: { opacity: 1 },
};

export const splitText = (sentence: string) => {
  return sentence.split(' ');
};

export const slideUpVariant: Variants = {
  offscreen: {
    y: 80,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const staggerSlideVariant: Variants = {
  offscreen: {
    y: 80,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
      delayChildren: 0.2,
      staggerDirection: -1,
    },
  },
};
