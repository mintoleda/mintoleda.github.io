import { NextResponse } from "next/server";
import { Vibrant } from "node-vibrant/node";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  const imageUrl = searchParams.get("imageUrl");

  if (!term && !imageUrl) {
    return NextResponse.json({ error: "Missing term or imageUrl parameter" }, { status: 400 });
  }

  try {
    let coverUrl = imageUrl;
    let title = term || "Unknown Title";
    let artist = "Unknown Artist";

    if (coverUrl) {
      // SSRF protection: only allow secure URLs
      if (!coverUrl.startsWith("https://")) {
        return NextResponse.json({ error: "Invalid image URL. Must use HTTPS." }, { status: 400 });
      }
    } else if (term) {
      // Search iTunes API
      const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=album&limit=1`;
      const response = await fetch(itunesUrl);
      
      if (!response.ok) {
        throw new Error(`iTunes API failed with status: ${response.status}`);
      }
      
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        return NextResponse.json({ error: "Album not found" }, { status: 404 });
      }

      const album = data.results[0];
      // Get high-res cover (600x600 instead of 100x100) and handle potential missing property
      coverUrl = album.artworkUrl100?.replace("100x100bb", "600x600bb");
      title = album.collectionName;
      artist = album.artistName;
    }

    if (!coverUrl) {
      return NextResponse.json({ error: "No cover image found" }, { status: 404 });
    }
    
    // Extract colors using node-vibrant
    const palette = await Vibrant.from(coverUrl).getPalette();
    
    return NextResponse.json({
      title,
      artist,
      coverUrl,
      colors: {
        vibrant: palette.Vibrant?.hex || "#666666",
        darkVibrant: palette.DarkVibrant?.hex || "#333333",
        muted: palette.Muted?.hex || "#888888",
        darkMuted: palette.DarkMuted?.hex || "#444444",
      }
    }, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      }
    });

  } catch (error) {
    console.error("Error fetching album data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
