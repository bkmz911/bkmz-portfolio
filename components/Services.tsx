'use client';

import { motion } from 'motion/react';
import BlurText from './BlurText';

const servicesList = [
  {
    num: '(1)',
    title: 'Web Design',
    items: ['No-code development', 'SEO optimization', 'Copywriting']
  },
  {
    num: '(2)',
    title: 'Brand Identity',
    items: ['Logo design', 'Brand guidelines', 'Visual systems']
  },
  {
    num: '(3)',
    title: 'Graphic Design',
    items: ['Infographic design', 'Typography', 'Color Systems']
  },
  {
    num: '(4)',
    title: 'Creative Strategy',
    items: ['Design consultation', 'Content creation', 'Social media marketing']
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white text-[#111] py-24 md:py-48 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 md:mb-48">
          <BlurText 
            text="From responsive design to seamless UX, my work is driven by curiosity, attention to detail,"
            highlightText="and a deep passion for creating meaningful digital products."
            className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tighter font-medium"
          />
        </div>

        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-16"
          >
            Services
          </motion.h3>

          <div className="flex flex-col">
            {servicesList.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="mb-8"
              >
                <div className="grid grid-cols-3 items-end pb-4 font-medium">
                  <div className="text-zinc-400 text-sm md:text-base tracking-widest">{service.num}</div>
                  <div className="text-center text-xl md:text-2xl">{service.title}</div>
                  <div></div>
                </div>
                <div className="border-t border-zinc-200 pt-4 pb-8 flex flex-col items-end gap-1.5 text-sm md:text-base text-zinc-700">
                  {service.items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
