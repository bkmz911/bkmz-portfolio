"use client";

import { motion } from "motion/react";
import {
    Layout,
    FileCode2,
    FileCode,
    Wind,
    Server,
    Database,
} from "lucide-react";
import { useTranslations } from "next-intl";

const tools = [
    { name: "Next.js", desc: "Full-stack React framework", icon: Layout },
    { name: "TypeScript", desc: "Typed JavaScript", icon: FileCode2 },
    { name: "HTML & CSS", desc: "Web markup & styling", icon: FileCode },
    { name: "Tailwind", desc: "Utility-first CSS framework", icon: Wind },
    { name: "Express.js", desc: "Node.js web framework", icon: Server },
    { name: "MongoDB", desc: "NoSQL database server", icon: Database },
];

export default function Tools() {
    const t = useTranslations("Tools");

    return (
        <section id="tools" className="py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl tracking-tight font-medium mb-8 md:mb-12"
                >
                    {t("title")}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px]">
                    {tools.map((tool, i) => {
                        const Icon = tool.icon;
                        return (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-zinc-100 p-8 md:p-10 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-6">
                                    <Icon
                                        className="w-10 h-10 text-zinc-600"
                                        strokeWidth={1.5}
                                    />
                                    <div className="flex flex-col">
                                        <h4 className="font-medium text-xl md:text-2xl text-[#111] mb-1">
                                            {t(`tools.tool${i + 1}.name`)}
                                        </h4>
                                        <p className="text-zinc-600 text-sm md:text-base leading-tight">
                                            {t(`tools.tool${i + 1}.desc`)}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
