"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="section-grid grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-cyan-100/80"
          >
            Calm. Precise. Cinematic.
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="display-font max-w-4xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-8xl"
          >
            Engineer by profession.
            <br />
            Creator by passion.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Jagadeesh brings together embedded software discipline, cinematic content
            creation, AI ambition, and a high-performance mindset to craft work that
            feels both technically sharp and emotionally memorable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
            >
              View Projects
              <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#content"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/10"
            >
              Subscribe
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.3em] text-slate-400"
          >
            <span>AI</span>
            <span className="h-px w-10 bg-white/15" />
            <span>Content</span>
            <span className="h-px w-10 bg-white/15" />
            <span>Fitness</span>
            <span className="h-px w-10 bg-white/15" />
            <span>Business</span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="absolute inset-x-10 top-0 h-px glow-line" />
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(6,10,20,0.32))] p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                <span>Personal Brand OS</span>
                <span>2026</span>
              </div>
              <div className="mt-8 space-y-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
                  >
                    <div className="text-3xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-400">
                      {stat.label}
                    </div>
                    {index < stats.length - 1 ? (
                      <div className="mt-4 h-px w-full bg-white/5" />
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">
                  Current Focus
                </div>
                <div className="mt-3 text-lg font-medium text-white">
                  Building a future at the intersection of AI systems, creator media,
                  and premium digital experiences.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
