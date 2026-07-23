"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  songUrl?: string;
}

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SPOTIFY_API_URL || "https://rest-ful-spotify-api.vercel.app"}/api/now-playing`
        );
        if (!response.ok) throw new Error();
        setData(await response.json());
      } catch {
        setData({ isPlaying: false });
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!data || !data.isPlaying) {
    return (
      <span className="px-3 py-1 text-sm text-muted-foreground border border-border rounded-md inline-flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        offline
      </span>
    );
  }

  const label = `${data.title} — ${data.artist}`;

  return (
    <span className="px-3 py-1 text-sm border border-border rounded-md inline-flex items-center gap-2 max-w-[280px]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#8a9a7b] shrink-0 animate-pulse" />
      {data.songUrl ? (
        <Link
          href={data.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="truncate text-muted-foreground hover:text-primary transition-colors"
        >
          {label}
        </Link>
      ) : (
        <span className="truncate text-muted-foreground">{label}</span>
      )}
    </span>
  );
}
