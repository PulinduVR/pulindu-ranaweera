import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            demo: "#"
        },
        {
            title: "Innovate with Ballerina 2025 Website",
            description: "Developed the frontend of official website for Innovate with Ballerina 2025 competition organized by IEEE Student Branch at University of Moratuwa.",
            techStack: ["React.js", "TailwindCSS", "Framer Motion", "Netlify"],
            year: "2025",
            status: "Completed",
            github: "https://github.com/IEEESB-UOM/Innovate-with-Ballerina-New",
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
    return (_jsx("section", { id: "projects", className: "py-20 px-4 bg-card/50", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl font-bold mb-4", children: ["Featured ", _jsx("span", { className: "primary-glow", children: "Projects" })] }), _jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "A collection of projects that showcase my skills in full-stack development, AI/ML, and innovative problem-solving" })] }), _jsxs("div", { className: "grid md:grid-cols-3 gap-6 m-12", children: [_jsx(Card, { glow: true, className: "border-accent text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "text-3xl font-bold text-primary-glow mb-2", children: "3+" }), _jsx("p", { className: "text-muted-foreground", children: "Years of Programming" })] }) }), _jsx(Card, { glow: true, className: "border-accent text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "text-3xl font-bold text-tech-stack mb-2", children: "6+" }), _jsx("p", { className: "text-muted-foreground", children: "Projects Completed" })] }) }), _jsx(Card, { glow: true, className: "border-accent text-center", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "text-3xl font-bold text-primary-glow mb-2", children: "10+" }), _jsx("p", { className: "text-muted-foreground", children: "Technologies Mastered" })] }) })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((project, index) => (_jsxs(Card, { glow: true, className: "border-accent hover:shadow-lg transition-all duration-300 hover:shadow-primary-glow/10", children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsx(Badge, { variant: project.status === "Completed" ? "default" : "secondary", children: project.status }), _jsxs("div", { className: "flex items-center gap-1 text-muted-foreground text-sm", children: [_jsx(Calendar, { className: "w-4 h-4" }), project.year] })] }), _jsx(CardTitle, { className: "text-xl", children: project.title })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-1", children: project.techStack.map((tech, techIndex) => (_jsx(Badge, { variant: "outline", className: "text-xs tech-stack-glow border-tech-stack/30", children: tech }, techIndex))) }), _jsxs("div", { className: "flex gap-2 pt-2", children: [_jsx(Button, { variant: "outline", size: "sm", asChild: true, children: _jsxs("a", { href: project.github, target: "_blank", rel: "noopener noreferrer", children: [_jsx(Github, { className: "w-4 h-4 mr-1" }), "Code"] }) }), _jsx(Button, { variant: "outline", size: "sm", asChild: true, children: _jsxs("a", { href: project.demo, target: "_blank", rel: "noopener noreferrer", children: [_jsx(ExternalLink, { className: "w-4 h-4 mr-1" }), "Demo"] }) })] })] })] }, index))) })] }) }));
};
export default Projects;
