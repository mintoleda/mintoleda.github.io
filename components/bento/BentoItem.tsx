import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    colSpan?: number;
    rowSpan?: number;
}

export default function BentoItem({
    children,
    className,
    colSpan = 1,
    rowSpan = 1,
}: BentoItemProps) {
    return (
        <div
            className={cn(
                "bg-card text-card-foreground rounded-3xl border border-border/50 p-6 flex flex-col relative overflow-hidden",
                colSpan === 2 && "md:col-span-2 lg:col-span-2",
                colSpan === 3 && "md:col-span-2 lg:col-span-3",
                colSpan === 4 && "md:col-span-3 lg:col-span-4", // Full width
                rowSpan === 2 && "md:row-span-2",
                className
            )}
        >
            {children}
        </div>
    );
}
