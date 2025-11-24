import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Disc } from "lucide-react";
import { SimpleModeToggle } from "@/components/simple-mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Disc className="h-6 w-6 text-primary animate-spin-slow" />
            <span className="font-bold sm:inline-block">DevPortfolio</span>
          </Link>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="#projects" className="transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="#server" className="transition-colors hover:text-primary">
            Server
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground border rounded-full px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Now Playing: Lo-fi Beats to Code To</span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="https://github.com/mintoleda" target="_blank">GitHub</Link>
          </Button>
          <SimpleModeToggle />
        </div>
      </div>
    </header>
  );
}
