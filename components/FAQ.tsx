'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What kind of clients do you typically work with?',
    answer: 'I work with a wide range of clients from early-stage startups to established enterprises across various industries.'
  },
  {
    question: 'What services do you offer?',
    answer: 'I specialize in UI/UX design, web development, and creative direction. I build fully responsive and interactive websites using modern frameworks.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Depending on the complexity and scope, a standard website project takes between 4 to 8 weeks from initial concept to launch.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Pricing is based on the scope and complexity of the project. After discussing your goals, I’ll send you a custom quote with clear deliverables and milestones.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely. A website redesign is a great opportunity to modernize the look, improve user experience, and optimize for current standards.'
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes, I provide ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performs well over time.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-48 px-4 md:px-8 bg-white text-[#111]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-tighter mb-16 md:mb-24"
        >
          FAQs
        </motion.h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-zinc-300 overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center py-6 md:py-8 text-left focus:outline-none group"
                >
                  <span className="text-xl md:text-2xl font-medium">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`ml-4 flex-shrink-0 transition-colors ${isOpen ? 'text-zinc-600' : 'text-zinc-400 group-hover:text-zinc-800'}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="pb-8 text-zinc-500 text-lg md:text-xl leading-relaxed max-w-4xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
