"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  Network,
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
  Sparkles,
} from "lucide-react";
import { skillsData } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Bot,
  BrainCircuit,
  Network,
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-400/20 bg-zinc-400/8 text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TECHNICAL ARSENAL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Skills &amp; Technology Stack
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          Comprehensive proficiencies spanning enterprise RPA, intelligent document extraction, generative AI tooling, modern full-stack development, and core computer science fundamentals.
        </p>
      </div>

      {/* Skills Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillsData.map((category, index) => {
          const Icon = iconMap[category.iconName] || Code2;
          const isHighlighted = index < 2; // Highlight first 2 primary categories (RPA & AI)

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-6 rounded-2xl glass-panel glow-card flex flex-col justify-between ${
                isHighlighted
                  ? "border-zinc-400/30 bg-zinc-400/[0.02] dark:bg-zinc-400/[0.03]"
                  : ""
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2.5 rounded-xl ${
                      isHighlighted
                        ? "bg-zinc-400/15 text-zinc-400"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {category.description && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                )}

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-all ${
                        isHighlighted
                          ? "bg-zinc-400/10 text-zinc-600 dark:text-zinc-300 border border-zinc-400/20 hover:bg-zinc-400/20"
                          : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-400 dark:hover:border-zinc-500"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

