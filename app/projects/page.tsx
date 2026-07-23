import { projects } from "@/data/projects";
import Link from "next/link";

export const metadata = {
  title: "Projects | Adetola Adetunji",
  description: "A selection of my recent software engineering projects.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12 pt-20">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-sm">$ ls projects/</span>
        <a
          href="https://github.com/mintoleda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          all repos
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 border border-border rounded-md hover:border-primary/50 transition-colors"
          >
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
              {project.tags.map((tag, i) => (
                <span key={tag}>
                  {tag}
                  {i < project.tags.length - 1 && (
                    <span className="mx-1">&middot;</span>
                  )}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <footer className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          &larr; home
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          top &uarr;
        </Link>
      </footer>
    </div>
  );
}
