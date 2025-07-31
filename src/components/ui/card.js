import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../lib/utils";
const Card = React.forwardRef(({ className, glow, children, ...props }, ref) => (_jsxs("div", { ref: ref, "data-glow": glow ? true : undefined, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm relative md:overflow-hidden", className), style: {
        touchAction: 'pan-y',
        '--bg-spot-opacity': glow ? '0.15' : undefined,
        '--border-spot-opacity': glow ? '0.8' : undefined,
        '--border-light-opacity': glow ? '0.6' : undefined,
    }, ...props, children: [glow && _jsx("span", { "data-glow": true }), children] })));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx("h3", { ref: ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx("p", { ref: ref, className: cn("text-sm text-muted-foreground", className), ...props })));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("p-6 pt-0", className), ...props })));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex items-center p-6 pt-0", className), ...props })));
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
