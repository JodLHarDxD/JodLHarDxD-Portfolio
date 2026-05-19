import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-white tracking-tight">JH</span>
          <span className="text-[var(--color-border)] hidden md:block">·</span>
          <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] tracking-wider">
            © 2025 Jodl Harddy — Every commit, a proof.
          </p>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] tracking-wider hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
        >
          Back to top
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
