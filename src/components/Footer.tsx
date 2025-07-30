import { Button } from "../components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="font-bold text-xl">
              <span className="primary-glow">Pulindu</span> Ranaweera
            </div>
            <p className="text-muted-foreground">
              Computer Science & Engineering Undergraduate passionate about building innovative solutions and leading teams toward success.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary-glow transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary-glow transition-colors">Projects</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary-glow transition-colors">Skills</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary-glow transition-colors">Experience</a>
              <a href="#blog" className="text-muted-foreground hover:text-primary-glow transition-colors">Blog</a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Let's Connect</h3>
            <p className="text-muted-foreground text-sm">
              Open to new opportunities and collaborations
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/PulinduVR" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/pulindu-ranaweera" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:pulindu.22@cse.mrt.ac.lk">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Pulindu Ranaweera. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;