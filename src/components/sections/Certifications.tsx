'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative border-t border-zinc-900 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          number="06"
          title="Certifications"
          subtitle="Formal accreditations in machine learning, Python development, and artificial intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/70 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    {cert.issuer}
                  </span>
                  {cert.date && <Badge variant="outline">{cert.date}</Badge>}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-100 font-sans tracking-tight mb-2 leading-snug">
                  {cert.title}
                </h3>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mt-2"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
