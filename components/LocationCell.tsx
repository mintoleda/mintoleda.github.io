import { MapPin } from "lucide-react";

export function LocationCell() {
  return (
    <div className="flex flex-col h-full justify-between p-6 relative overflow-hidden group">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Austin_Texas_map.png')] bg-cover bg-center grayscale mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
      <div className="relative z-10 flex items-center justify-between text-muted-foreground">
        <span className="text-xs font-label uppercase tracking-wider">Base</span>
        <MapPin size={16} className="text-primary" />
      </div>
      <div className="relative z-10 flex flex-col mt-auto">
        <span className="text-2xl font-heading font-medium tracking-tight text-foreground">
          Austin, Texas
        </span>
        <span className="text-sm font-label text-muted-foreground">University of Texas</span>
      </div>
    </div>
  );
}
