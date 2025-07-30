import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Code, Database, Wrench, Cloud } from "lucide-react";
import { usePointerGlow } from "../hooks/usePointerGlow";
const Skills = () => {
    const [status] = usePointerGlow();
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: _jsx(Code, { className: "w-6 h-6" }),
            skills: ["Python", "Java", "JavaScript", "TypeScript"]
        },
        {
            title: "Frontend Technologies",
            icon: _jsx(Code, { className: "w-6 h-6" }),
            skills: ["React.js", "TailwindCSS", "Three.js", "Framer Motion", "HTML5", "CSS3"]
        },
        {
            title: "Backend Technologies",
            icon: _jsx(Cloud, { className: "w-6 h-6" }),
            skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL"]
        },
        {
            title: "Databases",
            icon: _jsx(Database, { className: "w-6 h-6" }),
            skills: ["PostgreSQL", "MongoDB", "Microsoft SQL Server", "Firebase"]
        },
        {
            title: "DevOps",
            icon: _jsx(Cloud, { className: "w-6 h-6" }),
            skills: ["Docker", "Kubernetes", "Git", "GitHub", "Postman", "Nginx", "Linux"]
        },
        {
            title: "Tools",
            icon: _jsx(Wrench, { className: "w-6 h-6" }),
            skills: ["Visual Studio Code", "Xilinx Vivado", "XAMPP", "Postman", "Jira", "Google LightHouse", "Ahrefs", "Figma"]
        }
    ];
    const tools = [
        "Visual Studio Code", "Xilinx Vivado", "XAMPP", "Postman",
        "Jira", "Google Lighthouse", "Ahrefs", "Figma", "Adobe XD"
    ];
    return (_jsx("section", { id: "skills", className: "py-20 px-4", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl font-bold mb-4", children: ["Technical ", _jsx("span", { className: "primary-glow", children: "Skills" })] }), _jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "A comprehensive toolkit of modern technologies and frameworks I use to build innovative solutions" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: skillCategories.map((category, index) => (_jsxs(Card, { glow: true, className: "border-accent hover:shadow-lg transition-all duration-300 hover:shadow-primary-glow/10", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-primary-glow", children: category.icon }), category.title] }) }), _jsx(CardContent, { children: _jsx("div", { className: "flex flex-wrap gap-2", children: category.skills.map((skill, skillIndex) => (_jsx(Badge, { variant: "outline", className: "tech-stack-glow border-tech-stack/30 hover:bg-tech-stack/10 transition-colors", children: skill }, skillIndex))) }) })] }, index))) })] }) }));
};
export default Skills;
