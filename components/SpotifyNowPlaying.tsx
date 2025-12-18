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

import { cn } from "@/lib/utils";

export default function SpotifyNowPlaying() {
    const [data, setData] = useState<SpotifyData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isStable, setIsStable] = useState(false);
    const listeningRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        const fetchData = async () => {
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
                    }
                });

            return () => {
                anime.remove(listeningRef.current);
            };
        }
    }, [data?.isPlaying, isStable]);

    // Separate cleanup to avoid race conditions with React's render cycle
    useEffect(() => {
        if (isStable && listeningRef.current) {
            // Give React a frame to apply the classes before removing anime.js styles
            const timer = setTimeout(() => {
                if (listeningRef.current) {
                    listeningRef.current.removeAttribute('style');
                }
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [isStable]);

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
                        "text-[9px] uppercase tracking-wider text-muted-foreground/80 overflow-hidden block",
                        isStable
                            ? "h-0 opacity-0 pointer-events-none group-hover:h-[14px] group-hover:opacity-100 group-hover:mb-0.5 group-hover:pointer-events-auto transition-all duration-300 ease-in-out"
                            : "mb-0.5"
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
