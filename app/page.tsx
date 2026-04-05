import ParticleImage from "@/components/ParticleImage";
import ExpandableVerse from "@/components/ExpandableVerse";
import HeroArrow from "@/components/HeroArrow";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-4 md:py-0 min-h-[calc(100vh+60px)] md:min-h-0 flex flex-col justify-start md:justify-center relative">
      <section id="home" className="flex flex-col md:justify-center justify-start pt-12 md:pt-0 relative pb-12 md:min-h-screen animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="absolute inset-0 z-0 overflow-hidden mix-blend-overlay opacity-20">
          <ParticleImage />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight">
            Adetola<span id="name-gap" className="inline-block w-[0.2em]"></span>Adetunji
          </h1>
          <div className="h-px w-full bg-border max-w-md" />

          <blockquote className="text-xl md:text-2xl text-muted-foreground italic font-serif max-w-2xl border-l-2 border-primary pl-6 py-2">
            &quot;When will you consider the possibility that you are exactly who you want to be?&quot;
            <footer className="text-sm text-muted-foreground mt-2 not-italic font-sans">
              — Charles Yu, Sorry, Please, Thank You: Stories
            </footer>
          </blockquote>
        </div>

        <HeroArrow />
      </section>

      <section id="about" className="flex flex-col justify-center relative py-24 min-h-screen">
        <div className="space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold font-serif">About</h2>
          <div className="h-px w-full bg-border" />

          <div className="border border-border p-8 md:p-12 rounded-none bg-card/50 backdrop-blur-sm">
            <ul className="space-y-4 list-disc list-inside text-lg md:text-xl text-muted-foreground marker:text-primary font-serif">
              <li>
                I&apos;m currently studying Computer Science at the University of Texas at Austin, with a minor in Statistics and Data Science, and a concentration in Machine Learning & AI.
              </li>
              <li>
                My favorite color is{" "}
                <span className="relative group inline-block cursor-help">
                  <span className="text-primary font-bold">Green</span>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-bold text-primary-foreground bg-primary rounded-md opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 group-active:translate-y-0 pointer-events-none whitespace-nowrap z-50">
                    duh.
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></span>
                  </span>
                </span>
                .
              </li>
              <li>
                I love <a href="https://stats.fm/mintoleda" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">listening to music</a> and{" "}
                <span className="relative group inline-block cursor-help">
                  <span className="text-primary font-bold">playing instruments</span>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-bold text-primary-foreground bg-primary rounded-md opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 group-active:translate-y-0 pointer-events-none whitespace-nowrap z-50">
                    saxophone and piano for 10+ years
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></span>
                  </span>
                </span>.
              </li>
              <li>
                I enjoy playing chess and Tetris.
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold font-serif mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <ExpandableVerse />
          </div>
        </div>
      </section>
    </div>
  );
}
