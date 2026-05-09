import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      kicker={site.about.kicker}
      title={site.about.title}
      copy={site.about.intro}
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <MotionReveal className="glass-panel rounded-lg p-6 sm:p-8">
          <div className="grid gap-5 text-sm leading-7 text-slate-300 sm:text-base">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </MotionReveal>

        <div className="relative">
          <div className="absolute bottom-6 left-4 top-6 w-px bg-[linear-gradient(180deg,transparent,rgba(56,189,248,0.5),transparent)]" />
          <div className="grid gap-4">
            {site.about.timeline.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="relative pl-12">
                  <span className="absolute left-[9px] top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(56,189,248,0.8)]" />
                  <div className="glass-panel rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                    <div className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
                      {item.year}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.copy}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
