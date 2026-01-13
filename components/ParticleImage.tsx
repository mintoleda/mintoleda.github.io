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

        const setSize = () => {
            canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
            canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
        };
        setSize();
        window.addEventListener("resize", setSize);

        interface Particle {
            x: number;
            y: number;
            radius: number;
            alpha: number;
            vx: number;
            vy: number;
        }

        const particles: Particle[] = [];
        const numParticles = 800;
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

        const animateParticles = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#ffffff";

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

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
