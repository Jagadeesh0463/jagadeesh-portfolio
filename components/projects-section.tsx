import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { projects } from "@/data/site";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      kicker="Selected Work"
      title="Concepts and systems designed to feel premium, useful, and future-facing."
      copy="These project stories are framed to communicate technical depth, creator thinking, and entrepreneurial range. The visual treatment keeps each card energetic without losing clarity."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <MotionReveal key={project.title} delay={index * 0.1}>
            <a
              href={project.href}
              className="glass-panel group block h-full rounded-[2rem] p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/25 hover:bg-cyan-400/[0.05]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="max-w-xs text-2xl font-semibold text-white transition group-hover:text-cyan-100">
                  {project.title}
                </h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Explore
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                {project.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </a>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
