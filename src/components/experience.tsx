"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Compass, Sparkles } from "lucide-react";
import { experienceData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-400/20 bg-zinc-400/8 text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Professional Experience
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          Production engineering experience delivering enterprise automations, RPA bots, system integrations, and modern web applications.
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8 space-y-12">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-6 sm:pl-10"
          >
            {/* Timeline node marker */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-400 border-4 border-white dark:border-[#080808] shadow-sm" />

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel glow-card space-y-4">
              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/80 pb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-zinc-500 dark:text-zinc-400">
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements Bullet list */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono uppercase text-zinc-500 tracking-wider font-semibold">
                  Key Responsibilities &amp; Impact
                </div>
                {exp.keyAchievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3">
                <div className="text-xs font-mono uppercase text-zinc-500 tracking-wider mb-2 font-semibold">
                  Technologies Utilized
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-500/8 text-zinc-600 dark:text-zinc-300 border border-zinc-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Also Explored (if present) */}
              {exp.explored && (
                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-2">
                    <Compass className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="uppercase tracking-wider font-semibold">Also Explored &amp; Prototyped:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.explored.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 text-xs font-mono rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

