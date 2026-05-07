"use client";

import { Link } from "@/i18n/routing";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { useParams, notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { getProjectBySlug } from "@/data/projects";
import ProjectImageCard from "@/components/ProjectImageCard";
import ProjectPagination from "@/components/ProjectPagination";
import { useTranslations } from "next-intl";

export default function ProjectDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const projectData = getProjectBySlug(slug);

    const t = useTranslations("ProjectDetail");

    if (!projectData) {
        return notFound();
    }
    return (
        <main className="min-h-screen bg-white text-[#111] selection:bg-black selection:text-white relative">
            <Navbar forceVisible={true} />
            {/* Top Navigation */}
            <div className="pt-24 md:pt-32 px-4 md:px-8 mb-8 md:mb-12">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium hover:text-zinc-500 transition-colors"
                >
                    &larr; {t("back")}
                </Link>
            </div>

            {/* Header section */}
            <div className="px-4 md:px-8 mb-12 lg:mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[12vw] md:text-[8vw] font-medium leading-[0.8] tracking-tighter"
                >
                    {projectData.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-2xl md:text-3xl lg:text-4xl text-zinc-500 font-medium tracking-tight mt-2 md:mt-4"
                >
                    {projectData.subtitle}
                </motion.p>
            </div>

            {/* Metadata Bar */}
            <div className="px-4 md:px-8 pb-4 border-b border-zinc-200 mb-1 lg:mb-[5px]">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 text-sm font-medium">
                    <div className="max-w-xl">
                        <p className="whitespace-pre-line leading-relaxed z-10 text-zinc-800">
                            {t(`${slug}.desc`)}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-8 xl:gap-12 text-zinc-500 w-full xl:w-auto">
                        {projectData.link && (
                            <a
                                href={projectData.link}
                                className="hover:text-[#111] transition-colors flex items-center gap-1 group"
                            >
                                <span className="text-[#111]">{t("link")}</span>
                                <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                                    ↗
                                </span>
                            </a>
                        )}

                        <div className="flex gap-1">
                            <span>{t("services")}:</span>
                            <span className="text-[#111]">
                                {t(`${slug}.services`)}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            <span>{t("client")}:</span>
                            <span className="text-[#111]">
                                {t(`${slug}.client`)}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            <span>{t("year")}:</span>
                            <span className="text-[#111]">
                                {t(`${slug}.year`)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Images Grid (First 2) */}
            <div className="columns-1 md:columns-2 gap-[5px] p-[5px] overflow-hidden">
                {projectData.images.slice(0, 2).map((image, index) => (
                    <ProjectImageCard
                        key={`image-initial-${index}`}
                        image={image}
                        index={index}
                        isInitialLoad={true}
                    />
                ))}
            </div>

            {/* Details (Concept & Scope) */}
            <div className="py-24 md:py-48 px-4 md:px-8">
                <div className="w-full md:w-1/2 ml-auto lg:pr-24">
                    <div className="mb-16 md:mb-24">
                        <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                            {t("concept")}
                        </h3>
                        <p className="text-lg md:text-xl text-[#111] leading-relaxed font-medium">
                            {t(`${slug}.concept`)}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                            {t("scope")}
                        </h3>
                        <p className="text-lg md:text-xl text-[#111] leading-relaxed font-medium">
                            {t(`${slug}.scope`)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Images Grid (Rest) */}
            <div className="columns-1 md:columns-2 gap-[5px] p-[5px] mb-24 md:mb-48 overflow-hidden">
                {projectData.images.slice(2).map((image, index) => (
                    <ProjectImageCard
                        key={`image-lazy-${index}`}
                        image={image}
                        index={index}
                    />
                ))}
            </div>

            <ProjectPagination
                previous={projectData.previous}
                next={projectData.next}
                t={t}
            />

            <Footer />
        </main>
    );
}
