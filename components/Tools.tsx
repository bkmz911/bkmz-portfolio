'use client';

import { motion } from 'motion/react';
import { Framer, Figma, Disc3, Hexagon, Code2, Layers } from 'lucide-react';

const tools = [
  { name: 'Framer', percent: '99%', desc: 'No-code web design.', icon: Framer },
  { name: 'Figma', percent: '95%', desc: 'General Design Tool', icon: Figma },
  { name: 'Photoshop', percent: '90%', desc: 'Image editing', icon: Disc3 },
  { name: 'Illustrator', percent: '90%', desc: 'Graphic design', icon: Hexagon },
  { name: 'Javascript', percent: '85%', desc: 'Front end development', icon: Code2 },
  { name: 'Spline', percent: '80%', desc: '3D design', icon: Layers },
];

export default function Tools() {
  return (
    <section id="tools" className="bg-white text-[#111] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl tracking-tight font-medium mb-8 md:mb-12"
        >
          Tools
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px]">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-zinc-100 p-8 md:p-10 flex items-center justify-between"
              >
                <div className="flex items-center gap-6">
                  <Icon className="w-10 h-10 text-zinc-600" strokeWidth={1.5} />
                  <div className="flex flex-col">
                    <h4 className="font-medium text-xl md:text-2xl text-[#111] mb-1">{tool.name}</h4>
                    <p className="text-zinc-600 text-sm md:text-base leading-tight">{tool.desc}</p>
                  </div>
                </div>
                <span className="text-zinc-400 font-medium">{tool.percent}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
