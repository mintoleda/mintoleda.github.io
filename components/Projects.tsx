import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Rhythm API",
        description: "A RESTful API for music metadata and playlist management. Built with Node.js and PostgreSQL.",
        tags: ["Node.js", "PostgreSQL", "Express"],
        link: "#",
        github: "#",
    },
    {
        title: "BeatBox Sequencer",
        description: "Browser-based drum machine and sequencer. Create beats directly in your browser.",
        tags: ["React", "Web Audio API", "Tailwind"],
        link: "#",
        github: "#",
    },
    {
        title: "Echo Server",
        description: "A lightweight, self-hosted file sharing server with end-to-end encryption.",
        tags: ["Go", "Docker", "Redis"],
        link: "#",
        github: "#",
    },
    {
        title: "Vinyl Vault",
        description: "Catalog your vinyl collection and track market values in real-time.",
        tags: ["Next.js", "Prisma", "Discogs API"],
        link: "#",
        github: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="container py-24 space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    A collection of things I've built, broken, and fixed again.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="font-normal">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> Code
                                </a>
                            </Button>
                            <Button size="sm" className="flex-1" asChild>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
