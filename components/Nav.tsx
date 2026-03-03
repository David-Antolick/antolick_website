const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Catalog", href: "#projects" },
  { label: "Signal", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0b0d1a]/80 backdrop-blur border-b border-[#1e2140]">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between h-12">
        <a
          href="#hero"
          className="font-mono text-sm font-bold tracking-widest text-violet-400 hover:text-violet-300 transition-colors"
        >
          DA
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          {NAV_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4 md:gap-6">
              {i > 0 && (
                <span className="text-[#1e2140]" aria-hidden="true">
                  ·
                </span>
              )}
              <a
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase text-slate-500 hover:text-violet-400 transition-colors"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
