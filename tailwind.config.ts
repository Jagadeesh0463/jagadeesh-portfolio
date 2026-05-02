import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#0f172a",
        abyss: "#111827",
        mist: "#e2e8f0",
        neon: "#38bdf8",
        electric: "#38bdf8",
        steel: "#94a3b8"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 38%), radial-gradient(circle at 80% 20%, rgba(94,234,212,0.16), transparent 28%)"
      },
      boxShadow: {
        glass: "0 24px 80px rgba(2, 6, 23, 0.45)"
      },
      animation: {
        drift: "drift 16s ease-in-out infinite",
        rain: "rain 16s linear infinite",
        shimmer: "shimmer 7s linear infinite"
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" }
        },
        rain: {
          "0%": { transform: "translate3d(0, -110%, 0)" },
          "100%": { transform: "translate3d(12%, 110%, 0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        }
      }
    }
  },
  plugins: []
};

export default config;
