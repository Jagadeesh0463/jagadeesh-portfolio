import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      kicker={site.projects.kicker}
      title={site.projects.title}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {site.projects.items.map((project, index) => (
          <MotionReveal key={project.title} delay={index * 0.08}>
            <article className="glass-panel flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-7 text-white">
                  {project.title}
                </h3>
                {project.status ? (
                  <span className="rounded-md border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-100">
                    {project.status}
                  </span>
                ) : null}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                {project.description}
              </p>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
