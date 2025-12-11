import BentoItem from "./BentoItem";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface LinkCardProps {
    title: string;
    href: string;
    icon?: React.ReactNode;
    className?: string;
    bgImage?: string;
}

export default function LinkCard({ title, href, icon, className, bgImage }: LinkCardProps) {
    return (
        <Link href={href} target="_blank" className="contents">
            <BentoItem className={`group cursor-pointer hover:border-primary/50 transition-colors ${className}`}>
                <div className="flex justify-between items-start z-10">
                    <div className="p-2 bg-background/50 backdrop-blur-md rounded-full">
                        {icon}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="mt-auto z-10">
                    <h3 className="font-medium text-lg">{title}</h3>
                </div>

                {bgImage && (
                    <div
                        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                )}
            </BentoItem>
        </Link>
    );
}
