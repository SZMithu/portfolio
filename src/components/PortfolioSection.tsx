import { ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (v) => {
  if (!trackRef.current) return 0;
  return -v * (trackRef.current.scrollWidth - window.innerWidth);
});

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative h-[300vh]" // 👈 IMPORTANT
    >  
        {/* ===== Header (normal scroll) ===== */}
        <div className="container sticky top-0 mx-auto px-4 pt-24 text-center">
          <div className="max-w-6xl mx-auto">

          <p className="text-primary font-medium mb-3 uppercase text-sm">
            My Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl">
            FEATURED <span className="text-gradient">PROJECTS</span>
          </h2>

        {/* ===== Sticky horizontal scroll ===== */}
        <div className="flex pt-20 items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="grid grid-flow-col gap-6 auto-cols-[minmax(320px,1fr)] lg:auto-cols-[400px] pr-[25vw] lg:pr-[50vw]"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gradient-card rounded-2xl border border-border p-6"
              >
                <div className="flex justify-between mb-3">
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>
                  <a href={project.url} target="_blank">
                    <ExternalLink size={18} />
                  </a>
                </div>

                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-muted px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full">
                  <a href={project.url} target="_blank">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
            {/* <div className="w-screen" /> */}
          </motion.div>
        </div>

        {/* ===== Resume normal scroll ===== */}
        <div className="flex py-20 justify-center items-center">
          <Button
            onClick={() => scrollToSection('#contact')} size="lg" variant="outline">
            Get In Touch
          </Button>
        </div>
          </div>
        </div>
    </section>
  );
};