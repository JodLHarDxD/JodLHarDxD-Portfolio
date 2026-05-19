import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 28 });
  const springY = useSpring(y, { stiffness: 300, damping: 28 });

  useEffect(() => {
    const handler = (e: MouseEvent) => { x.set(e.clientX - 8); y.set(e.clientY - 8); };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [x, y]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full border border-[var(--color-accent)] z-[9998] pointer-events-none mix-blend-difference hidden md:block"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
