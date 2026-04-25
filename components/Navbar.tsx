'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { useHeroScrolled } from '@/hooks/use-hero-scrolled';

export default function Navbar({ forceVisible = false }: { forceVisible?: boolean }) {
  const scrolled = useHeroScrolled();
  const isScrolled = forceVisible || scrolled;
  const [isOpen, setIsOpen] = useState(false);
  
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ru' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <motion.nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-[20px] flex justify-between items-start pointer-events-none">
      <div className="flex-1 pointer-events-auto">
        {isScrolled && (
          <Link href="#top" onClick={() => setIsOpen(false)} className="inline-flex gap-[0.3em] text-xl md:text-3xl tracking-tighter font-medium uppercase mt-2 md:mt-0 text-zinc-500 hover:text-zinc-700 transition-colors">
            <motion.span layoutId="firstName" transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}} className="origin-left">Lorian</motion.span>
            <motion.span layoutId="lastName" transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}} className="origin-left">Hans</motion.span>
          </Link>
        )}
      </div>

      <motion.div layout className="pointer-events-auto flex items-center bg-white text-[#111] rounded-full overflow-hidden border border-zinc-200" style={{boxShadow: "0 4px 20px rgba(0,0,0,0.08)"}}>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center overflow-hidden whitespace-nowrap"
            >
              <div className="flex items-center gap-6 pl-6 pr-2 font-medium text-sm md:text-base">
                <Link href="#projects" onClick={toggleMenu} className="hover:text-zinc-500 transition-colors">{t('projects')}</Link>
                <Link href="#services" onClick={toggleMenu} className="hover:text-zinc-500 transition-colors">{t('services')}</Link>
                <Link href="#experience" onClick={toggleMenu} className="hover:text-zinc-500 transition-colors">{t('about')}</Link> 
                <button onClick={toggleLanguage} className="hover:text-zinc-500 transition-colors uppercase border-l border-zinc-300 pl-6 ml-2 font-semibold">
                  {locale === 'en' ? 'RU' : 'EN'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleMenu}
          className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-4 h-4 md:w-5 md:h-5 relative flex items-center justify-center"
          >
            <motion.span className="absolute w-full h-[2px] bg-current" />
            <motion.span className="absolute h-full w-[2px] bg-current" />
          </motion.div>
        </button>
      </motion.div>
    </motion.nav>
  );
}
