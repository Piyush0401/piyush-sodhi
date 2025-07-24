import { Code, Database, Brain, Wrench, Smartphone, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Full Stack Development", level: 90 },
        { name: "Data Analysis", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Data Structures & Algorithms", level: 85 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib/Seaborn", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Arduino IDE", level: 80 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 65 }
      ]
    }
  ];

  const otherDomains = [
    { name: "Blockchain Technology", icon: <Shield className="w-5 h-5" /> },
    { name: "Digital Marketing", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Operating Systems", icon: <Code className="w-5 h-5" /> },
    { name: "Cybersecurity", icon: <Shield className="w-5 h-5" /> },
    { name: "IoT Development", icon: <Wrench className="w-5 h-5" /> },
    { name: "Embedded Systems", icon: <Database className="w-5 h-5" /> }
  ];

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 mesh-gradient"></div>
      <div className="absolute top-32 right-32 w-80 h-80 bg-gradient-primary rounded-full opacity-12 blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-32 w-72 h-72 bg-gradient-secondary rounded-full opacity-12 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/2 w-60 h-60 bg-accent/10 rounded-full blur-2xl animate-float delay-2000"></div>
      
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group shadow-card border-border/50 hover:shadow-luxury transition-all duration-500 overflow-hidden glass-luxury hover-lift relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="flex items-center gap-4 text-foreground text-xl">
                  <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground shadow-glow group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <span className="group-hover:text-primary transition-colors duration-300">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground group-hover:text-primary/90 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium bg-secondary/30 px-2 py-1 rounded-md">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-secondary/30 border border-border/30"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Domains */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold gradient-text mb-4">
            Additional Expertise
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Other domains and technologies I'm familiar with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {otherDomains.map((domain, index) => (
            <Card 
              key={index} 
              className="p-6 text-center shadow-card border-border/50 hover:shadow-luxury hover-lift transition-all duration-300 glass-luxury group"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 bg-gradient-secondary rounded-xl text-accent-foreground group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                  {domain.icon}
                </div>
                <span className="text-sm font-medium text-foreground text-center leading-tight">
                  {domain.name}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "7+", label: "Technologies" },
            { number: "6", label: "Programming Languages" },
            { number: "14", label: "Frameworks/Tools/Libraries" },
            { number: "10", label: "Domains" }
          ].map((stat, index) => (
            <Card key={index} className="group p-8 shadow-card border-border/50 hover:shadow-luxury transition-all duration-500 glass-luxury hover-lift overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-muted-foreground font-medium text-lg leading-tight">{stat.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
