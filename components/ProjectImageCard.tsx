"use client";

import { useState } from "react"; // [!] Добавили
import { motion } from "motion/react";
import Image from "next/image";
import { ProjectImage } from "@/types/project";

interface ProjectImageCardProps {
    image: ProjectImage;
    index: number;
    isInitialLoad?: boolean;
}

export default function ProjectImageCard({
    image,
    index,
    isInitialLoad,
}: ProjectImageCardProps) {
    // Локальное состояние для конкретной картинки
    const [isLoaded, setIsLoaded] = useState(false);

    const motionProps = isInitialLoad
        ? {
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: {
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1] as const,
                  delay: 0.2 + index * 0.15,
              },
          }
        : {
              initial: { y: 50, opacity: 0 },
              whileInView: { y: 0, opacity: 1 },
              viewport: { once: true, margin: "-5%" },
              transition: {
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1] as const,
                  delay: index * 0.15 + 0.1,
              },
          };

    return (
        <motion.div
            {...motionProps}
            className="relative overflow-hidden break-inside-avoid aspect-[4/3] md:aspect-[3/2] mb-[5px] bg-zinc-100"
        >
            {/* Эффект переливания: виден пока isLoaded === false */}
            <div
                className={`absolute inset-0 z-10 animate-shimmer bg-zinc-200 transition-opacity duration-500 ${
                    isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            />

            <Image
                src={image.src}
                alt={`Project screenshot ${index + 1}`}
                fill
                quality={75}
                sizes="(max-width: 768px) 100vw, 80vw"
                // Проявляем картинку плавно после загрузки
                className={`object-cover transition-opacity duration-700 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
                referrerPolicy="no-referrer"
                onLoad={() => setIsLoaded(true)}
            />
        </motion.div>
    );
}
