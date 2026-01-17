import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm md:text-base">
              Full Stack Web Developer
            </p>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-none">
            MD. SARWAR
            <br />
            <span className="text-gradient">ZAHAN</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting robust web solutions with{' '}
            <span className="text-foreground font-medium">3+ years</span> of experience.
            <br className="hidden sm:block" />
            <span className="text-primary font-semibold">Top Rated Plus</span> on Upwork
          </p>

          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => {
                const element = document.querySelector('#portfolio');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow px-8"
            >
              View My Work
            </Button>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted px-8"
            >
              <Download className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up animate-delay-400 mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-primary">3+</p>
              <p className="text-muted-foreground text-sm">Years Exp.</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-primary">23+</p>
              <p className="text-muted-foreground text-sm">Projects</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-primary">100%</p>
              <p className="text-muted-foreground text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};
