export default function About() {
  return (
    <section id="about" className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-2xl tracking-widest uppercase text-violet-400 mb-4">
          ▸ About
        </h2>
        <hr className="separator mb-6" />

        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 mb-8">
          <span className="font-mono text-sm text-violet-400 text-right">
            Currently
          </span>
          <span className="text-base text-slate-300">
            AI &amp; Platform Engineer at Johnson &amp; Johnson
          </span>

          <span className="font-mono text-sm text-violet-400 text-right">
            Independently
          </span>
          <span className="text-base text-slate-300">
            Built and launched{" "}
            <a
              href="https://climbspeed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 transition-colors"
            >
              ClimbSpeed
            </a>
            {" "}&mdash; production RAG for aviation
          </span>

          <span className="font-mono text-sm text-violet-400 text-right">
            Education
          </span>
          <span className="text-base text-slate-300">
            M.S. Computational Biomedicine, Pitt &middot; B.S. Computational
            Biology, RPI
          </span>

          <span className="font-mono text-sm text-violet-400 text-right">
            Homelab
          </span>
          <span className="text-base text-slate-300">
            2&times; RTX 6000 Ada (96 GB VRAM) &mdash; training, eval, local inference
          </span>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-slate-400">
          <p>
            Started in astronomy, shifted to genetics, then a friend taught me
            Python right before college and something clicked that never
            un-clicked. Computational biology at RPI gave me both code and
            science. During my master&apos;s at Pitt I hosted a small model on a
            3070 Ti, the priority order flipped, and I&apos;ve been building
            full-time since.
          </p>
          <p>
            I treat engineering as iterative discovery &mdash; build something
            observable first, let measurement guide simplification. At
            ClimbSpeed, that meant replacing a complex validation agent with a
            minimal tool design that scored 15 points higher. At J&amp;J, it
            means pipelines that turn heterogeneous manufacturing data into
            something a chatbot can safely query. The goal is always the
            smallest architecture that reliably solves the problem.
          </p>
        </div>
      </div>
    </section>
  );
}
