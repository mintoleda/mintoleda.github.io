"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { contacts } from "@/data/contact";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const COMMANDS = {
  help: "help",
  about: "about",
  skills: "skills",
  projects: "projects",
  contact: "contact",
  clear: "clear",
  date: "date",
  whoami: "whoami",
  echo: "echo",
  resume: "resume",
  uses: "uses",
  now: "now",
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-focus input on click anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Initial welcome message
  useEffect(() => {
    setHistory([
      {
        command: "",
        output: (
          <div className="mb-4">
            <div className="text-primary font-bold">
              Adetola OS (v1.0.0)
            </div>
            <div>Welcome to terminal.adetola.dev. Type 'help' to see available commands.</div>
          </div>
        ),
      },
    ]);
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmdStr: string) => {
    const trimmedCmd = cmdStr.trim();
    if (!trimmedCmd) return;

    // Add to command history
    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1); // Reset history index

    const [cmd, ...args] = trimmedCmd.split(" ");
    let output: React.ReactNode = null;

    switch (cmd.toLowerCase()) {
      case COMMANDS.help:
        output = (
          <div className="grid grid-cols-[100px_1fr] gap-2 mt-2 mb-4">
            {Object.values(COMMANDS).map((c) => (
              <div key={c} className="contents">
                <span className="text-primary">{c}</span>
                <span className="text-muted-foreground">
                  {c === "about" && "Learn more about me"}
                  {c === "skills" && "List my technical skills"}
                  {c === "projects" && "View my recent projects"}
                  {c === "contact" && "Get in touch"}
                  {c === "clear" && "Clear the terminal output"}
                  {c === "date" && "Show current date and time"}
                  {c === "whoami" && "Print current user"}
                  {c === "echo" && "Print arguments"}
                  {c === "resume" && "Link to resume"}
                  {c === "uses" && "Link to my setup"}
                  {c === "now" && "Link to what I'm doing now"}
                  {c === "help" && "Show this help message"}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case COMMANDS.about:
        output = (
          <div className="mt-2 mb-4 text-muted-foreground">
            software engineer studying cs & data science at ut austin. i play
            saxophone and experiment with my hyprland config.
          </div>
        );
        break;

      case COMMANDS.skills:
        output = (
          <div className="mt-2 mb-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="text-muted-foreground">
                  [{skill}]
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case COMMANDS.projects:
        output = (
          <div className="mt-2 mb-4 space-y-4">
            {projects.map((project) => (
              <div key={project.title}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {project.title}
                </a>
                <div className="text-muted-foreground">{project.description}</div>
                <div className="text-xs text-muted-foreground/70">
                  {project.tags.join(" • ")}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case COMMANDS.contact:
        output = (
          <div className="mt-2 mb-4 space-y-1">
            {contacts.map((contact) => (
              <div key={contact.name}>
                <span className="text-primary">{contact.name}: </span>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:underline"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case COMMANDS.clear:
        setHistory([]);
        return;

      case COMMANDS.date:
        output = <div className="mt-2 mb-4">{new Date().toString()}</div>;
        break;

      case COMMANDS.whoami:
        output = <div className="mt-2 mb-4">guest</div>;
        break;

      case COMMANDS.echo:
        output = <div className="mt-2 mb-4">{args.join(" ")}</div>;
        break;

      case COMMANDS.resume:
        output = (
          <div className="mt-2 mb-4">
            Opening resume...{" "}
            <a href="/resources/resume.pdf" target="_blank" className="text-primary hover:underline">
              [Click here if it didn't open]
            </a>
          </div>
        );
        window.open("/resources/resume.pdf", "_blank");
        break;

      case COMMANDS.uses:
        output = (
          <div className="mt-2 mb-4">
            Redirecting to /uses...{" "}
            <a href="/uses" className="text-primary hover:underline">
              [Click here if it didn't redirect]
            </a>
          </div>
        );
        window.location.href = "/uses";
        break;

      case COMMANDS.now:
        output = (
          <div className="mt-2 mb-4">
            Redirecting to /now...{" "}
            <a href="/now" className="text-primary hover:underline">
              [Click here if it didn't redirect]
            </a>
          </div>
        );
        window.location.href = "/now";
        break;

      default:
        output = (
          <div className="mt-2 mb-4 text-destructive">
            Command not found: {cmd}. Type 'help' to see available commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: trimmedCmd, output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex =
          historyIndex < commandHistory.length - 1
            ? historyIndex + 1
            : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple tab completion
      const matches = Object.keys(COMMANDS).filter((c) => c.startsWith(input));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  return (
    <div
      className="w-full h-full min-h-[500px] bg-background text-foreground font-label p-4 rounded-lg border border-border overflow-hidden flex flex-col shadow-lg"
      onClick={handleTerminalClick}
    >
      <div className="flex items-center gap-2 pb-4 border-b border-border/50 mb-4 select-none">
        <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-primary/80"></div>
        <div className="ml-2 text-xs text-muted-foreground flex-1 text-center font-body">
          terminal.adetola.dev
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent pr-2 pb-8"
      >
        {history.map((item, i) => (
          <div key={i} className="mb-2">
            {item.command && (
              <div className="flex gap-2 text-primary">
                <span className="select-none">guest@adetola.dev:~$</span>
                <span className="text-foreground">{item.command}</span>
              </div>
            )}
            <div>{item.output}</div>
          </div>
        ))}

        <div className="flex gap-2 text-primary items-center mt-2">
          <span className="select-none">guest@adetola.dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-foreground caret-primary"
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
