"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Trophy,
  BrainCircuit,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Workflow
} from "lucide-react";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/achievements";

export function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Bridging Systems with Code, Automation &amp; Agentic AI
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          I design and implement resilient digital workflows that eliminate operational bottlenecks,
          pair deterministic enterprise RPA with non-deterministic LLM reasoning, and build full-stack web applications with high engineering standards.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        
        {/* Card 1: Main Story (2 cols on md/lg) */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-2 lg:col-span-2 p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
              <Workflow className="w-4 h-4" />
              <span>Engineering Journey</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Architecting Enterprise Reliability &amp; Autonomous Workflows
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
              At <strong className="text-zinc-900 dark:text-zinc-200">Xalta</strong>, I specialize in automating mission-critical enterprise workflows using Automation Anywhere 360 and UiPath.
              My work spans Control Room orchestrations, API connectors, OCR &amp; IDP document understanding, and integrating generative AI into deterministic business processes.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              I believe in strong computer science fundamentals: well-structured data models, clean OOP principles, high testability, and algorithmic efficiency.
            </p>
          </div>
          <div className="pt-6 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-zinc-200/50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300">
              UiPath Orchestrator
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-200/50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300">
              AA360 Control Room
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-200/50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300">
              Agentic Systems
            </span>
          </div>
        </motion.div>

        {/* Card 2: LeetCode Knight Tile */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-2xl glass-panel flex flex-col justify-between group border-amber-500/20 hover:border-amber-500/40"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <Trophy className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full font-semibold">
                Knight Tier
              </span>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 font-mono">
                1885
              </div>
              <div className="text-xs text-zinc-500 font-medium mt-0.5">LeetCode Peak Contest Rating</div>
            </div>
            <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Global Contest Ranks: <strong className="text-zinc-900 dark:text-zinc-200">539</strong> / 30k+ and <strong className="text-zinc-900 dark:text-zinc-200">555</strong> / 33k+. Deep algorithmic intuition applied to production optimization.
            </p>
          </div>
          <a
            href={profileData.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 hover:underline"
          >
            <span>View LeetCode Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Card 3: Location Tile */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-2xl glass-panel flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
                <MapPin className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-500">IST (UTC+5:30)</span>
            </div>
            <h4 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Pune, India
            </h4>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Based in the premier technology and engineering hub of Maharashtra. Open to local and remote collaboration globally.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 font-mono">
            Active Workspace: Pune &bull; Hybrid
          </div>
        </motion.div>

        {/* Card 4: Current Exploration: AI Agents & LLMs */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-2 lg:col-span-2 p-6 rounded-2xl glass-panel flex flex-col justify-between border-cyan-500/20"
        >
          <div>
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
              <BrainCircuit className="w-4 h-4" />
              <span>CURRENT OBSESSION</span>
            </div>
            <h4 className="mt-2 text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Autonomous AI Agents &amp; Multi-Agent Systems
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Actively exploring autonomous agent architectures, Model Context Protocol (MCP), tool-use pipelines, and embedding semantic search into business workflows using Gemini API and local LLM runtimes.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              Gemini API
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-200/50 dark:bg-zinc-800/80">
              Multi-Agent Orchestration
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-200/50 dark:bg-zinc-800/80">
              n8n &amp; Webhooks
            </span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-200/50 dark:bg-zinc-800/80">
              IDP &amp; OCR
            </span>
          </div>
        </motion.div>

        {/* Card 5: Education Snapshot */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-2 lg:col-span-2 p-6 rounded-2xl glass-panel flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                CGPA 8.83
              </span>
            </div>
            <h4 className="mt-3 text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {educationData.degree} in {educationData.field}
            </h4>
            <p className="text-xs text-zinc-500 font-medium">
              {educationData.institution} ({educationData.period})
            </p>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Graduated with First Class with Distinction. Strong foundation in Algorithms, Operating Systems, Computer Networks, and Cloud Infrastructure.
            </p>
          </div>
          <div className="mt-3 text-xs font-mono text-zinc-500">
            Verified Academic Track Record &bull; Pimpri, Pune
          </div>
        </motion.div>

      </div>
    </section>
  );
}

