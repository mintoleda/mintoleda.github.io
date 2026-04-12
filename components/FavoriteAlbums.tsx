"use client";

import { useState, useEffect } from "react";
import { Disc, Loader2 } from "lucide-react";
import { BentoCell } from "./BentoCell";
import Link from "next/link";

interface AlbumData {
  title: string;
  artist: string;
  coverUrl: string;
  spotifyUrl: string;
  colors: {
    vibrant: string;
    darkVibrant: string;
    muted: string;
    darkMuted: string;
  };
}

const ALBUM_DATA = [
  { title: "good kid, m.A.A.d city", artist: "Kendrick Lamar", query: "good kid, m.A.A.d city", spotifyUrl: "https://open.spotify.com/album/3DGQ1iZ9XKUQxAUWjfC34w" },
  { title: "PLAN A", artist: "Lil Tecca", query: "Plan A Lil Tecca", spotifyUrl: "https://open.spotify.com/album/6uWva3kfeqqVIsNAJ2MmeL" },
  { title: "DOPAMINE", artist: "Lil Tecca", query: "Dopamine Lil Tecca", spotifyUrl: "https://open.spotify.com/album/0CLqdKIh14TmKqLZCs9dml" },
  { title: "2014 Forest Hills Drive", artist: "J. Cole", query: "2014 Forest Hills Drive", spotifyUrl: "https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG" },
  { title: "The Boy Who Played The Harp", artist: "Dave", query: "The Boy Who Played The Harp", imageUrl: "https://i.scdn.co/image/ab67616d0000b273fecaa7826bb0cbe139a8cb83", spotifyUrl: "https://open.spotify.com/album/24f1GFXCkViGoRpmGqlSSl" }
];

// Fallback static data in case API fails
const fallbackAlbums: AlbumData[] = [
  {
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5691f?q=80&w=300&auto=format&fit=crop",
    spotifyUrl: "https://open.spotify.com/album/3DGQ1iZ9XKUQxAUWjfC34w",
    colors: { vibrant: "#7f1d1d", darkVibrant: "#450a0a", muted: "#f87171", darkMuted: "#ef4444" }
  },
  {
    title: "PLAN A",
    artist: "Lil Tecca",
    coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop",
    spotifyUrl: "https://open.spotify.com/album/6uWva3kfeqqVIsNAJ2MmeL",
    colors: { vibrant: "#166534", darkVibrant: "#14532d", muted: "#4ade80", darkMuted: "#22c55e" }
  },
  {
    title: "DOPAMINE",
    artist: "Lil Tecca",
    coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop",
    spotifyUrl: "https://open.spotify.com/album/0CLqdKIh14TmKqLZCs9dml",
    colors: { vibrant: "#52525b", darkVibrant: "#27272a", muted: "#a1a1aa", darkMuted: "#3f3f46" }
  },
  {
    title: "2014 Forest Hills Drive",
    artist: "J. Cole",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5691f?q=80&w=300&auto=format&fit=crop",
    spotifyUrl: "https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG",
    colors: { vibrant: "#7f1d1d", darkVibrant: "#450a0a", muted: "#f87171", darkMuted: "#ef4444" }
  },
  {
    title: "The Boy Who Played The Harp",
    artist: "Dave",
    coverUrl: "https://i.scdn.co/image/ab67616d0000b273fecaa7826bb0cbe139a8cb83",
    spotifyUrl: "https://open.spotify.com/album/24f1GFXCkViGoRpmGqlSSl",
    colors: { vibrant: "#d9a45b", darkVibrant: "#87310c", muted: "#8e7558", darkMuted: "#4f493a" }
  }
];

export default function FavoriteAlbums() {
  const [albums, setAlbums] = useState<AlbumData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const promises = ALBUM_DATA.map((item, index) => {
          const cacheKey = `album-cache-${item.query}`;
          const cached = sessionStorage.getItem(cacheKey);
          if (cached) {
            return Promise.resolve(JSON.parse(cached));
          }

          let url = `/api/album-data?term=${encodeURIComponent(item.query)}`;
          if (item.imageUrl) {
            url += `&imageUrl=${encodeURIComponent(item.imageUrl)}`;
          }
          return fetch(url)
            .then(async res => {
              if (!res.ok) throw new Error("Failed to fetch");
              const data = await res.json();
              const result = {
                ...data,
                title: item.title,
                artist: item.artist,
                spotifyUrl: item.spotifyUrl
              };
              sessionStorage.setItem(cacheKey, JSON.stringify(result));
              return result;
            })
            .catch(err => {
              console.error(`Failed to fetch album: ${item.query}`, err);
              return fallbackAlbums[index];
            });
        });
        const results = await Promise.all(promises);
        setAlbums(results);
      } catch (error) {
        console.error("Error loading albums from API:", error);
        setAlbums(fallbackAlbums); // Use fallback on error
      } finally {
        setLoading(false);
      }
    }
    fetchAlbums();
  }, []);

  return (
    <BentoCell colSpan={2} rowSpan={1} className="p-6 flex flex-col justify-between overflow-hidden relative group">
      
      {/* Header */}
      <div className="flex justify-between items-start text-muted-foreground mb-4 z-10">
        <span className="text-xs font-label uppercase tracking-wider">Albums</span>
        {loading ? (
           <Loader2 size={18} className="animate-spin text-muted-foreground/50" />
        ) : (
           <Disc size={18} className="" />
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col justify-end z-10 w-full h-full relative">

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-muted-foreground animate-pulse">Fetching covers & colors...</span>
          </div>
        )}

        {!loading && (
          <div className="w-full flex items-center justify-between gap-2 md:gap-3 mt-auto h-[100px] md:h-[120px]">
            {albums.map((album, i) => (
              <Link
                key={album.spotifyUrl || album.title}
                href={album.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Listen to ${album.title} by ${album.artist} on Spotify`}
                className="group/album relative flex-1 aspect-square rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-primary/20"
              >
                <img src={album.coverUrl} alt={`Album cover for ${album.title} by ${album.artist}`} className="w-full h-full object-cover" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover/album:opacity-90 transition-opacity flex flex-col items-center justify-center p-1 md:p-2 text-center backdrop-blur-sm"
                  style={{ background: `linear-gradient(to bottom right, ${album.colors.darkVibrant}cc, ${album.colors.vibrant}cc)` }}
                >
                  <span className="text-[9px] md:text-[11px] font-bold text-white leading-tight line-clamp-3 drop-shadow-md">{album.title}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </BentoCell>
  );
}
