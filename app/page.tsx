"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Sidebar from "@/components/Sidebar";
import ParticleImage from "@/components/ParticleImage";
import FloatingHeader from "@/components/FloatingHeader";
import { ArrowDown } from "lucide-react";

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
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 space-y-24">


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



        </div>
      </main>
    </div>
  );
}
