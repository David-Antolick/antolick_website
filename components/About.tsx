export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-2">
          ▸ About
        </h2>
        <hr className="separator mb-10" />

        <div className="space-y-3 mb-10 pl-4 border-l-2 border-violet-500/30">
          <p className="text-base text-slate-300">
            <span className="font-mono text-sm text-violet-400">Currently</span>{" "}
            AI &amp; Platform Engineer at Johnson &amp; Johnson
          </p>
          <p className="text-base text-slate-300">
            <span className="font-mono text-sm text-violet-400">Independently</span>{" "}
            Built and launched ClimbSpeed — production RAG for aviation
          </p>
          <p className="text-base text-slate-300">
            <span className="font-mono text-sm text-violet-400">Education</span>{" "}
            M.S. Computational Biomedicine, Pitt · B.S. Computational Biology, RPI
          </p>
        </div>

        <div className="space-y-4 text-base leading-relaxed text-slate-300">
          <p>
            I build AI systems that ship to production and solve real problems.
            At J&amp;J, I design multi-agent chatbots and data pipelines for
            CAR-T cell therapy manufacturing. Independently, I built and launched
            ClimbSpeed, a production RAG platform that helps student pilots
            prepare for their FAA knowledge tests.
          </p>
          <p>
            My approach is measurement-driven: I build evaluation pipelines
            before features, validate architectural decisions with data, and
            simplify relentlessly. At ClimbSpeed, this meant a custom ReAct agent
            that outperforms complex validation layers, achieving 4.86/5.0
            correctness across 230 benchmarked questions. At J&amp;J, it means
            PySpark pipelines that normalize 17 heterogeneous datasets and
            chatbots that safely query regulated manufacturing data.
          </p>
        </div>
      </div>
    </section>
  );
}
