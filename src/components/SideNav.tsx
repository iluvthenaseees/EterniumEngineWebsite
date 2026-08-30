import { useScrollSpy } from '@/hooks/useScroll';
import type { LucideIcon } from 'lucide-react';
import { Box, Glasses, MousePointer2 } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

const items: NavItem[] = [
  { id: 'rendering', label: 'Rendering', icon: Box },
  { id: 'vr', label: 'VR Support', icon: Glasses },
  { id: 'editor', label: 'Visual Editor', icon: MousePointer2 },
];

/**
 * Floating side navigation that tracks the deep-dive feature sections.
 * Hidden on small screens; appears as a vertical pill list on the left.
 */
export default function SideNav() {
  const active = useScrollSpy(items.map((i) => i.id), 200);

  return (
    <nav
      aria-label="Feature navigation"
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-1.5"
    >
      <span className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-600">
        Features
      </span>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={isActive ? 'true' : undefined}
            className={`group flex items-center gap-3 rounded-full py-2 pl-3 pr-4 text-sm transition-all duration-300 ${
              isActive
                ? 'glass text-white shadow-neon-glow'
                : 'text-gray-500 hover:text-gray-200'
            }`}
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-full transition-all duration-300 ${
                isActive ? 'bg-neon-gradient text-base' : 'bg-white/5 text-gray-400 group-hover:text-neon-from'
              }`}
            >
              <Icon size={14} />
            </span>
            <span className="font-medium">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
