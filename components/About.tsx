const STATS = [
  { label: "Current Role", value: "AI & Platform Engineer", sub: "Johnson & Johnson" },
  { label: "Independent", value: "ClimbSpeed", sub: "Production RAG for Aviation" },
  { label: "Correctness", value: "4.86 / 5.0", sub: "230 Benchmarked Questions" },
  { label: "Education", value: "M.S. + B.S.", sub: "Pitt · RPI" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-2">
          ▸ About
        </h2>
        <hr className="separator mb-10" />

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#1e2140] rounded-lg p-4 bg-[#0d1025]/50 hover:border-violet-500/30 transition-colors"
            >
              <p className="font-mono text-[11px] tracking-wider uppercase text-violet-400/70">
                {stat.label}
              </p>
              <p className="text-lg font-semibold text-white mt-2">
                {stat.value}
              </p>
              <p className="text-sm text-slate-400 mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-300">
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
            that outperforms complex validation layers. At J&amp;J, it means
            PySpark pipelines that normalize 17 heterogeneous datasets and
            chatbots that safely query regulated manufacturing data.
          </p>
        </div>
      </div>
    </section>
  );
}
