import { Gauge, Boxes, MonitorSmartphone, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: Gauge,
    title: 'Blazing Performance',
    description: 'A WASM-accelerated ECS scheduler delivers consistent 60fps with no GC stalls.',
  },
  {
    icon: Boxes,
    title: 'True Modularity',
    description: 'Every capability is an independently versioned module. Pull in only what you need.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Cross-Platform',
    description: 'One codebase ships to web, desktop, and mobile from the same project.',
  },
  {
    icon: Zap,
    title: 'Zero Build Step',
    description: 'Import modules straight from the browser. Save and see the change instantly.',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow reveal">Why Eternium</span>
          <h2 className="section-title reveal mt-4" data-delay="80">
            An engine that gets out of your way
          </h2>
          <p className="reveal mt-5 text-gray-400 text-lg leading-relaxed" data-delay="140">
            We obsessed over the fundamentals so you can obsess over your game.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((a, i) => {
            const Icon = a.icon;
            return (
              <article
                key={a.title}
                className="reveal group relative rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-neon-glow"
                data-delay={String((i % 4) * 80)}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-neon-gradient-soft border border-neon-from/20 mb-5 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} className="text-neon-from" />
                </div>
                <h3 className="text-base font-semibold text-white">{a.title}</h3>
                <p className="mt-2.5 text-sm text-gray-400 leading-relaxed">{a.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
