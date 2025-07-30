import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, Award, Users, Trophy } from "lucide-react";
import { usePointerGlow } from "../hooks/usePointerGlow";

const Experience = () => {
    const [status] = usePointerGlow();
  const leadership = [
    {
      title: "Event Chairman",
      organization: "TesserX 2025 Competition",
      company: "Old Royalists Engineering Professionals Association",
      period: "Mar 2025 - Present",
      description: "Leading the overall competition organizing committee and collaborating with Royal College Computer Society. Managing workload distribution among team members, merging commits, and resolving conflicts.",
      skills: ["Leadership", "Team Management", "Git", "Project Coordination"]
    },
    {
      title: "Event Committee Lead",
      organization: "Cyber Rush 2025 Competition",
      company: "Department of CSE, University of Moratuwa",
      period: "Feb 2025 - Apr 2025",
      description: "Mobilizing the event team to plan workshops (online/physical), Grand Finale, and collaborating with the logistics committee.",
      skills: ["Event Planning", "Team Coordination", "Workshop Management"]
    },
    {
      title: "Publicity Committee Lead",
      organization: "IESL Robogames 2024",
      company: "Department of CSE, University of Moratuwa",
      period: "Oct 2024 - Apr 2025",
      description: "Splitting marketing workload among team members, boosting reach and organizing Grand Finale.",
      skills: ["Marketing", "Social Media", "Event Promotion", "Team Leadership"]
    }
  ];

  const certifications = [
    {
      title: "Intro to Deep Learning",
      issuer: "Kaggle",
      year: "2025",
      topics: ["TensorFlow", "Neural Networks"]
    },
    {
      title: "Intermediate Machine Learning",
      issuer: "Kaggle",
      year: "2025",
      topics: ["Machine Learning", "Data Pipelines", "Data Leakages"]
    },
    {
      title: "Machine Learning Crash Course",
      issuer: "Google",
      year: "2025",
      topics: ["Linear Regression", "Logistic Regression", "SVM", "Decision Trees"]
    },
    {
      title: "Innovating with Google Cloud AI",
      issuer: "Simplilearn",
      year: "2025",
      topics: ["Cloud Applications", "AI Services"]
    }
  ];

  const awards = [
    {
      title: "Tech Triathlon 2024",
      organization: "Rootcode",
      achievement: "1st Runners Up",
      year: "2024"
    },
    {
      title: "Cyber Sprint CTF 2024",
      organization: "APIIT and Virtusa",
      achievement: "Champions",
      year: "2024"
    },
    {
      title: "SLIOT Challenge 2025",
      organization: "Department of CSE and SLT Mobitel",
      achievement: "Finalist",
      year: "2025"
    },
    {
      title: "Idealize 2024",
      organization: "AIESEC University of Moratuwa",
      achievement: "Semi Finalist",
      year: "2024"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Experience & <span className="primary-glow">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leadership roles, certifications, and competitive achievements that showcase my growth and expertise
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-primary-glow" />
            Leadership Experience
          </h3>
          <div className="space-y-6">
            {leadership.map((role, index) => (
              <Card glow key={index} className="border-accent">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                      <p className="text-primary-glow font-medium">{role.organization}</p>
                      <p className="text-muted-foreground text-sm">{role.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {role.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{role.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="tech-stack-glow border-tech-stack/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary-glow" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card glow key={index} className="border-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{cert.title}</h4>
                        <p className="text-primary-glow text-sm">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline">{cert.year}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {cert.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary-glow" />
              Awards & Achievements
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card glow key={index} className="border-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{award.title}</h4>
                        <p className="text-muted-foreground text-sm">{award.organization}</p>
                      </div>
                      <Badge variant="outline">{award.year}</Badge>
                    </div>
                    <Badge className="bg-tech-stack hover:bg-tech-stack/80">
                      {award.achievement}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;