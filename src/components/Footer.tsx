import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-gradient-primary mb-2">DHAKA NIGHTS 2026</h3>
            <p className="text-muted-foreground text-sm">The biggest concert event in Bangladesh</p>
          </div>
          
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Dhaka Nights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
