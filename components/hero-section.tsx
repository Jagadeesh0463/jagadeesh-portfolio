"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden pt-24"
    >
      <div className="section-grid grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker"
          >
            {site.hero.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            {site.owner.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-5 max-w-3xl text-xl font-medium leading-8 text-cyan-100 sm:text-2xl"
          >
            {site.owner.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.26 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            {site.owner.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={site.hero.primaryCta.href}
              className="rounded-md bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              {site.hero.primaryCta.label}
            </a>
            <a
              href={site.hero.secondaryCta.href}
              className="rounded-md border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/10"
            >
              {site.hero.secondaryCta.label}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass-panel overflow-hidden rounded-lg"
        >
          <div className="relative aspect-[16/11] min-h-80">
            <Image
              src={site.hero.image.src}
              alt={site.hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_20%,rgba(15,23,42,0.9)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-cyan-100/75">
                {site.owner.role}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.hero.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-md border border-white/10 bg-slate-950/55 px-3 py-2 text-sm text-slate-100 backdrop-blur"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 p-5 text-sm leading-7 text-slate-400 sm:p-6">
            {site.hero.profileCopy}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
