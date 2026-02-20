import { Code, Database, Brain, Wrench, Smartphone, Zap } from "lucide-react";

const SkillsSection = () => {
  const strengths = [
    { name: "Python", icon: "🐍" },
    { name: "MERN Stack", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Vite", icon: "🔥" },
    { name: "Git Version Control", icon: "🌿" },
    { name: "Java Basics", icon: "☕" },
    { name: "Problem Solving", icon: "🧩" },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Python", "JavaScript", "Java", "C/C++", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: <Smartphone className="w-5 h-5" />,
      skills: ["React.js", "Next.js", "Vite", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-5 h-5" />,
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "GraphQL"],
    },
    {
      title: "Data Science & ML",
      icon: <Brain className="w-5 h-5" />,
      skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "NLP"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git / GitHub", "Arduino IDE", "Jest", "Web Scraping", "REST APIs"],
    },
    {
      title: "Other Domains",
      icon: <Zap className="w-5 h-5" />,
      skills: ["IoT Development", "Embedded Systems", "EEG / BCI", "Digital Marketing", "Cybersecurity"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-60 pointer-events-none" />

      <div className="container-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            A clean overview of the tools, languages, and frameworks I work with.
          </p>
        </div>

        {/* Strengths & Expertise */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-gradient-primary inline-block" />
            Strengths &amp; Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {strengths.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border/60 bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default group"
              >
                <span className="text-lg">{s.icon}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-card border border-border/60 rounded-xl p-5 hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 bg-gradient-primary rounded-lg text-primary-foreground">
                  {cat.icon}
                </div>
                <span className="font-semibold text-foreground text-sm">{cat.title}</span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground border border-border/40 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
