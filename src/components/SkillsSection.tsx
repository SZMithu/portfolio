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
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 reveal">
            <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">
              My Expertise
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              SKILLS & <span className="text-gradient">TECHNOLOGIES</span>
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {/* Languages */}
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="font-display text-2xl text-foreground mb-6">Languages</h3>
              <div className="space-y-5">
                {skills.languages.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="font-display text-2xl text-foreground mb-6">Frameworks</h3>
              <div className="space-y-5">
                {skills.frameworks.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="font-display text-2xl text-foreground mb-6">Tools & More</h3>
              <div className="space-y-5">
                {skills.tools.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="mt-12 reveal">
            <div className="bg-gradient-card p-8 rounded-2xl border border-border">
              <h3 className="font-display text-2xl text-foreground mb-6 text-center">
                Specializations
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Authentication Systems',
                  'User Management',
                  'RESTful API Development',
                  'API Integration',
                  'SaaS Development',
                  'E-commerce Solutions',
                  'CMS Development',
                  'Database Design',
                ].map((spec) => (
                  <span
                    key={spec}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
