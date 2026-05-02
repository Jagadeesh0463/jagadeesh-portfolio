import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

const activeLinks = site.social.links.filter((link) => link.href);

export function SocialLinksSection() {
  return (
    <SectionShell
      id="social"
      kicker={site.social.kicker}
      title={site.social.title}
    >
      <MotionReveal className="glass-panel rounded-lg p-6 sm:p-8">
        {activeLinks.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activeLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm leading-7 text-slate-400">
            {site.social.emptyMessage}
          </p>
        )}
      </MotionReveal>
    </SectionShell>
  );
}
