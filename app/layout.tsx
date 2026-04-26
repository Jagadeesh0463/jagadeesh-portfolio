import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jagadeesh | Engineer, Creator, Builder",
  description:
    "Jagadeesh is an embedded Bluetooth senior software engineer, aspiring AI engineer, content creator, and storyteller building high-performance products and calming digital experiences.",
  keywords: [
    "Jagadeesh portfolio",
    "Bluetooth engineer",
    "AI engineer",
    "content creator",
    "embedded systems",
    "Next.js portfolio"
  ],
  openGraph: {
    title: "Jagadeesh | Engineer, Creator, Builder",
    description:
      "Engineer by profession. Creator by passion. A cinematic portfolio blending software, content, AI ambition, and calm design.",
    url: siteUrl,
    siteName: "Jagadeesh Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagadeesh | Engineer, Creator, Builder",
    description:
      "Embedded Bluetooth engineer, creator, and aspiring AI builder with a calm cinematic portfolio experience."
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
        className={`${sora.variable} ${cormorant.variable} bg-night text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
