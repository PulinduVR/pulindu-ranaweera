import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Facebook } from "lucide-react";
import { usePointerGlow } from "../hooks/usePointerGlow";

const Contact = () => {
  const [status] = usePointerGlow();
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "pulinduv@gmail.com",
      href: "mailto:pulinduv@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+94 76 602 3582",
      href: "tel:+94766023582"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Kelaniya, Sri Lanka",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/PulinduVR"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pulindu-ranaweera-121b77268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://www.facebook.com/pulindu.ranaweera/"
    }

  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="primary-glow">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities. I'm always open to new challenges and innovative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card glow className="border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Send className="w-6 h-6 text-primary-glow" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Your Name
                    </label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Your Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                  />
                </div>
                <Button className="w-full bg-primary-glow hover:bg-primary-glow/90">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card glow className="border-accent">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-primary-glow">{contact.icon}</div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      {contact.href !== "#" ? (
                        <a 
                          href={contact.href} 
                          className="text-muted-foreground hover:text-primary-glow transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card glow className="border-accent">
              <CardHeader>
                <CardTitle>Connect with me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      size="icon" 
                      asChild
                      className="hover:border-primary-glow hover:text-primary-glow transition-colors"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card glow className="border-accent bg-gradient-to-r from-card to-accent/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-tech-stack rounded-full animate-pulse"></div>
                  Currently Available
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm currently open to new opportunities, freelance projects, and collaborations. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
              </CardContent>
            </Card>

            <Card glow className="border-accent">
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-muted-foreground text-sm">Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sinhala</span>
                  <span className="text-muted-foreground text-sm">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>German</span>
                  <span className="text-muted-foreground text-sm">Basic</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;