import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const projects = [
  {
    title: 'Jaxi.ai',
    description: 'AI-driven SaaS tool for content management built with Laravel. Features advanced AI integrations for automated content creation and management.',
    tech: ['Laravel', 'PHP', 'MySQL', 'AI Integration'],
    url: 'https://app.jaxi.ai',
    category: 'SaaS',
  },
  {
    title: 'Movie Explorer',
    description: 'React JS API project showcasing movie data with dynamic search and filtering capabilities. Demonstrates RESTful API consumption.',
    tech: ['React', 'JavaScript', 'REST API', 'CSS'],
    url: 'https://szmithu.github.io/TestMovies/',
    category: 'React',
  },
  {
    title: 'GPT-3 Landing Page',
    description: 'Modern UI/UX React project featuring sleek design, smooth animations, and responsive layouts for AI technology showcase.',
    tech: ['React', 'CSS', 'UI/UX', 'Responsive'],
    url: 'https://szmithu.github.io/GPT3/',
    category: 'UI/UX',
  },
  {
    title: 'HooBank',
    description: 'Modern banking UI/UX concept built with React. Features contemporary design patterns and seamless user experience.',
    tech: ['React', 'Tailwind CSS', 'UI/UX'],
    url: 'https://szmithu.github.io/hoobank/',
    category: 'UI/UX',
  },
  {
    title: 'Cuda Template',
    description: 'Professional PSD to HTML conversion showcasing pixel-perfect design implementation with clean, semantic code.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    url: 'https://szmithu.github.io/Cuda/',
    category: 'HTML/CSS',
  },
  {
    title: 'Natai Blog',
    description: 'Static PHP blog site with clean design and optimized performance. Demonstrates PHP templating and static site generation.',
    tech: ['PHP', 'HTML', 'CSS', 'Blog'],
    url: 'https://szmithu.github.io/natai-blog/',
    category: 'PHP',
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 reveal">
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">
              My Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              FEATURED <span className="text-gradient">PROJECTS</span>
            </h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
              >
                {/* Project header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay link */}
                <div className="px-6 pb-6">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-border hover:border-primary hover:text-primary"
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row justify-center items-center mt-12">
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
      </div>
    </section>
  );
};
