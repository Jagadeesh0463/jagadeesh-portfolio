import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "S. Jagadeesh | Embedded Systems & AI Enthusiast",
  description:
    "Portfolio of S. Jagadeesh, a Senior Software Engineer with embedded Bluetooth experience and an active transition toward AI engineering.",
  keywords: [
    "S. Jagadeesh portfolio",
    "Bluetooth engineer",
    "AI engineer",
    "embedded systems",
    "Bluetooth BR/EDR",
    "Next.js portfolio"
  ],
  openGraph: {
    title: "S. Jagadeesh | Embedded Systems & AI Enthusiast",
    description:
      "Senior Software Engineer specializing in embedded Bluetooth systems and building toward AI engineering.",
    url: siteUrl,
    siteName: "S. Jagadeesh Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "S. Jagadeesh | Embedded Systems & AI Enthusiast",
    description:
      "Embedded Bluetooth engineer transitioning toward AI engineering."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} bg-night text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
