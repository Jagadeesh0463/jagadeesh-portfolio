import { ContactForm } from "@/components/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { SocialIconLinks } from "@/components/social-icon-links";
import { site } from "@/data/site";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      kicker={site.contact.kicker}
      title={site.contact.title}
      copy={site.contact.copy}
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <MotionReveal className="glass-panel rounded-lg p-6 sm:p-8">
          <div className="inline-flex rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100">
            Available for AI roles
          </div>
          <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
            {site.owner.name}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {site.owner.title}
          </p>
          {site.owner.email ? (
            <a
              href={`mailto:${site.owner.email}`}
              className="mt-6 inline-flex rounded-md border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/15"
            >
              {site.owner.email}
            </a>
          ) : null}
          <SocialIconLinks variant="contact" />
        </MotionReveal>
        <MotionReveal delay={0.12}>
          <ContactForm />
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
