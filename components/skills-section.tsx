import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { skills } from "@/data/site";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      kicker="Capability"
      title="Built on technical depth. Aiming toward intelligent systems."
      copy="The skill set blends production-ready software engineering with an evolving AI and automation lens. The result is a profile that can ship reliably today while preparing for the future of product and creator workflows."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {skills.map((skill, index) => (
          <MotionReveal key={skill.title} delay={index * 0.08}>
            <div className="glass-panel rounded-[2rem] p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{skill.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {skill.description}
                  </p>
                </div>
                <div className="text-sm font-medium text-cyan-200">{skill.level}%</div>
              </div>
              <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#38bdf8,#5eead4)] shadow-[0_0_30px_rgba(56,189,248,0.35)]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
