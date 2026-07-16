"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useHeroScrolled } from "@/hooks/use-hero-scrolled";
import { useTranslations } from "next-intl";

export default function Hero() {
    const isScrolled = useHeroScrolled();

    const t = useTranslations("Hero");

    return (
        <section
            id="top"
            className="relative min-h-[100dvh] flex flex-col lg:flex-row overflow-x-hidden gap-[5px]"
        >
            {/* Left side text */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between relative z-10 py-2 px-2 md:py-4 md:px-4">
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1,
                    }}
                >
                    <div className="flex flex-col text-[16vw] md:text-[18.5vw] leading-[0.78] tracking-tighter font-medium relative z-20 -ml-1 md:-ml-[0.05em]">
                        {/* Invisible placeholder to prevent layout shift */}
                        <div className="invisible flex flex-col pointer-events-none select-none">
                            <span className="block">Ilyha</span>
                            <span className="block">Bkmz</span>
                        </div>

                        {!isScrolled && (
                            <div className="absolute top-0 left-0 flex flex-col w-full text-primary">
                                <motion.h1
                                    layoutId="firstName"
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="origin-left block relative"
                                >
                                    Ilyha Bkmz
                                </motion.h1>
                                {/* <motion.span layoutId="lastName" transition={{duration: 0.8, ease: [0.16, 1, 0.3, 1]}} className="origin-left block relative">Hans</motion.span> */}
                            </div>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-4 md:mt-auto font-medium gap-8 sm:gap-0 w-full"
                >
                    <div className="flex flex-col gap-6 lg:gap-8 w-full sm:w-auto">
                        <p className="text-lg md:text-xl max-w-md text-primary">
                            {t("subtitle")}
                        </p>
                        
                        {/* Mobile Button */}
                        <a 
                            href="#contact" 
                            className="sm:hidden inline-flex items-center justify-center bg-primary text-background hover:bg-primary/90 transition-colors px-6 py-3 rounded-full font-medium w-full text-sm"
                        >
                            {t("cta")}
                        </a>

                        <div className="flex items-center text-md gap-2">
                            <span>{t("projects")}</span>
                            <Image src="/icons/arrow-down.svg" alt="Arrow" width={24} height={24} />
                        </div>
                    </div>

                    {/* Desktop Button */}
                    <a 
                        href="#contact" 
                        className="hidden sm:inline-flex items-center justify-center bg-primary whitespace-nowrap text-background hover:bg-primary/90 transition-colors px-6 py-3 rounded-full font-medium w-fit text-sm md:text-base"
                    >
                        {t("cta")}
                    </a>
                </motion.div>
            </div>

            {/* Right side image */}
            <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.6,
                }}
                className="w-full lg:w-1/2 flex-1 lg:flex-none aspect-[4/5] lg:aspect-auto lg:min-h-0 relative block shrink-0 overflow-hidden"
            >
                <Image
                    src="/hero-avatar-desktop.avif"
                    alt="Ilyha Bkmz Portrait"
                    fill
                    className="hidden lg:block object-cover object-center filter grayscale contrast-125"
                    priority
                    referrerPolicy="no-referrer"
                />
                <Image
                    src="/hero-avatar-mobile.avif"
                    alt="Ilyha Bkmz Portrait"
                    fill
                    className="block lg:hidden object-cover object-center filter grayscale contrast-125"
                    priority
                    referrerPolicy="no-referrer"
                />
            </motion.div>
        </section>
    );
}