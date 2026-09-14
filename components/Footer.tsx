"use client";

import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Footer() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"],
    });

    const panelY = useTransform(scrollYProgress, [0, 1], [-600, 0]);

    const t = useTranslations("Footer");
    const isMobile = useIsMobile();
    const reducedMotion = useReducedMotion();

    return (
        <section
            id="contact"
            ref={containerRef}
            className="relative h-screen overflow-hidden"
        >
            <motion.div
                style={{ y: isMobile || reducedMotion ? 0 : panelY }}
                className="h-screen bg-foreground text-secondary flex flex-col lg:flex-row"
            >
                {/* Left side Image */}
                <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
                    <div className="absolute w-[100%] h-[100%]">
                    <Image
                        src="/footer-avatar.avif"
                        alt="Ilya Chesnokov Contact Portrait"
                        fill
                        className="object-cover filter contrast-[1.1]"
                        referrerPolicy="no-referrer"
                    />
                    {/* 
                        Плавный переход:
                        bg-gradient-to-b -> на мобилках растворяет картинку сверху-вниз к контенту
                        lg:bg-gradient-to-r -> на десктопе работает как раньше (слева-направо) 
                    */}
                    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-[#111]/40 lg:via-[#111]/30 to-[#111]" />
                    </div>
                </div>

                {/* Right side Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10 p-8 lg:p-16 lg:px-24 lg:py-16 justify-between h-[65vh] lg:h-full relative z-10 ">
                <div className="items-start flex flex-col">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease:[0.16, 1, 0.3, 1] }}
                        className="text-[12vw] lg:text-[8vw] xl:text-[7.5rem] font-medium leading-[0.9] tracking-tighter mb-6"
                    >
                        {t("title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease:[0.16, 1, 0.3, 1],
                        }}
                        className="text-muted-foreground text-lg lg:text-xl xl:text-[1.35rem] max-w-lg leading-snug tracking-tight"
                    >
                        {t("desc")}
                    </motion.p>
                    <motion.a
                        href="https://t.me/Bkmz911"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-[#111] transition-colors hover:bg-zinc-200"
                    >
                        {t("telegram")}
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-row justify-between items-center flex-wrap gap-10 sm:gap-5 font-medium pb-8 lg:pb-0"
                >
                    <div className="flex flex-col gap-1 text-lg lg:text-[1.3rem] xl:text-[1.4rem] tracking-tight">
                        <a
                            href="tel:+79536430866"
                            className="hover:text-muted-foreground/95 transition-colors"
                        >
                            +7 (953) 643-08-66
                        </a>
                        <a
                            href="mailto:i.a.4esnokov@gmail.com"
                            className="hover:text-muted-foreground/95 transition-colors"
                        >
                            i.a.4esnokov@gmail.com
                        </a>
                    </div>

                    <div className="flex gap-4 items-center">
                        {/* Telegram */}
                        <a
                            href="https://t.me/Bkmz911"
                            target="_blank"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <Image 
                                src="/icons/telegram.svg" 
                                alt="Telegram" 
                                width={48} 
                                height={48} 
                                className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" 
                            />
                        </a>
                        
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/79536430866"
                            target="_blank"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <Image 
                                src="/icons/whatsapp.svg" 
                                alt="WhatsApp" 
                                width={48} 
                                height={48} 
                                className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" 
                            />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/i4esnokov"
                            target="_blank"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <Image 
                                src="/icons/linkedin.svg" 
                                alt="LinkedIn" 
                                width={48} 
                                height={48} 
                                className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" 
                            />
                        </a>
                    </div>
                </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
