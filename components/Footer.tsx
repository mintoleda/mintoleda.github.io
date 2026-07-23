"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-8">
      <span>adetola &copy; {new Date().getFullYear()}</span>
      <div className="flex items-center gap-4">
        <Link href="/now" className="hover:text-foreground transition-colors">
          now
        </Link>
        <Link href="/uses" className="hover:text-foreground transition-colors">
          uses
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:text-foreground transition-colors"
        >
          top &uarr;
        </button>
      </div>
    </footer>
  );
}
