"use client";

import { useEffect, useState } from "react";
import { Type } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FontToggle() {
  const [mounted, setMounted] = useState(false);
  const [font, setFont] = useState<"space" | "playfair">("space");

  useEffect(() => {
    setMounted(true);
    const currentFont = document.documentElement.getAttribute("data-font") as "space" | "playfair" || "space";
    setFont(currentFont);
  }, []);

  if (!mounted) return null;

  const toggleFont = () => {
    const newFont = font === "space" ? "playfair" : "space";
    document.documentElement.setAttribute("data-font", newFont);
    setFont(newFont);
  };

  return (
    <button
      onClick={toggleFont}
      className={cn(
        "fixed bottom-6 right-6 md:top-8 md:right-8 md:bottom-auto z-50",
        "flex items-center gap-2 px-3 py-2 rounded-full",
        "bg-card border border-border/50 text-muted-foreground",
        "hover:text-foreground hover:border-primary/50 transition-colors",
        "backdrop-blur-sm shadow-sm"
      )}
      title={`Switch to ${font === "space" ? "Playfair" : "Space Grotesk"} font`}
    >
      <Type size={16} />
      <span className="text-xs font-label uppercase tracking-wider hidden sm:inline-block">
        {font === "space" ? "Space" : "Playfair"}
      </span>
    </button>
  );
}
