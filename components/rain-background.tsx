export function RainBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_20%_40%,rgba(16,185,129,0.09),transparent_28%),radial-gradient(circle_at_80%_55%,rgba(59,130,246,0.11),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.14)_0%,rgba(15,23,42,0.76)_72%,rgba(15,23,42,1)_100%)]" />
      <div className="noise-layer absolute inset-0 opacity-[0.06]" />
    </div>
  );
}
