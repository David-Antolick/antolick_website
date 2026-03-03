export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-4 border-t border-[#1e2140]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
        <p>
          <a
            href="mailto:david@antolick.ai"
            className="text-slate-400 hover:text-violet-300 transition-colors"
          >
            david@antolick.ai
          </a>
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/David-Antolick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-violet-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/david-antolick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-violet-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-slate-500 mt-8">
          &copy; {new Date().getFullYear()} David Antolick
        </p>
      </div>
    </footer>
  );
}
