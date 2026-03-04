"use client";

import { useCallback, useRef, useState } from "react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/David-Antolick",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/david-antolick",
  },
  {
    label: "Resume",
    href: "/resume.pdf",
  },
  {
    label: "Email",
    href: "mailto:david@antolick.ai",
  },
];

function spawnShootingStars(originX: number, originY: number) {
  const count = 20;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "shooting-star";

    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
    const distance = 250 + Math.random() * 400;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const duration = 0.7 + Math.random() * 0.5;
    const angleDeg = (angle * 180) / Math.PI;

    star.style.left = `${originX}px`;
    star.style.top = `${originY}px`;
    star.style.setProperty("--dx", `${dx}px`);
    star.style.setProperty("--dy", `${dy}px`);
    star.style.setProperty("--duration", `${duration}s`);
    star.style.setProperty("--angle", `${angleDeg}deg`);

    document.body.appendChild(star);
    star.addEventListener("animationend", () => star.remove());
  }
}

export default function Hero() {
  const [warpQuote, setWarpQuote] = useState(false);
  const clickCount = useRef(0);

  const handleAdAstra = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      clickCount.current += 1;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      if (clickCount.current === 1) {
        // First click: shooting stars
        spawnShootingStars(x, y);
      } else if (clickCount.current === 2) {
        // Second click: "Punch it." + hyperspace
        setWarpQuote(true);
        setTimeout(() => {
          setWarpQuote(false);
          window.dispatchEvent(new CustomEvent("warp"));
        }, 1500);
      } else {
        // Subsequent clicks: shooting stars for fun
        spawnShootingStars(x, y);
      }
    },
    []
  );

  return (
    <section
      id="hero"
      className="min-h-[45vh] flex items-center justify-center px-4 py-16 relative overflow-hidden"
    >
      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="orbit-ring w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.03]" />
      </div>

      <div className="max-w-3xl text-center relative z-10">
        <h1
          className="font-mono text-5xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400 bg-clip-text text-transparent"
          style={{ filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5))" }}
        >
          David Antolick
        </h1>

        <div className="mt-8 space-y-2">
          <p className="font-mono text-sm md:text-base tracking-[0.2em] uppercase text-violet-400">
            AI/ML Engineer
          </p>
          <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto mt-4">
            Building production agentic systems, RAG pipelines, and LLM
            evaluation infrastructure.
          </p>
        </div>

        <button
          onClick={handleAdAstra}
          className="italic text-sm tracking-[0.15em] text-violet-300/60 mt-6 bg-transparent border-none cursor-default hover:text-violet-300/80 transition-colors duration-500 focus:outline-none"
          aria-hidden="true"
        >
          Ad Astra
        </button>

        <div className="flex justify-center gap-8 mt-12">
          {SOCIAL_LINKS.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="font-mono text-base text-slate-400 hover:text-violet-300 transition-colors"
              >
                {link.label}
                {isExternal && (
                  <span className="ml-1 text-violet-400">↗</span>
                )}
              </a>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase px-6 py-3 rounded border border-violet-500/40 text-violet-300 hover:bg-violet-600/20 hover:border-violet-400 transition-all"
          >
            View Projects <span aria-hidden="true">&darr;</span>
          </a>
        </div>
      </div>

      {warpQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none bg-black/40">
          <p
            className="font-mono text-4xl md:text-6xl font-bold text-amber-300 tracking-widest"
            style={{
              textShadow:
                "0 0 20px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.3)",
            }}
          >
            Punch it.
          </p>
        </div>
      )}
    </section>
  );
}
