import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { services } from "@/data/site";

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      kicker="How I Can Help"
      title="Services designed for brands, teams, and founders who want leverage."
      copy="The offerings are presented with clarity and enough brand language to feel premium without becoming vague. They align with both current strengths and the trajectory of the personal brand."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <MotionReveal key={service.title} delay={index * 0.1}>
            <div className="glass-panel rounded-[2rem] p-7">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">
                Service {index + 1}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {service.description}
              </p>
            </div>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
