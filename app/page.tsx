"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Sidebar from "@/components/Sidebar";
import ParticleImage from "@/components/ParticleImage";
import ProjectCard from "@/components/ProjectCard";
import FloatingHeader from "@/components/FloatingHeader"; // Reusing for mobile/tablet if valid, or will adjust
import { ArrowDown } from "lucide-react";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    // Entrance animation for sections
    anime({
      targets: [homeRef.current, aboutRef.current, projectsRef.current],
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      easing: "easeOutQuad",
      duration: 800,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Sidebar />

      {/* Mobile Header (Hidden on Desktop) - reusing FloatingHeader logic or similar if needed, 
          but for now let's might just rely on FloatingHeader if it works well, 
          OR build a simple mobile nav. 
          The Sidebar is hidden on mobile. 
      */}
      <div className="md:hidden">
        <FloatingHeader />
      </div>

      {/* Main Content Area */}
      <main className="md:ml-64 min-h-screen relative">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-24">

          {/* HOME SECTION */}
          <section id="home" ref={homeRef} className="min-h-[80vh] flex flex-col justify-center relative border-b border-border pb-12">
            <div className="absolute inset-0 z-0 overflow-hidden mix-blend-overlay opacity-20">
              <ParticleImage />
            </div>

            <div className="relative z-10 space-y-6">
              <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight">
                Home
              </h1>
              <div className="h-px w-full bg-border max-w-md" />

              <blockquote className="text-xl md:text-2xl text-muted-foreground italic font-serif max-w-2xl border-l-2 border-primary pl-6 py-2">
                &quot;When will you consider the possibility that you are exactly who you want to be?&quot;
                <footer className="text-sm text-muted-foreground mt-2 not-italic font-sans">
                  — Charles Yu, Sorry, Please, Thank You: Stories
                </footer>
              </blockquote>
            </div>

            <div className="absolute bottom-12 left-0 animate-bounce text-muted-foreground">
              <ArrowDown className="w-6 h-6" />
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section id="about" ref={aboutRef} className="space-y-8 scroll-mt-24">
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
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" ref={projectsRef} className="space-y-12 scroll-mt-24">
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

            {/* Keeping a Physics placeholder for the 'Simulations' if the user adds them back, 
                as they were in the original request's screenshots/About secton. 
                But I will comment it out if I don't have the link to avoid broken links. 
                Actually, let's include 'RTI-Simulator' if it was a real project the user mentioned, 
                even if I didn't see it (maybe it's private or I missed it). 
                I will assume it is 'https://github.com/mintoleda/RTI-Simulator' for now based on naming convention
                and let the user correct if it defaults to 404. 
                Actually, better to list what I know exists. 
                I'll leave a small section for it or just omit it to be safe. 
                I will omit it to strictly follow "populate ... from my github".
            */}
          </section>
        </div>
      </main>
    </div>
  );
}
