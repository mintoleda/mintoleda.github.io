"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";


export default function FloatingHeader() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <div className="w-full flex flex-col items-center gap-6 py-8 px-4 md:hidden bg-background z-50">
            <div className="scale-90 opacity-80">
                <SpotifyNowPlaying />
            </div>

            {/* Boxed Name - Hidden on Home */}
            {!isHome && (
                <div className="border-2 border-primary/40 px-6 py-3">
                    <h1 className="text-3xl font-serif font-bold tracking-wider text-foreground text-center">
                        Adetola Adetunji
                    </h1>
                </div>
            )}

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-3 gap-y-2 w-full max-w-sm px-2">
                <Link
                    href="/"
                    className="text-base font-serif text-primary hover:text-foreground transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4"
                    onClick={(e) => {
                        if (pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                >
                    home
                </Link>
                <Link
                    href="/#about"
                    className="text-base font-serif text-primary hover:text-foreground transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4"
                    onClick={(e) => {
                        if (pathname === "/") {
                            e.preventDefault();
                            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    about
                </Link>
                <Link href="/pages/projects" className="text-base font-serif text-primary hover:text-foreground transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4">
                    projects
                </Link>
                <a href="/resources/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-base font-serif text-primary hover:text-foreground transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4">
                    CV
                </a>
                <Link href="/pages/now" className="text-base font-serif text-primary hover:text-foreground transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4">
                    now
                </Link>
                <Link href="/pages/contact" className="text-base font-serif text-primary hover:text-foreground transition-colors underline decoration-transparent hover:decoration-primary underline-offset-4">
                    contact
                </Link>
            </nav>
        </div>
    );
}
