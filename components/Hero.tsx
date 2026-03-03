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
      className="min-h-[70vh] flex items-center justify-center px-4"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-purple-400 to-violet-300 bg-clip-text text-transparent">
          David Antolick
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-violet-400">
          AI/ML Engineer
        </p>
        <p className="text-lg mt-3 text-slate-400 max-w-xl mx-auto">
          Building production agentic systems, RAG pipelines, and LLM
          evaluation infrastructure.
        </p>
        <div className="flex justify-center gap-6 mt-8">
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
              className="text-slate-400 hover:text-violet-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
