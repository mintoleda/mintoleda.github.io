"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { magneticSnapEntrance } from "@/lib/bento-animations";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current) {
      magneticSnapEntrance(containerRef.current.querySelectorAll(".bento-cell"));
    }
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className={cn(
        "grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(150px,auto)] gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}
