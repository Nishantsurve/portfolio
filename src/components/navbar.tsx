"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";
import { ViewsCounter } from "./views-counter";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));

      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["hero", "about", "experience", "skills", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top scroll progress indicator bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-zinc-400 to-zinc-600 dark:from-zinc-300 dark:to-zinc-500 fixed top-0 left-0 transition-all duration-75 z-50"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl glass-panel shadow-sm">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="flex items-center gap-2.5 text-sm sm:text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-800/10 dark:bg-zinc-100/10 border border-zinc-400/20 flex items-center justify-center text-zinc-600 dark:text-zinc-300 group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono">
                nishant<span className="text-zinc-400 dark:text-zinc-500">.surve</span>
              </span>
            </a>
            <div className="hidden lg:block">
              <ViewsCounter />
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const target = link.href.replace("#", "");
              const isActive = activeSection === target;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-zinc-800 dark:text-zinc-100 bg-zinc-200/80 dark:bg-zinc-700/60"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Tools: Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-xl text-zinc-800 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 border border-zinc-200 dark:border-zinc-700/60 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-400"
            >
              <FileDown className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl glass-panel shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="pb-2 border-b border-zinc-200 dark:border-zinc-800 flex justify-center">
              <ViewsCounter />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-800/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
              >
                <FileDown className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
