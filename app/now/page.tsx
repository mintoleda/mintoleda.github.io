import { BentoGrid } from "@/components/BentoGrid";
import { BentoCell } from "@/components/BentoCell";
import { ArrowUpRight, Clock, Tv } from "lucide-react";

export const metadata = {
  title: "Now | Adetola Adetunji",
  description: "What I'm currently up to.",
};

export default function NowPage() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col justify-center min-h-[calc(100vh-64px)] pb-24 md:pb-0">
      <BentoGrid>
        {/* Title Cell */}
        <BentoCell colSpan={4} rowSpan={1} className="p-8 md:p-10 flex items-center justify-between bg-primary/5">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
              Now
            </h2>
            <p className="text-muted-foreground font-body">What I'm currently focused on.</p>
          </div>
          <Clock size={48} className="text-primary/20 hidden md:block" />
        </BentoCell>

        {/* Status Cell */}
        <BentoCell colSpan={2} rowSpan={1} className="p-6 md:p-8 flex flex-col justify-between">
          <div className="text-xs font-label uppercase tracking-wider text-muted-foreground mb-6">Current Focus</div>
          <div>
            <h3 className="text-2xl font-heading font-medium text-foreground">finishing up school</h3>
            <p className="text-muted-foreground font-body mt-2">weekly exams and final projects.</p>
          </div>
        </BentoCell>

        {/* Leisure Cell */}
        <BentoCell colSpan={2} rowSpan={1} className="p-6 md:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start text-muted-foreground mb-6">
            <div className="text-xs font-label uppercase tracking-wider">Leisure</div>
            <Tv size={18} />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-medium text-foreground">The Flash</h3>
            <p className="text-muted-foreground font-body mt-2">rewatching on Netflix.</p>
          </div>
        </BentoCell>

        {/* Meta Cell */}
        <BentoCell colSpan={4} rowSpan={1} className="p-6 md:p-8 flex items-center justify-between bg-secondary/10">
          <p className="text-sm font-label text-muted-foreground uppercase tracking-widest">
            Last updated: April 2026
          </p>
          <a
            href="https://sive.rs/nowff"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-label uppercase tracking-widest text-sm hover:text-primary/80 transition-colors"
          >
            what is a /now page? <ArrowUpRight size={16} />
          </a>
        </BentoCell>
      </BentoGrid>
    </div>
  );
}
