import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
import TechMarquee from './components/TechMarquee';
import TechSwarm from './components/TechSwarm';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveUnderlay from './components/InteractiveUnderlay';
import CustomCursor from './components/CustomCursor';

function PageTransition() {
  const controls = useAnimation();

  useEffect(() => {
    const handleTransition = async (e: Event) => {
      const customEvent = e as CustomEvent;
      // Position off-screen left
      await controls.set({ x: '-100%', skewX: 5 });
      
      // Sweep in
      await controls.start({ x: '0%', skewX: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } });
      
      // Perform the scroll
      const target = document.getElementById(customEvent.detail.target);
      if (target) {
        target.scrollIntoView();
      }
      
      // Brief pause for visual impact
      await new Promise(r => setTimeout(r, 150));
      
      // Sweep out right
      await controls.start({ x: '100%', skewX: -5, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } });
    };

    window.addEventListener('triggerTransition', handleTransition);
    return () => window.removeEventListener('triggerTransition', handleTransition);
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ x: '100%' }}
      className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-[var(--color-void)] border-l border-[var(--color-border)] shadow-[-30px_0_50px_rgba(0,0,0,0.5)]"
    >
      <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white tracking-[0.5em] uppercase">
        Loading<span className="text-[var(--color-accent)] animate-pulse">_</span>
      </span>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.2 }}>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!loading && (
        <>
          <PageTransition />
          <div className="noise-overlay" />
          <CustomCursor />
          <InteractiveUnderlay />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <ProjectsGrid />
            <TechSwarm />
            <TechMarquee />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </ReactLenis>
  );
}
