import { RainBackground } from "@/components/rain-background";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <RainBackground />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[520px] bg-hero-glow opacity-80 blur-3xl" />
      {children}
    </div>
  );
}
