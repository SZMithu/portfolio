import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

const TicketSection = () => {
  const tickets = [
    {
      name: "General Admission",
      price: "৳2,500",
      features: ["Standing area access", "Food court access", "Event merchandise discount"],
      popular: false,
    },
    {
      name: "VIP Experience",
      price: "৳7,500",
      features: ["Premium viewing area", "Exclusive lounge access", "Complimentary drinks", "Meet & Greet opportunity", "VIP merchandise pack"],
      popular: true,
    },
    {
      name: "Golden Circle",
      price: "৳15,000",
      features: ["Front stage access", "Private bar service", "Backstage tour", "Artist signed poster", "Premium parking"],
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <h2 className="font-display text-5xl md:text-7xl text-center mb-4 animate-slide-up">
          GET YOUR <span className="text-gradient-primary">TICKETS</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg animate-slide-up-delay-1">
          Limited availability. Secure your spot now.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {tickets.map((ticket, index) => (
            <div
              key={ticket.name}
              className={`relative bg-gradient-card border rounded-2xl p-8 transition-all duration-500 hover:scale-105 animate-slide-up-delay-${index + 1} ${
                ticket.popular
                  ? "border-primary shadow-glow md:-mt-4 md:mb-4"
                  : "border-border hover:border-muted-foreground/50"
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl mb-4 text-foreground">{ticket.name}</h3>
                <div className="font-display text-5xl text-gradient-primary">{ticket.price}</div>
                <span className="text-muted-foreground text-sm">per person</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                variant={ticket.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                <Ticket className="w-5 h-5" />
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketSection;
