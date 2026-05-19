import { motion } from 'framer-motion';

/* ── data ─────────────────────────────────────────────── */
const services = [
  { num: '01', title: 'AI ARCHITECTURE', sub: 'INTELLIGENCE', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600' },
  { num: '02', title: 'FULL-STACK', sub: 'ENGINEERING', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600' },
  { num: '03', title: 'UI/UX DESIGN', sub: 'EXPERIENCE', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600' },
  { num: '04', title: 'SYSTEMS', sub: 'INFRASTRUCTURE', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600' },
] as const;

const obsessions = [
  'AI integration',
  'multi-model architectures',
  'real-time systems',
  'acoustic semantics',
] as const;

/* ── helpers ──────────────────────────────────────────── */

/** Wrap key phrases in white; everything else stays muted. */
function renderBioText() {
  const highlights = [
    'Jodl Harddy',
    'AI Systems Architect',
    'intelligence meets execution',
    'semantic dubbing engines',
    'autonomous trading',
    'chess AI',
    'creative studio platforms',
  ];

  const raw =
    "I'm Jodl Harddy — an AI Systems Architect and full-stack engineer who builds systems where intelligence meets execution. From semantic dubbing engines to autonomous trading, chess AI to creative studio platforms — every project is a theorem, every commit a proof.";

  // Split by highlighted phrases while keeping the delimiters
  const regex = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  const parts = raw.split(regex);

  return parts.map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className="text-white">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/* ── component ────────────────────────────────────────── */
export default function About() {
  return (
    <section id="about" className="relative py-40 md:py-48 px-6 md:px-12 overflow-hidden">
      {/* ─── Heading: Lamp + Title ─── */}
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-24 md:mb-32">
        <motion.div
          initial={{ width: '4rem', opacity: 0.5 }}
          whileInView={{ width: '20rem', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent mb-8"
        />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
        >
          About
        </motion.h2>
      </div>

      {/* ─── Massive Bio Text — the visual centerpiece ─── */}
      <div className="max-w-6xl mx-auto mb-32 md:mb-40">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-[clamp(2rem,5vw,4rem)] leading-tight font-[family-name:var(--font-heading)] font-semibold tracking-tight text-[var(--color-text-muted)]"
        >
          {renderBioText()}
        </motion.p>
      </div>

      {/* ─── Services / Capabilities Massive List ─── */}
      <div className="w-full mb-32 md:mb-40 overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--color-accent)] uppercase mb-16 text-center"
        >
          // Expertise
        </motion.p>

        <div className="flex flex-col items-center justify-center w-full">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial="initial"
              whileHover="hover"
              whileInView="inView"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                initial: { opacity: 0, y: 50 },
                inView: { opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const } },
                hover: { opacity: 1, y: 0 }
              }}
              className="flex items-center justify-center py-4 md:py-6 cursor-crosshair w-full relative group"
            >
              {/* Massive background text mask for mobile/fallback */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700">
                <span className="font-[family-name:var(--font-heading)] text-[15rem] font-bold whitespace-nowrap">{s.title}</span>
              </div>

              {/* Sliding Image Reveal */}
              <motion.div
                variants={{
                  initial: { width: 0, opacity: 0, marginRight: 0 },
                  inView: { width: 0, opacity: 0, marginRight: 0 },
                  hover: { width: 'auto', opacity: 1, marginRight: '2rem', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
                }}
                className="overflow-hidden h-[80px] sm:h-[120px] md:h-[160px] lg:h-[200px] shrink-0 rounded-2xl hidden sm:block relative z-10"
              >
                <img src={s.img} alt={s.title} className="w-[120px] sm:w-[180px] md:w-[240px] lg:w-[320px] h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>

              {/* The Text Block */}
              <div className="relative flex items-end gap-4 md:gap-8 z-10">
                {/* The blue/accent dot from Studio Namma */}
                <motion.span
                  variants={{
                    initial: { scale: 0, opacity: 0 },
                    inView: { scale: 0, opacity: 0 },
                    hover: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } }
                  }}
                  className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#1b43f0] hidden md:block shadow-[0_0_20px_rgba(27,67,240,0.6)]"
                />
                
                {/* Massive Title */}
                <motion.h3
                  variants={{
                    initial: { color: '#fafafa' },
                    inView: { color: '#fafafa' },
                    hover: { color: '#1b43f0', transition: { duration: 0.3 } } // Studio Namma vivid blue
                  }}
                  className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter uppercase leading-none transition-colors duration-300"
                >
                  {s.title}
                </motion.h3>

                {/* Subtext */}
                <span className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs lg:text-sm tracking-[0.2em] md:tracking-[0.4em] text-[var(--color-text-muted)] uppercase mb-2 md:mb-4 lg:mb-6 hidden lg:block group-hover:text-white transition-colors duration-500">
                  {s.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── Philosophy Quote ─── */}
      <div className="max-w-5xl mx-auto mb-32 md:mb-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative text-center py-16 md:py-24"
        >
          {/* Large quotation marks */}
          <span
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-[8rem] md:text-[12rem] leading-none font-serif text-[var(--color-accent)]/10 select-none pointer-events-none"
          >
            &ldquo;
          </span>

          <blockquote className="relative z-10">
            <p className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl italic leading-snug tracking-tight text-[var(--color-accent)]">
              The slokas are documentation.
              <br className="hidden md:block" />{' '}
              The source code was never in the text.
            </p>
          </blockquote>

          {/* Bottom decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="mx-auto mt-10 h-[1px] bg-[var(--color-accent)]"
          />
        </motion.div>
      </div>

      {/* ─── Obsessed With — Pill Tags ─── */}
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--color-text-muted)] uppercase mb-6 text-center"
        >
          Obsessed with
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {obsessions.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="px-5 py-2.5 rounded-full border border-[var(--color-border)] text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-500 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
