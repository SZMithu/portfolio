import { Code, Globe, Server, Zap } from 'lucide-react';
import useCardTiltEffect from '@/hooks/useCardTiltEffect';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: Globe,
    title: 'Full Stack',
    description: 'End-to-end development from frontend to backend',
  },
  {
    icon: Server,
    title: 'API Expert',
    description: 'RESTful API design and third-party integrations',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Efficient workflows for quick project turnaround',
  },
];


export const AboutSection = () => {

  useCardTiltEffect();

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div className="reveal-left">
              <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">
                About Me
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                BUILDING DIGITAL
                <br />
                <span className="text-gradient">EXPERIENCES</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Full Stack Web Developer with over{' '}
                  <span className="text-foreground font-medium">4 years of experience</span>{' '}
                  building modern web applications. As a{' '}
                  <span className="text-primary font-semibold">Top Rated</span> freelancer on
                  Upwork, I've helped businesses transform their ideas into reality.
                </p>
                <p>
                  I specialize in creating robust authentication systems, user management
                  solutions, and seamless API integrations. My expertise spans from crafting
                  beautiful, responsive frontends to building powerful backend architectures.
                </p>
              </div>
            </div>

            {/* Right content - highlights grid */}
            <div className="grid grid-cols-2 gap-4 stagger-children">
              {highlights.map((item) => {
                // Define the tilt settings based on the title
                const tiltProps = item.title === 'Clean Code' || item.title === 'API Expert'
                  ? { 'data-tilt': true, 'data-tilt-startx': "-20", 'data-tilt-starty': "20", 'data-tilt-reset-to-start': "true" }
                  : { 'data-tilt': true, 'data-tilt-startx': "20", 'data-tilt-starty': "-20",}
     
          return(
                  <div
                    key={item.title}
                    className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-glow card"
                    {...tiltProps}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
