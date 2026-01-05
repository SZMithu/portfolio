import { MapPin, Calendar, Clock } from "lucide-react";

const VenueSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <h2 className="font-display text-5xl md:text-7xl text-center mb-16 animate-slide-up">
          <span className="text-gradient-secondary">VENUE</span> & DETAILS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-card border border-border rounded-2xl p-8 text-center hover:border-secondary/50 transition-all duration-300 hover:shadow-glow-gold animate-slide-up-delay-1">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-2xl mb-3 text-foreground">LOCATION</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bangabandhu National Stadium<br />
              Motijheel, Dhaka 1000<br />
              Bangladesh
            </p>
          </div>
          
          <div className="bg-gradient-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up-delay-2">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl mb-3 text-foreground">DATE</h3>
            <p className="text-muted-foreground leading-relaxed">
              March 15, 2026<br />
              Saturday<br />
              One Night Only
            </p>
          </div>
          
          <div className="bg-gradient-card border border-border rounded-2xl p-8 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(280_80%_60%/0.3)] animate-slide-up-delay-3">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-2xl mb-3 text-foreground">DOORS OPEN</h3>
            <p className="text-muted-foreground leading-relaxed">
              Gates: 5:00 PM<br />
              Show Starts: 7:00 PM<br />
              Expected End: 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
