"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCategory } from "@/types";
import { ProjectCard } from "./project-card";

const categories: ProjectCategory[] = ["All", "AI & Automation", "Full-Stack", "Tools"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === "All") return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Featured Engineering Projects
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          From machine learning prediction models to real-time collaboration engines, enterprise document processing, and full-stack marketplaces.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "text-zinc-950 dark:text-white bg-cyan-500 shadow-md shadow-cyan-500/20"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60"
                }`}
              >
                <span>{cat}</span>
                {cat === "All" && (
                  <span className="ml-1.5 text-xs opacity-70">({projectsData.length})</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

