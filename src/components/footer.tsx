"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";
import { ViewsCounter } from "./views-counter";

export function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-[#040609]/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {profileData.name}
              </div>
              <div className="text-xs text-zinc-500">
                Enterprise Automation &bull; AI Integrations
              </div>
            </div>
          </div>

          {/* Center Info with Views Count Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs font-mono text-zinc-500 text-center">
            <ViewsCounter />
            <span className="hidden sm:inline">&bull;</span>
            <span>Engineered with Next.js &amp; Tailwind CSS</span>
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-zinc-500">
              &copy; {year} Nishant Surve
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-cyan-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all cursor-pointer"
              aria-label="Scroll back to top"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
