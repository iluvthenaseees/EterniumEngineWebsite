import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Advantages', href: '#advantages' },
  { label: 'Features', href: '#features' },
  { label: 'Modules', href: '#modules' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5" aria-label="Eternium Engine home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-neon-gradient shadow-neon-glow">
              <span className="font-mono text-base font-bold text-base">E</span>
            </span>
            <span className="text-lg font-bold tracking-tight">
              Eternium<span className="neon-text"> Engine</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-neon-from"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#modules" className="btn-ghost text-sm">Docs</a>
            <a href="#download" className="btn-primary text-sm">
              <Download size={16} /> Download
            </a>
          </div>

          {/* Burger */}
          <button
            type="button"
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg glass text-gray-200"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } glass border-t border-white/5`}
      >
        <nav className="px-5 py-4 flex flex-col gap-1" aria-label="Mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-200 hover:bg-white/5 hover:text-neon-from transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={closeMenu}
            className="btn-primary mt-2 w-full"
          >
            <Download size={16} /> Download now
          </a>
        </nav>
      </div>
    </header>
  );
}
