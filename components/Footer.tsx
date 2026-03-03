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
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-2">
          ▸ Signal
        </h2>
        <hr className="separator mb-10" />

        <div className="text-center">
          <a
            href="mailto:david@antolick.ai"
            className="font-mono text-sm text-slate-300 hover:text-violet-300 transition-colors"
          >
            david@antolick.ai
          </a>

          <div className="flex justify-center items-center gap-4 mt-6">
            {LINKS.map((link, i) => (
              <span key={link.href} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-[#1e2140]" aria-hidden="true">
                    ·
                  </span>
                )}
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="font-mono text-xs text-slate-500 hover:text-violet-300 transition-colors"
                >
                  {link.label}
                  {link.external && (
                    <span className="ml-1 text-violet-400/50">↗</span>
                  )}
                </a>
              </span>
            ))}
          </div>

          <p className="font-mono text-[10px] text-slate-600 mt-12">
            &copy; {new Date().getFullYear()} David Antolick
          </p>
        </div>
      </div>
    </footer>
  );
}
