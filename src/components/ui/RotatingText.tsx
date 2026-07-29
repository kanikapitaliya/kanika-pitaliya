'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  items: string[];
  intervalMs?: number;
}

export function RotatingText({ items, intervalMs = 2800 }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, intervalMs]);

  return (
    <span className="inline-block relative min-w-[200px] h-[1.3em] overflow-hidden align-bottom text-emerald-400 font-mono">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap font-semibold"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
