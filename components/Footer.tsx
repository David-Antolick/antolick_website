export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-4 border-t border-gray-200">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p>
          <a
            href="mailto:david@antolick.ai"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            david@antolick.ai
          </a>
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/David-Antolick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/david-antolick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} David Antolick
        </p>
      </div>
    </footer>
  );
}
