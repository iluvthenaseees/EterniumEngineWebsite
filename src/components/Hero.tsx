import { Download, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
      <div className="absolute inset-0 radial-glow" aria-hidden />
      <div
        className="absolute -top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-3xl opacity-30 animate-pulse-ring"
        style={{ background: 'radial-gradient(circle, rgba(58,186,194,0.4), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-gray-300 mb-8">
            <Star size={13} className="text-neon-from fill-neon-from" />
            <span>v3.0 — Now with full WebXR support</span>
          </div>

          {/* Title */}
          <h1
            className="reveal font-bold tracking-tight text-balance"
            data-delay="80"
            style={{
              fontSize: 'clamp(2.75rem, 1.5rem + 7vw, 8rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.03em',
            }}
          >
            Build worlds that
            <br />
            <span className="neon-text">never stop running</span>
          </h1>

          {/* Subtitle */}
          <p
            className="reveal mt-7 max-w-xl text-balance text-gray-400"
            data-delay="160"
            style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.3rem)', lineHeight: 1.6 }}
          >
            A modular, web-native game engine for 2D, 3D, and VR.
            Hot-reloadable modules, a visual editor, cross-platform deploy — all from the browser.
          </p>

          {/* CTAs */}
          <div className="reveal mt-10 flex flex-col sm:flex-row items-center gap-4" data-delay="240">
            <a href="#download" className="btn-primary text-base" aria-label="Download Eternium Engine">
              <Download size={18} /> Download now
            </a>
            <a href="#features" className="btn-ghost text-base" aria-label="See features">
              <Play size={16} /> Explore features
            </a>
          </div>

          {/* Stats strip */}
          <div className="reveal mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl glass w-full max-w-2xl" data-delay="320">
            {[
              { value: '60fps', label: 'Render target' },
              { value: '120+', label: 'Engine modules' },
              { value: '0ms', label: 'Build step' },
            ].map((s) => (
              <div key={s.label} className="px-4 py-5 bg-surface/40 text-center">
                <div className="text-2xl font-bold neon-text">{s.value}</div>
                <div className="mt-1 text-xs text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
