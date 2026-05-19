import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = ['Work', 'About', 'Stack', 'Contact'];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 150);
  });

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    window.dispatchEvent(new CustomEvent('triggerTransition', { detail: { target: id.toLowerCase() } }));
  };

  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-void)]/80 backdrop-blur-xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="flex items-center gap-1">
          <a href="#" className="px-4 py-2 text-sm font-[family-name:var(--font-heading)] font-bold text-white tracking-tight">
            JH
          </a>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="px-4 py-2 text-xs font-[family-name:var(--font-mono)] tracking-wider text-[var(--color-text-muted)] hover:text-white transition-colors uppercase"
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo('Contact')}
            className="hidden md:block ml-2 px-5 py-2 text-xs font-[family-name:var(--font-mono)] tracking-wider uppercase rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-void)] transition-all duration-300"
          >
            Let's Talk
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-white">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[var(--color-void)]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
        >
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-3xl font-[family-name:var(--font-heading)] text-white tracking-tight">
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo('Contact')} className="mt-4 px-8 py-3 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] font-[family-name:var(--font-mono)] text-sm uppercase tracking-wider">
            Let's Talk
          </button>
        </motion.div>
      )}
    </>
  );
}
