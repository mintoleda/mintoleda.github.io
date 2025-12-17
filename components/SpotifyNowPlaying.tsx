"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, Music } from "lucide-react";
import Link from "next/link";
import anime from "animejs";

interface SpotifyData {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumArt?: string;
    songUrl?: string;
}

import { cn } from "@/lib/utils"; // Import cn

// ... existing interfaces

export default function SpotifyNowPlaying() {
    const [data, setData] = useState<SpotifyData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isStable, setIsStable] = useState(false); // Add state
    const listeningRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // ... existing fetch logic
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_SPOTIFY_API_URL || "https://rest-ful-spotify-api.vercel.app"}/api/now-playing`
                );
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching Spotify data:", error);
                setData({ isPlaying: false });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Reset stable state if song changes? Maybe or maybe not. 
        // User wants "when the page is loaded". 
        // If song changes, maybe re-trigger? 
        // Let's stick to initial load behavior mainly, but if data changes it might re-render.
        // If we want it to happen ONCE per session or ONCE per song, we need to track it.
        // For now, let's trigger it whenever 'data.isPlaying' becomes true and we haven't stabilized yet?
        // Or re-trigger on every song change? "appear when page is loaded".
        // Let's assume on mount/detection of playing.

        if (data?.isPlaying && listeningRef.current && !isStable) {
            const tl = anime.timeline({
                easing: 'easeOutQuad',
            });

            tl.add({
                targets: listeningRef.current,
                translateY: [10, 0],
                opacity: [0, 1],
                duration: 600,
            })
                .add({
                    targets: listeningRef.current,
                    height: 0,
                    marginBottom: 0,
                    opacity: 0,
                    duration: 500,
                    easing: 'easeInQuad',
                    delay: 2000,
                    complete: () => {
                        setIsStable(true);
                        if (listeningRef.current) {
                            listeningRef.current.removeAttribute('style');
                        }
                    }
                });

            return () => {
                anime.remove(listeningRef.current);
            };
        }
    }, [data?.isPlaying, isStable]);

    if (loading) {
        return (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Loading music status...</span>
            </div>
        );
    }

    if (!data?.isPlaying) {
        return (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Music className="h-4 w-4" />
                <span>Not currently playing</span>
            </div>
        );
    }

    return (
        <div className="group flex items-center gap-2 text-sm text-muted-foreground animate-in fade-in duration-500">
            <Music className="h-4 w-4 animate-pulse text-green-500 shrink-0" />
            <div className="flex flex-col min-w-0 leading-tight">
                <span
                    ref={listeningRef}
                    className={cn(
                        "text-[9px] uppercase tracking-wider text-muted-foreground/80 overflow-hidden",
                        isStable
                            ? "h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mb-0.5 transition-all duration-300 ease-in-out block"
                            : "block mb-0.5"
                    )}
                    style={!isStable ? { opacity: 0 } : undefined}
                >
                    Listening to
                </span>
                <div className="flex flex-col">
                    <Link
                        href={data.songUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary hover:underline transition-colors truncate text-xs"
                    >
                        {data.title}
                    </Link>
                    <span className="text-muted-foreground/60 truncate text-[10px] sm:text-xs">by {data.artist}</span>
                </div>
            </div>
        </div>
    );
}
