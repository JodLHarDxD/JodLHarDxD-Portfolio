import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const badges = [
  { name: 'Python', url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
  { name: 'PowerShell', url: 'https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white' },
  { name: 'TypeScript', url: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' },
  { name: 'Kotlin', url: 'https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white' },
  { name: 'JavaScript', url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
  { name: 'Java', url: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white' },
  { name: 'HTML5', url: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
  { name: 'CSS3', url: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
  { name: 'C++', url: 'https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
  { name: 'Windows Terminal', url: 'https://img.shields.io/badge/Windows_Terminal-4D4D4D?style=for-the-badge&logo=windows-terminal&logoColor=white' },
  { name: 'Bash Script', url: 'https://img.shields.io/badge/Bash_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white' },
  { name: 'C', url: 'https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white' },
  { name: 'AWS', url: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white' },
  { name: 'Cloudflare', url: 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white' },
  { name: 'Firebase', url: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white' },
  { name: 'Render', url: 'https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white' },
  { name: 'Netlify', url: 'https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' },
  { name: 'Google Cloud', url: 'https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white' },
  { name: 'Vercel', url: 'https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white' },
  { name: 'Node.js', url: 'https://img.shields.io/badge/Node.js-339939?style=for-the-badge&logo=node.js&logoColor=white' },
  { name: 'Next', url: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white' },
  { name: 'JWT', url: 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white' },
  { name: 'Django', url: 'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white' },
  { name: '.NET', url: 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white' },
  { name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
  { name: 'CUDA', url: 'https://img.shields.io/badge/CUDA-76B900?style=for-the-badge&logo=nvidia&logoColor=white' },
  { name: 'React Native', url: 'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
  { name: 'NPM', url: 'https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white' },
  { name: 'OpenCV', url: 'https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white' },
  { name: 'Nuxt', url: 'https://img.shields.io/badge/Nuxt-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white' },
  { name: 'Flask', url: 'https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white' },
  { name: 'FastAPI', url: 'https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white' },
  { name: 'TailwindCSS', url: 'https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
  { name: 'ThreeJS', url: 'https://img.shields.io/badge/ThreeJS-000000?style=for-the-badge&logo=three.js&logoColor=white' },
  { name: 'Vite', url: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white' },
  { name: 'Supabase', url: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
  { name: 'Prisma', url: 'https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white' },
  { name: 'MongoDB', url: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
  { name: 'Postgres', url: 'https://img.shields.io/badge/Postgres-316192?style=for-the-badge&logo=postgresql&logoColor=white' },
  { name: 'Figma', url: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white' },
  { name: 'Framer', url: 'https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=framer&logoColor=white' },
  { name: 'PyTorch', url: 'https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white' },
  { name: 'Tensorflow', url: 'https://img.shields.io/badge/Tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white' },
  { name: 'Docker', url: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
  { name: 'Git', url: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
  { name: 'Github', url: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' }
];

function SwarmBadge({ badge, mouseX, mouseY }: { badge: typeof badges[0], mouseX: any, mouseY: any }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.8 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.8 });
  
  // Subtle rotation based on X movement
  const rotate = useTransform(x, [-100, 100], [-25, 25]);

  useEffect(() => {
    const unsubscribe = mouseX.on('change', (latestX: number) => {
      if (!wrapperRef.current) return;
      
      const rect = wrapperRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const latestY = mouseY.get();
      const distanceX = latestX - centerX;
      const distanceY = latestY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      const radius = 250; // Magnetic field radius
      
      if (distance < radius && distance > 0) {
        // Exponential falloff for physics
        const force = Math.pow((radius - distance) / radius, 1.5);
        
        // Push away from cursor
        const maxMove = 100;
        x.set(-(distanceX / distance) * force * maxMove);
        y.set(-(distanceY / distance) * force * maxMove);
      } else {
        // Snap back
        x.set(0);
        y.set(0);
      }
    });

    return () => unsubscribe();
  }, [mouseX, mouseY, x, y]);

  return (
    <div ref={wrapperRef} className="m-2 shrink-0">
      <motion.div 
        style={{ x, y, rotate }}
        className="will-change-transform z-10 hover:z-20 relative"
      >
        <img 
          src={badge.url} 
          alt={badge.name} 
          loading="lazy"
          className="h-8 md:h-10 rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none" 
        />
      </motion.div>
    </div>
  );
}

export default function TechSwarm() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    // Track mouse globally for smooth interaction even when entering/leaving edges
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden bg-[var(--color-void)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.3em] text-[var(--color-accent)] uppercase mb-6">
            // The Arsenal
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Tech Stack Swarm
          </h2>
          <p className="mt-4 text-[var(--color-text-muted)] font-[family-name:var(--font-mono)] text-sm max-w-md mx-auto">
            Hover to disrupt the magnetic field.
          </p>
        </motion.div>

        {/* The massive grid of badges */}
        <div className="flex flex-wrap justify-center content-center max-w-5xl mx-auto cursor-crosshair">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.015, duration: 0.5 }}
            >
              <SwarmBadge badge={badge} mouseX={mouseX} mouseY={mouseY} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
