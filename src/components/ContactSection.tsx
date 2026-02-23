import { useState } from "react";
import { Mail, Phone, Github, Linkedin, ExternalLink, MapPin, Send, User, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "piyushsodhi145@gmail.com",
      href: "mailto:piyushsodhi145@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7889315073",
      href: "tel:+917889315073"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/piyush1457",
      href: "https://github.com/piyush1457"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/piyush-kumar-sodhi-104b6b307",
      href: "https://linkedin.com/in/piyush-kumar-sodhi-104b6b307"
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_x7n2drk', // Service ID
        'template_h6imaap', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'fvNJV4uy-JrGhTUeh' // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-primary/[0.03]"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl -translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl translate-y-1/3 translate-x-1/4"></div>
      
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-border/50 hover:shadow-luxury transition-all duration-500 glass-luxury hover-lift group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    <MapPin className="w-6 h-6" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm always open to discussing new opportunities, collaborations, 
                  or answering any questions you might have. Feel free to reach out 
                  through any of the following channels.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground text-lg">{info.label}</div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="shadow-card border-border/50 bg-gradient-primary text-primary-foreground hover:shadow-luxury transition-all duration-500 hover-lift group relative overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed text-lg">
                  Whether you're looking for a dedicated developer, a research collaborator, 
                  or someone passionate about innovative technology solutions, I'm here to help 
                  bring your ideas to life.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-glow"></div>
                  <span className="font-medium">Available for internships and projects</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card border-border/50 hover:shadow-luxury transition-all duration-500 glass-luxury hover-lift group">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                  <MessageSquare className="w-6 h-6" />
                </div>
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="flex items-center gap-2 text-foreground font-medium">
                    <User className="w-4 h-4" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="border-border/50 focus:border-primary transition-colors duration-300 bg-background/50"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-medium">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="border-border/50 focus:border-primary transition-colors duration-300 bg-background/50"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="flex items-center gap-2 text-foreground font-medium">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    className="border-border/50 focus:border-primary resize-none transition-colors duration-300 bg-background/50"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-elegant hover:shadow-glow disabled:opacity-50"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Footer */}
        <footer className="mt-32 relative">
          {/* Decorative separator */}
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-background px-6">
                <div className="w-16 h-px bg-gradient-primary"></div>
              </div>
            </div>
          </div>

          {/* Footer content */}
          <div className="glass-luxury border border-border/30 rounded-3xl p-12 shadow-luxury hover:shadow-floating transition-all duration-500 relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-primary rounded-full opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-secondary rounded-full opacity-10 blur-2xl"></div>
            
            <div className="relative z-10 text-center space-y-8">
              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                {contactInfo.slice(2, 4).map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="p-4 bg-gradient-secondary rounded-2xl border border-border/50 hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 hover-lift">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
              
              {/* Brand section */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text">Piyush Kumar Sodhi</h3>
                  <p className="text-xl text-muted-foreground font-medium">Full Stack Developer & Data Analyst</p>
                </div>
                
                {/* Tagline with decorative elements */}
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <div className="w-8 h-px bg-gradient-primary"></div>
                  <span className="text-lg font-medium italic">Building the future, one line of code at a time</span>
                  <div className="w-8 h-px bg-gradient-primary"></div>
                </div>
                
                {/* Additional info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span>Available for opportunities</span>
                  </div>
                  <div className="hidden md:block w-1 h-1 bg-border rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bangalore, India</span>
                  </div>
                </div>
              </div>
              
              {/* Copyright */}
              <div className="pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Piyush Kumar Sodhi. Crafted with passion and precision.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;