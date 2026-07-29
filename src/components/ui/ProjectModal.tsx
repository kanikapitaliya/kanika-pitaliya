'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2, Info, ArrowUpRight, Cpu } from 'lucide-react';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { GithubIcon } from '@/components/ui/SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8 text-zinc-100 z-10 custom-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header info */}
          <div className="mb-6 pr-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="cyan">{project.category}</Badge>
              {project.dataset && (
                <Badge variant="outline">
                  <Cpu className="w-3 h-3 text-emerald-400" />
                  {project.dataset}
                </Badge>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans mb-3">
              {project.title}
            </h3>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
              {project.oneLiner}
            </p>
          </div>

          {/* Highlight metrics banner */}
          {project.metrics.length > 0 && (
            <div className="my-6 p-4 sm:p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Special highlight note if present */}
          {project.highlightNote && (
            <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3 text-emerald-300 text-sm">
              <Sparkles className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
              <div>
                <span className="font-semibold">Recognition: </span>
                {project.highlightNote}
              </div>
            </div>
          )}

          {/* Tabular/Section breakdown */}
          <div className="space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
            {/* The Problem */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
              <h4 className="text-xs font-mono tracking-wider text-emerald-400 uppercase mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                The Problem
              </h4>
              <p className="text-zinc-300">{project.problem}</p>
            </div>

            {/* Approach & Engineering */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
                <h4 className="text-xs font-mono tracking-wider text-cyan-400 uppercase mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Modeling & Approach
                </h4>
                <p className="text-zinc-300">{project.approach}</p>
              </div>

              {project.engineering && (
                <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
                  <h4 className="text-xs font-mono tracking-wider text-violet-400 uppercase mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                    Engineering Architecture
                  </h4>
                  <p className="text-zinc-300">{project.engineering}</p>
                </div>
              )}
            </div>

            {/* Evaluation / Benchmark Results */}
            {project.evaluation && (
              <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
                <h4 className="text-xs font-mono tracking-wider text-emerald-400 uppercase mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Evaluation & Quantitative Results
                </h4>
                <p className="text-zinc-300">{project.evaluation}</p>
                {project.evaluationNote && (
                  <p className="mt-3 text-xs text-zinc-500 font-mono italic flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 shrink-0" />
                    {project.evaluationNote}
                  </p>
                )}
              </div>
            )}

            {/* Key Technical Insight */}
            {project.keyInsight && (
              <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <h4 className="text-xs font-mono tracking-wider text-emerald-300 uppercase mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Key Insight
                </h4>
                <p className="text-zinc-200 font-medium italic">
                  &ldquo;{project.keyInsight}&rdquo;
                </p>
              </div>
            )}

            {/* Interesting Themes */}
            {project.interestingThemes.length > 0 && (
              <div>
                <h4 className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-3">
                  Technical Themes & Concepts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.interestingThemes.map((theme, i) => (
                    <Badge key={i} variant="tech">
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-mono tracking-wider text-zinc-400 uppercase mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="emerald">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-sm font-medium text-zinc-200 hover:text-white hover:border-zinc-500 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  View GitHub
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 text-sm font-medium text-zinc-950 font-semibold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Close Window [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
