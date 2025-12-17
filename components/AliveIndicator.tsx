"use client";
import React, { useEffect, useRef } from "react";
import anime from "animejs";

export function AliveIndicator() {
    const indicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!indicatorRef.current) return;

        // Breathing (scale) animation
        anime({
            targets: indicatorRef.current,
            scale: [0.8, 1.1],
            opacity: [0.5, 0.8],
            easing: "easeInOutSine",
            duration: 3000,
            direction: "alternate",
            loop: true,
        });

        // Rotation animation
        anime({
            targets: indicatorRef.current,
            rotate: 360,
            easing: "linear",
            duration: 12000,
            loop: true,
        })
    }, []);

    return (
        <div className="flex items-center justify-center p-4">
            <div
                ref={indicatorRef}
                className="w-4 h-4 border border-dashed border-muted-foreground rounded-full"
            />
        </div>
    );
}
