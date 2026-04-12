import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCell } from "@/components/BentoCell";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Projects | Adetola Adetunji",
  description: "A selection of my recent software engineering projects.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col justify-center min-h-[calc(100vh-64px)] pb-24 md:pb-0">
      <BentoGrid>
        {/* Title Cell - 4x1 */}
        <BentoCell colSpan={4} rowSpan={1} className="p-8 md:p-10 flex items-center justify-between bg-primary/5">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight lowercase">
              Projects
            </h2>
            <p className="text-sm font-label uppercase tracking-[0.2em] text-muted-foreground/50">
              selected work and experiments
            </p>
          </div>
        </BentoCell>

        {/* Project Cells */}
        {projects.map((project, index) => {
          // Make the first project take 4 cols, others take 2
          const isFeatured = index === 0;
          return (
            <BentoCell 
              key={index} 
              colSpan={isFeatured ? 4 : 2} 
              rowSpan={isFeatured ? 2 : 1}
              className="group"
            >
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full p-6 md:p-8 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-heading font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-2 bg-secondary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                
                <p className="text-muted-foreground font-body mb-8 text-lg">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-secondary/50 text-secondary-foreground font-label text-xs uppercase tracking-wider rounded-md border border-border/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </BentoCell>
          );
        })}

        {/* GitHub Link Cell */}
        <BentoCell colSpan={4} rowSpan={1} className="p-6 md:p-8 flex items-center justify-center hover:bg-secondary/20 transition-colors">
          <a 
            href="https://github.com/mintoleda" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-label uppercase tracking-widest text-sm"
          >
            View all on GitHub <ArrowUpRight size={16} />
          </a>
        </BentoCell>
      </BentoGrid>
    </div>
  );
}