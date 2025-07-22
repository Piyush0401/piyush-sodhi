import { ArrowRight, Play, Eye } from "lucide-react";
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
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        
        {/* Decorative dots */}
        <div className="absolute top-32 left-1/3 flex flex-col space-y-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <div className="w-2 h-2 bg-accent/60 rounded-full"></div>
          <div className="w-2 h-2 bg-accent/30 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-32 right-1/4 flex flex-col space-y-2">
          <div className="w-2 h-2 bg-primary-foreground/40 rounded-full"></div>
          <div className="w-2 h-2 bg-primary-foreground/60 rounded-full"></div>
          <div className="w-2 h-2 bg-primary-foreground/80 rounded-full"></div>
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
                I'm a frontend developer based in India. I'll help you build 
                beautiful websites your users will love.
              </p>
              
              <p className="text-base text-primary-foreground/70">
                4th Year Student ISE, AIT
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border border-primary-foreground/30 shadow-elegant"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => scrollToSection("#projects")}
              >
                Browse Projects
              </Button>
            </div>

          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-accent rounded-full shadow-glow"></div>
                <div className="absolute inset-4 bg-primary-foreground rounded-full overflow-hidden shadow-elegant">
                  <img 
                    src="/lovable-uploads/8c7f23e1-3e4e-48d4-824b-6f1bc7b7119c.png" 
                    alt="Piyush Kumar Sodhi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary-foreground rounded-lg px-4 py-2 shadow-card">
                <div className="text-sm font-semibold text-foreground">4th Year Student</div>
                <div className="text-xs text-muted-foreground">ISE, AIT</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;