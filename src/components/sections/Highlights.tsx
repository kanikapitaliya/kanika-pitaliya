'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';
import { achievements } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const icons = [Trophy, Award, Medal];

export function Highlights() {
  return (
    <section id="highlights" className="py-20 md:py-28 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="05"
          title="Highlights & Achievements"
          subtitle="Recognition for statistical reasoning, hackathon innovation, and data storytelling."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/80 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="emerald">{item.award}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 font-sans tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
