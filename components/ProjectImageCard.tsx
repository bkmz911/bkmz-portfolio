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
            className="relative overflow-hidden bg-zinc-200 break-inside-avoid flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 aspect-[4/3] md:aspect-[3/2] mb-[5px]"
        >
            {/* Blurred Background Layer */}
            <Image
                src={image.src}
                alt={`Project screenshot ${index + 1} background`}
                fill
                className="object-cover blur-[40px] scale-125 opacity-70"
                unoptimized
                referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5" />

            {/* Foreground Sharp Image */}
            <div
                className={`relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-zinc-100 ${
                    image.format === "portrait"
                        ? "w-auto aspect-[3/4] md:aspect-[2/3]"
                        : "w-full"
                }`}
            >
                <Image
                    src={image.src}
                    alt={`Project screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                    referrerPolicy="no-referrer"
                />
            </div>
        </motion.div>
    );
}
