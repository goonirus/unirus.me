import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data/profile';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/90 backdrop-blur-md">
      <div className="console-grid border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="hidden h-2 w-2 rounded-full bg-primary shadow-glow sm:block" />
            <span className="font-heading text-sm font-bold tracking-widest text-primary">
              DONGDEX
            </span>
          </div>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="rounded-md px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-white/5 hover:text-text"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-muted md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>
        </div>

        <div className="hidden border-t border-white/5 px-4 py-1.5 sm:block sm:px-6">
          <p className="pixel-label truncate">
            DONGDEX OS 1.0 // MODE: DESIGNER // REGION: GOTHENBURG
          </p>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-white/10 bg-card md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="rounded-md px-3 py-2 text-left text-sm text-muted hover:bg-white/5 hover:text-text"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="pixel-label border-t border-white/5 px-4 py-2">
              DONGDEX OS 1.0 // MODE: DESIGNER // REGION: GOTHENBURG
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
