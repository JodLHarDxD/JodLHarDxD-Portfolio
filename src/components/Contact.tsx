import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, ExternalLink } from 'lucide-react';

const socials = [
  { label: 'Email', href: 'mailto:jodl.hrs03@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/JodLHarDxD' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hriddhish-ranjan-sarkar' },
  { label: 'YouTube', href: 'https://youtube.com/@JodLHrs' },
  { label: 'X / Twitter', href: 'https://x.com/@har_ddy' },
  { label: 'Instagram', href: 'https://instagram.com/jodlxhrs_' },
  { label: 'Discord', href: 'https://discord.gg/j1dlmedeluxe' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-48 px-6 md:px-12 overflow-hidden">
      {/* Massive spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[var(--color-accent)]/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--color-accent)] uppercase mb-8"
        >
          // Get in touch
        </motion.p>

        {/* Massive heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-[family-name:var(--font-heading)] text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter text-white leading-[0.9] mb-6"
        >
          Let's Build<br />
          <span className="text-[var(--color-accent)]">Something</span><br />
          Great<span className="text-[var(--color-accent)]">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-[var(--color-text-muted)] max-w-lg mb-16 leading-relaxed"
        >
          Got a project that needs an architect? Let's turn your theorem into a proof.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="mailto:jodl.hrs03@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-[family-name:var(--font-mono)] text-sm uppercase tracking-wider hover:bg-[var(--color-accent)] hover:text-[var(--color-void)] transition-all duration-500 group mb-20"
        >
          <Mail size={18} />
          Say Hello
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
        </motion.a>

        {/* Divider */}
        <div className="border-t border-[var(--color-border)] pt-16" />

        {/* Social links — horizontal spread */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="group flex items-center justify-between px-5 py-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300"
            >
              <span className="text-sm font-[family-name:var(--font-mono)] tracking-wider text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                {s.label}
              </span>
              <ExternalLink size={14} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
