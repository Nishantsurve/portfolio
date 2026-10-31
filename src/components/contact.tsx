"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Code, MapPin, Check, Copy, Loader2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./social-icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Post to internal Next.js API route (which handles Apps Script and webhook forwarding)
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Open prefilled mailto client to ensure 100% direct mail transmission
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${profileData.socials.email}?subject=${subject}&body=${body}`, "_blank");

      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      // Fallback directly to mailto
      window.location.href = `mailto:${profileData.socials.email}?subject=Portfolio Contact&body=${encodeURIComponent(formData.message)}`;
      setFormSubmitted(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>INITIATE CONTACT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Let&apos;s Build Something Impactful
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
          Whether you want to discuss enterprise workflow automation, agentic AI pipelines, or high-performance software engineering, my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Information Card (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Contact Channels
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Based in Pune, India. Available for engineering discussions, full-stack architectural consultations, and full-time engineering opportunities.
            </p>

            {/* Direct Email with 1-click copy */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold">
                Direct Email
              </span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-800 dark:text-zinc-200 truncate">
                  <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span className="truncate">{profileData.socials.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-cyan-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location snapshot */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs sm:text-sm font-mono text-zinc-700 dark:text-zinc-300">
              <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>{profileData.location} &bull; Remote Available</span>
            </div>

            {/* Social Network Links */}
            <div className="pt-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold block mb-3">
                Professional Networks
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all text-zinc-800 dark:text-zinc-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all text-zinc-800 dark:text-zinc-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all text-zinc-800 dark:text-zinc-200"
                >
                  <Code className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form (3 cols) */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl glass-panel glow-card space-y-5"
          >
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Send a Direct Message
            </h3>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center space-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold">Message Transmitted!</h4>
                <p className="text-xs">
                  Your message has been sent to <strong>{profileData.socials.email}</strong> and saved to the spreadsheet.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400">
                    Your Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Nishant, I would love to connect regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-sm transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
