import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { SocialIconLinks } from "@/components/social-icon-links";
import { site } from "@/data/site";

export function SocialLinksSection() {
  return (
    <SectionShell
      id="social"
      kicker={site.social.kicker}
      title={site.social.title}
    >
      <MotionReveal className="glass-panel rounded-lg p-6 sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Professional updates, AI build notes, and creator-side experiments.
          </p>
          <SocialIconLinks variant="footer" />
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
