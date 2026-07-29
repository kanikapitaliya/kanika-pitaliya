'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  number,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'
      }`}
    >
      {number && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
          <span>{number}</span>
          <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
