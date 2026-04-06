import Terminal from "@/components/Terminal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminal | Adetola Adetunji",
  description: "Interactive CLI for adetola.dev",
};

export default function TerminalPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center min-h-[calc(100vh-64px)] pb-24 md:pb-0">
      <div className="h-[80vh] w-full">
        <Terminal />
      </div>
    </div>
  );
}
