import { ExternalLink, Github, Award, Layers, Monitor, Cpu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  bullets: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  award?: string;
}

interface Category {
  label: string;
  icon: React.ReactNode;
  accent: string;
  projects: Project[];
}

const categories: Category[] = [
  {
    label: "Full-Stack Projects",
    icon: <Layers className="w-5 h-5" />,
    accent: "from-violet-500 to-blue-500",
    projects: [
      {
        title: "Online Rental Platform",
        bullets: [
          "Full-featured MERN rental marketplace",
          "Secure JWT auth & role-based access",
          "Real-time cart, order tracking & payments",
          "Responsive UI with Redux state management",
        ],
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "JWT"],
      },
      {
        title: "Smart Parking System",
        bullets: [
          "IoT-driven real-time parking spot tracking",
          "RFID-based access control & cloud sync",
          "Admin dashboard with automated billing",
          "Raspberry Pi + Firebase integration",
        ],
        technologies: ["React.js", "Node.js", "Firebase", "RFID", "Raspberry Pi", "IoT"],
      },
      {
        title: "News Summarization App",
        bullets: [
          "AI-powered news scraping & summarization",
          "Sentiment analysis with emotional insights",
          "Hindi text-to-speech (gTTS) output",
          "Real-time comparative sentiment visualization",
        ],
        technologies: ["Python", "BeautifulSoup", "FastAPI", "gTTS", "Streamlit", "NLP"],
      },
    ],
  },
  {
    label: "Frontend Projects",
    icon: <Monitor className="w-5 h-5" />,
    accent: "from-emerald-500 to-cyan-500",
    projects: [
      {
        title: "Kasparro – AI Brand Visibility Audit",
        bullets: [
          "AI-first SaaS dashboard UI concept",
          "Analytics-style brand visibility metrics",
          "Mock-data driven frontend prototype",
          "Built with Next.js + TypeScript + Tailwind",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://kasparro-frontend-piyush-kumar-sodh-omega.vercel.app/",
      },
      {
        title: "Job Notification Tracker",
        bullets: [
          "Intelligent job application tracking dashboard",
          "Match scoring & status tracking per role",
          "Premium UI with persistent local state",
          "Built with React + TypeScript + Vite",
        ],
        technologies: ["React", "TypeScript", "Vite"],
        liveUrl: "https://job-notification-tracker-v63o.vercel.app/",
      },
      {
        title: "Food Product Search App",
        bullets: [
          "Live food search via OpenFoodFacts API",
          "Advanced filters, sorting & product details",
          "Responsive modern card-based interface",
          "Performance-optimized API calls",
        ],
        technologies: ["React", "Tailwind CSS", "REST API", "React Router"],
        liveUrl: "https://food-explorer-orpin.vercel.app/",
      },
    ],
  },
  {
    label: "Backend / AI / Systems",
    icon: <Cpu className="w-5 h-5" />,
    accent: "from-orange-500 to-pink-500",
    projects: [
      {
        title: "Voice-Controlled Robot Car",
        bullets: [
          "Real-time voice command processing via Arduino",
          "Multi-directional movement & obstacle avoidance",
          "Wireless communication capabilities",
          "Custom embedded C/C++ programming",
        ],
        technologies: ["C/C++", "Arduino IDE", "Voice Recognition", "Embedded Systems"],
        award: "🏆 1st Prize, Science Exhibition (Mar 2023)",
      },
      {
        title: "Hybrid BCI System",
        bullets: [
          "EEG-based motor imagery classification",
          "Eye tracking integration for enhanced control",
          "ML-powered signal processing pipeline",
          "Assistive technology for motor-impaired users",
        ],
        technologies: ["Python", "NumPy", "SciPy", "Scikit-learn", "EEG Processing"],
      },
      {
        title: "Accident Data Analysis",
        bullets: [
          "Traffic accident pattern analysis with ML",
          "Predictive analytics for road safety insights",
          "Statistical visualizations & reporting",
          "Multi-classifier comparison & evaluation",
        ],
        technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative flex flex-col h-full bg-card border border-border/60 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover hover:border-primary/30">
    {/* Award badge */}
    {project.award && (
      <div className="flex items-center gap-2 text-xs text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg mb-4 font-medium">
        <Award className="w-3.5 h-3.5 shrink-0" />
        {project.award}
      </div>
    )}

    {/* Title */}
    <h4 className="font-semibold text-foreground text-base mb-3 group-hover:text-primary transition-colors duration-200">
      {project.title}
    </h4>

    {/* Bullet points */}
    <ul className="space-y-1.5 mb-4 flex-1">
      {project.bullets.map((b, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
          {b}
        </li>
      ))}
    </ul>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.technologies.map((tech) => (
        <Badge
          key={tech}
          variant="outline"
          className="text-xs px-2 py-0.5 bg-secondary/40 border-border/60 text-muted-foreground font-normal"
        >
          {tech}
        </Badge>
      ))}
    </div>

    {/* Action buttons */}
    {(project.liveUrl || project.githubUrl) && (
      <div className="flex gap-2 pt-1 border-t border-border/40">
        {project.liveUrl && (
          <Button
            size="sm"
            variant="default"
            className="flex-1 h-8 text-xs bg-gradient-primary hover:opacity-90 shadow-none"
            onClick={() => window.open(project.liveUrl, "_blank")}
          >
            <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
            Live Demo
          </Button>
        )}
        {project.githubUrl && (
          <Button
            size="sm"
            variant="outline"
            className="flex-1 h-8 text-xs"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <Github className="w-3.5 h-3.5 mr-1.5" />
            GitHub
          </Button>
        )}
      </div>
    )}
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-60 pointer-events-none" />

      <div className="container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Projects spanning full-stack development, modern frontend experiences, and AI-powered systems.
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${cat.accent} text-white shadow-sm`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{cat.label}</h3>
                <div className="flex-1 h-px bg-border/60 ml-2" />
                <span className="text-sm text-muted-foreground font-medium">
                  {cat.projects.length} projects
                </span>
              </div>

              {/* Project cards grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
