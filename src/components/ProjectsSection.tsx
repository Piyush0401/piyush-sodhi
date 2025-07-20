import { useState } from "react";
import { ExternalLink, Github, Award, Code, Database, Smartphone, Brain, Car, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Smart Parking System",
      description: "IoT-driven parking platform with real-time spot tracking and intelligent management system.",
      fullDescription: "A comprehensive IoT-based parking management solution that revolutionizes urban parking through real-time monitoring, automated access control, and cloud-based management. The system provides seamless user experience with instant availability updates and secure RFID access.",
      icon: <Car className="w-8 h-8" />,
      image: "/api/placeholder/500/300",
      technologies: ["React.js", "Node.js", "RFID", "Firebase", "Raspberry Pi", "IoT"],
      features: [
        "Real-time parking spot availability tracking",
        "Cloud synchronization with Firebase",
        "RFID-based access control system",
        "Comprehensive admin dashboard",
        "Mobile-responsive interface",
        "Automated billing and reporting"
      ],
      category: "IoT & Full Stack",
      status: "Completed",
      award: null
    },
    {
      title: "News Summarization App",
      description: "Python-based application with sentiment analysis and Hindi audio output capabilities.",
      fullDescription: "An advanced news aggregation and analysis platform that leverages natural language processing to provide concise summaries with emotional context. Features multilingual support and audio output for accessibility.",
      icon: <Search className="w-8 h-8" />,
      image: "/api/placeholder/500/300",
      technologies: ["Python", "BeautifulSoup", "FastAPI", "gTTS", "Streamlit", "NLP"],
      features: [
        "Automated news scraping and aggregation",
        "AI-powered content summarization",
        "Sentiment analysis with emotional insights",
        "Hindi text-to-speech conversion",
        "Comparative sentiment visualization",
        "Real-time news updates"
      ],
      category: "AI & Machine Learning",
      status: "Completed",
      award: null
    },
    {
      title: "Online Rental Platform",
      description: "Full-featured MERN-based rental application with advanced e-commerce capabilities.",
      fullDescription: "A complete rental marketplace built on the MERN stack, offering seamless product discovery, secure transactions, and comprehensive order management. Designed for scalability and optimal user experience.",
      icon: <Smartphone className="w-8 h-8" />,
      image: "/api/placeholder/500/300",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "JWT"],
      features: [
        "Advanced product search and filtering",
        "Secure user authentication and authorization",
        "Interactive shopping cart system",
        "Real-time order tracking",
        "Payment gateway integration",
        "Responsive design for all devices"
      ],
      category: "Full Stack Development",
      status: "Completed",
      award: null
    },
    {
      title: "Food Explorer Platform",
      description: "Web application for food item search and filtering using OpenFoodFacts API.",
      fullDescription: "A comprehensive food discovery platform that connects users with detailed nutritional information and product insights. Features intelligent search capabilities and comprehensive filtering options for informed food choices.",
      icon: <Database className="w-8 h-8" />,
      image: "/api/placeholder/500/300",
      technologies: ["React", "Tailwind CSS", "REST API", "React Router", "OpenFoodFacts API"],
      features: [
        "Live search with auto-suggestions",
        "Advanced category-based filtering",
        "Detailed nutritional information display",
        "Product comparison capabilities",
        "Responsive and intuitive UI",
        "Performance-optimized API calls"
      ],
      category: "Frontend Development",
      status: "Completed",
      award: null
    },
    {
      title: "Accident Data Analysis",
      description: "Comprehensive analysis of real-world accident data using machine learning classifiers.",
      fullDescription: "A data science project focused on analyzing traffic accident patterns to derive actionable safety insights. Utilizes advanced machine learning techniques to predict accident likelihood and identify risk factors.",
      icon: <Brain className="w-8 h-8" />,
      image: "/api/placeholder/500/300",
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Data Visualization"],
      features: [
        "Comprehensive dataset preprocessing",
        "Statistical analysis and pattern recognition",
        "Machine learning model implementation",
        "Interactive data visualizations",
        "Predictive analytics for safety measures",
        "Detailed reporting and insights"
      ],
      category: "Data Science",
      status: "Completed",
      award: null
    },
    {
      title: "Voice-Controlled Robot Car",
      description: "Embedded system project using Arduino with voice command recognition.",
      fullDescription: "An innovative robotics project that demonstrates the integration of voice recognition technology with embedded systems. Winner of 1st Prize at Science Exhibition, showcasing excellence in hardware-software integration.",
      icon: <Car className="w-8 h-8" />,
      image: "/api/placeholder/500/300",
      technologies: ["C/C++", "Arduino IDE", "Voice Recognition", "Embedded Systems"],
      features: [
        "Real-time voice command processing",
        "Multi-directional movement control",
        "Obstacle detection and avoidance",
        "Wireless communication capabilities",
        "Custom Arduino programming",
        "Robust mechanical design"
      ],
      category: "Embedded Systems",
      status: "Completed",
      award: "1st Prize, Science Exhibition (Mar 2023)"
    },
    {
      title: "Hybrid BCI System",
      description: "EEG-based motor imagery control enhanced with eye tracking technology.",
      fullDescription: "A cutting-edge brain-computer interface system that combines EEG signal processing with eye tracking to create more accurate and responsive assistive technologies for motor-impaired users.",
      icon: <Brain className="w-8 h-8" />,
      image: "/api/placeholder/500/300",
      technologies: ["Python", "NumPy", "SciPy", "Scikit-learn", "EEG Processing", "Eye Tracking"],
      features: [
        "Real-time EEG signal acquisition and processing",
        "Motor imagery classification using machine learning",
        "Eye tracking integration for enhanced control",
        "Improved accuracy through hybrid approach",
        "Assistive technology applications",
        "Advanced signal processing algorithms"
      ],
      category: "Biomedical Engineering",
      status: "In Progress",
      award: null
    }
  ];

  const categories = ["All", "Full Stack Development", "AI & Machine Learning", "Data Science", "IoT & Full Stack", "Frontend Development", "Embedded Systems", "Biomedical Engineering"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my diverse range of projects spanning full-stack development, AI/ML, and innovative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`
                ${activeCategory === category 
                  ? 'bg-gradient-primary text-primary-foreground' 
                  : 'hover:bg-secondary/80'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group shadow-card border-border/50 hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                    {project.icon}
                  </div>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-green-500 text-white" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                {project.award && (
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">{project.award}</span>
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="text-xs bg-secondary/30 border-border/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-secondary/30 border-border/50">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-primary hover:opacity-90"
                        onClick={() => setSelectedProject(index)}
                      >
                        <Code className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3">
                          {project.icon}
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <p className="text-muted-foreground">
                          {project.fullDescription}
                        </p>
                        
                        {project.award && (
                          <div className="flex items-center gap-2 text-accent bg-accent/10 p-3 rounded-lg">
                            <Award className="w-5 h-5" />
                            <span className="font-medium">{project.award}</span>
                          </div>
                        )}
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge 
                                key={tech}
                                variant="outline" 
                                className="bg-secondary/50 border-border/50"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button size="sm" variant="outline" disabled>
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;