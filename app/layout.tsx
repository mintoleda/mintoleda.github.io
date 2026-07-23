import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adetola Adetunji",
  description:
    "Personal portfolio and software engineering projects by Adetola Adetunji.",
  openGraph: {
    title: "Adetola Adetunji",
    description:
      "Personal portfolio and software engineering projects by Adetola Adetunji.",
    url: "https://mintoleda.github.io",
    siteName: "Adetola Adetunji",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="antialiased">
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main className="max-w-3xl mx-auto px-6 pb-20">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
