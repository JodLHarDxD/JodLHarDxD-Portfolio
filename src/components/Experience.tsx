import { motion } from 'framer-motion';

const milestones = [
  { year: 'NOW', title: 'create-studio', role: 'Building', desc: 'Next-gen creative platform — full-stack with AI integration, multi-model architecture.', accent: true },
  { year: 'NOW', title: 'VoxDub', role: 'Building', desc: 'Semantic-emotional dubbing engine. JP→EN with acoustic-as-master paradigm. Novel infrastructure that preserves emotional intent.', accent: true },
  { year: '2026', title: 'TreadX', role: 'Shipped', desc: 'Autonomous momentum-based day trading system. DNA-filtered entries with volume-confirmed momentum and anti-chasing gate. Validated at PF 3.33 on realistic backtests.' },
  { year: '2026', title: 'CHESSMAXER', role: 'Shipped', desc: 'Full chess engine built entirely from scratch — evaluation functions, move generation, search algorithms, and complete UI.' },
  { year: '2026', title: 'Atlas & VOID', role: 'Web Design', desc: 'Motion storytelling templates and dark atmospheric web experiences. Cinematic scroll-driven narratives with custom animations.' },
  { year: '2025', title: 'world3d-template', role: 'Shipped', desc: 'Premium 3D asset marketplace landing page template with immersive visual design.' },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--color-accent)] uppercase mb-8"
        >
          // The Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-[family-name:var(--font-heading)] text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter text-white leading-[0.9] mb-24"
        >
          Every commit<span className="text-[var(--color-accent)]">,</span><br />
          a proof<span className="text-[var(--color-accent)]">.</span>
        </motion.h2>

        {/* Timeline entries */}
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="group border-t border-[var(--color-border)] py-12 md:py-16"
            >
              <div className="grid grid-cols-12 gap-6 items-start">
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest text-[var(--color-text-muted)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Year + Status */}
                <div className="col-span-10 md:col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    {m.accent && <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />}
                    <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest text-[var(--color-accent)] uppercase">
                      {m.year}
                    </span>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-widest text-[var(--color-text-muted)] uppercase">
                    {m.role}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-12 md:col-span-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-white font-semibold group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    {m.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-6">
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-base">
                    {m.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Final border */}
          <div className="border-t border-[var(--color-border)]" />
        </div>
      </div>
    </section>
  );
}
