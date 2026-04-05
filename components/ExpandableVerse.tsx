"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ExpandableVerse() {
    const [isVerseExpanded, setIsVerseExpanded] = useState(false);

    return (
        <div
            className="mt-8 pt-8 border-t border-border group w-fit cursor-pointer"
            onClick={() => setIsVerseExpanded(!isVerseExpanded)}
        >
            <div className="cursor-help w-fit">
                <span className={cn(
                    "text-sm font-sans text-primary/80 font-medium transition-colors duration-300",
                    "group-hover:text-primary",
                    isVerseExpanded && "text-primary"
                )}>
                    — Isaiah 58:9-11
                </span>
            </div>
            <div
                className={cn(
                    "grid transition-all duration-1000 ease-in-out",
                    isVerseExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
                )}
            >
                <div className="overflow-hidden">
                    <blockquote className="font-serif italic text-muted-foreground text-lg leading-relaxed pt-4">
                        &quot;Then you shall call, and the Lord will answer;
                        you shall cry, and he will say, ‘Here I am.’
                        If you take away the yoke from your midst,
                        the pointing of the finger, and speaking wickedness,
                        if you pour yourself out for the hungry
                        and satisfy the desire of the afflicted,
                        then shall your light rise in the darkness
                        and your gloom be as the noonday.
                        And the Lord will guide you continually
                        and satisfy your desire in scorched places
                        and make your bones strong;
                        and you shall be like a watered garden,
                        like a spring of water,
                        whose waters do not fail.&quot;
                    </blockquote>
                </div>
            </div>
        </div>
    );
}