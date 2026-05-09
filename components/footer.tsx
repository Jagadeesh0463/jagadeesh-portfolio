import { SocialIconLinks } from "@/components/social-icon-links";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="section-grid flex flex-col gap-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="text-base font-semibold text-white">{site.owner.name}</div>
          <div className="mt-2">
            Copyright {year}. {site.footer.copyright}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <nav className="flex gap-4">
            {site.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SocialIconLinks variant="footer" />
        </div>
      </div>
    </footer>
  );
}
