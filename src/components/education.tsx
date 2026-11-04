"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Cloud, Code2, CheckCircle2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { educationData, certificationsData } from "@/data/achievements";

const certIcons: Record<string, React.ElementType> = {
  Cloud,
  Code2,
  CheckCircle2,
};

export function Education() {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-400/20 bg-zinc-400/8 text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>ACADEMIC &amp; CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Education &amp; Certifications
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          Rigorous foundational degree in Computer Engineering paired with verified industry credentials in cloud infrastructure and core languages.
        </p>
      </div>

      <div className="space-y-12">
        {/* Education Tile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-8 rounded-2xl glass-panel glow-card flex flex-col justify-between"
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {educationData.degree}
                  </h3>
                  <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                    {educationData.field}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">
                    {educationData.institution}
                  </div>
                </div>
              </div>

              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  {educationData.scoreType}: {educationData.score}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {educationData.period}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {educationData.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Academic Milestones &amp; Highlights
              </div>
              {educationData.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500">
            Affiliated with Savitribai Phule Pune University (SPPU)
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              <span>Verified Industry Certifications</span>
            </h3>
            <span className="text-xs font-mono text-zinc-500">
              {certificationsData.length} Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {certificationsData.map((cert, index) => {
              const Icon = certIcons[cert.icon] || Award;
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="p-5 rounded-2xl glass-panel glow-card flex flex-col justify-between border border-zinc-200 dark:border-zinc-800/80"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-2.5 rounded-xl bg-zinc-400/10 text-zinc-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      {cert.issueDate && (
                        <span className="text-xs font-mono text-zinc-400">
                          {cert.issueDate}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                        {cert.name}
                      </h4>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-600 dark:text-zinc-400 bg-zinc-400/10 px-2 py-0.5 rounded-md">
                      {cert.badge || "Verified Credential"}
                    </span>
                    <span className="text-zinc-500 text-[11px]">Qwiklabs / Google Cloud</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
