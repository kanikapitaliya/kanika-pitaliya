'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { timelineItems } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

export function Journey() {
  return (
    <section id="journey" className="py-20 md:py-28 relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="03"
          title="My Journey"
          subtitle="The path from statistics and software engineering to data science and intelligent systems."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-800 space-y-12 my-8">
          {timelineItems.map((item, index) => {
            const isEducation = item.type === 'EDUCATION';
            const Icon = isEducation ? GraduationCap : Briefcase;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Connector Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isEducation
                      ? 'bg-zinc-950 border-cyan-400 text-cyan-400 group-hover:bg-cyan-500/20'
                      : 'bg-zinc-950 border-emerald-400 text-emerald-400 group-hover:bg-emerald-500/20'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                </div>

                {/* Main Card */}
                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300 shadow-md">
                  {/* Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant={isEducation ? 'cyan' : 'emerald'}>
                      {item.type}
                    </Badge>

                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-100 font-sans tracking-tight">
                    {item.title}
                  </h3>

                  <h4 className="text-sm font-semibold text-emerald-400 font-mono mt-0.5 mb-4">
                    {item.subtitle}
                  </h4>

                  {/* Narrative paragraph */}
                  <div className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans space-y-3 whitespace-pre-line">
                    {item.narrative}
                  </div>

                  {/* Focus points or Technologies */}
                  {item.focus && item.focus.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-zinc-800/60">
                      <div className="text-xs font-mono text-zinc-400 mb-2">Key Academic Focus:</div>
                      <div className="flex flex-wrap gap-2">
                        {item.focus.map((f, i) => (
                          <Badge key={i} variant="outline">
                            {f}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-zinc-800/60">
                      <div className="text-xs font-mono text-zinc-400 mb-2">Technologies & Concepts:</div>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <Badge key={i} variant="tech">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
