import { Download, Star } from 'lucide-react';

interface Module {
  name: string;
  category: string;
  description: string;
  size: string;
  stars: number;
  featured?: boolean;
}

const modules: Module[] = [
  {
    name: 'Physics Core',
    category: 'Simulation',
    description: 'Rigid-body dynamics, joints, and collision detection powered by Rapier.',
    size: '420 KB',
    stars: 4820,
    featured: true,
  },
  {
    name: 'Audio Engine',
    category: 'Media',
    description: 'Spatial 3D audio with reverb and streaming support.',
    size: '180 KB',
    stars: 3110,
  },
  {
    name: 'Networking',
    category: 'Multiplayer',
    description: 'Authoritative server with rollback netcode and WebSocket transport.',
    size: '260 KB',
    stars: 2740,
  },
  {
    name: 'UI Toolkit',
    category: 'Interface',
    description: 'Declarative, themeable in-game UI with flexbox layout.',
    size: '210 KB',
    stars: 5200,
  },
  {
    name: 'Particles FX',
    category: 'Rendering',
    description: 'GPU-simulated particle systems with emitters and forces.',
    size: '150 KB',
    stars: 1980,
  },
  {
    name: 'AI Behavior',
    category: 'Logic',
    description: 'Behavior trees, state machines, and nav-mesh pathfinding.',
    size: '340 KB',
    stars: 2230,
  },
];

export default function Modules() {
  return (
    <section id="modules" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow reveal">Module Marketplace</span>
          <h2 className="section-title reveal mt-4" data-delay="80">
            Compose your engine, piece by piece
          </h2>
          <p className="reveal mt-5 text-gray-400 text-lg leading-relaxed" data-delay="140">
            Over 120 independently versioned modules. Install only what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <article
              key={m.name}
              className={`reveal group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                m.featured ? 'neon-border shadow-neon-glow' : 'glass'
              }`}
              data-delay={String((i % 3) * 80)}
            >
              {m.featured && (
                <span className="absolute -top-2.5 right-5 rounded-full bg-neon-gradient px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-base">
                  Popular
                </span>
              )}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-gray-400">
                  {m.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                  <Star size={12} className="text-neon-from fill-neon-from/40" />
                  {(m.stars / 1000).toFixed(1)}k
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">{m.name}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed flex-1">{m.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-gray-500">{m.size}</span>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-gray-200 transition-all duration-300 hover:border-neon-from/60 hover:text-neon-from"
                  aria-label={`Install ${m.name} module`}
                >
                  <Download size={13} /> Install
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a href="#download" className="btn-ghost">
            Browse all 120+ modules
          </a>
        </div>
      </div>
    </section>
  );
}
