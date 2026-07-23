import { contacts } from "@/data/contact";
import Link from "next/link";

export const metadata = {
  title: "Contact | Adetola Adetunji",
  description: "Get in touch via email, LinkedIn, or GitHub.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 pt-20">
      <span className="text-muted-foreground text-sm">$ cat contact.md</span>

      <div className="border border-border rounded-md divide-y divide-border">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-20">
                {contact.name.toLowerCase()}
              </span>
              <span className="text-foreground group-hover:text-primary transition-colors">
                {contact.value}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {contact.description}
            </span>
          </a>
        ))}
      </div>

      <footer className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          &larr; home
        </Link>
      </footer>
    </div>
  );
}
