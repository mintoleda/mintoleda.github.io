"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Sidebar from "@/components/Sidebar";
import FloatingHeader from "@/components/FloatingHeader";

export default function AboutPage() {
    const containerRef = useRef(null);

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

            {/* We need to add padding/margin to account for Sidebar if it persists, 
          but usually layouts handle this. The user's constraint was just "open new pages".
          Assuming Sidebar is in layout.tsx? Let's check layout.tsx to be sure. 
          If Sidebar is only in page.tsx, we need to add it to layout or include it here. 
          Wait, looking at file list, Sidebar.tsx is a component. 
          Let's check app/layout.tsx to see if Sidebar is global. 
          User's current app/page.tsx imports Sidebar. So it might not be global. 
          If I navigate away, I lose the sidebar unless I add it to layout or this page. 
          Usage implies Sidebar should be always visible. 
          I'll assume I should put Sidebar in these new pages OR refactor layout. 
          Refactoring layout is safer for consistency. 
          BUT, risk of breaking things. 
          Safest path: Include Sidebar in these new pages for now, or check layout.tsx first.
          
          I will write this file assuming I need to wrap it in the same structure as Home:
          <div className="md:ml-64 ...">
      */}

            {/* 
          Actually, I should check layout.tsx first to avoid code duplication. 
          If I write this now, I might need to edit it immediately. 
          I will write it with the assumption I need to provide the main content container.
          I will verify layout.tsx in parallel/next step and adjust if needed.
          For now, I'll include the main wrapper structure.
      */}

            <main className="md:ml-64 min-h-screen relative p-8 md:p-24">
                <div ref={containerRef} className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-5xl md:text-7xl font-bold font-serif">About</h2>
                    <div className="h-px w-full bg-border" />

                    <div className="border border-white/20 p-8 md:p-12 rounded-none bg-card/50 backdrop-blur-sm">
                        <ul className="space-y-4 list-disc list-inside text-lg md:text-xl text-muted-foreground marker:text-primary font-serif">
                            <li>I was born in India</li>
                            <li>
                                I go to Texas A&M University, aiming for a dual degree in physics and mathematics,
                                a minor in computer science, and a minor in philosophy
                            </li>
                            <li>My favorite color is Green.</li>
                            <li>
                                I love listening to music, playing games, learning new things, and spending time with friends.
                            </li>
                            <li>
                                I love to learn about new people and topics! Email me about your special interests.
                            </li>
                        </ul>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h3 className="text-2xl font-bold font-serif mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "Tailwind CSS", "TypeScript", "Python", "Physics Simulation", "Data Analysis", "Git", "Anime.js"].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
