import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InternshipsSection = () => {
  const internships = [
    {
      title: "Front End Developer",
      company: "Advertyzement Ltd",
      location: "Remote",
      period: "July 2025 – Present",
      type: "Internship",
      description: "Building and optimizing front-end applications across packaging, real estate, aggregate, and individual client domains using modern web technologies.",
      technologies: ["React", "JavaScript", "Vite", "GraphQL", "Jest", "Web Scraping"],
      achievements: [
        "Developed and optimized front-end applications using React, JavaScript, and Vite, building four website UIs for packaging, real estate, aggregate domain, and Panditji (individual client) with real-world datasets",
        "Designed and deployed a web scraping solution to collect, clean, and structure data, enabling efficient data integration and improving overall project functionality",
        "Implemented unit and integration testing using Jest for pre-existing components",
        "Improved application performance by developing a GraphQL query optimizer in JavaScript"
      ]
    },
    {
      title: "Human Artificial Intelligence Intern",
      company: "IIT Gandhinagar",
      location: "Gandhinagar, India",
      period: "June 2025",
      type: "Research Internship",
      description: "EEG signal processing, eye tracking integration, and BCI system development.",
      technologies: ["Python", "SVM", "LDA", "CSP", "NumPy", "SciPy", "Scikit-learn"],
      achievements: [
        "EEG signal processing for motor imagery recognition",
        "Integration of eye tracking with BCI systems",
        "Development of assistive technology for motor-impaired users",
        "Implementation of machine learning models (SVM, LDA, CSP)"
      ]
    },
    {
      title: "Solution Architect (Virtual Experience)",
      company: "AWS APAC",
      location: "Remote",
      period: "Jan–Feb 2025",
      type: "Virtual Experience",
      description: "Hosting architecture with AWS Elastic Beanstalk and performance optimization.",
      technologies: ["AWS", "Elastic Beanstalk", "Cloud Architecture", "Cost Optimization"],
      achievements: [
        "Designed scalable hosting architecture using AWS Elastic Beanstalk",
        "Performed comprehensive cost estimation and optimization",
        "Implemented performance optimization strategies",
        "Gained hands-on experience with AWS cloud services"
      ]
    },
    {
      title: "Data Science Intern",
      company: "SkillCraft Technology",
      location: "Remote",
      period: "Oct–Nov 2024",
      type: "Data Science",
      description: "Accident dataset analysis, visualization, and ML pipeline development.",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Scikit-learn", "Decision Tree"],
      achievements: [
        "Analyzed large-scale accident datasets for pattern recognition",
        "Created comprehensive data visualizations and reports",
        "Built ML pipelines using Decision Tree Classifier",
        "Developed actionable insights for safety improvements"
      ]
    }
  ];

  return (
    <section id="internships" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-60 pointer-events-none" />
      
      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey through internships and practical experience in cutting-edge technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-primary rounded-full shadow-glow"></div>

          <div className="space-y-16">
            {internships.map((internship, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10 animate-pulse"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="shadow-card border-border/50 hover:shadow-luxury transition-all duration-500 glass-luxury hover-lift group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge 
                          variant="outline" 
                          className="bg-primary/10 text-primary border-primary/30 px-3 py-1"
                        >
                          {internship.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4 mr-1" />
                          {internship.period}
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-foreground mb-3">
                        {internship.title}
                      </CardTitle>
                      
                      <div className="flex items-center text-muted-foreground">
                        <div className="flex items-center mr-4">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span className="font-medium">{internship.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{internship.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {internship.description}
                      </p>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline" 
                              className="bg-secondary/50 border-primary/20 hover:bg-primary/10 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;