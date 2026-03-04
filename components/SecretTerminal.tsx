"use client";

import { useEffect, useState, useRef } from "react";

interface TerminalLine {
  text: string;
  type: "command" | "output" | "accent" | "blank";
  delay?: number;
}

const TERMINAL_LINES: TerminalLine[] = [
  { text: "$ cat /sys/mission/status", type: "command" },
  { text: "", type: "blank" },
  {
    text: "  ╔══════════════════════════════════════╗",
    type: "accent",
  },
  {
    text: "  ║     MISSION CONTROL — ANTOLICK.AI    ║",
    type: "accent",
  },
  {
    text: "  ╚══════════════════════════════════════╝",
    type: "accent",
  },
  { text: "", type: "blank" },
  { text: "$ neofetch --site", type: "command" },
  { text: "", type: "blank" },
  { text: "  Framework    Next.js 16 + React 19", type: "output" },
  { text: "  Styling      Tailwind v4", type: "output" },
  { text: "  Deploy       Static export, Cloudflare", type: "output" },
  { text: "  Animations   Canvas starfield + CSS", type: "output" },
  { text: "  JS Bloat     Minimal (no heavy deps)", type: "output" },
  { text: "", type: "blank" },
  { text: "$ uptime --homelab", type: "command" },
  { text: "", type: "blank" },
  { text: "  GPUs         2x RTX 6000 Ada (96 GB VRAM)", type: "output" },
  { text: "  Uptime       longer than I'd like to admit", type: "output" },
  { text: "  Runs         training, eval, inference, this site's dev server", type: "output" },
  { text: "", type: "blank" },
  { text: "$ fortune", type: "command" },
  { text: "", type: "blank" },
  { text: '  "The cosmos is within us. We are made of star-stuff."', type: "accent" },
  { text: "  — Carl Sagan", type: "output" },
  { text: "", type: "blank" },
  { text: "  You found the easter egg. Ad astra.", type: "accent" },
  { text: "", type: "blank" },
  { text: "$ _", type: "command" },
];

export default function SecretTerminal({ onClose }: { onClose: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;

    const line = TERMINAL_LINES[visibleLines];
    const delay =
      line.type === "command" ? 400 : line.type === "blank" ? 80 : 60;

    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    function handleClickOutside(e: MouseEvent) {
      if (
        terminalRef.current &&
        !terminalRef.current.contains(e.target as Node)
      ) {
        handleClose();
      }
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function handleClose() {
    setIsClosing(true);
    setTimeout(onClose, 300);
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)" }}
    >
      <div
        ref={terminalRef}
        className={`w-full max-w-xl transform transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1d2e] rounded-t-lg border border-b-0 border-[#2e3150]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-400 transition-colors" onClick={handleClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="font-mono text-xs text-slate-500">
            mission-control@antolick.ai
          </span>
          <div className="w-14" />
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="bg-[#0d0f1a] border border-[#2e3150] rounded-b-lg p-4 font-mono text-sm leading-relaxed max-h-[60vh] overflow-y-auto"
        >
          {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => {
            if (line.type === "blank") return <div key={i} className="h-2" />;

            const color =
              line.type === "command"
                ? "text-green-400"
                : line.type === "accent"
                  ? "text-violet-400"
                  : "text-slate-400";

            return (
              <div key={i} className={`${color} whitespace-pre`}>
                {line.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
