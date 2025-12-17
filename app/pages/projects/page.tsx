"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import ProjectCard from "@/components/ProjectCard";
import Sidebar from "@/components/Sidebar"; // Including Sidebar here as per current pattern
import FloatingHeader from "@/components/FloatingHeader"; // For mobile

export default function ProjectsPage() {
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

            <main className="md:ml-64 min-h-screen relative p-8 md:p-24">
                <div ref={containerRef} className="max-w-4xl mx-auto space-y-12">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold font-serif mb-8">Projects</h2>
                        <div className="h-px w-full bg-border" />
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold font-serif text-primary">Software Engineering</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ProjectCard
                                title="InboxOrganizer"
                                description="Label emails through Gmail with AI"
                                href="https://github.com/mintoleda/InboxOrganizer"
                                imageSrc="/resources/inboxorganizer-thumbnail.png"
                            />
                            <ProjectCard
                                title="RESTful-Spotify-API"
                                description="A RESTful API for Spotify integration"
                                href="https://github.com/mintoleda/RESTful-Spotify-API"
                            />
                            <ProjectCard
                                title="WeatherApp"
                                description="Online weather app"
                                href="https://github.com/mintoleda/WeatherApp"
                            />
                            <ProjectCard
                                title="Portfolio"
                                description="This website! Built with Next.js & Tailwind"
                                href="https://github.com/mintoleda/mintoleda.github.io"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
