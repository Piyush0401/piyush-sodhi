import { GraduationCap, Award, Globe, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const certifications = [
    "AWS Solutions Architecture Job Simulation",
    "Power BI Simulation – PwC Switzerland",
    "Cybersecurity Essentials – IBM",
    "Blockchain Basics – SUNY Buffalo",
    "Digital Marketing – Google",
    "AI for Everyone – DeepLearning.AI",
    "Java Fundamentals – Infosys"
  ];

  const languages = ["English", "Hindi", "Kannada"];

  return (
    <section id="about" className="py-20 bg-gradient-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-secondary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <Card className="shadow-card border-border/50 hover:shadow-hover transition-all duration-500 bg-gradient-card backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    <User className="h-6 w-6" />
                  </div>
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Enthusiastic learner and problem solver passionate about programming, innovation, 
                  and building impactful tech solutions. I thrive on tackling complex challenges 
                  and transforming ideas into functional, user-centered applications.
                </p>
                
                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-lg">
                    <div className="p-1 bg-gradient-secondary rounded-lg text-accent-foreground">
                      <Globe className="h-4 w-4" />
                    </div>
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((language) => (
                      <Badge 
                        key={language}
                        variant="outline" 
                        className="bg-secondary/50 border-primary/20 hover:bg-primary/10 transition-colors duration-200 px-3 py-1"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-hover transition-all duration-500 bg-gradient-card backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-lg">
                    B.Tech in Information Science & Engineering
                  </h4>
                  <p className="text-muted-foreground text-lg">
                    Acharya Institute of Technology
                  </p>
                  <p className="text-muted-foreground">
                    2022 – 2026
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Certifications */}
          <div>
            <Card className="shadow-card border-border/50 hover:shadow-hover transition-all duration-500 bg-gradient-card backdrop-blur-sm hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    <Award className="h-6 w-6" />
                  </div>
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                      <div>
                        <p className="font-medium text-foreground leading-relaxed">{cert}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {index < 2 ? "Feb 2025" : index < 4 ? "2024" : "2023-2024"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;