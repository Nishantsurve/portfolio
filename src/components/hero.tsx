"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, Code, Mail, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";
import { HeroCanvas } from "./hero-canvas";
import { GithubIcon, LinkedinIcon } from "./social-icons";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Node-graph flow background */}
      <HeroCanvas />

      {/* Radial soft background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-zinc-500/5 dark:bg-zinc-400/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-400/30 bg-zinc-400/10 text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{profileData.statusBadge}</span>
        </motion.div>

        {/* Identity & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="inline-block">
            <span className="text-sm font-mono tracking-wider text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
              Hello, I&apos;m {profileData.name}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.12]">
            Building Intelligent Solutions Through{" "}
            <span className="bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-600 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-200 bg-clip-text text-transparent">
              Code, Automation &amp; AI.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 font-normal pt-2 leading-relaxed">
            {profileData.tagline}
          </p>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-500 dark:text-zinc-400/90 leading-relaxed">
            Software Engineer at <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{profileData.company}</span> ({profileData.location}). Specializing in Enterprise Automation (UiPath, AA360), LLM integrations, and robust full-stack software.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-semibold text-sm transition-all shadow-lg shadow-zinc-900/20 dark:shadow-zinc-100/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/5 dark:bg-zinc-800/80 hover:bg-zinc-900/10 dark:hover:bg-zinc-700/80 border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-all hover:scale-[1.02]"
          >
            <FileDown className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-medium transition-colors"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Social Icons row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-4 text-zinc-500 dark:text-zinc-400"
        >
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={profileData.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
            aria-label="LeetCode Profile"
          >
            <Code className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profileData.socials.email}`}
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all"
            aria-label="Email Nishant Surve"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Quick Micro-Badge footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-mono"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
            <span>UiPath &amp; Automation Anywhere 360</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>LeetCode Knight (Rating 1885)</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span>Pune, Maharashtra, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
