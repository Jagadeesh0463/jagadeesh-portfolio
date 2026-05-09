"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { SocialIconLinks } from "@/components/social-icon-links";
import { TypingText } from "@/components/typing-text";
import { site } from "@/data/site";

export function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 18 });
  const rotateX = useTransform(smoothY, [-220, 220], [7, -7]);
  const rotateY = useTransform(smoothX, [-220, 220], [-7, 7]);

  return (
    <section
      id="home"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden pb-16 pt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(180deg,black,transparent_88%)]" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(56,189,248,0.2), transparent 34%)"
        }}
      />
      <div className="section-grid relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="section-kicker"
          >
            {site.hero.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
          >
            {site.hero.headline}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl"
          >
            Crafting <TypingText items={site.hero.typingItems} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            {site.owner.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={site.hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-300/30"
            >
              {site.hero.primaryCta.label}
              <FiArrowRight
                aria-hidden="true"
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={site.hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-400/10"
            >
              {site.hero.secondaryCta.label}
            </a>
            <a
              href={site.hero.resumeCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-slate-950/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.07]"
            >
              <FiDownload aria-hidden="true" />
              {site.hero.resumeCta.label}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
          >
            <SocialIconLinks variant="hero" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="glass-panel relative overflow-hidden rounded-lg"
        >
          <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.9),transparent)]" />
          <div className="relative aspect-[16/11] min-h-80">
            <Image
              src={site.hero.image.src}
              alt={site.hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_15%,rgba(15,23,42,0.92)_100%)]" />
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
