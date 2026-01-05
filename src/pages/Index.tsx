import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
