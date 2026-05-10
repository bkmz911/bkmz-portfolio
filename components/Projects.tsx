"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

import { projectsPreviewData } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1">
                {projectsPreviewData.map((project, i) => (
                    <Link
                        href={`/project/${project.id}`}
                        key={project.id}
                        className="relative overflow-hidden group block break-inside-avoid aspect-[3/2] bg-zinc-200"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            // Слегка уменьшили margin, чтобы картинка начинала грузиться чуть раньше
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6, // Сделали появление чуть быстрее (чтобы не забивать поток)
                                // ИСПРАВЛЕНО: Задержка теперь зависит от колонки (левая сразу, правая через 0.1s)
                                // Это убирает фейковые "зависания" при скролле вниз
                                delay: (i % 2) * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            // transform-gpu принудительно выносит анимацию на видеокарту (Hardware Acceleration)
                            className="w-full h-full relative transform-gpu"
                            style={{ willChange: "transform, opacity" }} // Подсказка браузеру для подготовки
                        >
                            {/* Главная картинка: БОЛЬШЕ НЕ АНИМИРУЕТСЯ */}
                            {/* Так как у нас запеченные картинки без пустот, Hover-картинка просто перекроет эту! */}
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                quality={75}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover" // Убрали все transition и hover:opacity-0
                                referrerPolicy="no-referrer"
                            />

                            {/* Hover картинка: просто плавно ложится ПОВЕРХ главной */}
                            <Image
                                src={project.hoverImg}
                                alt={`${project.title} hover`}
                                fill
                                quality={75}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                // Добавили will-change-opacity, чтобы видеокарта подготовилась к ховеру заранее
                                className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 will-change-opacity"
                                referrerPolicy="no-referrer"
                            />

                            {/* Градиент для текста */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none will-change-opacity" />

                            {/* Тексты */}
                            <div className="absolute left-4 bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none will-change-opacity">
                                <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="absolute right-4 bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right pointer-events-none will-change-opacity">
                                <p className="text-white text-sm md:text-xl font-medium tracking-tight">
                                    {project.type}
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
