import { motion } from 'framer-motion';

const techs = [
  'TypeScript', 'Python', 'React', 'Vue', 'Next.js', 'FastAPI', 'Supabase',
  'Node.js', 'Tailwind CSS', 'Figma', 'Docker', 'PostgreSQL',
  'LLMs', 'faster-whisper', 'parselmouth', 'librosa', 'HTML/CSS', 'JavaScript'
];
const row1 = techs.slice(0, 9);
const row2 = techs.slice(9);

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden marquee-mask py-4">
      <motion.div
        className="flex gap-4 shrink-0"
        animate={{ x: reverse ? ['0%', '-33.33%'] : ['-33.33%', '0%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-4 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/30 backdrop-blur-sm whitespace-nowrap hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-500 group shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-surface-light)] group-hover:bg-[var(--color-accent)] transition-colors duration-500" />
            <span className="font-[family-name:var(--font-mono)] text-base text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-500">{t}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section id="stack" className="relative py-48 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--color-accent)] uppercase mb-8"
        >
          // Tools of the trade
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-[family-name:var(--font-heading)] text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter text-white leading-[0.9]"
        >
          Tech<br />
          Stack<span className="text-[var(--color-accent)]">.</span>
        </motion.h2>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
