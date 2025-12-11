"use client";

import { useEffect, useState } from "react";
import { Loader2, Music } from "lucide-react";
import Link from "next/link";

interface SpotifyData {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumArt?: string;
    songUrl?: string;
}

export default function SpotifyNowPlaying() {
    const [data, setData] = useState<SpotifyData | null>(null);
    const [loading, setLoading] = useState(true);

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
        // Poll every 30 seconds
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

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
        <div className="flex items-center gap-2 text-sm text-muted-foreground animate-in fade-in duration-500">
            <Music className="h-4 w-4 animate-pulse text-green-500" />
            <span>Listening to </span>
            <Link
                href={data.songUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-primary hover:underline transition-colors truncate max-w-[200px] sm:max-w-[300px]"
            >
                {data.title}
            </Link>
            <span className="text-muted-foreground/60">by {data.artist}</span>
        </div>
    );
}
