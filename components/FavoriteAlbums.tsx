"use client";

import { useState, useEffect } from "react";
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
  {
    title: "good kid, m.A.A.d city",
    artist: "Kendrick Lamar",
    query: "good kid, m.A.A.d city",
    spotifyUrl: "https://open.spotify.com/album/3DGQ1iZ9XKUQxAUWjfC34w",
  },
  {
    title: "PLAN A",
    artist: "Lil Tecca",
    query: "Plan A Lil Tecca",
    spotifyUrl: "https://open.spotify.com/album/6uWva3kfeqqVIsNAJ2MmeL",
  },
  {
    title: "DOPAMINE",
    artist: "Lil Tecca",
    query: "Dopamine Lil Tecca",
    spotifyUrl: "https://open.spotify.com/album/0CLqdKIh14TmKqLZCs9dml",
  },
  {
    title: "2014 Forest Hills Drive",
    artist: "J. Cole",
    query: "2014 Forest Hills Drive",
    spotifyUrl: "https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG",
  },
  {
    title: "The Boy Who Played The Harp",
    artist: "Dave",
    query: "The Boy Who Played The Harp",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273fecaa7826bb0cbe139a8cb83",
    spotifyUrl: "https://open.spotify.com/album/24f1GFXCkViGoRpmGqlSSl",
  },
];

interface AlbumDataEntry {
  title: string;
  artist: string;
  query: string;
  spotifyUrl: string;
  imageUrl?: string;
}

export default function FavoriteAlbums() {
  const [albums, setAlbums] = useState<AlbumData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const promises = ALBUM_DATA.map((item: AlbumDataEntry) => {
          const cacheKey = `album-cache-${item.query}`;
          const cached = sessionStorage.getItem(cacheKey);
          if (cached) return Promise.resolve(JSON.parse(cached));

          let url = `/api/album-data?term=${encodeURIComponent(item.query)}`;
          if (item.imageUrl)
            url += `&imageUrl=${encodeURIComponent(item.imageUrl)}`;

          return fetch(url)
            .then(async (res) => {
              if (!res.ok) throw new Error();
              const data = await res.json();
              const result = {
                ...data,
                title: item.title,
                artist: item.artist,
                spotifyUrl: item.spotifyUrl,
              };
              sessionStorage.setItem(cacheKey, JSON.stringify(result));
              return result;
            })
            .catch(() => null);
        });
        const results = await Promise.all(promises);
        setAlbums(results.filter(Boolean));
      } catch {
        setAlbums([]);
      } finally {
        setLoading(false);
      }
    }
    fetchAlbums();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground py-4">
        <span className="animate-pulse">fetching covers...</span>
      </div>
    );
  }

  if (albums.length === 0) return null;

  return (
    <div className="flex items-center gap-3 overflow-x-auto py-2">
      {albums.map((album) => (
        <Link
          key={album.spotifyUrl}
          href={album.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative shrink-0 w-24 h-24 rounded-md overflow-hidden border border-border hover:border-primary/50 transition-colors"
        >
          <img
            src={album.coverUrl}
            alt={`${album.title} by ${album.artist}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
            <span className="text-[10px] text-center text-white leading-tight">
              {album.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
