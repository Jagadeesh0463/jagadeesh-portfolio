import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="section-grid flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {site.owner.name} Copyright {year}. {site.footer.copyright}
        </div>
        <nav className="flex gap-4">
          {site.footer.links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
