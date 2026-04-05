export const metadata = {
  title: "Now | Adetola Adetunji",
  description: "What I'm currently up to.",
};

export default function NowPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
      <h2 className="text-5xl md:text-7xl font-bold font-serif">Now</h2>
      <div className="h-px w-full bg-border" />

      <div className="border border-border p-8 md:p-12 rounded-none bg-card/50 backdrop-blur-sm space-y-8">
        <section className="space-y-4">
          <h3 className="text-2xl font-serif font-bold text-primary">
            finishing up school
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            weekly exams; rewatching The Flash on Nextflix
          </p>
        </section>

        <p className="text-sm text-muted-foreground italic font-serif pt-8 border-t border-border">
          Last updated: April 2026
        </p>

        <div className="-mt-3">
          <a
            href="https://sive.rs/nowff"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/60 hover:text-primary transition-colors font-serif italic underline decoration-muted-foreground/30 underline-offset-4"
          >
            what is a /now page?
          </a>
        </div>
      </div>
    </div>
  );
}
