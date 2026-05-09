import { FiExternalLink, FiGithub } from "react-icons/fi";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

const accentClasses: Record<string, string> = {
  cyan: "from-cyan-400/70 to-sky-500/30",
  emerald: "from-emerald-400/70 to-cyan-500/25",
  violet: "from-violet-400/70 to-cyan-500/25",
  amber: "from-amber-300/70 to-cyan-500/25",
  blue: "from-blue-400/70 to-cyan-400/25",
  rose: "from-rose-400/70 to-cyan-500/25"
};

function ProjectAction({
  href,
  label,
  icon
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  if (!href) {
    return (
      <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-500">
        {icon}
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
}

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      kicker={site.projects.kicker}
      title={site.projects.title}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {site.projects.items.map((project, index) => (
          <MotionReveal key={project.title} delay={index * 0.06}>
            <article className="group glass-panel relative h-full overflow-hidden rounded-lg p-4 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35 hover:shadow-2xl hover:shadow-cyan-950/35">
              <div
                className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r ${
                  accentClasses[project.accent] ?? accentClasses.cyan
                } opacity-80`}
              />
              <div className="rounded-md border border-white/10 bg-slate-950/45 p-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 truncate text-xs text-slate-500">
                    {project.title.toLowerCase().replaceAll(" ", "-")}.app
                  </span>
                </div>
                <div className="relative mt-4 min-h-44 overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.62))] p-5">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="relative">
                    <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">
                      {project.status}
                    </div>
                    <div className="mt-6 max-w-xs text-2xl font-semibold leading-tight text-white">
                      {project.title}
                    </div>
                    <div className="mt-6 grid max-w-sm gap-2">
                      <span className="h-2 rounded-full bg-cyan-300/60" />
                      <span className="h-2 w-3/4 rounded-full bg-white/12" />
                      <span className="h-2 w-1/2 rounded-full bg-white/12" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 pt-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>
                <p className="mt-4 rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
                  {project.impact}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ProjectAction
                    href={project.githubUrl}
                    label="GitHub"
                    icon={<FiGithub aria-hidden="true" />}
                  />
                  <ProjectAction
                    href={project.liveUrl}
                    label="Live Demo"
                    icon={<FiExternalLink aria-hidden="true" />}
                  />
                </div>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
