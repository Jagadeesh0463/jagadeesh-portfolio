import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      kicker={site.experience.kicker}
      title={site.experience.title}
    >
      <div className="relative">
        <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-[linear-gradient(180deg,transparent,rgba(56,189,248,0.55),transparent)] md:block" />
        <div className="grid gap-6">
          {site.experience.roles.map((role, index) => (
            <MotionReveal key={role.role} delay={index * 0.1}>
              <article className="relative md:pl-12">
                <span className="absolute left-[10px] top-8 hidden h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_28px_rgba(56,189,248,0.8)] md:block" />
                <div className="glass-panel rounded-lg p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{role.role}</h3>
                      <p className="mt-2 text-sm text-cyan-100">{role.company}</p>
                    </div>
                    <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
                    {role.summary}
                  </p>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {role.responsibilities.map((responsibility) => (
                      <div
                        key={responsibility}
                        className="flex gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
