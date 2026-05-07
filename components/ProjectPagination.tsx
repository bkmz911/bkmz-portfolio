import { Link } from "@/i18n/routing";
import Image from "next/image";

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
    return (
        <>
            {/* Pagination View */}
            <div className="px-4 md:px-8 mb-4">
                <div className="flex justify-between items-center text-sm font-medium border-t border-zinc-200 pt-4">
                    <span>{t("previous")}</span>
                    <span>{t("next")}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] p-[5px]">
                {/* Previous */}
                <div className="relative overflow-hidden group block break-inside-avoid aspect-[3/2]">
                    <Link
                        href={`/project/${previous.slug}`}
                        className="w-full h-full relative overflow-hidden flex items-center justify-center p-8 lg:p-10 xl:p-12 2xl:px-14 object-cover bg-zinc-200"
                    >
                        {/* Blurred Background Layer - Default */}
                        <Image
                            src={previous.img}
                            alt={`${previous.title} background`}
                            fill
                            className="object-cover blur-[40px] scale-125 opacity-70 group-hover:opacity-0 transition-opacity duration-700"
                            unoptimized
                            referrerPolicy="no-referrer"
                        />
                        {/* Blurred Background Layer - Hover */}
                        <Image
                            src={previous.hoverImg}
                            alt={`${previous.title} background hover`}
                            fill
                            className="object-cover blur-[40px] scale-125 opacity-0 group-hover:opacity-70 transition-opacity duration-700"
                            unoptimized
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />

                        {/* Foreground Sharp Image */}
                        <div
                            className={`relative h-full rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01] border border-white/20 z-10 bg-zinc-100 ${
                                previous.format === "portrait"
                                    ? "w-auto aspect-[3/4] md:aspect-[2/3]"
                                    : "w-full"
                            }`}
                        >
                            <Image
                                src={previous.img}
                                alt={previous.title}
                                fill
                                className="object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-700"
                                unoptimized
                                referrerPolicy="no-referrer"
                            />
                            <Image
                                src={previous.hoverImg}
                                alt={`${previous.title} alternate`}
                                fill
                                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                unoptimized
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        {/* Hover Titles on Background */}
                        <div className="absolute left-2 md:left-4 bottom-2 md:bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                {previous.subtitle1}
                            </h3>
                        </div>
                        <div className="absolute right-2 md:right-4 bottom-2 md:bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">
                            <p className="text-white text-sm md:text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                {previous.subtitle2}
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Next */}
                <div className="relative overflow-hidden group block break-inside-avoid aspect-[3/2]">
                    <Link
                        href={`/project/${next.slug}`}
                        className="w-full h-full relative overflow-hidden flex items-center justify-center p-8 lg:p-10 xl:p-12 2xl:px-14 object-cover bg-zinc-200"
                    >
                        {/* Blurred Background Layer - Default */}
                        <Image
                            src={next.img}
                            alt={`${next.title} background`}
                            fill
                            className="object-cover blur-[40px] scale-125 opacity-70 group-hover:opacity-0 transition-opacity duration-700"
                            unoptimized
                            referrerPolicy="no-referrer"
                        />
                        {/* Blurred Background Layer - Hover */}
                        <Image
                            src={next.hoverImg}
                            alt={`${next.title} background hover`}
                            fill
                            className="object-cover blur-[40px] scale-125 opacity-0 group-hover:opacity-70 transition-opacity duration-700"
                            unoptimized
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />

                        {/* Foreground Sharp Image */}
                        <div
                            className={`relative h-full rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01] border border-white/20 z-10 bg-zinc-100 ${
                                next.format === "portrait"
                                    ? "w-auto aspect-[3/4] md:aspect-[2/3]"
                                    : "w-full"
                            }`}
                        >
                            <Image
                                src={next.img}
                                alt={next.title}
                                fill
                                className="object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-700"
                                unoptimized
                                referrerPolicy="no-referrer"
                            />
                            <Image
                                src={next.hoverImg}
                                alt={`${next.title} alternate`}
                                fill
                                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                unoptimized
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        {/* Hover Titles on Background */}
                        <div className="absolute left-2 md:left-4 bottom-2 md:bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                {next.subtitle1}
                            </h3>
                        </div>
                        <div className="absolute right-2 md:right-4 bottom-2 md:bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">
                            <p className="text-white text-sm md:text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                {next.subtitle2}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
