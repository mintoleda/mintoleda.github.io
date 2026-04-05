import { contacts } from "@/data/contact";
import { BentoGrid } from "@/components/BentoGrid";
import { BentoCell } from "@/components/BentoCell";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact | Adetola Adetunji",
  description: "Get in touch via email, LinkedIn, or GitHub.",
};

export default function ContactPage() {
    return (
        <div className="max-w-5xl mx-auto flex flex-col justify-center min-h-[calc(100vh-64px)] pb-24 md:pb-0">
            <BentoGrid>
                {/* Title Cell */}
                <BentoCell colSpan={4} rowSpan={1} className="p-8 md:p-10 flex items-center justify-between bg-primary/5">
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight lowercase">
                            Contact
                        </h2>
                    </div>
                    <MessageSquare size={48} className="text-primary/20 hidden md:block" />
                </BentoCell>

                {/* Contact Links */}
                {contacts.map((contact, index) => (
                    <BentoCell key={contact.name} colSpan={index === 0 ? 2 : 1} rowSpan={1} className="group">
                        <a 
                            href={contact.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col justify-between h-full p-6 md:p-8"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-secondary rounded-xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <contact.icon size={24} />
                                </div>
                                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <div>
                                <div className="text-xs font-label uppercase tracking-wider text-muted-foreground mb-1">{contact.name}</div>
                                <div className="text-xl font-heading font-medium truncate group-hover:text-primary transition-colors">{contact.value}</div>
                            </div>
                        </a>
                    </BentoCell>
                ))}

                {/* Quote Cell */}
                <BentoCell colSpan={4} rowSpan={1} className="p-8 md:p-12 flex items-center justify-center bg-card/80">
                    <div className="text-center space-y-4 max-w-2xl">
                        <p className="text-xl md:text-2xl text-foreground italic font-heading">
                            "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."
                        </p>
                        <p className="text-sm font-label text-muted-foreground uppercase tracking-widest">
                            — Albert Einstein
                        </p>
                    </div>
                </BentoCell>
            </BentoGrid>
        </div>
    );
}
