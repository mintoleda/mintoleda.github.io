import Link from "next/link";

export const metadata = {
  title: "Now | Adetola Adetunji",
  description: "What I'm currently up to.",
};

const items = [
  {
    label: "focus",
    value: "summer",
  },
  {
    label: "building",
    value: "talos",
    href: "https://github.com/mintoleda/talos",
  },
  { label: "watching", value: "on hiatus" },
  { label: "reading", value: "dune — frank herbert" },
];

export default function NowPage() {
  return (
    <div className="space-y-12 pt-20">
      <span className="text-muted-foreground text-sm">$ cat now.md</span>

      <div className="border border-border rounded-md divide-y divide-border">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4 p-4">
            <span className="text-sm text-muted-foreground w-20 shrink-0">
              {item.label}
            </span>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-foreground">{item.value}</span>
            )}
          </div>
        ))}
      </div>

      <div className="text-sm text-muted-foreground">
        last updated: july 2026
      </div>

      <footer className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          &larr; home
        </Link>
        <a
          href="https://sive.rs/nowff"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          what is a /now page?
        </a>
      </footer>
    </div>
  );
}
