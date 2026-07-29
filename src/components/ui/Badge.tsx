'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'emerald' | 'cyan' | 'violet' | 'outline' | 'tech';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const base =
    'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-md transition-colors';

  const variants = {
    default:
      'bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 hover:border-zinc-600',
    emerald:
      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40',
    cyan:
      'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40',
    violet:
      'bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:border-violet-500/40',
    outline:
      'bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200',
    tech:
      'bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-emerald-500/30 hover:text-emerald-300',
  };

  return <span className={cn(base, variants[variant], className)}>{children}</span>;
}
