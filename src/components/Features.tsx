import { Box, Glasses, MousePointer2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import RenderingMockup from './mockups/RenderingMockup';
import VRMockup from './mockups/VRMockup';
import EditorMockup from './mockups/EditorMockup';

interface Feature {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: React.ReactNode;
  reverse?: boolean;
}

const features: Feature[] = [
  {
    id: 'rendering',
    icon: Box,
    eyebrow: 'Deep Dive',
    title: '2D / 3D Rendering',
    description:
      'A unified render graph drives both 2D sprite batching and a physically-based 3D pipeline. Write once, switch contexts, and let the engine optimize draw calls for you.',
    bullets: [
      'PBR materials with screen-space reflections',
      'GPU-driven sprite batching with custom shaders',
      'Forward + deferred hybrid renderer',
    ],
    mockup: <RenderingMockup />,
  },
  {
    id: 'vr',
    icon: Glasses,
    eyebrow: 'Deep Dive',
    title: 'VR Support',
    description:
      'Built on WebXR with a first-person interaction layer. Target Quest, Vision Pro, and desktop headsets from a single codebase with automatic foveated rendering.',
    bullets: [
      'WebXR session management out of the box',
      'Hand-tracking & controller abstractions',
      'Comfort modes with reprojection fallback',
    ],
    mockup: <VRMockup />,
    reverse: true,
  },
  {
    id: 'editor',
    icon: MousePointer2,
    eyebrow: 'Deep Dive',
    title: 'Visual Editor',
    description:
      'A node-based scene editor lives right in the browser. Drag, drop, and wire components together with live preview — no compile step between you and your design.',
    bullets: [
      'Live multi-viewport scene preview',
      'Node graph for logic & shader graphs',
      'One-click publish to web or native',
    ],
    mockup: <EditorMockup />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow reveal">Under the hood</span>
          <h2 className="section-title reveal mt-4" data-delay="80">
            A complete toolkit for every dimension
          </h2>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                id={f.id}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={`reveal ${f.reverse ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium text-neon-from mb-5">
                    <Icon size={14} /> {f.eyebrow}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-4 text-gray-400 text-lg leading-relaxed">{f.description}</p>
                  <ul className="mt-6 space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-gradient" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`reveal ${f.reverse ? 'lg:order-1' : ''}`} data-delay="120">
                  {f.mockup}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
