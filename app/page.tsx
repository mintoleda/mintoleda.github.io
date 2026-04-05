import { BentoGrid } from "@/components/BentoGrid";
import { BentoCell } from "@/components/BentoCell";
import { LiveClock } from "@/components/LiveClock";
import { LocationCell } from "@/components/LocationCell";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";
import FavoriteAlbums from "@/components/FavoriteAlbums";
import { skills } from "@/data/skills";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Code,
  Disc,
  Gamepad2,
  GraduationCap,
  Monitor,
  Music,
  Terminal,
} from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col justify-center min-h-[calc(100vh-64px)] pb-24 md:pb-0">
      <BentoGrid>
        {/* Intro Cell - 2x2 */}
        <BentoCell
          colSpan={2}
          rowSpan={2}
          className="p-8 md:p-10 flex flex-col justify-between group overflow-hidden bg-gradient-to-br from-card to-card/50"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_60%)] opacity-5 group-hover:opacity-10 transition-opacity duration-700" />
          <div className="space-y-4 z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[1.1]">
              Adetola
              <br />
              <span className="text-muted-foreground">Adetunji</span>
            </h1>
            <p className="text-base md:text-lg font-body text-muted-foreground max-w-md leading-relaxed">
              software engineer studying cs & data science at ut austin. i play
              saxophone and experiment with my{" "}
              <a
                href="https://github.com/mintoleda/dotfiles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 decoration-primary/50 transition-colors"
              >
                hyprland config
              </a>
              .
            </p>
          </div>
          <div className="mt-12 z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-label text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </BentoCell>

        {/* Quote Cell - 2x1 */}
        <BentoCell
          colSpan={2}
          rowSpan={1}
          className="p-6 md:p-8 flex flex-col justify-center bg-card/80"
        >
          <blockquote className="text-xl md:text-2xl text-foreground font-heading italic">
            &quot;When will you consider the possibility that you are exactly
            who you want to be?&quot;
          </blockquote>
          <footer className="text-sm font-label text-muted-foreground mt-4 uppercase tracking-widest">
            — Charles Yu
          </footer>
        </BentoCell>

        {/* Education Cell - 1x1 */}
        <BentoCell
          colSpan={1}
          rowSpan={1}
          className="p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start text-muted-foreground">
            <span className="text-xs font-label uppercase tracking-wider">
              Education
            </span>
            <GraduationCap size={18} />
          </div>
          <div>
            <div className="text-xl font-heading font-medium">
              CS @ UT Austin
            </div>
            <div className="text-sm font-body text-muted-foreground mt-1">
              Minor in Stats & Data Science. ML & AI focus.
            </div>
          </div>
        </BentoCell>

        {/* Location Cell - 1x1 */}
        <BentoCell colSpan={1} rowSpan={1}>
          <LocationCell />
        </BentoCell>

        {/* Skills Cell - 2x1 */}
        <BentoCell
          colSpan={2}
          rowSpan={1}
          className="p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start text-muted-foreground mb-4">
            <span className="text-xs font-label uppercase tracking-wider">
              Tech Stack
            </span>
            <Code size={18} />
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
            {skills.slice(0, 10).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-secondary text-secondary-foreground font-label text-xs uppercase tracking-wider rounded-md border border-border/50"
              >
                {skill}
              </span>
            ))}
            <Link
              href="/projects"
              className="px-3 py-1.5 text-primary font-label text-xs uppercase tracking-wider rounded-md hover:bg-primary/10 transition-colors flex items-center gap-1"
            >
              + More <ArrowUpRight size={12} />
            </Link>
          </div>
        </BentoCell>

        {/* Music/Hobbies Cells - 1x1 each */}
        <BentoCell
          colSpan={1}
          rowSpan={1}
          className="p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start text-muted-foreground">
            <span className="text-xs font-label uppercase tracking-wider">
              Music
            </span>
            <Music size={18} />
          </div>
          <div className="mt-auto">
            <div className="text-lg font-heading font-medium">
              Saxophone & Piano
            </div>
            <div className="text-sm font-body text-muted-foreground mt-1">
              Playing for 10+ years.
            </div>
          </div>
        </BentoCell>

        <BentoCell
          colSpan={1}
          rowSpan={1}
          className="p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start text-muted-foreground">
            <span className="text-xs font-label uppercase tracking-wider">
              Play
            </span>
            <Gamepad2 size={18} />
          </div>
          <div className="mt-auto">
            <div className="text-lg font-heading font-medium">
              Chess & Tetris
            </div>
            <div className="text-sm font-body text-muted-foreground mt-1">
              Always up for a match.
            </div>
          </div>
        </BentoCell>

        <BentoCell colSpan={2} rowSpan={1}>
          <LiveClock />
        </BentoCell>

        {/* Now Playing - 1x1 */}
        <BentoCell
          colSpan={1}
          rowSpan={1}
          className="p-6 flex flex-col justify-center bg-secondary/30"
        >
          <SpotifyNowPlaying />
        </BentoCell>

        {/* Currently Reading - 1x1 */}
        <BentoCell
          colSpan={1}
          rowSpan={1}
          className="p-6 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start text-muted-foreground">
            <span className="text-xs font-label uppercase tracking-wider">
              Reading
            </span>
            <BookOpen size={18} />
          </div>
          <div className="mt-auto">
            <div className="text-lg font-heading font-medium">Dune</div>
            <div className="text-sm font-body text-muted-foreground mt-1">
              by Frank Herbert
            </div>
          </div>
        </BentoCell>

        {/* Favorite Albums */}
        <FavoriteAlbums />

        {/* Uses Link - 2x1 */}
        <BentoCell
          colSpan={2}
          rowSpan={1}
          className="p-6 flex flex-col justify-center items-center text-center group"
        >
          <div className="space-y-2">
            <div className="flex justify-center items-center gap-2 text-muted-foreground">
              <Monitor size={18} />
              <span className="text-xs font-label uppercase tracking-wider">
                My Setup
              </span>
            </div>
            <Link
              href="/uses"
              className="text-2xl font-heading font-medium text-primary group-hover:text-primary/80 transition-colors flex items-center justify-center gap-2"
            >
              View my uses <ArrowUpRight size={20} />
            </Link>
          </div>
        </BentoCell>
      </BentoGrid>
    </div>
  );
}
