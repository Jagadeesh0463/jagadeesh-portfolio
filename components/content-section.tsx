import { MotionReveal } from "@/components/motion-reveal";
import { SectionShell } from "@/components/section-shell";
import { videos } from "@/data/site";

export function ContentSection() {
  return (
    <SectionShell
      id="content"
      kicker="Creator Lens"
      title="Calm rain visuals, sleep ambience, and cinematic mood as a digital signature."
      copy="This section gives the portfolio a living media layer. It is not just a resume. It shows how engineering discipline can also express itself through atmosphere, pacing, and audience connection."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {videos.map((video, index) => (
          <MotionReveal key={video.title} delay={index * 0.12}>
            <div className="glass-panel overflow-hidden rounded-[2rem]">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={video.embedUrl}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{video.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {video.description}
                </p>
              </div>
            </div>
          </MotionReveal>
        ))}
      </div>
      <MotionReveal className="mt-10">
        <div className="glass-panel flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 sm:flex-row sm:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-cyan-100/70">
              Subscribe
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Follow the channel for sleep ambience, rain-driven focus sessions, and
              cinematic calm designed for reflective nights and deep work.
            </p>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            Visit YouTube
          </a>
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
