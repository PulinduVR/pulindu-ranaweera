import { Card, CardContent, CardDescription, CardHeader} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MapPin, GraduationCap, Calendar, Award } from "lucide-react";
import { usePointerGlow } from "../hooks/usePointerGlow";

const About = () => {
  const currentActivities = [
    "AS the Event Chairman at TesserX 2025 Competition",
    "CSE Virtual Tour Website Project",
    "LeafScan - Intelligent Plant Disease Detection and Care Advisory System",
  ];

  const achievements = [
    "Tech Triathlon 2024 - 1st Runners Up",
    "Cyber Sprint CTF 2024 - Champions",
    "SLIOT Challenge 2025 - Finalist",
    "Idealize 2024 - Semi Finalist",
  ];

  const [status] = usePointerGlow();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="primary-glow">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate Computer Science student with leadership experience and a drive for innovation
          </p>
        </div>

        <div className="mb-10">
          // @ts-ignore
            <Card glow>
            <div className="p-6">
            <CardHeader>
                <CardDescription>
                    <blockquote className="text-xl italic text-muted-foreground">
                         "I believe in working with purpose, clarity, and collaboration to get things done. 
                        Whether it's managing a project, organizing an event, or driving a tech initiative, 
                        I thrive on taking responsibility and leading teams toward a shared vision."
                    </blockquote>
                </CardDescription>
            </CardHeader>
            </div>
        </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
          <div className="space-y-6">
            // @ts-ignore
            <Card glow className="border-accent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-primary-glow" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">University of Moratuwa</h4>
                    <p className="text-muted-foreground">BSc. Computer Science and Engineering</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Feb 2023 - Present</span>
                    </div>
                    <Badge variant="outline" className="mt-2">Main Stream</Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold">Royal College, Colombo 7</h4>
                    <p className="text-muted-foreground">A/L: 3A Passes <br />O/L: 9A Passes</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Mar 2008 - Feb 2022</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card glow className="border-accent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary-glow" />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Heritage City, Maguruwila Road, Gonawala, Kelaniya, Sri Lanka
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card glow className="border-accent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary-glow" />
                  <h3 className="text-xl font-semibold">Currently Working On</h3>
                </div>
                <ul className="space-y-2">
                  {currentActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card glow className="border-accent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-primary-glow" />
                  <h3 className="text-xl font-semibold">Recent Achievements</h3>
                </div>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-tech-stack rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;