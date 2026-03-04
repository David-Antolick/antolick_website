export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-2xl tracking-widest uppercase text-violet-400 mb-4">
          ▸ Infrastructure
        </h2>
        <hr className="separator mb-6" />

        <p className="text-base text-slate-300 mb-8 leading-relaxed">
          Everything on this site was built, trained, and evaluated on personal
          hardware. No managed ML platforms, no rented GPU time for development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-lg border border-[#1e2140] bg-[#0d1025]/30">
            <h3 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-4">
              Compute
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between">
                <span className="text-slate-400">GPU</span>
                <span>2&times; NVIDIA RTX 6000 Ada</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">VRAM</span>
                <span>96 GB total</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Use</span>
                <span>Training, eval, local inference</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-lg border border-[#1e2140] bg-[#0d1025]/30">
            <h3 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-4">
              Stack
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between">
                <span className="text-slate-400">Runtime</span>
                <span>Docker, CUDA 12.x</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">ML</span>
                <span>PyTorch, vLLM, Transformers</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Infra</span>
                <span>Linux, Nginx, Cloudflare</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
