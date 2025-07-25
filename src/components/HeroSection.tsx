import { ArrowRight, Github, Linkedin, Mail, Code, Database, Zap, Star, Sparkles, Circle, Triangle, Square, Diamond, Heart, Atom } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Enhanced Background with mesh gradient */}
      <div className="absolute inset-0 mesh-gradient"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float shadow-glow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/30 rounded-full blur-lg animate-float delay-300 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/15 rounded-full blur-2xl animate-float delay-700"></div>
        
        {/* Enhanced decorative dots with glow */}
        <div className="absolute top-32 left-1/3 flex flex-col space-y-2 animate-bounce-slow">
          <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse shadow-glow"></div>
          <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse delay-150 shadow-glow"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300 shadow-glow"></div>
        </div>
        
        <div className="absolute bottom-32 right-1/4 flex flex-col space-y-2 animate-bounce-slow delay-500">
          <div className="w-2 h-2 bg-primary-foreground/60 rounded-full animate-pulse shadow-glow"></div>
          <div className="w-2 h-2 bg-primary-foreground/80 rounded-full animate-pulse delay-200 shadow-glow"></div>
          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse delay-400 shadow-glow"></div>
        </div>
        
        {/* Additional floating geometric shapes */}
        <div className="absolute top-1/3 right-1/3 w-6 h-6 border border-primary-foreground/30 rotate-45 animate-float delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-accent/40 rounded-full animate-pulse-slow delay-1500"></div>
        <div className="absolute top-2/3 left-1/4 w-8 h-1 bg-primary-foreground/20 animate-float delay-2000"></div>
        
        {/* Animated Icons - Tech themed */}
        <div className="absolute top-16 right-1/4 text-primary/30 animate-float delay-500">
          <Code className="w-5 h-5 animate-pulse-slow" />
        </div>
        <div className="absolute bottom-1/4 right-16 text-primary-foreground/40 animate-bounce-slow delay-700">
          <Database className="w-4 h-4" />
        </div>
        <div className="absolute top-1/2 left-20 text-accent/50 animate-float delay-1200">
          <Zap className="w-6 h-6 animate-pulse" />
        </div>
        
        {/* Sparkle and Star effects */}
        <div className="absolute top-24 left-2/3 text-primary/25 animate-pulse delay-800">
          <Star className="w-3 h-3" />
        </div>
        <div className="absolute bottom-16 left-1/2 text-primary-foreground/35 animate-float delay-1800">
          <Sparkles className="w-4 h-4 animate-bounce-slow" />
        </div>
        <div className="absolute top-3/4 right-1/3 text-accent/40 animate-pulse-slow delay-2500">
          <Star className="w-2 h-2" />
        </div>
        
        {/* Geometric animated shapes */}
        <div className="absolute top-1/4 left-16 text-primary/20 animate-spin-slow">
          <Circle className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/2 right-12 text-primary-foreground/30 animate-float delay-1600">
          <Triangle className="w-5 h-5" />
        </div>
        <div className="absolute top-1/2 right-1/2 text-accent/25 animate-bounce-slow delay-2200">
          <Square className="w-3 h-3" />
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute bottom-1/4 left-12 text-primary/35 animate-pulse delay-1100">
          <Diamond className="w-4 h-4" />
        </div>
        <div className="absolute top-2/3 right-20 text-primary-foreground/25 animate-float delay-1900">
          <Heart className="w-3 h-3 animate-pulse-slow" />
        </div>
        <div className="absolute bottom-20 right-1/2 text-accent/30 animate-spin-slow delay-2800">
          <Atom className="w-6 h-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-primary-foreground/90">
                Hey, I'm Piyush
              </p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                <span className="block">Aspiring</span>
                <span className="block">Full Stack</span>
                <span className="block">Developer &</span>
                <span className="block">Data Analyst</span>
              </h1>
              
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                Passionate Information Science student with hands-on experience in software development, 
                data analysis, and cutting-edge technologies. Building innovative solutions for complex challenges.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/piyush1457" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full border border-primary-foreground/20 transition-all duration-300 hover:scale-110 shadow-elegant"
                >
                  <Github className="w-6 h-6 text-primary-foreground" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/piyush-kumar-sodhi-104b6b307/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full border border-primary-foreground/20 transition-all duration-300 hover:scale-110 shadow-elegant"
                >
                  <Linkedin className="w-6 h-6 text-primary-foreground" />
                </a>
                <a 
                  href="mailto:piyushsodhi145@gmail.com"
                  className="p-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full border border-primary-foreground/20 transition-all duration-300 hover:scale-110 shadow-elegant"
                >
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </a>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
              <Button 
                size="lg"
                className="group glass-luxury text-primary-foreground border border-primary-foreground/30 shadow-luxury hover:shadow-glow hover-lift relative overflow-hidden"
                onClick={() => scrollToSection("#contact")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="group bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover-lift relative overflow-hidden"
                onClick={() => scrollToSection("#projects")}
              >
                <span className="relative z-10">Browse Projects</span>
                <div className="absolute inset-0 bg-primary-foreground/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>

          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Enhanced Profile image container */}
              <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] group">
                <div className="absolute inset-0 bg-gradient-primary rounded-full shadow-luxury animate-pulse-slow"></div>
                <div className="absolute inset-4 bg-primary-foreground rounded-full overflow-hidden shadow-floating ring-4 ring-primary/30 group-hover:ring-8 group-hover:ring-primary/40 transition-all duration-500">
                  <img 
                    src="/lovable-uploads/8c7f23e1-3e4e-48d4-824b-6f1bc7b7119c.png" 
                    alt="Piyush Kumar Sodhi" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Orbital decorative elements */}
                <div className="absolute -inset-8">
                  <div className="absolute top-8 right-8 w-3 h-3 bg-accent rounded-full animate-float shadow-glow"></div>
                  <div className="absolute bottom-12 left-12 w-2 h-2 bg-primary-foreground/60 rounded-full animate-pulse-slow"></div>
                  <div className="absolute top-1/2 -left-6 w-4 h-4 border border-primary-foreground/40 rounded-full animate-bounce-slow"></div>
                </div>
              </div>
              
              {/* Enhanced Floating badge */}
              <div className="absolute -top-4 -right-4 bg-background/95 backdrop-blur-md rounded-xl px-6 py-3 shadow-floating hover-lift-subtle group border border-border/50 hover:border-primary/30">
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">4th Year Student</div>
                <div className="text-xs text-foreground/80 group-hover:text-primary/80 transition-colors duration-300 font-medium">ISE, AIT</div>
                <div className="absolute inset-0 bg-gradient-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;