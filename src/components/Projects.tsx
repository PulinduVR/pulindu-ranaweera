import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { usePointerGlow } from "../hooks/usePointerGlow";

const Projects = () => {
    const [status] = usePointerGlow();
  const projects = [
    {
      title: "Intelligent Plant Disease Detection System",
      description: "AI-powered Plant Disease Detection and Care Advisory System using deep learning and cloud-based infrastructure for real-time diagnosis and treatment guidance.",
      techStack: ["React.js", "React Native", "FastAPI", "PostgreSQL", "MongoDB", "Docker", "Kubernetes"],
      year: "2025",
      status: "Ongoing",
      github: "https://github.com/LeafScan-G21"
    },
    {
      title: "3D Virtual Tour Website",
      description: "Built a 3D virtual tour website for the Department of Computer Science and Engineering - University of Moratuwa using cutting-edge web technologies.",
      techStack: ["React.js", "Three.js", "ImageKit.io"],
      year: "2025",
      status: "Ongoing",
      github: "https://github.com/PulinduVR/CSE-Virtual-Tour",
    },
    {
      title: "SynTrack - Real Time Bus Tracking Portal",
      description: "Real-time IoT-based bus monitoring and management system for Sri Lanka's public transport sector, featuring GPS tracking, role-based dashboards, and over-speeding alerts.",
      techStack: ["React.js", "Express.js", "Firebase Realtime"],
      year: "2024",
      status: "Ongoing",
      github: "https://github.com/PulinduVR/syntrack",
    },
    
    {
      title: "Legal Document Analysis System",
      description: "Full-stack Legal Document Analysis System integrating NLP, machine learning, and blockchain for contract review, legal case prediction, and document verification.",
      techStack: ["React.js", "FastAPI", "PostgreSQL", "Langchain", "Mistral AI"],
      year: "2025",
      status: "Completed",
      github: "https://github.com/Ilampoornan/LegalDocumentAnalysisSystem",
    },
    {
      title: "Innovate with Ballerina 2025 Website",
      description: "Developed the frontend of official website for Innovate with Ballerina 2025 competition organized by IEEE Student Branch at University of Moratuwa.",
      techStack: ["React.js", "TailwindCSS", "Framer Motion", "Netlify"],
      year: "2025",
      status: "Completed",
      github: "https://github.com/IEEESB-UOM/Innovate-with-Ballerina-New",
      demo: "https://innovatewithballerina.com/"
    },
    {
      title: "Countdown Timer for Codejam 2025",
      description: "Developed a desktop application for Codejam 2025 using Electron.js, featuring a countdown timer.",
      techStack: ["Javascript", "Electron.js"],
      year: "2025",
      status: "Completed",
      github: "https://github.com/PulinduVR/countdown-timer",
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="primary-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, AI/ML, and innovative problem-solving
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 m-12">
          <Card glow className="border-accent text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary-glow mb-2">3+</div>
              <p className="text-muted-foreground">Years of Programming</p>
            </CardContent>
          </Card>
          <Card glow className="border-accent text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-tech-stack mb-2">6+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </CardContent>
          </Card>
          <Card glow className="border-accent text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary-glow mb-2">10+</div>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card glow key={index} className="border-accent hover:shadow-lg transition-all duration-300 hover:shadow-primary-glow/10">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs tech-stack-glow border-tech-stack/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
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

export default Projects;