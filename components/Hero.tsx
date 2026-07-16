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
            className="relative h-screen flex flex-col 2xl:flex-row overflow-hidden gap-[5px]"
        >
            {/* Left side text */}
            <div className="w-full 2xl:w-1/2 flex flex-col justify-between relative z-10 py-2 px-2 md:py-4 md:px-4">
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
                        <div className="invisible flex flex-col">
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
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-12 md:mt-auto font-medium gap-8 sm:gap-0"
                >
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <p className="text-lg md:text-xl max-w-md text-primary">
                            {t("subtitle")}
                        </p>
                        
                        <div className="flex items-center text-md gap-2">
                            <span>{t("projects")}</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    fill="#111"
                                />
                                <path
                                    d="M12 16L16 12L12 8"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8 12H16"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <a 
                        href="#contact" 
                        className="inline-flex items-center justify-center bg-primary text-background hover:bg-primary/90 transition-colors px-6 py-3 md:px-8 md:py-4 rounded-full font-medium w-full sm:w-fit text-sm md:text-lg"
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
                className="w-full 2xl:w-1/2 h-full relative block shrink-0 overflow-hidden"
            >
                <Image
                    src="/hero-avatar-desktop.avif"
                    alt="Ilyha Bkmz Portrait"
                    fill
                    className="hidden 2xl:block object-cover object-center filter grayscale contrast-125"
                    priority
                    referrerPolicy="no-referrer"
                />
                <Image
                    src="/hero-avatar-mobile.avif"
                    alt="Ilyha Bkmz Portrait"
                    fill
                    className="block 2xl:hidden object-cover object-center filter grayscale contrast-125"
                    priority
                    referrerPolicy="no-referrer"
                />
            </motion.div>
        </section>
    );
}