import BentoGrid from "@/components/bento/BentoGrid";
import ProfileHero from "@/components/bento/ProfileHero";
import AboutMe from "@/components/bento/AboutMe";
import SocialsCard from "@/components/bento/SocialsCard";
import TimeLocation from "@/components/bento/TimeLocation";
import LinkCard from "@/components/bento/LinkCard";
import FloatingHeader from "@/components/FloatingHeader";
import GridBackground from "@/components/GridBackground";
import { Code, Server, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased flex items-center justify-center py-12 relative">
      <GridBackground />
      <FloatingHeader />

      <BentoGrid>
        {/* Row 1 */}
        <ProfileHero />
        <AboutMe />

        {/* Row 2 - 4 column grid with 2 rows */}
        <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-4 grid-rows-[auto_auto] gap-4">
          {/* Row 2a */}
          {/* Contact Card */}
          <div className="bg-card rounded-3xl p-6 border border-border/50 flex flex-col justify-center">
            <h3 className="font-bold text-lg mb-2">Let&apos;s start working together!</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Contact Details</p>
              <p className="text-foreground">adetolaadetunji08@gmail.com</p>
              <p>Austin, TX</p>
            </div>
          </div>

          {/* Time Location */}
          <TimeLocation />

          {/* Projects */}
          <LinkCard
            title="Projects"
            href="#projects"
            icon={<Code className="h-5 w-5" />}
          />

          {/* Resume */}
          <LinkCard
            title="Resume"
            href="/resume.pdf"
            icon={<FileText className="h-5 w-5" />}
          />

          {/* Row 2b */}
          {/* Socials - spans 2 columns */}
          <div className="md:col-span-2 [&>*]:h-full">
            <SocialsCard />
          </div>

          {/* Server Status - spans 2 columns */}
          <div className="md:col-span-2 [&>*]:h-full">
            <LinkCard
              title="Server Status"
              href="#server"
              icon={<Server className="h-5 w-5" />}
            />
          </div>
        </div>
      </BentoGrid>
    </div>
  );
}
