export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-neon-gradient">
              <span className="font-mono text-sm font-bold text-base">E</span>
            </span>
            <span className="font-semibold tracking-tight">
              Eternium<span className="neon-text"> Engine</span>
            </span>
          </div>
          <p className="text-sm text-gray-500">
            MIT Licensed · Open Source · Built for the web
          </p>
          <nav className="flex items-center gap-6 text-sm text-gray-400" aria-label="Footer">
            <a href="#advantages" className="hover:text-neon-from transition-colors">Advantages</a>
            <a href="#features" className="hover:text-neon-from transition-colors">Features</a>
            <a href="#modules" className="hover:text-neon-from transition-colors">Modules</a>
            <a href="#faq" className="hover:text-neon-from transition-colors">FAQ</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
