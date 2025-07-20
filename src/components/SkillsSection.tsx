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
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card border-border/50 hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Domains */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Additional Expertise
          </h3>
          <p className="text-muted-foreground mb-8">
            Other domains and technologies I'm familiar with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherDomains.map((domain, index) => (
            <Card 
              key={index} 
              className="p-4 text-center shadow-card border-border/50 hover:shadow-elegant hover:scale-105 transition-all duration-300 cursor-default"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="p-2 bg-gradient-secondary rounded-lg text-accent-foreground">
                  {domain.icon}
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                  {domain.name}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Programming Languages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Frameworks</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-muted-foreground">Domains</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
