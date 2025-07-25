import { GraduationCap, Award, Globe, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AboutSection = () => {
  const certifications = [
    {
      name: "AWS Solutions Architecture Job Simulation",
      date: "Feb 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_fy3C8Pc6p9MkHfXJ4_1738852686320_completion_certificate.pdf"
    },
    {
      name: "Power BI Simulation – PwC Switzerland",
      date: "Feb 2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4sLyCPgmsy8DA6Dh3/a87GpgE6tiku7q3gu_4sLyCPgmsy8DA6Dh3_fy3C8Pc6p9MkHfXJ4_1739470319824_completion_certificate.pdf"
    },
    {
      name: "Cybersecurity Essentials – IBM",
      date: "May 2024",
      link: "https://drive.google.com/file/d/1E-WRTt8XwPPyVODDx1jiMD6oPsPGEG93/view?usp=drive_link"
    },
    {
      name: "Blockchain Basics – SUNY Buffalo",
      date: "Oct 2024",
      link: "https://www.coursera.org/account/accomplishments/records/DIZOMWJVIEHS"
    },
    {
      name: "Digital Marketing – Google",
      date: "Oct 2022",
      link: "https://drive.google.com/file/d/1IXhA-Le04696vr5-1koNENBTO_idhbCK/view?usp=sharing"
    },
    {
      name: "AI for Everyone – DeepLearning.AI",
      date: "Feb 2024",
      link: "https://drive.google.com/file/d/1-F0CXIc0K4BmPoiRl1lVmocC56JzSeDb/view?usp=sharing"
    },
    {
      name: "Java Fundamentals – Infosys",
      date: "Aug 2023",
      link: "https://drive.google.com/file/d/1mbO3w0M2E0wiEiJtHVppy6AfSKPEDQLS/view?usp=sharing"
    }
  ];

  const languages = [
    { name: "English", message: "Hi I am Piyush, can be your next employee" },
    { name: "Hindi", message: "नमस्ते मैं पीयूष हूं, मैं आपका अगला कर्मचारी बन सकता हूं" },
    { name: "Kannada", message: "ನಮಸ್ತೆ ನಾನು ಪೀಯೂಷ್, ನಾನು ನಿಮ್ಮ ಮುಂದಿನ ಉದ್ಯೋಗಿ ಆಗಬಹುದು" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-accent relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 mesh-gradient"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-secondary rounded-full opacity-15 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-primary rounded-full opacity-15 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-float delay-1000"></div>
      
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Designing Solutions, Not Just Visuals
          </p>
        </div>

        <TooltipProvider>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              <Card className="shadow-card border-border/50 hover:shadow-luxury transition-all duration-500 glass-luxury hover-lift group">
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
                        <Tooltip key={language.name}>
                          <TooltipTrigger asChild>
                            <Badge 
                              variant="outline" 
                              className="bg-secondary/50 border-primary/20 hover:bg-primary/10 transition-colors duration-200 px-3 py-1 cursor-pointer"
                            >
                              {language.name}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent side="bottom" sideOffset={8} className="max-w-xs">
                            <p className="text-center font-medium">{language.message}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 hover:shadow-luxury transition-all duration-500 glass-luxury hover-lift group">
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
              <Card className="shadow-card border-border/50 hover:shadow-luxury transition-all duration-500 glass-luxury hover-lift group">
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
                      <a 
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                        <div>
                          <p className="font-medium text-foreground leading-relaxed group-hover:text-primary transition-colors duration-200">{cert.name}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {cert.date}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TooltipProvider>

      </div>
    </section>
  );
};

export default AboutSection;