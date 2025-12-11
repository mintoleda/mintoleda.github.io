import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import SpotifyNowPlaying from "./SpotifyNowPlaying";

export default function Footer() {
    return (
        <footer className="border-t py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container flex flex-col items-center gap-8 text-center">
                <div className="flex gap-6">
                    <Link href="https://github.com/mintoleda" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/adetola-adetunji/" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:adetolaadetunji08@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Adetola Adetunji. Built with Next.js, Tailwind & Shadcn UI.
                    </p>
                    <div className="flex justify-center pt-2">
                        <SpotifyNowPlaying />
                    </div>
                </div>
            </div>
        </footer>
    );
}
