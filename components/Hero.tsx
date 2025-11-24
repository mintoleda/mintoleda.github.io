import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Music } from "lucide-react";

export default function Hero() {
    return (
        <section id="about" className="container flex flex-col items-center justify-center gap-6 py-24 md:py-32 lg:py-40 text-center">
            <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center gap-2">
                <Music className="h-4 w-4 text-primary" />
                <span>Coding to the rhythm</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl max-w-3xl">
                Building software with <span className="text-primary">harmony</span> and precision.
            </h1>

            <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal sm:text-2xl sm:leading-8">
                I'm a software developer who loves open source, self-hosting, and good music.
                Turning coffee into code and beats into bugs... wait, features.
            </p>

            <div className="flex gap-4">
                <Button size="lg" asChild>
                    <a href="#projects">
                        View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <a href="#server">
                        <Code className="mr-2 h-4 w-4" /> Server Status
                    </a>
                </Button>
            </div>

            {/* Visual Element: Audio Waveform Mockup */}
            <div className="mt-16 flex items-end justify-center gap-1 h-16 w-full max-w-md opacity-50">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="w-2 bg-primary rounded-t-sm animate-pulse"
                        style={{
                            height: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.1}s`
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
