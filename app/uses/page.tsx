import Link from "next/link";

export const metadata = {
  title: "Uses | Adetola Adetunji",
  description: "Tools, gear, and software I use daily.",
};

const software = [
  { label: "editor", value: "neovim" },
  { label: "terminal", value: "foot" },
  { label: "shell", value: "bash" },
  { label: "compositor", value: "niri" },
  { label: "os", value: "nixos" },
  { label: "font", value: "liga sfmono nerd font" },
  { label: "browser", value: "firefox" },
  { label: "theme", value: "kanso" },
];

const hardware = [
  { label: "laptop", value: "asus vivobook pro — i9-13900H, rtx 3050, 16gb" },
  { label: "desktop", value: "ryzen 5 5600x, rx 6700 xt, 16gb" },
];

export default function UsesPage() {
  return (
    <div className="space-y-12 pt-20">
      <span className="text-muted-foreground text-sm">$ cat uses.md</span>

      <section className="space-y-4">
        <h2 className="text-sm text-primary uppercase tracking-wider">
          software
        </h2>
        <div className="border border-border rounded-md divide-y divide-border">
          {software.map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-4">
              <span className="text-sm text-muted-foreground w-24 shrink-0">
                {item.label}
              </span>
              <span className="text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm text-primary uppercase tracking-wider">
          hardware
        </h2>
        <div className="border border-border rounded-md divide-y divide-border">
          {hardware.map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-4">
              <span className="text-sm text-muted-foreground w-24 shrink-0">
                {item.label}
              </span>
              <span className="text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          &larr; home
        </Link>
        <a
          href="https://uses.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          what is a /uses page?
        </a>
      </footer>
    </div>
  );
}
