import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            icon: _jsx(Mail, { className: "w-5 h-5" }),
            label: "Email",
            value: "pulinduv@gmail.com",
            href: "mailto:pulinduv@gmail.com"
        },
        {
            icon: _jsx(Phone, { className: "w-5 h-5" }),
            label: "Phone",
            value: "+94 76 602 3582",
            href: "tel:+94766023582"
        },
        {
            icon: _jsx(MapPin, { className: "w-5 h-5" }),
            label: "Location",
            value: "Kelaniya, Sri Lanka",
            href: "#"
        }
    ];
    const socialLinks = [
        {
            icon: _jsx(Github, { className: "w-5 h-5" }),
            label: "GitHub",
            href: "https://github.com/PulinduVR"
        },
        {
            icon: _jsx(Linkedin, { className: "w-5 h-5" }),
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/pulindu-ranaweera-121b77268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
            icon: _jsx(Facebook, { className: "w-5 h-5" }),
            label: "Facebook",
            href: "https://www.facebook.com/pulindu.ranaweera/"
        }
    ];
    return (_jsx("section", { id: "contact", className: "py-20 px-4 bg-card/50", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl font-bold mb-4", children: ["Get In ", _jsx("span", { className: "primary-glow", children: "Touch" })] }), _jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Let's collaborate on exciting projects or discuss opportunities. I'm always open to new challenges and innovative ideas." })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsxs(Card, { glow: true, className: "border-accent", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-3", children: [_jsx(Send, { className: "w-6 h-6 text-primary-glow" }), "Send me a message"] }) }), _jsx(CardContent, { className: "space-y-6", children: _jsxs("form", { className: "space-y-4", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "text-sm font-medium mb-2 block", children: "Your Name" }), _jsx(Input, { id: "name", placeholder: "Enter your name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "text-sm font-medium mb-2 block", children: "Your Email" }), _jsx(Input, { id: "email", type: "email", placeholder: "Enter your email" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "subject", className: "text-sm font-medium mb-2 block", children: "Subject" }), _jsx(Input, { id: "subject", placeholder: "What's this about?" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "text-sm font-medium mb-2 block", children: "Message" }), _jsx(Textarea, { id: "message", placeholder: "Tell me about your project or just say hello!", rows: 6 })] }), _jsxs(Button, { className: "w-full bg-primary-glow hover:bg-primary-glow/90", children: [_jsx(Send, { className: "w-4 h-4 mr-2" }), "Send Message"] })] }) })] }), _jsxs("div", { className: "space-y-8", children: [_jsxs(Card, { glow: true, className: "border-accent", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Contact Information" }) }), _jsx(CardContent, { className: "space-y-4", children: contactInfo.map((contact, index) => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "text-primary-glow", children: contact.icon }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: contact.label }), contact.href !== "#" ? (_jsx("a", { href: contact.href, className: "text-muted-foreground hover:text-primary-glow transition-colors", children: contact.value })) : (_jsx("p", { className: "text-muted-foreground", children: contact.value }))] })] }, index))) })] }), _jsxs(Card, { glow: true, className: "border-accent", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Connect with me" }) }), _jsx(CardContent, { children: _jsx("div", { className: "flex gap-4", children: socialLinks.map((social, index) => (_jsx(Button, { variant: "outline", size: "icon", asChild: true, className: "hover:border-primary-glow hover:text-primary-glow transition-colors", children: _jsxs("a", { href: social.href, target: "_blank", rel: "noopener noreferrer", children: [social.icon, _jsx("span", { className: "sr-only", children: social.label })] }) }, index))) }) })] }), _jsx(Card, { glow: true, className: "border-accent bg-gradient-to-r from-card to-accent/20", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("h3", { className: "font-semibold mb-3 flex items-center gap-2", children: [_jsx("div", { className: "w-3 h-3 bg-tech-stack rounded-full animate-pulse" }), "Currently Available"] }), _jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "I'm currently open to new opportunities, freelance projects, and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!" })] }) }), _jsxs(Card, { glow: true, className: "border-accent", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Languages" }) }), _jsxs(CardContent, { className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "English" }), _jsx("span", { className: "text-muted-foreground text-sm", children: "Professional" })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "Sinhala" }), _jsx("span", { className: "text-muted-foreground text-sm", children: "Native" })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { children: "German" }), _jsx("span", { className: "text-muted-foreground text-sm", children: "Basic" })] })] })] })] })] })] }) }));
};
export default Contact;
