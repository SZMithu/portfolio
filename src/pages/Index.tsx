import heroConcert from "@/assets/hero-concert.jpg";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import ArtistCard from "@/components/ArtistCard";
import VenueSection from "@/components/VenueSection";
import TicketSection from "@/components/TicketSection";
import Footer from "@/components/Footer";
import { Ticket, Music } from "lucide-react";

const Index = () => {
  // Set concert date to March 15, 2026
  const concertDate = new Date("2026-03-15T19:00:00");

  const artists = [
    { name: "ARTCELL", role: "Headliner", isHeadliner: true },
    { name: "WARFAZE", role: "Special Guest", isHeadliner: false },
    { name: "AURTHOHIN", role: "Featured Artist", isHeadliner: false },
    { name: "SOULS", role: "Featured Artist", isHeadliner: false },
    { name: "NEMESIS", role: "Opening Act", isHeadliner: false },
  ];

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroConcert})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Content */}
        <div className="relative z-10 container max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6 animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm">
              <Music className="w-4 h-4" />
              March 15, 2026 • Dhaka, Bangladesh
            </span>
          </div>
          
          <h1 className="font-display text-6xl sm:text-7xl md:text-9xl leading-none mb-6 animate-slide-up-delay-1">
            <span className="text-foreground">DHAKA</span>
            <br />
            <span className="text-gradient-primary">NIGHTS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up-delay-2">
            Experience the ultimate music festival featuring Bangladesh's greatest rock legends. 
            One night. One stage. Infinite memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up-delay-3">
            <Button variant="hero" size="xl">
              <Ticket className="w-5 h-5" />
              Get Tickets
            </Button>
            <Button variant="heroOutline" size="xl">
              View Lineup
            </Button>
          </div>
          
          <div className="flex justify-center animate-slide-up-delay-4">
            <CountdownTimer targetDate={concertDate} />
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Lineup Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-16 animate-slide-up">
            THE <span className="text-gradient-secondary">LINEUP</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <ArtistCard key={artist.name} {...artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <VenueSection />

      {/* Tickets Section */}
      <TicketSection />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
