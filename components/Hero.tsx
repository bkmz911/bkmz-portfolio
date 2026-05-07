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
            className="relative h-screen flex flex-col lg:flex-row overflow-hidden gap-[5px]"
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
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-12 md:mt-auto font-medium"
                >
                    <p className="text-lg md:text-xl max-w-md text-primary">
                        {t("subtitle")}
                    </p>
                    <div className="flex items-center text-md gap-2 mt-4 sm:mt-0">
                        <span>{t("projects")}</span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 5v14" />
                            <path d="m19 12-7 7-7-7" />
                        </svg>
                    </div>
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
                className="w-full lg:w-1/2 h-full relative block shrink-0 overflow-hidden"
            >
                <Image
                    src="/hero-avatar-desktop.avif"
                    alt="Ilyha Bkmz Portrait"
                    fill
                    className="xl:block object-cover object-center filter grayscale contrast-125"
                    priority
                    referrerPolicy="no-referrer"
                />
                <Image
                    src="/hero-avatar-mobile.avif"
                    alt="Ilyha Bkmz Portrait"
                    fill
                    className="block xl:hidden object-cover object-center filter grayscale contrast-125"
                    priority
                    referrerPolicy="no-referrer"
                />
            </motion.div>
        </section>
    );
}