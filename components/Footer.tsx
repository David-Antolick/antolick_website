const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/David-Antolick",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/david-antolick",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:david@antolick.ai",
    external: false,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <hr className="separator mb-10" />

        <h2 className="font-mono text-2xl tracking-widest uppercase text-violet-400 mb-4">
          ▸ Contact
        </h2>

        <p className="text-lg text-slate-300 mb-8">
          Building something interesting? Let&apos;s talk.
        </p>

        <a
          href="mailto:david@antolick.ai"
          className="inline-flex items-center gap-2 font-mono text-base px-6 py-3 rounded border border-violet-500/40 text-violet-300 hover:bg-violet-600/20 hover:border-violet-400 transition-all"
        >
          david@antolick.ai
        </a>

        <div className="flex justify-center items-center gap-4 mt-8">
          {LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4">
              {i > 0 && (
                <span className="text-slate-600" aria-hidden="true">
                  &middot;
                </span>
              )}
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-mono text-sm text-slate-400 hover:text-violet-300 transition-colors"
              >
                {link.label}
                {link.external && (
                  <span className="ml-1 text-violet-400">↗</span>
                )}
              </a>
            </span>
          ))}
        </div>

        <p className="font-mono text-xs text-slate-500 mt-12">
          &copy; {new Date().getFullYear()} David Antolick
        </p>
      </div>
    </footer>
  );
}
