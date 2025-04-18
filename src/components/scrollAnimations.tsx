'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimationPreset = {
  hidden: Record<string, any>;
  visible: Record<string, any>;
};

const getAnimationPresets = (animation: string, distance: number): AnimationPreset => {
  switch (animation) {
    case 'fade':
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };
    case 'slideLeft':
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 }
      };
    case 'slideRight':
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 }
      };
    case 'slideUp':
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 }
      };
    case 'slideDown':
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 }
      };
    case 'zoom':
      return {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 }
      };
    case 'flipX':
      return {
        hidden: { opacity: 0, rotateX: 120 },
        visible: { opacity: 1, rotateX: 0 }
      };
    case 'flipY':
      return {
        hidden: { opacity: 0, rotateY: 120 },
        visible: { opacity: 1, rotateY: 0 }
      };
    case 'bounce':
      return {
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20
          }
        }
      };
    default:
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 }
      };
  }
};

export default function ScrollAnimation({
  children,
  animation = 'fade',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
  distance = 150,
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

  const variants = getAnimationPresets(animation, distance);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        delay: delay / 1000,
        duration,
        ease: [0.6, -0.05, 0.01, 0.99] // custom easeOutBack curve
      }}
      className={className}
      style={{
        transformOrigin: 'center'
      }}
    >
      {children}
    </motion.div>
  );
}
