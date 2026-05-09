import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

const activity = Array.from({ length: 70 }, (_, index) => {
  const levels = [0, 1, 2, 3, 1, 0, 2, 1, 3, 2];
  return levels[(index * 7 + index) % levels.length];
});

const levelClasses = [
  "bg-white/[0.04]",
  "bg-cyan-400/20",
  "bg-cyan-400/45",
  "bg-cyan-300/80"
];

export function ProofSection() {
  return (
    <SectionShell
      id="proof"
      kicker={site.certifications.kicker}
      title={site.certifications.title}
      copy={site.github.copy}
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <MotionReveal className="glass-panel rounded-lg p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">{site.github.title}</h3>
              <p className="mt-2 text-sm text-slate-400">
                Contribution-style product momentum view
              </p>
            </div>
            <span className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
              Active
            </span>
          </div>
          <div className="mt-8 grid grid-cols-10 gap-2">
            {activity.map((level, index) => (
              <span
                key={`${level}-${index}`}
                className={`aspect-square rounded-[3px] ${levelClasses[level]}`}
              />
            ))}
          </div>
        </MotionReveal>

        <div className="grid gap-4">
          {site.certifications.items.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.08}>
              <div className="glass-panel rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
