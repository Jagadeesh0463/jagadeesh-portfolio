export function RainBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.78)_100%)]" />
    </div>
  );
}
