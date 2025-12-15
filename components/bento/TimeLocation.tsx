"use client";

import BentoItem from "./BentoItem";
import { useEffect, useState } from "react";

export default function TimeLocation() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: "America/Chicago", // Austin time
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <BentoItem colSpan={1} className="justify-center items-center">
            <div className="text-center space-y-1">
                <h3 className="text-3xl font-serif font-medium">{time}</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Austin, TX
                </p>
            </div>
        </BentoItem>
    );
}
