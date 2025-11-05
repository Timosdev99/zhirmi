'use client';

import { useEffect } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';
import { motion } from 'framer-motion';

export default function RatingCounter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => (Math.round(latest * 10) / 10).toFixed(1));

  useEffect(() => {
    const controls = animate(count, 4.8, {
      duration: 2,
      ease: 'easeOut',
    });
    return controls.stop;
  }, []);

  return <motion.span className="text-6xl font-bold">{rounded}</motion.span>;
}
