'use client';

import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { personalDetails } from '@/data/portfolio';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="text-center md:text-left">
          <a
            href="#"
            className="text-lg font-bold text-zinc-100 font-sans tracking-tight hover:text-emerald-400 transition-colors"
          >
            {personalDetails.name}
          </a>
          <p className="text-xs font-mono text-zinc-500 mt-1">
            {personalDetails.primaryTitle}
          </p>
        </div>

        {/* Center Social links */}
        <div className="flex items-center gap-4">
          <a
            href={personalDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalDetails.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalDetails.email}`}
            aria-label="Email Me"
            className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right copyright & Back to top */}
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
          <span>&copy; {currentYear} {personalDetails.name}</span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
