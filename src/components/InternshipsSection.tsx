import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InternshipsSection = () => {
  const internships = [
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
    <section id="internships" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey through internships and practical experience in cutting-edge technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>

          <div className="space-y-12">
            {internships.map((internship, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-elegant z-10"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="shadow-card border-border/50 hover:shadow-elegant transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <Badge 
                          variant="secondary" 
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {internship.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {internship.period}
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg font-bold text-foreground">
                        {internship.title}
                      </CardTitle>
                      
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-medium">{internship.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{internship.location}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        {internship.description}
                      </p>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline" 
                              className="text-xs bg-secondary/50 border-border/50"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {internship.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <ArrowRight className="w-3 h-3 mt-0.5 text-primary flex-shrink-0" />
                              <span>{achievement}</span>
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