import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisionSection from "@/components/VisionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <TechStackSection />
      <ProcessSection />
      <TestimonialsSection />
      <VisionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
