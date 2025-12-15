import BentoItem from "./BentoItem";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function ProfileHero() {
    return (
        <BentoItem colSpan={3} rowSpan={2} className="justify-between">
            <div className="space-y-4 z-10">
                <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">welcome</p>
                    <h1 className="text-3xl font-bold leading-tight">
                        Hi, I&apos;m <span className="text-primary">Adetola Adetunji</span>.
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Undergraduate Student in Austin.
                    </p>
                    <p className="text-muted-foreground/80 max-w-md">
                        Passionate about building software that solves real-world problems.
                        Feel free to reach out if you have any projects in mind.
                    </p>
                </div>

                <div className="flex gap-3 pt-4">
                    <Button className="rounded-full" asChild>
                        <a href="mailto:adetolaadetunji08@gmail.com">
                            <Mail className="mr-2 h-4 w-4" /> Contact Me
                        </a>
                    </Button>
                </div>
            </div>

            {/* Decorative gradient or image placeholder */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl -z-0" />
        </BentoItem>
    );
}
