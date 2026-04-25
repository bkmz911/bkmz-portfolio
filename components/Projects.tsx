'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

const projects = [
  { id: 'scarlet', title: 'Scarlet', type: 'Design Studio', img: 'https://picsum.photos/seed/scarlet/1200/800', hoverImg: 'https://picsum.photos/seed/scarlet2/1200/800', span: 1 },
  { id: 'amber', title: 'Amber', type: 'Creative Agency', img: 'https://picsum.photos/seed/amber/1200/800', hoverImg: 'https://picsum.photos/seed/amber2/1200/800', span: 1 },
  { id: 'keystone', title: 'Keystone', type: 'Architecture Agency', img: 'https://picsum.photos/seed/architecture/1200/800', hoverImg: 'https://picsum.photos/seed/architecture2/1200/800', span: 1 },
  { id: 'defining-visual', title: 'Visual', type: 'Storytelling', img: 'https://picsum.photos/seed/lens/1200/800', hoverImg: 'https://picsum.photos/seed/lens2/1200/800', span: 1 },
  { id: 'hey-lorian', title: 'Hey, I\'m Lorian', type: 'Personal Website', img: 'https://picsum.photos/seed/tech/1200/800', hoverImg: 'https://picsum.photos/seed/tech2/1200/800', span: 1 },
  { id: 'alexander', title: 'Alexander Smith', type: 'Portfolio', img: 'https://picsum.photos/seed/alex/1200/800', hoverImg: 'https://picsum.photos/seed/alex2/1200/800', span: 1 },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1">
        {projects.map((project, i) => (
          <Link href={`/project/${project.id}`} key={project.id} className={`relative aspect-[4/3] md:aspect-[3/2] overflow-hidden group block ${project.span === 2 ? 'md:col-span-2' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full relative overflow-hidden flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 object-cover bg-zinc-200"
            >
              {/* Blurred Background Layer - Default */}
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
              <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] border border-white/20 z-20 bg-zinc-100">
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
              <div className="absolute left-6 md:left-8 bottom-4 md:bottom-6 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-xl md:text-2xl font-medium tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.title}
                </h3>
              </div>
              <div className="absolute right-6 md:right-8 bottom-4 md:bottom-6 z-30 overflow-hidden flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right">
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
