"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Sidebar from "@/components/Sidebar";
import FloatingHeader from "@/components/FloatingHeader";

export default function NowPage() {
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
                <div ref={containerRef} className="max-w-4xl mx-auto space-y-8 opacity-0">
                    <h2 className="text-5xl md:text-7xl font-bold font-serif">Now</h2>
                    <div className="h-px w-full bg-border" />

                    <div className="border border-white/20 p-8 md:p-12 rounded-none bg-card/50 backdrop-blur-sm space-y-8">
                        <section className="space-y-4">
                            <h3 className="text-2xl font-serif font-bold text-primary">enjoying winter break</h3>
                            <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
                                reading books, learning new skills, spending time with family
                            </p>
                        </section>

                        <p className="text-sm text-muted-foreground italic font-serif pt-8 border-t border-white/10">
                            Last updated: December 2025
                        </p>

                        <div className="-mt-3">
                            <a
                                href="https://sive.rs/nowff"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-muted-foreground/60 hover:text-primary transition-colors font-serif italic underline decoration-muted-foreground/30 underline-offset-4"
                            >
                                what is a /now page?
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
