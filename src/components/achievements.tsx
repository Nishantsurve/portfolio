"use client";

import { motion } from "framer-motion";
import { Trophy, Award, GitPullRequest, Users, Sparkles, Star } from "lucide-react";
import { achievementsData } from "@/data/achievements";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Award,
  GitPullRequest,
  Users,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-400/20 bg-zinc-400/8 text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>PROVEN TRACK RECORD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Achievements &amp; Honors
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          Competitive programming milestones, national hackathon recognitions, open-source contributions, and community leadership.
        </p>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievementsData.map((item, index) => {
          const Icon = iconMap[item.icon] || Award;
          const isHighlight = item.highlight;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 rounded-2xl glass-panel glow-card flex flex-col justify-between ${
                isHighlight
                  ? "border-amber-500/30 bg-amber-500/[0.03] dark:bg-amber-500/[0.04]"
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      isHighlight
                        ? "bg-amber-500/15 text-amber-500"
                        : "bg-zinc-400/10 text-zinc-400"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  {isHighlight && (
                    <span className="flex items-center gap-1 text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-amber-500" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                <div className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-50 font-mono">
                  {item.metric}
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {item.subtitle}
                </div>

                <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

