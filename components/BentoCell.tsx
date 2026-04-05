"use client";

import { useRef, ReactNode, useEffect } from "react";
import { cn } from "@/lib/utils";
import { applyMagneticHover } from "@/lib/bento-animations";

interface BentoCellProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
}

export function BentoCell({ 
  children, 
  className, 
  colSpan = 1, 
  rowSpan = 1 
}: BentoCellProps) {
  const cellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cellRef.current) {
      const cleanup = applyMagneticHover(cellRef.current);
      return cleanup;
    }
  }, []);

  return (
    <div
      ref={cellRef}
      className={cn(
        "bento-cell opacity-0", // opacity-0 initially for GSAP
        "relative rounded-2xl border border-border/40 bg-card overflow-hidden",
        "transition-colors hover:border-primary/50 group flex flex-col",
        {
          "md:col-span-1": colSpan === 1,
          "md:col-span-2": colSpan === 2,
          "md:col-span-3": colSpan === 3,
          "md:col-span-4": colSpan === 4,
          "row-span-1": rowSpan === 1,
          "row-span-2": rowSpan === 2,
          "row-span-3": rowSpan === 3,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
