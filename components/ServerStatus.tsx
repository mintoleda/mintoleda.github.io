"use client"

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Server, Activity, ShieldCheck, Cpu } from "lucide-react";

export default function ServerStatus() {
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const lastAngleRef = useRef<number | null>(null);
    const centerRef = useRef<{ x: number; y: number } | null>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        const rect = e.currentTarget.getBoundingClientRect();
        centerRef.current = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };

        const angle = Math.atan2(
            e.clientY - centerRef.current.y,
            e.clientX - centerRef.current.x
        ) * (180 / Math.PI);
        lastAngleRef.current = angle;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !centerRef.current || lastAngleRef.current === null) return;

        const angle = Math.atan2(
            e.clientY - centerRef.current.y,
            e.clientX - centerRef.current.x
        ) * (180 / Math.PI);

        let delta = angle - lastAngleRef.current;

        // Handle wrapping around 180/-180 degrees
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;

        setRotation((prev) => prev + delta);
        lastAngleRef.current = angle;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        lastAngleRef.current = null;
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            lastAngleRef.current = null;
        }
    };

    return (
        <section id="server" className="container py-24">
            <div className="rounded-3xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                                <span className="mr-1.5 flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                System Online
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Homelab &amp; Server</h2>
                            <p className="text-muted-foreground md:text-xl">
                                Self-hosted server running with Docker Compose
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex items-center gap-2 text-sm">
                                <Server className="h-4 w-4 text-primary" />
                                <span>Uptime: 99.9%</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Activity className="h-4 w-4 text-primary" />
                                <span>Load: Low</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <ShieldCheck className="h-4 w-4 text-primary" />
                                <span>Secure Access</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Cpu className="h-4 w-4 text-primary" />
                                <span>Dockerized</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="w-full sm:w-auto">
                                Visit Server Portal
                            </Button>
                        </div>
                    </div>

                    <div className="bg-muted/50 p-8 md:p-12 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l gap-4">
                        <div
                            className={`relative w-full max-w-sm aspect-square rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center animate-[spin_60s_linear_infinite] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="absolute inset-0 rounded-full border-4 border-primary/10 scale-90 pointer-events-none"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-primary/5 scale-75 pointer-events-none"></div>
                            <div
                                className="text-center space-y-2 z-10 pointer-events-none"
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                                }}
                            >
                                <Server className="h-16 w-16 mx-auto text-primary" />
                                <div className="font-mono text-xs text-muted-foreground">
                                    <div>CPU: 12%</div>
                                    <div>RAM: 8.4GB / 32GB</div>
                                    <div>TEMP: 42°C</div>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                            Click and drag to rotate
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
