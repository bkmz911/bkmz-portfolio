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
                  ease:[0.16, 1, 0.3, 1] as const,
                  delay: index * 0.15 + 0.1,
              },
          };

    return (
        <motion.div
            {...motionProps}
            // Убрали flex, p-8, justify-center — теперь картинка просто заливает весь блок
            className="relative overflow-hidden break-inside-avoid aspect-[4/3] md:aspect-[3/2] mb-[5px]"
        >
            <Image
                src={image.src}
                alt={`Project screenshot ${index + 1}`}
                fill
                quality={95}
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
                referrerPolicy="no-referrer"
            />
        </motion.div>
    );
}