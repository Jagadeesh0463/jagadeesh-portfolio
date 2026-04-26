export function RainBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0)_0%,rgba(2,6,23,0.4)_65%,rgba(2,6,23,0.85)_100%)]" />
      <div className="rain-layer mask-fade" />
      <div className="rain-layer mask-fade opacity-40 [animation-duration:20s] [transform:rotate(15deg)_scale(1.2)]" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-teal-300/10 blur-[130px]" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sky-400/10 blur-[160px]" />
    </div>
  );
}
