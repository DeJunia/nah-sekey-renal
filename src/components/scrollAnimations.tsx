'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimationPreset = {
  hidden: Record<string, any>;
  visible: Record<string, any>;
};

const animationPresets: Record<string, AnimationPreset> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  flipX: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 }
  },
  flipY: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 }
  },
  bounce: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  }
};

export default function ScrollAnimation({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  distance = 100,
  once = true
}: {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  distance?: number;
  once?: boolean;
}) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          if (once) observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls, threshold, once]);

  const getVariants = () => {
    if (animationPresets[animation]) return animationPresets[animation];
    
    // Handle custom distance for slide animations
    if (animation.startsWith('slide')) {
      const direction = animation.replace('slide', '').toLowerCase();
      return {
        hidden: { opacity: 0, [direction === 'left' || direction === 'right' ? 'x' : 'y']: 
          direction === 'left' || direction === 'up' ? -distance : distance },
        visible: { opacity: 1, [direction === 'left' || direction === 'right' ? 'x' : 'y']: 0 }
      };
    }

    return animationPresets.fade;
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      transition={{
        delay: delay / 1000,
        duration,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}