'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Database, Binary, LineChart } from 'lucide-react';
import { personalDetails } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="Bridging rigorous statistical foundations with production-ready AI engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative - 7 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed font-sans"
          >
            {personalDetails.aboutNarrative.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-300">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right Column Cards - 5 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Core Pillars Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Technical Approach</span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <LineChart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-100">Statistical Grounding</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Understanding data distributions, regression diagnostics, and evidence-backed assumptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-100">Intelligent Automation</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Building multi-agent architectures, RAG knowledge stores, and workflow automations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-100">Production ML Mindset</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Prioritizing quantitative evaluation metrics, observability, and robust software patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Currently Exploring Component */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Currently Exploring</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {personalDetails.currentlyExploring.map((topic, i) => (
                  <Badge key={i} variant="emerald">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
