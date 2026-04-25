'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

// Mock data based on the screenshot
const projectData = {
  id: 'keystone',
  title: 'Keystone',
  subtitle: 'Architecture Agency',
  description: 'Keystone is a modern agency template designed for\narchitectural firms, creative studios, and digital agencies.',
  link: '#',
  services: 'Web design',
  client: 'Framer template',
  year: '2025',
  images: [
    'https://picsum.photos/seed/k1/1200/1200',
    'https://picsum.photos/seed/k2/1200/1200',
    'https://picsum.photos/seed/k3/1200/1200',
    'https://picsum.photos/seed/k4/1200/1200'
  ],
  concept: 'Keystone is a modern agency template designed for architectural firms, creative studios, and digital agencies. Its clean and modern design allows you to showcase your projects and services with elegance and professionalism.',
  scope: 'Keystone features a user-friendly layout with customizable sections, allowing you to highlight your portfolio, team, and expertise in a polished and professional manner. Its responsive design ensures an optimal viewing experience across all devices.',
  previous: {
    title: 'Amber Studio',
    subtitle1: 'Amber',
    subtitle2: 'Creative Studio',
    img: 'https://picsum.photos/seed/amber/1200/800',
    hoverImg: 'https://picsum.photos/seed/amber2/1200/800',
    slug: 'amber'
  },
  next: {
    title: 'Lens Studio',
    subtitle1: 'Lens',
    subtitle2: 'Videography Portfolio',
    img: 'https://picsum.photos/seed/lens/1200/800',
    hoverImg: 'https://picsum.photos/seed/lens2/1200/800',
    slug: 'defining-visual'
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;

  // We could fetch real data based on slug, but for this demo request 
  // we're building the specific Keystone case layout.

  return (
    <main className="min-h-screen bg-white text-[#111] selection:bg-black selection:text-white relative">
     <Navbar forceVisible={true} />
      {/* Top Navigation */}
      <div className="pt-24 md:pt-32 px-4 md:px-8 mb-8 md:mb-12">
        <Link href="/" className="inline-flex items-center text-sm font-medium hover:text-zinc-500 transition-colors">
          &larr; Back
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
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl lg:text-4xl text-zinc-500 font-medium tracking-tight mt-2 md:mt-4"
        >
          {projectData.subtitle}
        </motion.p>
      </div>

      {/* Metadata Bar */}
      <div className="px-4 md:px-8 pb-4 border-b border-zinc-200 mb-1 lg:mb-[5px]">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 text-sm font-medium">
          <div className="max-w-xl">
            <p className="whitespace-pre-line leading-relaxed z-10 text-zinc-800">{projectData.description}</p>
          </div>
          <div className="flex flex-wrap gap-8 xl:gap-12 text-zinc-500 w-full xl:w-auto">
            <a href={projectData.link} className="hover:text-[#111] transition-colors flex items-center gap-1 group">
              <span className="text-[#111]">View website</span>
              <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>
            <div className="flex gap-1">
              <span>Services:</span>
              <span className="text-[#111]">{projectData.services}</span>
            </div>
            <div className="flex gap-1">
              <span>Client:</span>
              <span className="text-[#111]">{projectData.client}</span>
            </div>
            <div className="flex gap-1">
              <span>Year:</span>
              <span className="text-[#111]">{projectData.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Images Grid (First 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] p-[5px] overflow-hidden">
        <motion.div 
          initial={{ x: '50vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden bg-zinc-100"
        >
          <Image
            src={projectData.images[0]}
            alt="Project screenshot 1"
            fill
            className="object-cover"
            unoptimized
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ x: '50vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden bg-zinc-100"
        >
          <Image
            src={projectData.images[1]}
            alt="Project screenshot 2"
            fill
            className="object-cover"
            unoptimized
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Details (Concept & Scope) */}
      <div className="py-24 md:py-48 px-4 md:px-8">
        <div className="w-full md:w-1/2 ml-auto lg:pr-24">
          <div className="mb-16 md:mb-24">
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Concept</h3>
            <p className="text-lg md:text-xl text-[#111] leading-relaxed font-medium">
              {projectData.concept}
            </p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Scope</h3>
            <p className="text-lg md:text-xl text-[#111] leading-relaxed font-medium">
              {projectData.scope}
            </p>
          </div>
        </div>
      </div>

      {/* Main Images Grid (Last 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] p-[5px] mb-24 md:mb-48 overflow-hidden">
        <motion.div 
          initial={{ x: '50vw', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-zinc-100"
        >
          <Image
            src={projectData.images[2]}
            alt="Project screenshot 3"
            fill
            className="object-cover"
            unoptimized
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ x: '50vw', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden bg-zinc-100"
        >
          <Image
            src={projectData.images[3]}
            alt="Project screenshot 4"
            fill
            className="object-cover"
            unoptimized
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Pagination View */}
      <div className="px-4 md:px-8 mb-[5px]">
        <div className="flex justify-between items-center mb-6">
          <span className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter">Previous</span>
          <span className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter">Next</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px] p-[5px] mb-4">
        {/* Previous */}
         <div>
           <Link href={`/project/${projectData.previous.slug}`} className="block relative aspect-[4/3] md:aspect-[3/2] overflow-hidden group flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-zinc-200">
             {/* Blurred Background Layer - Default */}
             <Image
               src={projectData.previous.img}
               alt={`${projectData.previous.title} background`}
               fill
               className="object-cover blur-[40px] scale-125 opacity-70 transition-all duration-1000 group-hover:opacity-0 group-hover:scale-150"
               unoptimized
               referrerPolicy="no-referrer"
             />
             {/* Blurred Background Layer - Hover */}
             <Image
               src={projectData.previous.hoverImg}
               alt={`${projectData.previous.title} background hover`}
               fill
               className="object-cover blur-[40px] scale-125 opacity-0 transition-all duration-1000 group-hover:opacity-70 group-hover:scale-150"
               unoptimized
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
             
             {/* Foreground Sharp Image */}
             <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] border border-white/20 z-10 bg-zinc-100">
               <Image 
                 src={projectData.previous.img}
                 alt={projectData.previous.title}
                 fill
                 className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                 unoptimized
                 referrerPolicy="no-referrer"
               />
               <Image 
                 src={projectData.previous.hoverImg}
                 alt={`${projectData.previous.title} hover`}
                 fill
                 className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                 unoptimized
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
             </div>
           </Link>
           <div className="flex justify-between items-center mt-4 px-2 font-medium text-sm md:text-base">
              <span>{projectData.previous.subtitle1}</span>
              <span className="text-zinc-500">{projectData.previous.subtitle2}</span>
           </div>
        </div>

        {/* Next */}
         <div>
           <Link href={`/project/${projectData.next.slug}`} className="block relative aspect-[4/3] md:aspect-[3/2] overflow-hidden group flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-zinc-200">
             {/* Blurred Background Layer - Default */}
             <Image
               src={projectData.next.img}
               alt={`${projectData.next.title} background`}
               fill
               className="object-cover blur-[40px] scale-125 opacity-70 transition-all duration-1000 group-hover:opacity-0 group-hover:scale-150"
               unoptimized
               referrerPolicy="no-referrer"
             />
             {/* Blurred Background Layer - Hover */}
             <Image
               src={projectData.next.hoverImg}
               alt={`${projectData.next.title} background hover`}
               fill
               className="object-cover blur-[40px] scale-125 opacity-0 transition-all duration-1000 group-hover:opacity-70 group-hover:scale-150"
               unoptimized
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />

             {/* Foreground Sharp Image */}
             <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] border border-white/20 z-10 bg-zinc-100">
               <Image 
                 src={projectData.next.img}
                 alt={projectData.next.title}
                 fill
                 className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                 unoptimized
                 referrerPolicy="no-referrer"
               />
               <Image 
                 src={projectData.next.hoverImg}
                 alt={`${projectData.next.title} hover`}
                 fill
                 className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                 unoptimized
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
             </div>
           </Link>
           <div className="flex justify-between items-center mt-4 px-2 font-medium text-sm md:text-base">
              <span>{projectData.next.subtitle1}</span>
              <span className="text-zinc-500">{projectData.next.subtitle2}</span>
           </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
