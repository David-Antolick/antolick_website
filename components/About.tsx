const KEY_FACTS = [
  { label: "Current", value: "AI & Platform Engineer — Johnson & Johnson" },
  { label: "Independent", value: "ClimbSpeed — Production RAG for Aviation" },
  {
    label: "Education",
    value: "M.S. Computational Biomedicine, Pitt · B.S. Computational Biology, RPI",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-2">
          ▸ About
        </h2>
        <hr className="separator mb-10" />

        <div className="space-y-3 mb-10">
          {KEY_FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col md:flex-row md:gap-4">
              <span className="font-mono text-sm tracking-wider uppercase text-violet-400 md:w-32 shrink-0">
                {fact.label}:
              </span>
              <span className="text-base text-slate-300">{fact.value}</span>
            </div>
          ))}
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
