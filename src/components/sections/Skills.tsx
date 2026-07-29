'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Brain,
  Sparkles,
  Bot,
  Database,
  Code2,
  Cpu,
  CheckCircle,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const categoryIcons: Record<string, React.ElementType> = {
  'data-science-stats': LineChart,
  'machine-learning': Brain,
  'generative-ai-nlp': Sparkles,
  'agent-frameworks': Bot,
  'data-databases': Database,
  engineering: Code2,
  'ml-dl-ecosystem': Cpu,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? skillCategories.filter((cat) => cat.id === selectedCategory)
    : skillCategories;

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-zinc-900 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="02"
          title="Skills & Expertise"
          subtitle="Categorized technical competencies across statistical analysis, machine learning, generative AI, and software engineering."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedCategory === null
                ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, index) => {
            const Icon = categoryIcons[cat.id] || Cpu;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 hover:border-emerald-500/30 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold tracking-wide text-zinc-100 font-mono">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-800/60">
                    {cat.skills.map((skill, sIdx) => (
                      <Badge key={sIdx} variant="tech">
                        <CheckCircle className="w-3 h-3 text-emerald-400/70 shrink-0" />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
