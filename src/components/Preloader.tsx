import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b]"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <span className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl font-bold text-white tracking-tighter">
          {'JH'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-accent)] tracking-[0.3em] uppercase whitespace-nowrap"
        >
          Systems Architect
        </motion.span>
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-[var(--color-surface-light)] rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-[var(--color-accent)] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}
