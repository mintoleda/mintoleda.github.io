"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroArrow() {
    const [left, setLeft] = useState<string | null>(null);

    const updatePosition = useCallback(() => {
        const gapElement = document.getElementById("name-gap");
        const sectionElement = document.getElementById("home");
        
        if (gapElement && sectionElement) {
            const gapRect = gapElement.getBoundingClientRect();
            const sectionRect = sectionElement.getBoundingClientRect();
            
            // Calculate position relative to the section container, not the viewport!
            const relativeLeft = (gapRect.left - sectionRect.left) + (gapRect.width / 2);
            setLeft(`${relativeLeft}px`);
        }
    }, []);

    useEffect(() => {
        // Initial measurement
        // Small timeout to ensure fonts are loaded and layout is stable
        const timer = setTimeout(() => {
            updatePosition();
        }, 100);

        // Re-measure on window resize to ensure responsiveness
        window.addEventListener("resize", updatePosition);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", updatePosition);
        };
    }, [updatePosition]);

    // Render transparently first to ensure it's in the DOM without jumping
    return (
        <div
            className="absolute bottom-8 -translate-x-1/2 z-20 transition-opacity duration-500"
            style={{ 
                left: left || "50%",
                opacity: left ? 1 : 0 
            }}
        >
            <a
                href="#about"
                aria-label="Scroll to about section"
                className="animate-bounce text-muted-foreground hover:text-primary transition-colors block"
            >
                <ArrowDown className="h-8 w-8" />
            </a>
        </div>
    );
}
