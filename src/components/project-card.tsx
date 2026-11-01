"use client";

import { motion } from "framer-motion";
import { ExternalLink, Check, Sparkles, Terminal, HardDrive } from "lucide-react";
import { ProjectItem } from "@/types";
import { GithubIcon } from "./social-icons";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl glass-panel glow-card flex flex-col justify-between overflow-hidden border ${
        project.featured
          ? "border-cyan-500/40 md:col-span-2 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-emerald-500/[0.02]"
          : "border-zinc-200 dark:border-zinc-800"
      }`}
    >
      {/* Visual Header / Mockup Banner */}
      <div className="relative h-44 sm:h-52 w-full bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 flex items-center justify-center p-6 border-b border-zinc-200 dark:border-zinc-800/80 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "20px 20px"
          }}
        />

        {/* Status badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {project.statusBadge && (
            <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
              {project.statusBadge}
            </span>
          )}
          {project.featured && (
            <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Flagship</span>
            </span>
          )}
        </div>

        {/* Placeholder UI Graphic representation */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-500 dark:text-cyan-400 shadow-lg mb-2">
            <Terminal className="w-7 h-7" />
          </div>
          <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">
            {project.category}
          </span>
          <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
            {project.title}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h3>
              <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                {project.subtitle}
              </div>
            </div>
          </div>

          {/* Stats if available */}
          {project.stats && (
            <div className="mt-2.5 p-2 rounded-lg bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-700 dark:text-cyan-300">
              📊 {project.stats}
            </div>
          )}

          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* Key Architectural Features */}
          <div className="mt-4 space-y-2">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                <span className="leading-normal">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: Tags & Action links */}
        <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/80">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-amber-700 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 transition-colors"
              >
                <HardDrive className="w-3.5 h-3.5" />
                <span>Google Drive</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
            {!project.githubUrl && !project.liveUrl && !project.driveUrl && (
              <span className="text-xs font-mono text-zinc-500 italic">
                Proprietary / In Active Development
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
