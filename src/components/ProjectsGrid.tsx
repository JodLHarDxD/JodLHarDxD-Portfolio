import { motion } from 'framer-motion';

const projects = [
  {
    title: 'create-studio',
    desc: 'Next-gen creative platform',
    tag: 'CURRENTLY BUILDING',
    stack: 'TypeScript',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/create-studio',
    live: true,
  },
  {
    title: 'VoxDub',
    desc: 'Semantic-emotional dubbing engine. Acoustic-as-master paradigm.',
    tag: 'AI / ACOUSTIC',
    stack: 'Python',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/VoxDub',
  },
  {
    title: 'MediaStrip',
    desc: 'Advanced media processing and stripping utility.',
    tag: 'UTILITY',
    stack: 'Python',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/MediaStrip',
  },
  {
    title: 'KariotLab',
    desc: 'Experimental research and AI modeling laboratory.',
    tag: 'RESEARCH',
    stack: 'Python',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/KariotLab',
  },
  {
    title: 'TreadX',
    desc: 'Autonomous day trading system. PF 3.33 validated.',
    tag: 'SHIPPED',
    stack: 'Python',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/TreadX',
  },
  {
    title: 'PhoneCam',
    desc: 'Computer vision pipeline utilizing mobile camera feeds.',
    tag: 'VISION',
    stack: 'C++ / Python',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/PhoneCam',
  },
  {
    title: 'auto-slash',
    desc: 'Automated command execution and bot framework.',
    tag: 'AUTOMATION',
    stack: 'JavaScript',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/auto-slash',
  },
  {
    title: 'CHESSMAXER',
    desc: 'Full chess engine from scratch.',
    tag: 'SHIPPED',
    stack: 'CSS / JS',
    img: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/CHESSMAXER',
  },
  {
    title: 'Atlas',
    desc: 'Motion storytelling website template.',
    tag: 'WEB DESIGN',
    stack: 'HTML',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/Atlas',
  },
  {
    title: 'JodLHarDxD',
    desc: 'Personal developer profile and interactive readme.',
    tag: 'PROFILE',
    stack: 'Markdown / HTML',
    img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/JodLHarDxD/JodLHarDxD',
  }
];

const headingVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function ProjectsGrid() {
  return (
    <section id="work" className="relative py-40 px-6 md:px-12 lg:px-20">
      {/* ─── Enormous Section Heading ─── */}
      <div className="max-w-[90rem] mx-auto mb-28 md:mb-40">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block font-[family-name:var(--font-mono)] text-xs md:text-sm tracking-widest text-[var(--color-accent)] mb-6"
        >
          {'// Featured Projects'}
        </motion.span>

        <div className="overflow-hidden">
          <motion.h2
            custom={0}
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-[family-name:var(--font-heading)] text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.9] tracking-tight text-[var(--color-text)]"
          >
            Selected
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            custom={1}
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-[family-name:var(--font-heading)] text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.9] tracking-tight text-[var(--color-text)]"
          >
            Work<span className="text-[var(--color-accent)]">.</span>
          </motion.h2>
        </div>
      </div>

      {/* ─── Project Cards ─── */}
      {/* ─── Project Massive List ─── */}
      <div className="w-full mx-auto overflow-hidden">
        <div className="flex flex-col items-center w-full">
          {projects.map((p, idx) => {
            const num = String(idx + 1).padStart(2, '0');
            const isEven = idx % 2 === 1; // Alternate layout based on odd/even index
            
            return (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial="initial"
                whileHover="hover"
                whileInView="inView"
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  inView: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const } },
                  hover: { opacity: 1, y: 0 }
                }}
                className="flex items-center justify-center py-12 md:py-24 cursor-crosshair w-full relative group border-b border-[var(--color-border)] first:border-t"
              >
                {/* Massive background text mask for mobile/fallback */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700">
                  <span className="font-[family-name:var(--font-heading)] text-[12rem] md:text-[20rem] font-bold whitespace-nowrap">{p.title}</span>
                </div>

                <div className={`relative flex items-center gap-6 md:gap-16 z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  {/* Sliding Image Reveal */}
                  <motion.div
                    variants={{
                      initial: { width: 0, opacity: 0 },
                      inView: { width: 0, opacity: 0 },
                      hover: { width: 'auto', opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
                    }}
                    className="overflow-hidden h-[150px] sm:h-[220px] md:h-[300px] lg:h-[400px] shrink-0 rounded-2xl hidden sm:block relative z-10"
                  >
                    <img src={p.img} alt={p.title} className="w-[220px] sm:w-[320px] md:w-[450px] lg:w-[600px] h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </motion.div>

                  {/* The Text Block */}
                  <motion.div 
                    variants={{
                      initial: { x: 0 },
                      inView: { x: 0 },
                      hover: { x: isEven ? -40 : 40, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
                    }}
                    className={`flex flex-col ${isEven ? 'items-end text-right' : 'items-start text-left'} justify-center w-full`}
                  >
                    <span className="font-[family-name:var(--font-mono)] text-[10px] md:text-xs tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4 block">
                      FIG.{num} — {p.tag}
                    </span>
                    
                    {/* Massive Title */}
                    <motion.h3
                      variants={{
                        initial: { color: '#fafafa' },
                        inView: { color: '#fafafa' },
                        hover: { color: '#1b43f0', transition: { duration: 0.3 } } 
                      }}
                      className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] transition-colors duration-300 break-words"
                    >
                      {p.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="mt-6 md:mt-10 font-[family-name:var(--font-mono)] text-sm md:text-base text-[var(--color-text-muted)] max-w-md group-hover:text-white transition-colors duration-500">
                      {p.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-6 md:mt-8">
                      <span className="px-4 py-2 text-[10px] md:text-xs font-[family-name:var(--font-mono)] tracking-[0.15em] uppercase border border-[var(--color-border)] rounded-full text-[var(--color-text-muted)] group-hover:border-[var(--color-accent)] transition-colors duration-500">
                        {p.stack}
                      </span>
                      {p.live && (
                        <span className="px-4 py-2 text-[10px] md:text-xs font-[family-name:var(--font-mono)] tracking-[0.15em] uppercase border border-[var(--color-accent)] rounded-full text-[var(--color-accent)] bg-[var(--color-accent)]/10 animate-pulse">
                          Live Build
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
