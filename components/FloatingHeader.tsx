"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function FloatingHeader() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto px-4 transition-all duration-300",
                scrolled ? "top-4" : "top-8"
            )}
        >
            <div className="group flex items-center gap-4 rounded-full border border-border/40 bg-background/60 backdrop-blur-xl p-2 pl-4 shadow-lg transition-all duration-300 hover:pr-4">
                <div className="flex-1 min-w-0">
                    <SpotifyNowPlaying />
                </div>

                <div className="flex items-center gap-2 border-l border-border/20 pl-2 max-w-0 overflow-hidden opacity-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 ease-out">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-muted/50 h-8 w-8"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
