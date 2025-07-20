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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <User className="h-6 w-6 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Enthusiastic learner and problem solver passionate about programming, innovation, 
                  and building impactful tech solutions. I thrive on tackling complex challenges 
                  and transforming ideas into functional, user-centered applications.
                </p>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <Badge 
                        key={language}
                        variant="secondary" 
                        className="bg-secondary/50 text-secondary-foreground"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    B.Tech in Information Science & Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Acharya Institute of Technology
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2022 – 2026
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Certifications */}
          <div>
            <Card className="shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Award className="h-6 w-6 text-primary" />
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-foreground">{cert}</p>
                        <p className="text-xs text-muted-foreground mt-1">
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

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">50+</h3>
            <p className="text-muted-foreground">Complete Project</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">3+</h3>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">3</h3>
            <p className="text-muted-foreground">Languages Spoken</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Top</h3>
            <p className="text-muted-foreground">Performer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;