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
            {" "}— production RAG for aviation
          </span>

          <span className="font-mono text-sm text-violet-400 text-right">
            Education
          </span>
          <span className="text-base text-slate-300">
            M.S. Computational Biomedicine, Pitt · B.S. Computational Biology,
            RPI
          </span>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-slate-300">
          <p>
            I build AI systems that ship to production and solve real problems —
            multi-agent chatbots for regulated manufacturing at J&amp;J, a
            production RAG platform that helps student pilots pass their FAA
            knowledge tests, and bioinformatics pipelines for academic research.
          </p>
          <p>
            I treat engineering as an iterative discovery process. I start by
            building a system that is observable and testable, then use
            measurement to guide simplification and optimization. My goal is
            always the smallest architecture that reliably solves the problem —
            complexity is acceptable during exploration, but it should earn its
            place through measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
}
