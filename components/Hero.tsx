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
    label: "Email",
    href: "mailto:david@antolick.ai",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="orbit-ring w-[500px] h-[500px] md:w-[700px] md:h-[700px]" />
        <div className="orbit-ring w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] opacity-50" />
        <div className="orbit-ring w-[900px] h-[900px] md:w-[1300px] md:h-[1300px] opacity-25" />
      </div>

      <div className="max-w-3xl text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
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

        <p className="italic text-sm tracking-[0.15em] text-violet-300/60 mt-6">
          Ad Astra
        </p>

        <div className="flex justify-center gap-8 mt-12">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="font-mono text-base text-slate-400 hover:text-violet-300 transition-colors"
            >
              {link.label}
              {!link.href.startsWith("mailto") && (
                <span className="ml-1 text-violet-400">↗</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
