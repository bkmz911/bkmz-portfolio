"use client";

import { motion } from "motion/react";
import BlurText from "./BlurText";
import { useTranslations } from "next-intl";

const servicesList = [
    {
        num: "(1)",
        title: "Фронтенд разработка",
        items: [
            "Пиксель-перфект верстка",
            "Адаптивный интерфейс",
            "Интеграция с API",
        ],
    },
    {
        num: "(2)",
        title: "Бекенд разработка",
        items: [
            "Разработка масштабируемых API",
            "Проектирование баз данных",
            "Интеграция платежных систем",
        ],
    },
    {
        num: "(3)",
        title: "SaaS и Платформы",
        items: [
            "Telegram Mini Apps (TMA)",
            "Разработка SaaS MVP",
            "Кастомные маркетплейсы",
        ],
    },
    {
        num: "(4)",
        title: "Оптимизация и Стратегия",
        items: [
            "Улучшение производительности",
            "SEO-ориентированная архитектура",
            "Технический консалтинг",
        ],
    },
];

export default function Services() {
    const t = useTranslations("Services");

    return (
        <section id="services" className="py-24 md:py-48 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-32 md:mb-48">
                    <BlurText
                        text={t("desc1")}
                        highlightText={t("desc2")}
                        className="text-2xl md:text-4xl lg:text-[3.5rem] leading-[1.05] tracking-tighter font-medium"
                    />
                </div>

                <div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-medium tracking-tight mb-16"
                    >
                        {t("title")}
                    </motion.h3>

                    <div className="flex flex-col">
                        {servicesList.map((service, iG) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: iG * 0.1 }}
                                className="mb-8"
                            >
                                <div className="grid grid-cols-3 items-end pb-4 font-medium">
                                    <div className="text-muted-foreground text-sm md:text-base tracking-widest">
                                        {`(${iG + 1})`}
                                    </div>
                                    <div className="text-center text-xl md:text-2xl">
                                        {t(`services.service${iG + 1}.title`)}
                                    </div>
                                    <div></div>
                                </div>
                                <div className="border-t border-border pt-4 pb-8 flex flex-col items-end gap-1.5 text-sm md:text-base text-zinc-700">
                                    {service.items.map((item, iL) => (
                                        <span key={item}>
                                            {t(
                                                `services.service${iG + 1}.item${iL + 1}`,
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
