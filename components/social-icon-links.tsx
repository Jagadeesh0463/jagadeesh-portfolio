import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { site } from "@/data/site";

type SocialIconLinksProps = {
  variant?: "hero" | "contact" | "footer";
};

const icons = {
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram
};

const activeLinks = site.social.links.filter(
  (link) => link.href && link.label in icons
);

const variantClasses = {
  hero: "mt-8",
  contact: "mt-6",
  footer: ""
};

export function SocialIconLinks({ variant = "hero" }: SocialIconLinksProps) {
  if (activeLinks.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${variantClasses[variant]}`}>
      {activeLinks.map((link) => {
        const Icon = icons[link.label as keyof typeof icons];
        const isLinkedIn = link.label === "LinkedIn";

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${link.label} profile in a new tab`}
            className={`group inline-flex h-11 w-11 items-center justify-center rounded-md border text-xl text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-300/70 ${
              isLinkedIn
                ? "border-[#0A66C2]/70 bg-[#0A66C2] hover:shadow-[#0A66C2]/30"
                : "border-pink-300/30 bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] hover:shadow-pink-500/25"
            }`}
          >
            <Icon
              aria-hidden="true"
              className="h-5 w-5 shrink-0 transition duration-300 group-hover:scale-110"
            />
          </a>
        );
      })}
    </div>
  );
}
