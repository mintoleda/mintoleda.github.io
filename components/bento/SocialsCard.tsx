import BentoItem from "./BentoItem";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SocialsCard() {
    return (
        <BentoItem colSpan={1} className="justify-center items-center">
            <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <Link href="https://github.com/mintoleda" target="_blank">
                        <Github className="h-5 w-5" />
                    </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full" asChild>
                    <Link href="https://www.linkedin.com/in/adetola-adetunji/" target="_blank">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </BentoItem>
    );
}
