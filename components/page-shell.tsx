import { RainBackground } from "@/components/rain-background";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <RainBackground />
      {children}
    </div>
  );
}
