import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export default function InteractiveUnderlay() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handler = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const bg = useMotionTemplate`radial-gradient(800px circle at ${smoothX}px ${smoothY}px, rgba(16,185,129,0.08), transparent 80%)`;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <motion.div className="absolute inset-0" style={{ background: bg }} />
    </div>
  );
}
