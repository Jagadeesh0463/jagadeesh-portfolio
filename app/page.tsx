import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ContentSection } from "@/components/content-section";
import { HeroSection } from "@/components/hero-section";
import { InterestsSection } from "@/components/interests-section";
import { Navbar } from "@/components/navbar";
import { PageShell } from "@/components/page-shell";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <PageShell>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContentSection />
        <InterestsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </PageShell>
  );
}
