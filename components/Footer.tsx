"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

    const t = useTranslations("Footer");

    return (
        <section
            id="contact"
            ref={containerRef}
            className="relative h-screen bg-[#111] text-white flex flex-col md:flex-row overflow-hidden border-t border-zinc-800"
        >
            {/* Left side Image with Parallax */}
            <div className="w-full md:w-1/2 h-[40vh] md:h-full relative overflow-hidden">
                <motion.div
                    style={{ y: imageY }}
                    className="absolute w-[100%] h-[100%]"
                >
                    <Image
                        src="/footer-avatar.avif"
                        alt="Ilya Chesnokov Contact Portrait"
                        fill
                        className="object-cover filter contrast-[1.1]"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111]/30 to-[#111]" />
                </motion.div>
            </div>

            {/* Right side Content */}
            <motion.div
                style={{ y: contentY }}
                className="w-full md:w-1/2 flex flex-col p-8 md:p-16 lg:px-24 lg:py-16 justify-between h-[60vh] md:h-full relative z-10 bg-[#111]"
            >
                <div className="mt-8 md:mt-0 pt-12 md:pt-0 items-start flex flex-col">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[12vw] md:text-[8vw] lg:text-[7.5rem] font-medium leading-[0.9] tracking-tighter mb-6"
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
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-zinc-500 text-lg md:text-xl lg:text-[1.35rem] max-w-lg leading-snug tracking-tight"
                    >
                        {t("desc")}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-12 sm:gap-0 font-medium pb-8 md:pb-0"
                >
                    <div className="flex flex-col gap-1 text-lg lg:text-[1.3rem] tracking-tight">
                        <a
                            href="tel:+79536430866"
                            className="hover:text-zinc-400 transition-colors"
                        >
                            +7 (953) 643-0866
                        </a>
                        <a
                            href="mailto:i.a.4esnokov@gmail.com"
                            className="hover:text-zinc-400 transition-colors"
                        >
                            i.a.4esnokov@gmail.com
                        </a>
                    </div>

                    <div className="flex gap-4 items-center">
                        <a
                            href="https://t.me/Bkmz911"
                            target="_blank"
                            className="hover:text-zinc-400 transition-colors"
                        >
                            <Image
                                src="/tg-icon.svg"
                                width={32}
                                height={32}
                                alt="Telegram"
                                className="w-8 h-8 md:w-10 md:h-10"
                            />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
