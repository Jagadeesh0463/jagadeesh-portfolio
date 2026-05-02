import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      kicker={site.experience.kicker}
      title={site.experience.title}
      copy={site.experience.years}
    >
      <MotionReveal className="glass-panel rounded-lg p-6 sm:p-8">
        <ul className="grid gap-4 md:grid-cols-2">
          {site.experience.responsibilities.map((responsibility) => (
            <li
              key={responsibility}
              className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-7 text-slate-300"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </MotionReveal>
    </SectionShell>
  );
}
