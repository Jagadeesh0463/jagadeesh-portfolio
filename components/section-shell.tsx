type SectionShellProps = {
  id: string;
  kicker: string;
  title: string;
  copy?: string;
  children: React.ReactNode;
};

export function SectionShell({
  id,
  kicker,
  title,
  copy,
  children
}: SectionShellProps) {
  return (
    <section id={id} className="relative py-24 sm:py-28">
      <div className="section-grid">
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">{kicker}</span>
          <h2 className="section-title">{title}</h2>
          {copy ? <p className="section-copy mt-6">{copy}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
