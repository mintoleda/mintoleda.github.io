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
    title: "InboxOrganizer",
    description:
      "Label emails through Gmail with AI using Google Cloud Platform.",
    tags: ["AI", "Automation", "GCP"],
    link: "https://github.com/mintoleda/InboxOrganizer",
    github: "https://github.com/mintoleda/InboxOrganizer",
  },
  {
    title: "dotfiles",
    description: "My personal system configuration files managed by chezmoi.",
    tags: ["Linux", "Config", "Shell"],
    link: "https://github.com/mintoleda/dotfiles",
    github: "https://github.com/mintoleda/dotfiles",
  },
  {
    title: "ToDoList",
    description:
      "A simple and effective Todo list application built with React.",
    tags: ["React", "Web App", "JavaScript"],
    link: "https://github.com/mintoleda/ToDoList",
    github: "https://github.com/mintoleda/ToDoList",
  },
  {
    title: "WeatherApp",
    description:
      "Online weather application fetching real-time data from an API.",
    tags: ["Web App", "API", "JavaScript"],
    link: "https://adetola.dev/demos/weatherapp",
    github: "https://github.com/mintoleda/WeatherApp",
  },
  {
    title: "mintoleda.github.io",
    description:
      "My personal portfolio website built with Next.js and Shadcn UI.",
    tags: ["Next.js", "Portfolio", "TypeScript"],
    link: "https://mintoleda.github.io",
    github: "https://github.com/mintoleda/mintoleda.github.io",
  },
  {
    title: "server",
    description:
      "Containerized server infrastructure for self-hosting services.",
    tags: ["Docker", "Infrastructure", "Self-Hosted"],
    link: "https://github.com/mintoleda/server",
    github: "https://github.com/mintoleda/server",
  },
  {
    title: "RESTful-Spotify-API",
    description:
      "A Vercel serverless function that fetches your Spotify 'Currently Playing' track data securely.",
    tags: ["Vercel", "API", "Node.js"],
    link: "https://rest-ful-spotify-api.vercel.app/api/now-playing",
    github: "https://github.com/mintoleda/RESTful-Spotify-API",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-24 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A collection of things I've built, broken, and fixed again.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
          >
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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
