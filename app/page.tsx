"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Sidebar from "@/components/Sidebar";
import ParticleImage from "@/components/ParticleImage";
import FloatingHeader from "@/components/FloatingHeader";
import { AliveIndicator } from "@/components/AliveIndicator";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";

export default function Home() {
  const homeRef = useRef(null);


  useEffect(() => {

    anime({
      targets: [homeRef.current],
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




      <main className="md:ml-64 min-h-screen relative">
        <div className="max-w-4xl mx-auto px-6 py-4 md:py-0 min-h-[calc(100vh+60px)] md:min-h-0 md:h-screen flex flex-col justify-start md:justify-center relative">


          <section id="home" ref={homeRef} className="flex flex-col justify-center relative pb-12 opacity-0">
            <div className="absolute inset-0 z-0 overflow-hidden mix-blend-overlay opacity-20">
              <ParticleImage />
            </div>

            <div className="relative z-10 space-y-6">
              <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight">
                Adetola Adetunji
              </h1>
              <div className="h-px w-full bg-border max-w-md" />

              <blockquote className="text-xl md:text-2xl text-muted-foreground italic font-serif max-w-2xl border-l-2 border-primary pl-6 py-2">
                &quot;When will you consider the possibility that you are exactly who you want to be?&quot;
                <footer className="text-sm text-muted-foreground mt-2 not-italic font-sans">
                  — Charles Yu, Sorry, Please, Thank You: Stories
                </footer>
              </blockquote>
            </div>

            <div className="absolute -bottom-24 left-0 text-muted-foreground">
              <AliveIndicator />
            </div>
          </section>



        </div>
      </main>
    </div>
  );
}
