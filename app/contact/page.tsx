import { contacts } from "@/data/contact";

export const metadata = {
  title: "Contact | Adetola Adetunji",
  description: "Get in touch via email, LinkedIn, or GitHub.",
};

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-24 space-y-12 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both flex flex-col justify-center min-h-[calc(100vh-120px)]">
            <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold font-serif">Contact</h2>
                <div className="h-px w-full bg-border" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-muted-foreground font-serif leading-relaxed">
                        Feel free to reach out!
                    </p>

                    <div className="pt-8">
                        <h3 className="text-2xl font-bold font-serif mb-6 text-primary">Get in touch</h3>
                        <div className="space-y-6">
                            {contacts.map((contact) => (
                                <a
                                    key={contact.name}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group p-4 border border-border/40 hover:border-primary/50 bg-card/30 hover:bg-card/50 transition-all duration-300 rounded-lg"
                                >
                                    <div className="p-3 bg-primary/10 text-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                                        <contact.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium mb-1">{contact.name}</p>
                                        <p className="text-lg font-serif group-hover:text-primary transition-colors">{contact.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-center p-8 border border-border/40 bg-card/10 rounded-2xl">
                    <div className="text-center space-y-4">
                        <p className="text-muted-foreground italic font-serif">
                            “There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
