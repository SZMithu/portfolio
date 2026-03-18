import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import useCardTiltEffect from "@/hooks/useCardTiltEffect";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
  reverse?: boolean;
}

function PingPongText({ children, baseVelocity = 50, reverse = false }: ParallaxProps) {
  const baseX = useMotionValue(0);
  
  const direction = useRef<number>(reverse ? -1 : 1); // Start direction based on reverse prop
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentWidth = useRef<number>(0);
  const containerWidth = useRef<number>(0);


  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
   const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && contentRef.current) {
        containerWidth.current = containerRef.current.offsetWidth;
        contentWidth.current = contentRef.current.scrollWidth;
        
        // Start at right edge if reverse direction
        if (reverse && contentWidth.current > containerWidth.current) {
          baseX.set(-(contentWidth.current - containerWidth.current));
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, [reverse, baseX]);

 useAnimationFrame((_, delta) => {
  if (!containerWidth.current || !contentWidth.current) return;
  if (contentWidth.current <= containerWidth.current) return;

  const maxLeft = 0;
  const maxRight = -(contentWidth.current - containerWidth.current);

  const speedBoost = 1 + Math.abs(velocityFactor.get());
  const x = baseX.get();
  const moveBy = direction.current * baseVelocity * speedBoost * (delta / 1000);
  let next = x + moveBy;

  if (next <= maxRight) {
    next = maxRight;
    direction.current = 1;
  } else if (next >= maxLeft) {
    next = maxLeft;
    direction.current = -1;
  }

  baseX.set(next);
});


  const x = useTransform(baseX, (v) => `translateX(${v}px)`);

  return (
    <div 
      ref={containerRef} 
      className="overflow-hidden relative parallax"
      style={{ width: '100%' }}
    >
      <motion.div 
        className="scroller"
        ref={contentRef}
        style={{ 

          transform: x,
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          willChange: 'transform'
        }}
      >
        {children}
      </motion.div>
      
      {/* Gradient overlays for smooth edges (optional) */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}

const skills = {
  languages: [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'PHP', level: 85 },
    { name: 'MySQL', level: 82 },
  ],
  frameworks: [
    { name: 'Laravel', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Vue.js', level: 80 },
    { name: 'Livewire', level: 88 },
    { name: 'WordPress', level: 85 },
  ],
  tools: [
    { name: 'Bootstrap', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'RESTful API', level: 88 },
    { name: 'Git', level: 85 },
    { name: 'API Integration', level: 90 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-foreground font-medium text-sm">{name}</span>
      <span className="text-muted-foreground text-sm">{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export const SkillsSection = () => {
  const specializations1 = [
    { text: 'SaaS Development', color: 'primary' },
    { text: 'E-commerce Solutions', color: 'accent' },
    { text: 'CMS Development', color: 'primary' },
    { text: 'Database Design', color: 'accent' },
    { text: 'Authentication Systems', color: 'primary' },
    { text: 'User Management', color: 'accent' },
  ];

  const specializations2 = [
    { text: 'RESTful API Development', color: 'accent' },
    { text: 'API Integration', color: 'primary' },
    { text: 'Payment Integration', color: 'accent' },
    { text: 'Real-time Features', color: 'primary' },
    { text: 'Mobile Optimization', color: 'accent' },
    { text: 'Server Management', color: 'primary' },
  ];

   useCardTiltEffect();

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
           <motion.div 
            className="text-center mb-16 reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">
              My Expertise
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              SKILLS & <span className="text-gradient">TECHNOLOGIES</span>
            </h2>
          </motion.div>
          {/* Skills grid with stagger animation */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <motion.div 
              className="bg-gradient-card p-8 rounded-2xl border border-border card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ "transformStyle": "preserve-3d", "transform": "perspective(1000px)" }}
            >
              <h3 className="font-display text-2xl text-foreground mb-6">Languages</h3>
              <div className="space-y-5" style={{ "transform": "translateZ(40px)" }}>
                {skills.languages.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SkillBar name={skill.name} level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div 
              className="bg-gradient-card p-8 rounded-2xl border border-border card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ "transformStyle": "preserve-3d", "transform": "perspective(1000px)" }}
            >
              <h3 className="font-display text-2xl text-foreground mb-6">Frameworks</h3>
              <div className="space-y-5" style={{ "transform": "translateZ(40px)" }}>
                {skills.frameworks.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SkillBar name={skill.name} level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div 
              className="bg-gradient-card p-8 rounded-2xl border border-border card"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ "transformStyle": "preserve-3d", "transform": "perspective(1000px)" }}
            >
              <h3 className="font-display text-2xl text-foreground mb-6">Tools & More</h3>
              <div className="space-y-5" style={{ "transform": "translateZ(40px)" }}>
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <SkillBar name={skill.name} level={skill.level} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Specializations with Ping-Pong effect */}
          <div className="mt-12 reveal text-center">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="font-display text-2xl text-foreground mb-6 text-center">
                Specializations
              </h3>
              
              {/* First ping-pong row (starts from left, moves right) */}
              <div className="mb-6 overflow-hidden relative">
                <PingPongText baseVelocity={50} reverse={false}>
                  <div className="flex gap-3 px-4">
                    {[...specializations1, ...specializations1].map((spec, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-${spec.color}/10 text-${spec.color} rounded-full text-sm font-medium border border-${spec.color}/20 hover:bg-${spec.color}/20 transition-colors flex-shrink-0`}
                      >
                        {spec.text}
                      </span>
                    ))}
                  </div>
                </PingPongText>
              </div>

              {/* Second ping-pong row (starts from right, moves left) */}
              <div className="overflow-hidden relative">
                <PingPongText baseVelocity={50} reverse={true}>
                  <div className="flex gap-3 px-4">
                    {[...specializations2, ...specializations2].map((spec, index) => (
                      <span
                        key={index}
                        className={`px-4 py-2 bg-${spec.color}/10 text-${spec.color} rounded-full text-sm font-medium border border-${spec.color}/20 hover:bg-${spec.color}/20 transition-colors flex-shrink-0`}
                      >
                        {spec.text}
                      </span>
                    ))}
                  </div>
                </PingPongText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};