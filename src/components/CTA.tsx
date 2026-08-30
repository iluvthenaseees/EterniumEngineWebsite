import { Download, Github, Twitter, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl glass p-10 sm:p-16 text-center">
          {/* Glow */}
          <div
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full blur-3xl opacity-40"
            style={{ background: 'radial-gradient(circle, rgba(58,186,194,0.5), transparent 70%)' }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="section-title text-balance">
              Start building in <span className="neon-text">under a minute</span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-gray-400 text-lg leading-relaxed">
              No account required. Pick your modules and ship your first scene today.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#top" className="btn-primary text-base">
                <Download size={18} /> Download now
              </a>
              <a href="#modules" className="btn-ghost text-base">
                <Github size={16} /> View on GitHub
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-gray-500">
              <a href="#modules" aria-label="GitHub" className="hover:text-neon-from transition-colors"><Github size={20} /></a>
              <a href="#modules" aria-label="Twitter" className="hover:text-neon-from transition-colors"><Twitter size={20} /></a>
              <a href="#modules" aria-label="Discord" className="hover:text-neon-from transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
