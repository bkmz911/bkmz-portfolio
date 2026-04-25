'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useHeroScrolled } from '@/hooks/use-hero-scrolled';

export default function Hero() {
  const isScrolled = useHeroScrolled();

  return (
    <section id="top" className="relative h-screen flex flex-col md:flex-row bg-white overflow-hidden p-[5px] gap-[5px]">
      {/* Left side text */}
      <div className="w-full md:w-1/2 flex flex-col justify-between relative z-10 pt-1 pb-4 px-2 md:pt-2 md:pb-6 md:px-4">
        <motion.div
           initial={{ opacity: 0, y: 150 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="flex flex-col text-[16vw] md:text-[18.5vw] leading-[0.78] tracking-tighter font-medium uppercase relative z-20 -ml-1 md:-ml-[0.05em]">
            {/* Invisible placeholder to prevent layout shift */}
            <div className="invisible flex flex-col">
              <span className="block">Lorian</span>
              <span className="block">Hans</span>
            </div>
            
            {!isScrolled && (
              <div className="absolute top-0 left-0 flex flex-col w-full text-[#111]">
                <motion.span layoutId="firstName" transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}} className="origin-left block relative">Lorian</motion.span>
                <motion.span layoutId="lastName" transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}} className="origin-left block relative">Hans</motion.span>
              </div>
            )}
          </div>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
           animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
           transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-12 md:mt-auto font-medium mb-2"
        >
          <p className="text-lg md:text-xl max-w-xs text-zinc-600">
            Web Designer & Digital Creative based in France
          </p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <span>Selected Work</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>
        </motion.div>
      </div>

      {/* Right side image */}
      <motion.div 
         initial={{ x: '100vw' }}
         animate={{ x: 0 }}
         transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
         className="w-full md:w-1/2 h-[50vh] md:h-full relative hidden sm:block shrink-0 overflow-hidden"
      >
        <Image
          src="https://picsum.photos/seed/silhouette/1200/1600"
          alt="Lorian Hans Portrait"
          fill
          className="object-cover object-center filter grayscale contrast-125"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Overlapping text effect */}
        <h1 className="absolute top-12 left-0 text-[18vw] leading-[0.8] tracking-tighter font-medium -translate-x-[50%] mix-blend-overlay text-white opacity-50 uppercase pointer-events-none hidden md:block">
            Lorian<br />Hans
        </h1>
      </motion.div>
    </section>
  );
}
