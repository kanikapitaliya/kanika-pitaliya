'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, FileText } from 'lucide-react';
import { personalDetails } from '@/data/portfolio';
import { RotatingText } from '@/components/ui/RotatingText';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient glowing elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid line pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
        {/* Status / Identity Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 mb-6 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{personalDetails.supportingIdentity}</span>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 font-sans mb-4"
        >
          {personalDetails.name}
        </motion.h1>

        {/* Primary Title with Rotating Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-300 mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span>Data Scientist &</span>
          <RotatingText items={personalDetails.rotatingDescriptors} />
        </motion.div>

        {/* Hero Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-sans"
        >
          {personalDetails.heroDescription}
        </motion.p>

        {/* Primary & Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm font-sans hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 group"
          >
            Explore My Work
            <ArrowDown className="w-4 h-4 text-zinc-950 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={personalDetails.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium text-sm font-sans hover:border-zinc-600 hover:text-white transition-colors"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            View Resume
          </a>
        </motion.div>

        {/* Social Icons & Terminal Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 pt-4 border-t border-zinc-800/40 max-w-sm mx-auto"
        >
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-400 hover:text-emerald-400 transition-colors p-2"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-zinc-400 hover:text-emerald-400 transition-colors p-2"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalDetails.email}`}
            aria-label="Email Me"
            className="text-zinc-400 hover:text-emerald-400 transition-colors p-2"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
