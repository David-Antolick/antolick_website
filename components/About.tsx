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

        <div className="space-y-5 text-base leading-relaxed text-slate-300">
          <p>
            Growing up, I was obsessed with astronomy &mdash; every book in the
            local library, meetings at the astronomical society, the whole
            dream of spaceflight. My grandfather fueled that. In high school
            the lens shifted from the supermassive to the microscopic: I
            discovered genetics and locked in on aging research, convinced
            I&apos;d spend my life in a lab chasing a PhD. Then, right before
            college applications, a close friend insisted on teaching me
            Python. Something clicked that never un-clicked.
          </p>
          <p>
            Computational biology gave me a way to keep both &mdash; code and
            science, together. But during my master&apos;s at Pitt, I got my
            first real taste of AI. The day I hosted a small model on my own
            3070 Ti and watched it generate output, the priority order
            flipped. I finished the degree, forewent the PhD, and started
            building full-time. REX, one of my earliest Python projects from
            years before, got a complete rebuild. Then came ClimbSpeed, then
            J&amp;J. That 3070 Ti eventually grew into a homelab with dual
            RTX 6000s where I train, evaluate, and host my own stack.
          </p>
          <p>
            I treat engineering as an iterative discovery process &mdash; build
            something observable and testable first, then let measurement guide
            simplification. Complexity is fine during exploration, but it earns
            its place through impact. At ClimbSpeed, that meant replacing a
            complex validation agent with a minimal tool design that scored 15
            points higher. At J&amp;J, it means pipelines that turn
            heterogeneous manufacturing data into something a chatbot can
            safely query. The goal is always the smallest architecture that
            reliably solves the problem.
          </p>
        </div>
      </div>
    </section>
  );
}
