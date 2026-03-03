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
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-violet-300 bg-clip-text text-transparent">
          David Antolick
        </h1>

        <div className="mt-6 space-y-1">
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-violet-400/70">
            Classification: AI/ML Engineer
          </p>
          <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-violet-400/50">
            Spectral Type: Full-Stack · Measurement-Driven
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10">
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
              className="font-mono text-sm text-slate-500 hover:text-violet-300 transition-colors"
            >
              {link.label}
              {!link.href.startsWith("mailto") && (
                <span className="ml-1 text-violet-400/50">↗</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
