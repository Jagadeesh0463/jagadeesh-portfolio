import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      kicker={site.skills.kicker}
      title={site.skills.title}
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {site.skills.categories.map((category, index) => (
          <MotionReveal key={category.title} delay={index * 0.04}>
            <div className="group glass-panel relative h-full overflow-hidden rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35 hover:shadow-2xl hover:shadow-cyan-950/30">
              <div className="absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.6),transparent)] opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-11 w-11 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {category.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200 transition group-hover:border-cyan-300/20 group-hover:bg-cyan-300/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
