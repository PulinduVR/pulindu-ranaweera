import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Code, Database, Wrench, Cloud } from "lucide-react";
import { usePointerGlow } from "../hooks/usePointerGlow";

const Skills = () => {
    const [status] = usePointerGlow();
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend Technologies",
      icon: <Code className="w-6 h-6" />,
      skills: ["React.js", "TailwindCSS", "Three.js", "Framer Motion", "HTML5", "CSS3"]
    },
    {
      title: "Backend Technologies",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "Microsoft SQL Server", "Firebase"]
    },
    {
      title: "DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "Kubernetes", "Git", "GitHub", "Postman", "Nginx", "Linux"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Visual Studio Code", "Xilinx Vivado", "XAMPP", "Postman", "Jira", "Google LightHouse", "Ahrefs", "Figma"]
    }
  ];

  const tools = [
    "Visual Studio Code", "Xilinx Vivado", "XAMPP", "Postman", 
    "Jira", "Google Lighthouse", "Ahrefs", "Figma", "Adobe XD"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="primary-glow">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build innovative solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card glow key={index} className="border-accent hover:shadow-lg transition-all duration-300 hover:shadow-primary-glow/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-primary-glow">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="tech-stack-glow border-tech-stack/30 hover:bg-tech-stack/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;