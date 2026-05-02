import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      kicker={site.about.kicker}
      title={site.about.title}
    >
      <MotionReveal className="glass-panel max-w-5xl rounded-lg p-6 sm:p-8">
        <div className="grid gap-6 text-base leading-8 text-slate-300 sm:text-lg">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
