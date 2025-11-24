import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ServerStatus from "@/components/ServerStatus";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Projects />
        <ServerStatus />
      </main>
      <Footer />
    </div>
  );
}
