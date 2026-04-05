"use client";

import { useState } from "react";
import { BentoCell } from "@/components/BentoCell";
import { Palette, ArrowRight } from "lucide-react";

const themes = [
  {
    name: "Kanagawa (Wave)",
    colors: ["#1F1F28", "#DCD7BA", "#957FB8", "#6A9589", "#2D4F67"],
    background: "from-[#1F1F28]/10 to-[#2D4F67]/10",
  },
  {
    name: "Everforest",
    colors: ["#2d353b", "#d3c6aa", "#a7c080", "#7fbbb3", "#e67e80"],
    background: "from-[#2d353b]/10 to-[#7fbbb3]/10",
  },
  {
    name: "Kansō (Ink)",
    colors: ["#14171d", "#C5C9C7", "#7FB4CA", "#8a9a7b", "#c4746e"],
    background: "from-[#14171d]/10 to-[#7FB4CA]/10",
  },
];

export function ThemeCarouselCell() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTheme = themes[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <BentoCell colSpan={2} rowSpan={1} disableHoverEffect={true} className={`p-6 md:p-8 flex flex-col justify-between transition-colors duration-500 bg-gradient-to-br ${activeTheme.background}`}>
      <div className="flex justify-between items-start text-muted-foreground mb-6">
        <div className="text-xs font-label uppercase tracking-wider">Themes</div>
        <Palette size={18} />
      </div>
      
      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex items-end justify-between">
            <div className="space-y-3">
                <div className="text-lg font-heading font-medium transition-all duration-300">
                    {activeTheme.name}
                </div>
                <div className="flex gap-2">
                    {activeTheme.colors.map((color, idx) => (
                    <div 
                        key={`${activeTheme.name}-${idx}`} 
                        className="w-5 h-5 rounded-full border border-border/20 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                    />
                    ))}
                </div>
            </div>
            
            <button 
                onClick={handleNext}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-label text-xs uppercase tracking-wider transition-colors"
            >
                Next <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>
      </div>
    </BentoCell>
  );
}
