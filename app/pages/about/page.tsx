"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import anime from "animejs";
import Sidebar from "@/components/Sidebar";
import FloatingHeader from "@/components/FloatingHeader";

export default function AboutPage() {
    const containerRef = useRef(null);
    const [isVerseExpanded, setIsVerseExpanded] = useState(false);

    useEffect(() => {
        anime({
            targets: containerRef.current,
            translateY: [20, 0],
            opacity: [0, 1],
            easing: "easeOutQuad",
            duration: 800,
        });
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
            <Sidebar />
            <div className="md:hidden">
                <FloatingHeader />
            </div>

            <main className="md:ml-64 min-h-screen relative p-8 md:p-24">
                <div ref={containerRef} className="max-w-4xl mx-auto space-y-8 opacity-0">
                    <h2 className="text-5xl md:text-7xl font-bold font-serif">About</h2>
                    <div className="h-px w-full bg-border" />

                    <div className="border border-white/20 p-8 md:p-12 rounded-none bg-card/50 backdrop-blur-sm">
                        <ul className="space-y-4 list-disc list-inside text-lg md:text-xl text-muted-foreground marker:text-primary font-serif">
                            <li>
                                I'm currently studying Computer Science at the University of Texas at Austin, with a minor in Statistics and Data Science, and a concentration in Machine Learning & AI.
                            </li>
                            <li>
                                My favorite color is{" "}
                                <span className="relative group inline-block cursor-help">
                                    <span className="text-primary font-bold">Green</span>
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-bold text-primary-foreground bg-primary rounded-md opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 group-active:translate-y-0 pointer-events-none whitespace-nowrap z-50">
                                        duh.
                                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></span>
                                    </span>
                                </span>
                                .
                            </li>
                            <li>
                                I love <a href="https://stats.fm/mintoleda" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">listening to music</a> and{" "}
                                <span className="relative group inline-block cursor-help">
                                    <span className="text-primary font-bold">playing instruments</span>
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-bold text-primary-foreground bg-primary rounded-md opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 group-active:translate-y-0 pointer-events-none whitespace-nowrap z-50">
                                        saxophone and piano for 10+ years
                                        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></span>
                                    </span>
                                </span>.
                            </li>
                            <li>
                                I enjoy playing chess and Tetris.
                            </li>
                        </ul>


                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h3 className="text-2xl font-bold font-serif mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Java", "Python", "React", "Spring Boot", "Next.js", "REST APIs","Google Cloud Platform", "Tailwind CSS", "JavaScript", "TypeScript", "Git"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>


                        <div
                            className="mt-8 pt-8 border-t border-white/10 group w-fit cursor-pointer"
                            onClick={() => setIsVerseExpanded(!isVerseExpanded)}
                        >
                            <div className="cursor-help w-fit">
                                <span className={cn(
                                    "text-sm font-sans text-primary/80 font-medium transition-colors duration-300",
                                    "group-hover:text-primary",
                                    isVerseExpanded && "text-primary"
                                )}>
                                    — Isaiah 58:9-11
                                </span>
                            </div>
                            <div className={cn(
                                "transition-all duration-1000 ease-in-out overflow-hidden",
                                "max-h-0 opacity-0 group-hover:max-h-[1000px] group-hover:opacity-100",
                                isVerseExpanded && "max-h-[1000px] opacity-100"
                            )}>
                                <blockquote className="font-serif italic text-muted-foreground text-lg leading-relaxed pt-4">
                                    &quot;Then you shall call, and the Lord will answer;
                                    you shall cry, and he will say, ‘Here I am.’
                                    If you take away the yoke from your midst,
                                    the pointing of the finger, and speaking wickedness,
                                    if you pour yourself out for the hungry
                                    and satisfy the desire of the afflicted,
                                    then shall your light rise in the darkness
                                    and your gloom be as the noonday.
                                    And the Lord will guide you continually
                                    and satisfy your desire in scorched places
                                    and make your bones strong;
                                    and you shall be like a watered garden,
                                    like a spring of water,
                                    whose waters do not fail.&quot;
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
