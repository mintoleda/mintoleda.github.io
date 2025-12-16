"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export default function ParticleImage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const setSize = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
        };
        setSize();
        window.addEventListener("resize", setSize);

        // Particles
        const particles: any[] = [];
        const numParticles = 800; // Adjust for density

        // Create particles
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                alpha: Math.random() * 0.5 + 0.1,
                vx: (Math.random() - 0.5) * 0.2, // Slow movement
                vy: (Math.random() - 0.5) * 0.2
            });
        }

        // Animation Loop
        const animateParticles = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw static noise/grain for the "texture" effect
            // (Simplified for performance: just moving dots)

            ctx.fillStyle = "#ffffff";

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animateParticles);
        };

        const anim = requestAnimationFrame(animateParticles);

        // Initial entrance animation with Anime.js
        // We can animate the canvas opacity or scale as an entrance
        anime({
            targets: canvas,
            opacity: [0, 1],
            duration: 2000,
            easing: 'easeInOutQuad'
        });

        return () => {
            window.removeEventListener("resize", setSize);
            cancelAnimationFrame(anim);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full absolute inset-0 opacity-0 pointer-events-none"
        />
    );
}
