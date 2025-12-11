import BentoItem from "./BentoItem";
import Image from "next/image";

export default function MapCard() {
    return (
        <BentoItem colSpan={1} rowSpan={2} className="p-0 relative min-h-[200px]">
            <div className="absolute inset-0 bg-muted/50 flex items-center justify-center">
                <span className="text-muted-foreground text-xs">Map Placeholder</span>
            </div>
            {/* In a real app, use Mapbox or Google Maps static image here */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md p-3 rounded-xl border border-border/50">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-xs font-medium">Austin, TX</p>
                </div>
            </div>
        </BentoItem>
    );
}
