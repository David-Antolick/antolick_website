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
          <p className="font-mono text-sm md:text-base tracking-[0.2em] uppercase text-violet-400">
            Classification: AI/ML Engineer
          </p>
          <p className="font-mono text-sm md:text-base tracking-[0.2em] uppercase text-violet-400/80">
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
