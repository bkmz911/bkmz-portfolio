// "use client";

// import { motion } from "motion/react";
// import Image from "next/image";
// import { Link } from "@/i18n/routing";

// import { projectsPreviewData } from "@/data/projects";

// export default function Projects() {
//     return (
//         <section id="projects">
//             <div className="columns-1 md:columns-2 gap-1 p-1">
//                 {projectsPreviewData.map((project, i) => (
//                     <Link
//                         href={`/project/${project.id}`}
//                         key={project.id}
//                         className="relative mb-1 overflow-hidden group block break-inside-avoid aspect-[4/3] md:aspect-[3/2]"
//                     >
//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true, margin: "-100px" }}
//                             transition={{
//                                 duration: 0.8,
//                                 delay: i * 0.1,
//                                 ease: [0.16, 1, 0.3, 1],
//                             }}
//                             className="w-full h-full relative overflow-hidden flex items-center justify-center p-2 sm:p-4 md:p-8 object-cover"
//                         >
//                             {/* Blurred Background Layer - Default */}
//                             <Image
//                                 src={project.img}
//                                 alt={`${project.title} background`}
//                                 fill
//                                 className="object-cover blur-[40px] scale-125 opacity-70 transition-all duration-1000 group-hover:opacity-0 group-hover:scale-150"
//                                 referrerPolicy="no-referrer"
//                             />
//                             {/* Blurred Background Layer - Hover */}
//                             <Image
//                                 src={project.hoverImg}
//                                 alt={`${project.title} background hover`}
//                                 fill
//                                 className="object-cover blur-[40px] scale-125 opacity-0 transition-all duration-1000 group-hover:opacity-70 group-hover:scale-150"
//                                 referrerPolicy="no-referrer"
//                             />
//                             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
//                             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

//                             {/* Foreground Sharp Image */}
//                             <div
//                                 className={`relative h-full rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] border border-white/20 z-20 bg-zinc-100 ${
//                                     project.format === "portrait"
//                                         ? "w-auto aspect-[3/4] md:aspect-[2/3]"
//                                         : "w-full"
//                                 }`}
//                             >
//                                 <Image
//                                     src={project.img}
//                                     alt={project.title}
//                                     fill
//                                     className="object-cover transition-opacity duration-700 group-hover:opacity-0"
//                                     referrerPolicy="no-referrer"
//                                 />
//                                 <Image
//                                     src={project.hoverImg}
//                                     alt={`${project.title} hover`}
//                                     fill
//                                     className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
//                                     referrerPolicy="no-referrer"
//                                 />
//                                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
//                             </div>

//                             {/* Hover Titles on Background */}
//                             <div className="absolute left-6 md:left-8 bottom-4 md:bottom-6 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                                 <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
//                                     {project.title}
//                                 </h3>
//                             </div>
//                             <div className="absolute right-6 md:right-8 bottom-4 md:bottom-6 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">
//                                 <p className="text-white text-sm md:text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
//                                     {project.type}
//                                 </p>
//                             </div>
//                         </motion.div>
//                     </Link>
//                 ))}
//             </div>
//         </section>
//     );
// }

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
                        className="relative overflow-hidden group block break-inside-avoid aspect-[3/2]"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="w-full h-full relative overflow-hidden flex items-center justify-center p-8 lg:p-10 xl:p-12 2xl:px-14 object-cover bg-zinc-200"
                        >
                            {/* Blurred Background Layer - Defaultt */}
                            <Image
                                src={project.img}
                                alt={`${project.title} background`}
                                fill
                                className="object-cover blur-[40px] scale-125 opacity-70 transition-all duration-1000 group-hover:opacity-0 group-hover:scale-150"
                                referrerPolicy="no-referrer"
                            />
                            {/* Blurred Background Layer - Hover */}
                            <Image
                                src={project.hoverImg}
                                alt={`${project.title} background hover`}
                                fill
                                className="object-cover blur-[40px] scale-125 opacity-0 transition-all duration-1000 group-hover:opacity-70 group-hover:scale-150"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                            {/* Foreground Sharp Image */}
                            <div
                                className={`relative h-full rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01] border border-white/20 z-20 bg-zinc-100 ${
                                    project.format === "portrait"
                                        ? "w-auto aspect-[2/3]"
                                        : "w-full"
                                }`}
                            >
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                                    referrerPolicy="no-referrer"
                                />
                                <Image
                                    src={project.hoverImg}
                                    alt={`${project.title} hover`}
                                    fill
                                    className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Hover Titles on Background */}
                            <div className="absolute left-2 md:left-4 bottom-2 md:bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    {project.title}
                                </h3>
                            </div>
                            <div className="absolute right-2 md:right-4 bottom-2 md:bottom-4 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">
                                <p className="text-white text-sm md:text-xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
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
