import BentoItem from "./BentoItem";
import SpotifyNowPlaying from "@/components/SpotifyNowPlaying";

export default function NowPlayingCard() {
    return (
        <BentoItem colSpan={2} className="justify-center items-center bg-card/50">
            <div className="w-full flex justify-between items-center gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Now Playing</p>
                    <SpotifyNowPlaying />
                </div>
                {/* Visualizer bars (static for now, could be animated) */}
                <div className="flex items-end gap-1 h-8">
                    <div className="w-1 h-3 bg-primary/50 rounded-full animate-pulse" />
                    <div className="w-1 h-6 bg-primary/70 rounded-full animate-pulse delay-75" />
                    <div className="w-1 h-4 bg-primary/60 rounded-full animate-pulse delay-150" />
                    <div className="w-1 h-7 bg-primary rounded-full animate-pulse delay-100" />
                    <div className="w-1 h-5 bg-primary/80 rounded-full animate-pulse delay-200" />
                </div>
            </div>
        </BentoItem>
    );
}
