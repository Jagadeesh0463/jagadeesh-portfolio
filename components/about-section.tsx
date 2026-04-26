import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      kicker="Origin Story"
      title="A builder shaped by systems, stories, and self-discipline."
      copy="This journey did not begin with aesthetics. It began with engineering discipline, problem solving, and the quiet patience to make complex systems behave. Over time, that same focus evolved into storytelling, content creation, and a growing pull toward AI as the next frontier."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionReveal className="glass-panel rounded-[2rem] p-8">
          <p className="text-lg leading-8 text-slate-200">
            Jagadeesh operates at a rare intersection: the precision of an embedded
            Bluetooth senior software engineer, the instincts of a creator, and the
            curiosity of someone actively moving toward an AI-driven future.
          </p>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            The mindset is simple. Build with clarity. Create with emotion. Stay
            consistent enough that ideas become momentum. Whether the medium is code,
            cinematic rain ambience, a business concept, or a motivating message, the
            aim is always the same: make it meaningful and make it memorable.
          </p>
        </MotionReveal>
        <MotionReveal className="grid gap-6" delay={0.15}>
          <div className="glass-panel rounded-[2rem] p-7">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">
              Personality Drivers
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {["Strategic like chess", "Resilient like fitness", "Focused like cricket", "Ambitious like business"].map(
                (trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200"
                  >
                    {trait}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="glass-panel rounded-[2rem] p-7">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">
              North Star
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              To build a personal brand and body of work that inspires trust from
              recruiters, audiences, collaborators, and future clients all at once.
            </p>
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
