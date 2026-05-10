"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useState } from "react";

interface ProjectPaginationProps {
    previous: {
        title: string;
        subtitle1: string;
        subtitle2: string;
        format: string;
        img: string;
        hoverImg: string;
        slug: string;
    };
    next: {
        title: string;
        subtitle1: string;
        subtitle2: string;
        format: string;
        img: string;
        hoverImg: string;
        slug: string;
    };
    t: (key: string) => string;
}

export default function ProjectPagination({
    previous,
    next,
    t,
}: ProjectPaginationProps) {
    // Раздельные состояния загрузки для двух карточек
    const [prevLoaded, setPrevLoaded] = useState(false);
    const [nextLoaded, setNextLoaded] = useState(false);

    return (
        <>
            <div className="px-4 md:px-8 mb-4">
                <div className="flex justify-between items-center text-sm font-medium border-t border-zinc-200 pt-4">
                    <span>{t("previous")}</span>
                    <span>{t("next")}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] p-[5px]">
                {/* Previous Project */}
                <Link
                    href={`/project/${previous.slug}`}
                    className="relative overflow-hidden group block aspect-[3/2] bg-zinc-200"
                >
                    {/* Skeleton Overlay */}
                    <div
                        className={`absolute inset-0 z-20 animate-shimmer bg-zinc-200 transition-opacity duration-500 ${
                            prevLoaded
                                ? "opacity-0 pointer-events-none"
                                : "opacity-100"
                        }`}
                    />

                    <Image
                        src={previous.img}
                        alt={previous.title}
                        fill
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover transition-opacity duration-700 ${
                            prevLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => setPrevLoaded(true)}
                        referrerPolicy="no-referrer"
                    />

                    <Image
                        src={previous.hoverImg}
                        alt={`${previous.title} hover`}
                        fill
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 will-change-opacity"
                        referrerPolicy="no-referrer"
                    />

                    {/* Content Overlays */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 will-change-opacity" />
                    <div className="absolute left-4 bottom-4 z-30 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none will-change-opacity">
                        <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                            {previous.subtitle1}
                        </h3>
                    </div>
                    <div className="absolute right-4 bottom-4 z-30 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right pointer-events-none will-change-opacity">
                        <p className="text-white text-sm md:text-xl font-medium tracking-tight">
                            {previous.subtitle2}
                        </p>
                    </div>
                </Link>

                {/* Next Project */}
                <Link
                    href={`/project/${next.slug}`}
                    className="relative overflow-hidden group block aspect-[3/2] bg-zinc-200"
                >
                    {/* Skeleton Overlay */}
                    <div
                        className={`absolute inset-0 z-20 animate-shimmer bg-zinc-200 transition-opacity duration-500 ${
                            nextLoaded
                                ? "opacity-0 pointer-events-none"
                                : "opacity-100"
                        }`}
                    />

                    <Image
                        src={next.img}
                        alt={next.title}
                        fill
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover transition-opacity duration-700 ${
                            nextLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => setNextLoaded(true)}
                        referrerPolicy="no-referrer"
                    />

                    <Image
                        src={next.hoverImg}
                        alt={`${next.title} hover`}
                        fill
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 will-change-opacity"
                        referrerPolicy="no-referrer"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 will-change-opacity" />
                    <div className="absolute left-4 bottom-4 z-30 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none will-change-opacity">
                        <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                            {next.subtitle1}
                        </h3>
                    </div>
                    <div className="absolute right-4 bottom-4 z-30 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right pointer-events-none will-change-opacity">
                        <p className="text-white text-sm md:text-xl font-medium tracking-tight">
                            {next.subtitle2}
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}
