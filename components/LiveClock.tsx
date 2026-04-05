"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Chicago",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };
    
    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col h-full justify-between p-6">
      <div className="flex items-center justify-between text-muted-foreground">
        <span className="text-xs font-label uppercase tracking-wider">Local Time</span>
        <Clock size={16} />
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-heading font-medium tracking-tight text-foreground">
          {time || "Loading..."}
        </span>
        <span className="text-sm font-label text-muted-foreground">Austin, TX (CST)</span>
      </div>
    </div>
  );
}
