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
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {site.skills.categories.map((category, index) => (
          <MotionReveal key={category.title} delay={index * 0.06}>
            <div className="glass-panel h-full rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-cyan-400/15 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-50"
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
