import BentoItem from "./BentoItem";

export default function AboutMe() {
    const tools = [
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "Docker",
        "GCP",
    ];

    return (
        <BentoItem colSpan={1} rowSpan={2} className="justify-between">
            <div className="space-y-4">
                <h2 className="text-xl font-bold">About me</h2>
                <p className="text-muted-foreground text-sm">
                    I&apos;m a software developer with a focus on building scalable web applications and infrastructure.
                </p>

                <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground/80">My primary tools:</p>
                    <ul className="space-y-1">
                        {tools.map((tool) => (
                            <li key={tool} className="text-muted-foreground text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {tool}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </BentoItem>
    );
}
