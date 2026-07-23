"use client";

import { useEffect, useRef, useState } from "react";

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface CalendarData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

function getLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

const LEVEL_COLORS = [
  "var(--graph-0)",
  "var(--graph-1)",
  "var(--graph-2)",
  "var(--graph-3)",
  "var(--graph-4)",
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export default function GitHubGraph() {
  const [data, setData] = useState<CalendarData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cellSize, setCellSize] = useState(10);
  const gap = 2;

  useEffect(() => {
    fetch("/api/github")
      .then((r) => (r.ok ? r.json() : null))
      .then(setData)
      .catch(() => setData(null));
  }, []);

  useEffect(() => {
    if (!data || !containerRef.current) return;

    const calculate = () => {
      const width = containerRef.current?.clientWidth ?? 600;
      const cols = data.weeks.length;
      const size = Math.floor((width - (cols - 1) * gap) / cols);
      setCellSize(Math.max(size, 6));
    };

    calculate();
    const observer = new ResizeObserver(calculate);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [data]);

  if (!data) return null;

  const monthLabels: { label: string; col: number }[] = [];
  let lastMonth = -1;

  data.weeks.forEach((week, weekIdx) => {
    const firstDay = week.contributionDays[0];
    if (firstDay) {
      const month = new Date(firstDay.date).getMonth();
      if (month !== lastMonth) {
        monthLabels.push({ label: MONTHS[month], col: weekIdx });
        lastMonth = month;
      }
    }
  });

  return (
    <div
      ref={containerRef}
      className="border border-border rounded-md p-4 md:p-6"
    >
      <div className="relative mb-2" style={{ height: 16 }}>
        {monthLabels.map((m) => (
          <span
            key={`${m.label}-${m.col}`}
            className="absolute text-xs text-muted-foreground"
            style={{ left: m.col * (cellSize + gap) }}
          >
            {m.label}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(7, ${cellSize}px)`,
          gridAutoFlow: "column",
          gap,
          width: "fit-content",
        }}
      >
        {data.weeks.flatMap((week) =>
          week.contributionDays.map((day) => (
            <div
              key={day.date}
              title={`${day.contributionCount} contributions on ${day.date}`}
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: LEVEL_COLORS[getLevel(day.contributionCount)],
                borderRadius: 2,
              }}
            />
          ))
        )}
      </div>

      <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
        <span>
          {data.totalContributions.toLocaleString()} contributions in the last
          year
        </span>
        <div className="flex items-center gap-1">
          <span className="mr-1">Less</span>
          {LEVEL_COLORS.map((color, i) => (
            <div
              key={i}
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: color,
                borderRadius: 2,
              }}
            />
          ))}
          <span className="ml-1">More</span>
        </div>
      </div>
    </div>
  );
}
