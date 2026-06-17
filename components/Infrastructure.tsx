export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-2xl tracking-widest uppercase text-violet-400 mb-4">
          ▸ Infrastructure
        </h2>
        <hr className="separator mb-6" />

        <p className="text-base text-slate-300 mb-8 leading-relaxed">
          Everything on this site is built and self-hosted on personal
          hardware &mdash; a k3s cluster I run and operate myself, plus a
          dedicated GPU host for model inference. No managed platforms, no
          rented cloud.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg border border-[#1e2140] bg-[#0d1025]/30">
            <h3 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-4">
              Cluster
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between">
                <span className="text-slate-400">Nodes</span>
                <span>3&times; Minisforum MS-A2 (AMD)</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Orchestration</span>
                <span>k3s HA, Argo CD</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Storage</span>
                <span>Longhorn (2TB M.2 + 3.84TB U.2)</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-[#1e2140] bg-[#0d1025]/30">
            <h3 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-4">
              Inference
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between">
                <span className="text-slate-400">GPU</span>
                <span>4&times; NVIDIA RTX PRO 6000 (Blackwell)</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Serving</span>
                <span>vLLM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Model</span>
                <span>MiniMax M3.0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
