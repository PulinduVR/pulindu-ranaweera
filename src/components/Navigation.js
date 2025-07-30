import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "blog", label: "Blog" },
        { id: "contact", label: "Contact" }
    ];
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };
    return (_jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [_jsxs("div", { className: "flex items-center justify-between h-16", children: [_jsxs("div", { className: "font-bold text-xl", children: [_jsx("span", { className: "primary-glow", children: "Pulindu" }), " Ranaweera"] }), _jsx("div", { className: "hidden md:flex items-center space-x-1", children: navItems.map((item) => (_jsx(Button, { variant: activeSection === item.id ? "secondary" : "ghost", onClick: () => scrollToSection(item.id), className: activeSection === item.id ? "text-primary-glow" : "", children: item.label }, item.id))) }), _jsx(Button, { variant: "ghost", size: "icon", className: "md:hidden", onClick: () => setIsOpen(!isOpen), children: isOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) })] }), isOpen && (_jsx("div", { className: "md:hidden py-4 border-t border-border", children: _jsx("div", { className: "flex flex-col space-y-2", children: navItems.map((item) => (_jsx(Button, { variant: activeSection === item.id ? "secondary" : "ghost", onClick: () => scrollToSection(item.id), className: `justify-start ${activeSection === item.id ? "text-primary-glow" : ""}`, children: item.label }, item.id))) }) }))] }) }));
};
export default Navigation;
