import { MotionReveal } from "@/components/motion-reveal";
import { site } from "@/data/site";

export function MetricStrip() {
  return (
    <section className="relative py-10 sm:py-12">
      <div className="section-grid">
        <MotionReveal>
          <div className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {site.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-md border border-white/10 bg-slate-950/35 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-400/[0.06]"
              >
                <div className="text-3xl font-semibold text-white">{metric.value}</div>
                <div className="mt-2 text-sm font-medium text-cyan-100">
                  {metric.label}
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-400">{metric.detail}</p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
