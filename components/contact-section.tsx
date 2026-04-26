import { ContactForm } from "@/components/contact-form";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { socialLinks } from "@/data/site";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      kicker="Contact"
      title="For opportunities, collaborations, and bold ideas worth building."
      copy="The contact experience stays clean and premium. It creates a direct path for recruiters, founders, and collaborators while keeping the visual tone consistent with the rest of the brand."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <MotionReveal className="space-y-6">
          <div className="glass-panel rounded-[2rem] p-8">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">
              Social Presence
            </div>
            <div className="mt-6 grid gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-400/[0.05]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-[2rem] p-8">
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">
              Quick Pitch
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If you need someone who can think like an engineer, communicate like a
              creator, and grow toward AI-native systems, this is the right place to
              start the conversation.
            </p>
          </div>
        </MotionReveal>
        <MotionReveal delay={0.15}>
          <ContactForm />
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
