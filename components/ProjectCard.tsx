import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    imageSrc?: string;
    tags?: string[];
}

export default function ProjectCard({ title, description, href, imageSrc }: ProjectCardProps) {
    return (
        <Link
            href={href}
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
            <div className="p-4">
                <h3 className="text-lg font-bold font-serif mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            </div>
        </Link>
    );
}
