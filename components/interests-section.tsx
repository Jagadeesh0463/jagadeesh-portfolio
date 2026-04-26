import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { interests } from "@/data/site";

export function InterestsSection() {
  return (
    <SectionShell
      id="interests"
      kicker="Beyond Work"
      title="Interests that sharpen the way I think, compete, and create."
      copy="These cards give the portfolio personality without making it feel casual. Each interest reinforces a real part of the operating system behind the work."
    >
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {interests.map((interest, index) => (
          <MotionReveal key={interest.title} delay={index * 0.07}>
            <div className="glass-panel h-full rounded-[2rem] p-6 transition hover:-translate-y-2 hover:border-cyan-300/25">
              <div className="text-4xl">{interest.emoji}</div>
              <h3 className="mt-5 text-xl font-semibold text-white">{interest.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {interest.description}
              </p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
