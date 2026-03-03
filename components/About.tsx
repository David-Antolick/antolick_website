export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">About</h2>
        <div className="space-y-4 text-lg leading-relaxed text-slate-300">
          <p>
            I build AI systems that ship to production and solve real problems.
            Currently I&apos;m an AI and Platform Engineer at Johnson &amp;
            Johnson, where I design multi-agent chatbots and data pipelines for
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
          <p>
            I hold an M.S. in Computational Biomedicine and Biotechnology from
            the University of Pittsburgh and a B.S. in Computational Biology from
            Rensselaer Polytechnic Institute. My background spans protein
            language models, molecular dynamics, distributed GPU training, and
            full-stack development with React, Next.js, FastAPI, and PostgreSQL.
          </p>
        </div>
      </div>
    </section>
  );
}
