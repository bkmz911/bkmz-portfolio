"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";
import BlurText from "./BlurText";
import { useTranslations } from "next-intl";

const experiences = [
    {
        duration: "2020 – Now",
        role: "Senior Web Designer",
        company: "Freelance",
        description:
            "Designed and developed 100+ websites for clients across tech, e-commerce, and creative industries. Led end-to-end design processes including strategy, UX research, wireframing, prototyping, and development.",
    },
    {
        duration: "2018 – 2020",
        role: "Lead Web Designer",
        company: "Nova Digital Agency",
        description:
            "Led the design team on client web projects, from discovery to launch. Oversaw design quality, brand alignment, and usability across all deliverables",
    },
    {
        duration: "2015 – 2018",
        role: "Web & UI Designer",
        company: "Creative Pixel Studio",
        description:
            "Created custom website designs and landing pages for small-to-mid-size businesses. Delivered mobile-first, responsive designs with a strong focus on usability and aesthetics.",
    },
    {
        duration: "2013 – 2015",
        role: "Junior Web Designer",
        company: "DesignHive Agency",
        description:
            "Supported senior designers on web projects, handling layout, typography, and visual refinements. Converted mockups into pixel-perfect HTML/CSS templates.",
    },
];

export default function Experience() {
    const t = useTranslations("Experience");

    return (
        <section id="about" className="py-24 md:py-48 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Intro text merged from old About section */}
                <div className="mb-32 md:mb-48">
                    <BlurText
                        text={t("desc1")}
                        highlightText={t("desc2")}
                        className="text-2xl md:text-4xl lg:text-[3.5rem] leading-[1.05] tracking-tighter font-medium"
                    />
                </div>

                {/* Experience Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-end mb-8"
                >
                    <h3 className="text-3xl md:text-4xl tracking-tight font-medium">
                        {t("title")}
                    </h3>
                    {/* <a
                        href="#"
                        className="flex items-center gap-2 text-sm font-medium hover:text-zinc-500 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        {t("download-btn")}
                    </a> */}
                </motion.div>

                {/* Experience List */}
                <div className="flex flex-col">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.duration}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="border-t border-zinc-200 py-6 md:py-10"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                                <div className="col-span-1 text-zinc-400 text-sm md:text-base font-medium">
                                    {t(`experience.case${i + 1}.duration`)}
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <h4 className="font-medium text-lg md:text-xl mb-3">
                                        {t(`experience.case${i + 1}.role`)}
                                    </h4>
                                    <p className="text-[#111] leading-relaxed font-medium text-sm md:text-base max-w-[90%]">
                                        {t(`experience.case${i + 1}.description`)}
                                    </p>
                                </div>
                                <div className="col-span-1 text-left md:text-right font-medium text-sm md:text-base">
                                    {t(`experience.case${i + 1}.company`)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
