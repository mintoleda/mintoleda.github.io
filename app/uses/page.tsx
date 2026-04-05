import { BentoGrid } from "@/components/BentoGrid";
import { BentoCell } from "@/components/BentoCell";
import { ThemeCarouselCell } from "@/components/ThemeCarouselCell";
import { HardwareCarouselCell } from "@/components/HardwareCarouselCell";
import { ArrowUpRight, Code, Monitor } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Uses | Adetola Adetunji",
  description: "Tools, gear, and software I use daily.",
};

const software = [
  { category: "Editor", name: "Neovim", detail: "Lightweight & extensible", href: "https://neovim.io/" },
  { category: "Terminal", name: "foot", detail: "Custom fork w/ tabs", href: "https://codeberg.org/dnkl/foot" },
  { category: "Shell", name: "zsh", detail: "With Oh My Zsh", href: "https://www.zsh.org/", detailLink: "https://ohmyz.sh/" },
  { category: "Font", name: "Liga SFMono", detail: "Monospace with ligatures", href: "https://github.com/shaunsingh/SFMono-Nerd-Font-Ligaturized" },
];

export default function UsesPage() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col justify-center min-h-[calc(100vh-64px)] pb-24 md:pb-0">
      <BentoGrid>
        {/* Title Cell */}
        <BentoCell colSpan={4} rowSpan={1} className="p-8 md:p-10 flex items-center justify-between bg-primary/5">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight lowercase">
              Uses
            </h2>
          </div>
          <Monitor size={48} className="text-primary/20 hidden md:block" />
        </BentoCell>

        {/* Software Cell */}
        <BentoCell colSpan={2} rowSpan={1} className="p-6 md:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start text-muted-foreground mb-6">
            <div className="text-xs font-label uppercase tracking-wider">Software</div>
            <Code size={18} />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-auto">
            {software.map((item) => (
              <div key={item.category} className="p-3 rounded-lg bg-secondary/50 border border-border/30">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.category}</div>
                {item.href ? (
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-heading font-medium text-primary hover:text-primary/80 transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <div className="text-sm font-heading font-medium">{item.name}</div>
                )}
                <div className="text-xs text-muted-foreground mt-0.5">
                  {item.detailLink ? (
                    <>With <Link href={item.detailLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Oh My Zsh</Link></>
                  ) : (
                    item.detail
                  )}
                </div>
              </div>
            ))}
          </div>
        </BentoCell>

        {/* Hardware Cell */}
        <HardwareCarouselCell />

        {/* Themes Cell */}
        <ThemeCarouselCell />

        {/* Meta Cell */}
        <BentoCell colSpan={4} rowSpan={1} className="p-6 md:p-8 flex items-center justify-between bg-secondary/10">
          <p className="text-sm font-label text-muted-foreground uppercase tracking-widest">
            Last updated: April 2026
          </p>
          <a
            href="https://uses.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-label uppercase tracking-widest text-sm hover:text-primary/80 transition-colors"
          >
            what is a /uses page? <ArrowUpRight size={16} />
          </a>
        </BentoCell>
      </BentoGrid>
    </div>
  );
}
