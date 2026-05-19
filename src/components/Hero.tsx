import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

/* ─────────────────────── Constants ─────────────────────── */
const ROTATING_WORDS = ['think.', 'hear.', 'feel.', 'trade.', 'create.'] as const;
const MARQUEE_TEXT =
  'AI SYSTEMS ARCHITECT \u2022 FULL-STACK ENGINEER \u2022 UI/UX DESIGNER \u2022 ML ENGINEER \u2022 ';

/* ─────────────────────── Wireframe Globe ─────────────────────── */

/** Generates lat/lon wireframe paths for an SVG sphere */
function generateGlobePaths(radius: number, cx: number, cy: number) {
  const meridians: string[] = [];
  const parallels: string[] = [];
  const steps = 60;

  // Meridians (longitude lines)
  for (let lon = 0; lon < 180; lon += 30) {
    const rad = (lon * Math.PI) / 180;
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const phi = (i / steps) * Math.PI * 2;
      const x = cx + radius * Math.cos(phi) * Math.sin(rad);
      const y = cy + radius * Math.sin(phi);
      d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)} `;
    }
    meridians.push(d);
  }

  // Parallels (latitude lines)
  for (let lat = -60; lat <= 60; lat += 30) {
    if (lat === 0) continue; // equator handled separately
    const rad = (lat * Math.PI) / 180;
    const r = radius * Math.cos(rad);
    const yOffset = cy + radius * Math.sin(rad);
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const theta = (i / steps) * Math.PI * 2;
      const x = cx + r * Math.cos(theta);
      const y = yOffset + r * 0.3 * Math.sin(theta);
      d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)} `;
    }
    parallels.push(d);
  }

  return { meridians, parallels };
}

function WireframeGlobe() {
  const size = 500;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.42;
  const { meridians, parallels } = useMemo(
    () => generateGlobePaths(radius, cx, cy),
    [radius, cx, cy]
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow backdrop */}
      <div
        className="absolute rounded-full blur-[120px] opacity-20"
        style={{
          width: radius * 1.8,
          height: radius * 1.8,
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />

      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      >
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-[clamp(280px,45vw,500px)] h-[clamp(280px,45vw,500px)]"
          fill="none"
        >
          {/* Outer circle */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            stroke="var(--color-accent)"
            strokeWidth="0.6"
            opacity="0.3"
          />
          {/* Equator */}
          <ellipse
            cx={cx}
            cy={cy}
            rx={radius}
            ry={radius * 0.3}
            stroke="var(--color-accent)"
            strokeWidth="0.6"
            opacity="0.25"
          />
          {/* Meridians */}
          {meridians.map((d, i) => (
            <motion.path
              key={`m-${i}`}
              d={d}
              stroke="var(--color-accent)"
              strokeWidth="0.5"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 1 + i * 0.15,
                duration: 2,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            />
          ))}
          {/* Parallels */}
          {parallels.map((d, i) => (
            <motion.path
              key={`p-${i}`}
              d={d}
              stroke="var(--color-accent)"
              strokeWidth="0.4"
              opacity="0.15"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 1.5 + i * 0.2,
                duration: 2,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            />
          ))}
          {/* Axis line */}
          <line
            x1={cx}
            y1={cy - radius - 12}
            x2={cx}
            y2={cy + radius + 12}
            stroke="var(--color-accent)"
            strokeWidth="0.4"
            opacity="0.15"
            strokeDasharray="4 4"
          />
          {/* Accent dot at top */}
          <circle cx={cx} cy={cy - radius} r="3" fill="var(--color-accent)" opacity="0.6" />
          {/* Accent dot at bottom */}
          <circle cx={cx} cy={cy + radius} r="3" fill="var(--color-accent)" opacity="0.6" />
        </svg>
      </motion.div>
    </div>
  );
}

/* ─────────────────────── Rotating Word ─────────────────────── */

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-block relative overflow-hidden align-bottom" style={{ minWidth: '4ch' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={ROTATING_WORDS[index]}
          initial={{ y: '110%', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-110%', opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="inline-block text-[var(--color-accent)]"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/* ─────────────────────── Live Clock ─────────────────────── */

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time} IST</span>;
}

/* ─────────────────────── Line Reveal ─────────────────────── */

const lineReveal = {
  hidden: { y: '100%', opacity: 0, filter: 'blur(10px)' },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

/* ─────────────────────── Marquee ─────────────────────── */

function InfiniteMarquee() {
  const repeated = MARQUEE_TEXT.repeat(4);
  return (
    <div className="absolute bottom-[8vh] left-0 w-full overflow-hidden pointer-events-none select-none marquee-mask">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <span
          className="font-[family-name:var(--font-heading)] font-bold tracking-tight leading-none"
          style={{
            fontSize: 'clamp(5rem, 10vw, 8rem)',
            color: 'var(--color-text)',
            opacity: 0.03,
          }}
        >
          {repeated}
        </span>
        <span
          className="font-[family-name:var(--font-heading)] font-bold tracking-tight leading-none"
          style={{
            fontSize: 'clamp(5rem, 10vw, 8rem)',
            color: 'var(--color-text)',
            opacity: 0.03,
          }}
        >
          {repeated}
        </span>
      </motion.div>
    </div>
  );
}

/* ─────────────────────── Hero ─────────────────────── */

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[200vh] overflow-hidden"
      style={{ backgroundColor: 'var(--color-void)' }}
    >
      {/* ── Top viewport: main hero content ── */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden">
        {/* ── Upper content area ── */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            {/* Left — Typography */}
            <div className="py-24 md:py-40">
              {/* Mono tag */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-[family-name:var(--font-mono)] text-[10px] md:text-[11px] tracking-[0.35em] text-[var(--color-accent)] uppercase mb-8"
              >
                &lt;AI Systems Architect /&gt;
              </motion.p>

              {/* MASSIVE Name */}
              <h1 className="font-[family-name:var(--font-heading)] font-bold leading-[0.85] tracking-tighter text-white">
                <div className="overflow-hidden">
                  <motion.span
                    className="block"
                    style={{ fontSize: 'clamp(5rem, 15vw, 12rem)' }}
                    custom={0}
                    variants={lineReveal}
                    initial="hidden"
                    animate="visible"
                  >
                    JODL
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span
                    className="block"
                    style={{ fontSize: 'clamp(5rem, 15vw, 12rem)' }}
                    custom={1}
                    variants={lineReveal}
                    initial="hidden"
                    animate="visible"
                  >
                    HARD
                    <span className="text-[var(--color-accent)]">DY.</span>
                  </motion.span>
                </div>
              </h1>

              {/* Horizontal divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
                className="origin-left h-px bg-[var(--color-border)] my-8 md:my-10 max-w-2xl"
              />

              {/* Rotating subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 1, duration: 1 }}
                className="text-xl md:text-2xl lg:text-3xl text-[var(--color-text-muted)] font-[family-name:var(--font-heading)] font-light tracking-tight max-w-xl"
              >
                I architect systems that{' '}
                <RotatingWord />
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="mt-10 md:mt-14 flex items-center gap-5"
              >
                <button
                  onClick={() =>
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="px-8 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-void)] font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-[var(--color-accent-light)] transition-colors duration-300"
                >
                  View Work
                </button>
                <button
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="px-8 py-4 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
                >
                  Say Hello
                </button>
              </motion.div>
            </div>

            {/* Right — Wireframe Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="hidden lg:flex items-center justify-center"
            >
              <WireframeGlobe />
            </motion.div>
          </div>
        </div>

        {/* ── Bottom info bar (Studio Namma inspired) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="w-full border-t border-[var(--color-border)]"
        >
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-5 flex flex-wrap items-center justify-between gap-4">
            {/* Location */}
            <div className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
              <MapPin size={12} className="text-[var(--color-accent)]" />
              <span>India — Remote Worldwide</span>
            </div>

            {/* Scroll hint */}
            <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.35em] text-[var(--color-text-muted)] uppercase">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown size={12} className="text-[var(--color-accent)]" />
              </motion.div>
            </div>

            {/* Status + Time */}
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
                </span>
                Available for work
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
                <LiveClock />
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Marquee background texture ── */}
        <InfiniteMarquee />
      </div>
    </section>
  );
}
