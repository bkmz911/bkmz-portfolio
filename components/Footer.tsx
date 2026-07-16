"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Footer() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

    const t = useTranslations("Footer");
    const isMobile = useIsMobile();

    return (
        <section
            id="contact"
            ref={containerRef}
            className="relative h-screen bg-foreground text-secondary flex flex-col lg:flex-row overflow-hidden"
        >
            {/* Left side Image with Parallax */}
            <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
                <motion.div
                    style={{ y: isMobile ? 0 : imageY }}
                    className="absolute w-[100%] h-[100%]"
                >
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
                </motion.div>
            </div>

            {/* Right side Content */}
            <motion.div
                style={{ y: isMobile ? 0 : contentY }}
                className="w-full lg:w-1/2 flex flex-col gap-10 p-8 lg:p-16 lg:px-24 lg:py-16 justify-between h-[60vh] lg:h-full relative z-10 "
            >
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
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex flex-row justify-between items-start sm:items-center gap-12 sm:gap-0 font-medium pb-8 lg:pb-0"
                >
                    <div className="flex flex-col gap-1 text-lg lg:text-[1.3rem] xl:text-[1.4rem] tracking-tight">
                        <a
                            href="tel:+79536430866"
                            className="hover:text-muted-foreground/95 transition-colors"
                        >
                            +7 (953) 643-0866
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
                            className="text-white hover:text-muted-foreground/80 transition-colors"
                        >
                            <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z" />
                            </svg>
                        </a>
                        
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/79536430866"
                            target="_blank"
                            className="text-white hover:text-muted-foreground/80 transition-colors"
                        >
                            <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.013 2.009a9.96 9.96 0 0 0-8.528 15.132L2 22l4.982-1.455a9.962 9.962 0 1 0 5.031-18.536ZM17.435 15.65c-.256.719-1.488 1.332-2.046 1.4-1.127.136-2.522-.387-4.48-1.196-2.355-.968-3.864-3.385-3.98-3.539-.115-.154-.95-1.265-.95-2.41 0-1.146.598-1.71 1.258-2.392.204-.21.439-.271.583-.271s.296-.002.427.004c.143.007.332-.053.518.39.2.477.683 1.666.744 1.789.061.123.102.266.02.42-.082.154-.122.251-.245.405-.123.153-.265.348-.37.472-.116.138-.242.29-.099.537.143.245.637 1.05 1.365 1.696.938.832 1.733 1.09 1.983 1.213.25.123.393.102.54-.067.148-.17.618-.718.784-.964.164-.246.328-.205.553-.123.225.082 1.42.668 1.665.792.245.122.408.184.47.286.061.102.061.595-.195 1.314Z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/i4esnokov"
                            target="_blank"
                            className="text-white hover:text-muted-foreground/80 transition-colors"
                        >
                            <svg className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.45227 16.9152V9.69747H6.20847V16.9152H8.45227ZM7.32976 8.71285C8.11306 8.71285 8.60155 8.19389 8.60155 7.54589C8.58661 6.88295 8.11306 6.37893 7.34471 6.37893C6.57636 6.37893 6.0729 6.88295 6.0729 7.54589C6.0729 8.19389 6.5614 8.71285 7.31482 8.71285H7.32976ZM17.9262 16.9152H15.6811V13.048C15.6811 12.0792 15.3341 11.4172 14.466 11.4172C13.803 11.4172 13.4116 11.864 13.247 12.2961C13.1873 12.4402 13.1723 12.6416 13.1723 12.8431V16.9152H10.9272C10.9272 16.9152 10.957 10.3456 10.9272 9.69747H13.1723V10.72C13.4704 10.2608 14.0041 9.54078 15.2774 9.54078C16.8152 9.54078 17.9262 10.5484 17.9262 12.7167V16.9152Z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}