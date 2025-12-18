"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Although for single page anchor links this might be less relevant, sticking to standard.
import { cn } from "@/lib/utils";
import SpotifyNowPlaying from "./SpotifyNowPlaying";

const navItems = [
    { name: "home", href: "/" }, // Changed to '/'
    { name: "about", href: "/#about" },
    { name: "projects", href: "/pages/projects" },
    { name: "resume", href: "/resources/resume.pdf" },
    { name: "now", href: "/pages/now" },
    { name: "contact", href: "/pages/contact" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 p-8 flex flex-col justify-between hidden md:flex z-50">
            <div>
                <h1 className="text-2xl font-bold font-serif mb-8 text-foreground">
                    Adetola Adetunji
                </h1>
                <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => {
                        const isResume = item.name === "resume";
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                target={isResume ? "_blank" : undefined}
                                rel={isResume ? "noopener noreferrer" : undefined}
                                className={cn(
                                    "text-lg transition-colors font-serif capitalize",
                                    isActive
                                        ? "text-primary font-medium"
                                        : "text-muted-foreground hover:text-primary"
                                )}
                                onClick={(e) => {
                                    if (pathname === "/") {
                                        if (item.name === "home") {
                                            e.preventDefault();
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        } else if (item.name === "about") {
                                            e.preventDefault();
                                            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }
                                }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="space-y-4">
                <div className="text-xs">
                    <SpotifyNowPlaying />
                </div>
            </div>
        </aside>
    );
}
