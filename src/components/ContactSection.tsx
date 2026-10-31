import { Linkedin, ExternalLink, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~018d470365535e8b74',
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
      </svg>
    ),
    description: 'Top Rated Freelancer',
    color: 'hover:text-[#14a800]',
  },
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/s/XL5XL2e',
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61V11.79h1.61v.74a1.47 1.47 0 0 1 1.376-.847c.749 0 1.309.376 1.532.986a1.63 1.63 0 0 1 1.472-.986c1.036 0 1.692.68 1.692 1.752v2.406h-1.61v-2.138c0-.47-.187-.716-.551-.716-.382 0-.61.277-.61.844v2.01h-1.61v-2.138c0-.47-.186-.716-.55-.716-.382 0-.61.278-.61.844v2.01h-1.613V11.79h1.61v.74a1.47 1.47 0 0 1 1.376-.847c.749 0 1.309.376 1.532.986a1.63 1.63 0 0 1 1.472-.986c1.036 0 1.692.68 1.692 1.752v.447h-1.61v.001zm-7.39-5.584c0 .576-.47 1.043-1.048 1.043a1.045 1.045 0 1 1 0-2.089c.578 0 1.049.468 1.049 1.046zm-1.847 9.544h1.61V11.79h-1.61v4.053zm-2.855-3.636c0-.464-.188-.71-.551-.71-.382 0-.61.277-.61.844v2.01h-1.61V11.79h1.61v.74a1.47 1.47 0 0 1 1.376-.847c1.035 0 1.692.681 1.692 1.753v2.406h-1.61v-2.137l-.297-.002zM4.406 15.843h1.61v-4.053h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558H2.03c-.547 0-.84.41-.84 1.092v2.466H0V11.79h1.19v.697c.224-.49.73-.804 1.409-.804.725 0 1.277.376 1.532.986a1.63 1.63 0 0 1 1.473-.986c1.035 0 1.692.68 1.692 1.752v2.406H5.686v-2.138c0-.47-.187-.716-.55-.716-.383 0-.611.277-.611.844v2.01l-.12.002z" />
      </svg>
    ),
    description: 'Professional Seller',
    color: 'hover:text-[#1dbf73]',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sarwar-zahan-aa8584243/',
    icon: Linkedin,
    description: 'Connect with me',
    color: 'hover:text-[#0077b5]',
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 reveal">
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              LET'S <span className="text-gradient">WORK TOGETHER</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Ready to bring your project to life? Let's discuss how I can help you achieve your
              goals.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 stagger-children">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gradient-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow text-center ${link.color}`}
              >
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                  <link.icon />
                </div>
                <h3 className="font-display text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="text-muted-foreground text-sm">{link.description}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span>Visit Profile</span>
                  <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>

          {/* Additional info */}
          <div className="reveal bg-gradient-card p-8 rounded-2xl border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Email Me</h4>
                  <p className="text-muted-foreground text-sm">
                    Feel free to reach out via any of my freelance platforms for project inquiries.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">
                    Available for remote work worldwide. Based in Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 reveal">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow px-8"
            >
              <a
                href="https://www.upwork.com/freelancers/~018d470365535e8b74"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me on Upwork
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
