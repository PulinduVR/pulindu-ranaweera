import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Me from "/Me.jpg";

// Sample logos – you can import them or use public URLs
import HtmlLogo from "/logos/html.png";
import ReactLogo from "/logos/react.png";
import GithubLogo from "/logos/github.png";
import PythonLogo from "/logos/python.png";
import NodeLogo from "/logos/node.png";
import TensorflowLogo from "/logos/Tensorflow.png";

const floatingIcons = [
  { src: HtmlLogo, alt: "HTML", style: "top-0 left-0 -translate-x-1/2" },
  { src: ReactLogo, alt: "React", style: "bottom-0 left-0 translate-y-1/2" },
  { src: PythonLogo, alt: "React", style: "bottom-0 left-4/4 translate-y-1/2" },
  { src: NodeLogo, alt: "Node.js", style: "top-[50%] right-[120%] translate-x-1/2" },
  { src: GithubLogo, alt: "GitHub", style: "top-0 right-1 translate-x-1/2" },
  { src: TensorflowLogo, alt: "TensorFlow", style: "hidden sm:block top-[50%] left-[110%] translate-x-1/2"}
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 gradient-bg mt-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Hello, I'm</p>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="primary-glow">Pulindu</span>
              <br />
              <span className="text-foreground">Ranaweera</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Computer Science & Engineering Undergraduate
            </p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate developer who thrives on building impactful solutions and bringing ideas to life. I take
            pride in my ability to lead teams toward a shared vision, whether it's managing a project, organizing an
            event, or driving a tech initiative.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-primary-glow hover:bg-primary-glow/90">
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" /> Get In Touch
              </a>
            </Button>
            <Button variant="outline" asChild>
                <a
                    href="https://drive.google.com/file/d/1AcG7Oxwt-fc4egknnzN39WfKjWP_FHcd/view"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Download className="w-4 h-4 mr-2" /> Download CV
                </a>
            </Button>

          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/PulinduVR" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/pulindu-ranaweera-121b77268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:pulinduv@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://medium.com/@pulinduv" target="_blank" rel="noopener noreferrer">
                <img src="/logos/medium.png" alt="Medium" className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.kaggle.com/pulinduranaweera" target="_blank" rel="noopener noreferrer">
                <img src="/logos/kaggle.png" alt="Medium" className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Profile Image + Floating Logos */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Profile Image */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary-glow/20 shadow-2xl animate-float relative z-10">
              <img src={Me} alt="Pulindu Ranaweera" className="w-full h-full object-cover" />
            </div>

            {/* Floating Logos */}
            {floatingIcons.map((icon, i) => (
              <img
                key={i}
                src={icon.src}
                alt={icon.alt}
                className={`w-10 h-10 absolute ${icon.style} z-[100] animate-float-slow opacity-80`}
              />
            ))}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-glow/20 to-transparent z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
