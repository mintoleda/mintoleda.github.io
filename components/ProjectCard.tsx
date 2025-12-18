import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    imageSrc?: string;
    tags?: string[];
}

export default function ProjectCard({ title, description, href, imageSrc, tags }: ProjectCardProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-none border border-border bg-card transition-all hover:border-primary/50"
        >
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                        <span className="text-4xl font-bold">?</span>
                    </div>
                )}
            </div>
            <div className="p-4 space-y-3">
                <div className="space-y-1">
                    <h3 className="text-lg font-bold font-serif group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
                </div>

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase border border-primary/20 text-primary/80 bg-primary/5 rounded-none"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}
