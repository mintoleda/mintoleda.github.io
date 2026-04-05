import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Adetola Adetunji",
  description: "A selection of my recent software engineering projects.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
      <div>
        <h2 className="text-5xl md:text-7xl font-bold font-serif mb-8">
          Projects
        </h2>
        <div className="h-px w-full bg-border" />
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              href={project.href}
              imageSrc={project.imageSrc}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}