import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adetola Adetunji | Software Engineer",
  description: "Personal portfolio and software engineering projects by Adetola Adetunji.",
  openGraph: {
    title: "Adetola Adetunji | Software Engineer",
    description: "Personal portfolio and software engineering projects by Adetola Adetunji.",
    url: "https://mintoleda.github.io",
    siteName: "Adetola Adetunji",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "@/components/Sidebar";
import FloatingHeader from "@/components/FloatingHeader";
import FontToggle from "@/components/FontToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-font="space" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body
        className="antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-primary-foreground">
            <Sidebar />
            <div className="md:hidden">
              <FloatingHeader />
            </div>
            <main className="md:ml-64 min-h-screen relative p-4 md:p-8">
              {children}
            </main>
            <FontToggle />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
