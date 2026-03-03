export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-2">
          ▸ About
        </h2>
        <hr className="separator mb-10" />

        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 mb-10">
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
        </div>

        <div className="space-y-4 text-base leading-relaxed text-slate-300">
          <p>
            I started chasing the supermassive &mdash; astronomy books, local
            society meetings, the whole childhood dream of spaceflight. That
            shifted to the microscopic in high school when I discovered
            genetics and became set on aging research. Then a friend taught me
            Python, and something clicked that never un-clicked. Computational
            biology became my way to do both: code and science. During my
            master&apos;s, I got my first taste of AI, hosted a model on my own
            GPU, and the focus shifted for good. I finished the degree,
            forewent a PhD, and started building.
          </p>
          <p>
            I treat engineering as an iterative discovery process. I start by
            building a system that is observable and testable, then use
            measurement to guide simplification and optimization. My goal is
            always the smallest architecture that reliably solves the
            problem &mdash; complexity is acceptable during exploration, but it
            should earn its place through measurable impact.
          </p>
          <p>
            What keeps me going is the full loop: independent research, a new
            idea or technique, building it, measuring it, iterating until it
            ships. I&apos;m as comfortable owning a system end-to-end as I am
            digging into a single component &mdash; from data pipelines and
            retrieval systems to agent frameworks and the frontends that serve
            them.
          </p>
        </div>
      </div>
    </section>
  );
}
