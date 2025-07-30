import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("section", { id: "experience", className: "py-20 px-4 bg-card/50", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl font-bold mb-4", children: ["Experience & ", _jsx("span", { className: "primary-glow", children: "Achievements" })] }), _jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Leadership roles, certifications, and competitive achievements that showcase my growth and expertise" })] }), _jsxs("div", { className: "mb-16", children: [_jsxs("h3", { className: "text-2xl font-semibold mb-8 flex items-center gap-3", children: [_jsx(Users, { className: "w-6 h-6 text-primary-glow" }), "Leadership Experience"] }), _jsx("div", { className: "space-y-6", children: leadership.map((role, index) => (_jsxs(Card, { glow: true, className: "border-accent", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { children: [_jsx(CardTitle, { className: "text-xl", children: role.title }), _jsx("p", { className: "text-primary-glow font-medium", children: role.organization }), _jsx("p", { className: "text-muted-foreground text-sm", children: role.company })] }), _jsxs("div", { className: "flex items-center gap-2 text-muted-foreground text-sm", children: [_jsx(Calendar, { className: "w-4 h-4" }), role.period] })] }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "text-muted-foreground", children: role.description }), _jsx("div", { className: "flex flex-wrap gap-2", children: role.skills.map((skill, skillIndex) => (_jsx(Badge, { variant: "outline", className: "tech-stack-glow border-tech-stack/30", children: skill }, skillIndex))) })] })] }, index))) })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsxs("div", { children: [_jsxs("h3", { className: "text-2xl font-semibold mb-8 flex items-center gap-3", children: [_jsx(Award, { className: "w-6 h-6 text-primary-glow" }), "Certifications"] }), _jsx("div", { className: "space-y-4", children: certifications.map((cert, index) => (_jsx(Card, { glow: true, className: "border-accent", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: cert.title }), _jsx("p", { className: "text-primary-glow text-sm", children: cert.issuer })] }), _jsx(Badge, { variant: "outline", children: cert.year })] }), _jsx("div", { className: "flex flex-wrap gap-1", children: cert.topics.map((topic, topicIndex) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: topic }, topicIndex))) })] }) }, index))) })] }), _jsxs("div", { children: [_jsxs("h3", { className: "text-2xl font-semibold mb-8 flex items-center gap-3", children: [_jsx(Trophy, { className: "w-6 h-6 text-primary-glow" }), "Awards & Achievements"] }), _jsx("div", { className: "space-y-4", children: awards.map((award, index) => (_jsx(Card, { glow: true, className: "border-accent", children: _jsxs(CardContent, { className: "p-6", children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold", children: award.title }), _jsx("p", { className: "text-muted-foreground text-sm", children: award.organization })] }), _jsx(Badge, { variant: "outline", children: award.year })] }), _jsx(Badge, { className: "bg-tech-stack hover:bg-tech-stack/80", children: award.achievement })] }) }, index))) })] })] })] }) }));
};
export default Experience;
