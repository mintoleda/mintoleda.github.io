"use client";

import { useState } from "react";
import { BentoCell } from "@/components/BentoCell";
import { Monitor, Laptop, Server, Cpu, HardDrive, MemoryStick } from "lucide-react";
import { cn } from "@/lib/utils";

const hardwareConfigs = {
  pc: {
    title: "Desktop PC",
    icon: Monitor,
    specs: [
      { category: "CPU", value: "AMD Ryzen 5 5600X", highlight: undefined, icon: Cpu },
      { category: "GPU", value: "Radeon RX 6700 XT", highlight: undefined, icon: Server },
      { category: "RAM", value: "16GB DDR4", highlight: undefined, icon: MemoryStick },
      { category: "Storage", value: "1TB SSD + 1TB HDD", highlight: undefined, icon: HardDrive },
      { category: "OS", value: "Windows", highlight: undefined, icon: Monitor },
    ],
  },
  laptop: {
    title: "ASUS Laptop",
    icon: Laptop,
    specs: [
      { category: "CPU", value: "Intel Core i9-13900H", highlight: undefined, icon: Cpu },
      { category: "GPU", value: "RTX 3050 (Mobile)", highlight: undefined, icon: Server },
      { category: "RAM", value: "16GB", highlight: undefined, icon: MemoryStick },
      { category: "Storage", value: "1TB SSD", highlight: undefined, icon: HardDrive },
      { category: "OS", value: "Arch Linux / Windows", highlight: "Arch Linux", icon: Laptop },
    ],
  },
};

type DeviceType = keyof typeof hardwareConfigs;

export function HardwareCarouselCell() {
  const [activeDevice, setActiveDevice] = useState<DeviceType>("pc");
  const config = hardwareConfigs[activeDevice];
  const ActiveIcon = config.icon;

  return (
    <BentoCell colSpan={2} rowSpan={2} className="p-6 md:p-8 flex flex-col relative overflow-hidden group">
      <div className="flex justify-between items-start text-muted-foreground mb-8 relative z-10">
        <div className="text-xs font-label uppercase tracking-wider">Hardware</div>
        
        {/* Tab Switcher */}
        <div className="flex bg-secondary/50 p-1 rounded-lg border border-border/30">
          {(["pc", "laptop"] as const).map((device) => (
            <button
              key={device}
              onClick={() => setActiveDevice(device)}
              className={cn(
                "px-3 py-1 text-xs font-label uppercase tracking-wider rounded-md transition-all duration-300",
                activeDevice === device 
                  ? "bg-card text-foreground shadow-sm border border-border/50" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {device}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-auto relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <ActiveIcon size={24} className="text-primary" />
          <h3 className="text-2xl font-heading font-medium">{config.title}</h3>
        </div>

        <div className="flex flex-col gap-3">
          {config.specs.map((spec) => {
            const SpecIcon = spec.icon;
            return (
              <div key={spec.category} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border/30 group/spec hover:bg-secondary/70 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-card border border-border/50 text-muted-foreground">
                    <SpecIcon size={14} />
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{spec.category}</div>
                </div>
                <div className="text-sm font-heading font-medium text-right">
                  {spec.highlight ? (
                    <span>
                      <span className="text-primary font-bold">{spec.highlight}</span>
                      <span className="text-muted-foreground">{" / Windows"}</span>
                    </span>
                  ) : (
                    spec.value
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BentoCell>
  );
}
