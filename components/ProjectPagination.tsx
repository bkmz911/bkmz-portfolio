import { Link } from "@/i18n/routing";
import Image from "next/image";

interface ProjectPaginationProps {
    previous: {
        title: string;
        subtitle1: string;
        subtitle2: string;
        format: string; // Этот проп теперь не используется, но оставлен для совместимости
        img: string;
        hoverImg: string;
        slug: string;
    };
    next: {
        title: string;
        subtitle1: string;
        subtitle2: string;
        format: string; // Этот проп теперь не используется, но оставлен для совместимости
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
            {/* Pagination Header */}
            <div className="px-4 md:px-8 mb-4">
                <div className="flex justify-between items-center text-sm font-medium border-t border-zinc-200 pt-4">
                    <span>{t("previous")}</span>
                    <span>{t("next")}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] p-[5px]">
                {/* Previous */}
                <Link
                    href={`/project/${previous.slug}`}
                    className="relative overflow-hidden group block break-inside-avoid aspect-[3/2] bg-zinc-200"
                >
                    {/* Главная картинка: остается статичной */}
                    <Image
                        src={previous.img}
                        alt={previous.title}
                        fill
                        quality={75} // Оптимизировано качество
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover" // Убраны transition и group-hover:opacity-0
                        referrerPolicy="no-referrer"
                    />
                    {/* Hover картинка: плавно появляется поверх основной */}
                    <Image
                        src={previous.hoverImg}
                        alt={`${previous.title} hover`}
                        fill
                        quality={75} // Оптимизировано качество
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 will-change-opacity" // Добавлен will-change-opacity
                        referrerPolicy="no-referrer"
                    />
                    {/* Градиент для читаемости текста */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 will-change-opacity" />{" "}
                    {/* Добавлен will-change-opacity */}
                    {/* Тексты */}
                    <div className="absolute left-4 bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none will-change-opacity">
                        {" "}
                        {/* Добавлен will-change-opacity */}
                        <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                            {previous.subtitle1}
                        </h3>
                    </div>
                    <div className="absolute right-4 bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right pointer-events-none will-change-opacity">
                        {" "}
                        {/* Добавлен will-change-opacity */}
                        <p className="text-white text-sm md:text-xl font-medium tracking-tight">
                            {previous.subtitle2}
                        </p>
                    </div>
                </Link>

                {/* Next */}
                <Link
                    href={`/project/${next.slug}`}
                    className="relative overflow-hidden group block break-inside-avoid aspect-[3/2] bg-zinc-200"
                >
                    {/* Главная картинка: остается статичной */}
                    <Image
                        src={next.img}
                        alt={next.title}
                        fill
                        quality={75} // Оптимизировано качество
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover" // Убраны transition и group-hover:opacity-0
                        referrerPolicy="no-referrer"
                    />
                    {/* Hover картинка: плавно появляется поверх основной */}
                    <Image
                        src={next.hoverImg}
                        alt={`${next.title} hover`}
                        fill
                        quality={75} // Оптимизировано качество
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 will-change-opacity" // Добавлен will-change-opacity
                        referrerPolicy="no-referrer"
                    />
                    {/* Градиент для читаемости текста */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 will-change-opacity" />{" "}
                    {/* Добавлен will-change-opacity */}
                    {/* Тексты */}
                    <div className="absolute left-4 bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none will-change-opacity">
                        {" "}
                        {/* Добавлен will-change-opacity */}
                        <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                            {next.subtitle1}
                        </h3>
                    </div>
                    <div className="absolute right-4 bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right pointer-events-none will-change-opacity">
                        {" "}
                        {/* Добавлен will-change-opacity */}
                        <p className="text-white text-sm md:text-xl font-medium tracking-tight">
                            {next.subtitle2}
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}
