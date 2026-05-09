"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function Navbar() {
  const [active, setActive] = useState(site.navigation[0]?.href ?? "#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = site.navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40"
    >
      <div className="section-grid pt-4">
        <div className="rounded-lg border border-white/10 bg-slate-950/55 px-4 py-3 shadow-2xl shadow-slate-950/25 backdrop-blur-2xl sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="group flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-md border border-cyan-300/25 bg-cyan-400/10 text-sm font-semibold text-cyan-100 transition group-hover:border-cyan-200/50 group-hover:bg-cyan-300/15">
                SJ
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">
                  {site.owner.name}
                </span>
                <span className="hidden text-xs text-slate-400 sm:block">
                  {site.owner.role}
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-1 text-sm text-slate-300 lg:flex">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative rounded-md px-3 py-2 transition hover:text-white"
                >
                  {active === item.href ? (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-md border border-cyan-300/20 bg-cyan-300/10"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={site.owner.resumeHref}
                className="hidden rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 sm:inline-flex"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="hidden rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:inline-flex"
              >
                Contact
              </a>
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 lg:hidden"
              >
                {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="grid gap-2 pt-4">
                  {site.navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
