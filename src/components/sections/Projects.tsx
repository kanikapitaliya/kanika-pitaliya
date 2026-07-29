'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Award, Cpu, BarChart3, Database } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { ProjectModal } from '@/components/ui/ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-zinc-900 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="04"
          title="Selected Work"
          subtitle="Projects where I explore the full path from problem formulation and modelling to evaluation and usable AI systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-900/80 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Category & Badge header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <Badge variant="cyan">{project.category}</Badge>
                  {project.highlightNote && (
                    <Badge variant="emerald">
                      <Award className="w-3 h-3 text-emerald-400" />
                      Awarded
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 font-sans tracking-tight mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                {/* One line summary */}
                <p className="text-sm text-zinc-400 leading-relaxed font-sans mb-6 line-clamp-3">
                  {project.oneLiner}
                </p>

                {/* Metrics Grid */}
                {project.metrics.length > 0 && (
                  <div className="mb-6 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 grid grid-cols-2 gap-3">
                    {project.metrics.slice(0, 4).map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-lg font-extrabold text-emerald-400 font-mono">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-zinc-400 font-medium leading-tight mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-zinc-800/60">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <Badge key={tIdx} variant="tech">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700/80 text-sm font-mono text-zinc-200 group-hover:bg-emerald-500 group-hover:text-zinc-950 group-hover:border-emerald-500 font-semibold transition-all shadow-sm"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
