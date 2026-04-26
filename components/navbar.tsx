"use client";

import { motion } from "framer-motion";
import { navigation } from "@/data/site";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-30"
    >
      <div className="section-grid pt-4">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="display-font text-2xl font-semibold">Jagadeesh</span>
            <span className="hidden h-2 w-2 rounded-full bg-neon shadow-[0_0_20px_rgba(94,234,212,0.8)] sm:block" />
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/15"
          >
            Let&apos;s Build
          </a>
        </div>
        <nav className="mt-3 flex gap-3 overflow-x-auto px-1 pb-1 text-sm text-slate-300 md:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
