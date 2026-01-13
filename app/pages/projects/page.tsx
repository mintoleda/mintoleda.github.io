"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import ProjectCard from "@/components/ProjectCard";
import Sidebar from "@/components/Sidebar";
import FloatingHeader from "@/components/FloatingHeader";

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
        <div
          ref={containerRef}
          className="max-w-4xl mx-auto space-y-12 opacity-0"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold font-serif mb-8">
              Projects
            </h2>
            <div className="h-px w-full bg-border" />
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Morning Commute"
                description="Distributed microservices ecosystem for ride-hailing analytics using Kafka streams."
                href="https://github.com/mintoleda/morning-commute"
                tags={["Java", "Kafka", "Spring Boot", "Docker", "PostgreSQL"]}
              />
              <ProjectCard
                title="RESTful Spotify API"
                description="Backend service for real-time Spotify data integration with sub-second latency."
                href="https://github.com/mintoleda/RESTful-Spotify-API"
                imageSrc="/resources/carbon.png"
                tags={["Java", "Spring Boot", "Jest", "REST API"]}
              />
              <ProjectCard
                title="InboxOrganizer"
                description="AI-powered Gmail organizer using Llama 3.1 8B for local inference and categorization."
                href="https://github.com/mintoleda/InboxOrganizer"
                imageSrc="/resources/io-thumbnail.png"
                tags={["Python", "GCP", "Docker", "Ollama"]}
              />
              <ProjectCard
                title="Portfolio"
                description="This website! Built with Next.js, Tailwind CSS, and Framer Motion."
                href="https://github.com/mintoleda/mintoleda.github.io"
                tags={["React", "Next.js", "Tailwind"]}
              />
              <ProjectCard
                title="WeatherApp"
                description="Interactive weather application with real-time API integration."
                href="https://github.com/mintoleda/WeatherApp"
                tags={["React", "APIs"]}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

