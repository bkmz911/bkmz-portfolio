"use client";

import { motion, AnimatePresence } from "motion/react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useHeroScrolled } from "@/hooks/use-hero-scrolled";

export default function Navbar({
    forceVisible = false,
}: {
    forceVisible?: boolean;
}) {
    const scrolled = useHeroScrolled();
    const isScrolled = forceVisible || scrolled;
    const[isOpen, setIsOpen] = useState(false);

    const t = useTranslations("Navbar");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "ru" : "en";
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <motion.nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-[20px] flex justify-between items-start pointer-events-none">
            {/* Left side: Logo/Name */}
            <div className="flex-1 pointer-events-auto">
                {isScrolled && (
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex gap-[0.3em] text-xl md:text-3xl tracking-tighter font-medium mt-2 md:mt-0 text-zinc-500 hover:text-zinc-700 transition-colors"
                    >
                        <motion.span
                            layoutId="firstName"
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="origin-left"
                        >
                            Ilyha
                        </motion.span>
                        <motion.span
                            layoutId="lastName"
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="origin-left"
                        >
                            Bkmz
                        </motion.span>
                    </Link>
                )}
            </div>

            {/* Right side: Expanding Menu */}
            <motion.div
                layout
                // На мобилках - колонка (сверху вниз), на десктопе - строка задом наперед (слева направо)
                className="pointer-events-auto flex flex-col md:flex-row-reverse items-end md:items-center bg-white text-[#111] rounded-[24px] md:rounded-full overflow-hidden border border-zinc-200"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            >
                {/* 1. Кнопка всегда сверху (мобилка) или справа (десктоп) */}
                <button
                    onClick={toggleMenu}
                    className="relative cursor-pointer w-12 h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0 focus:outline-none z-10"
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

                {/* 2. Контент меню: выезжает из кнопки */}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            // Анимируем одновременно и ширину, и высоту из нуля
                            initial={{ width: 0, height: 0, opacity: 0 }}
                            animate={{ width: "auto", height: "auto", opacity: 1 }}
                            exit={{ width: 0, height: 0, opacity: 0 }}
                            transition={{
                                duration: 0.4,
                                ease:[0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                        >
                            {/* Внутренний враппер со ссылками */}
                            <div className="flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-6 pl-6 pr-5 md:pr-2 pb-6 md:pb-0 md:h-14 font-medium text-[15px] md:text-base whitespace-nowrap">
                                <Link
                                    href="#projects"
                                    onClick={toggleMenu}
                                    className="hover:text-zinc-500 transition-colors"
                                >
                                    {t("projects")}
                                </Link>
                                <Link
                                    href="#services"
                                    onClick={toggleMenu}
                                    className="hover:text-zinc-500 transition-colors"
                                >
                                    {t("services")}
                                </Link>
                                <Link
                                    href="#about"
                                    onClick={toggleMenu}
                                    className="hover:text-zinc-500 transition-colors"
                                >
                                    {t("about")}
                                </Link>
                                <Link
                                    href="#contact"
                                    onClick={toggleMenu}
                                    className="hover:text-zinc-500 transition-colors"
                                >
                                    {t("contact")}
                                </Link>

                                {/* Секция переключения языка с адаптивной линией-разделителем */}
                                <div className="w-full md:w-auto flex justify-end md:block pt-3 md:pt-0 mt-1 md:mt-0 border-t md:border-t-0 md:border-l border-zinc-200 md:pl-6 md:ml-2">
                                    <button
                                        onClick={toggleLanguage}
                                        className="hover:text-zinc-500 cursor-pointer transition-colors uppercase font-semibold block"
                                    >
                                        {locale === "en" ? "RU" : "EN"}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.nav>
    );
}