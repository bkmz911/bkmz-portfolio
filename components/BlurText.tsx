'use client';

import { motion } from 'motion/react';
import React from 'react';

type BlurTextProps = {
  text: string;
  highlightText?: string;
  className?: string;
};

export default function BlurText({ text, highlightText, className = '' }: BlurTextProps) {
  const words = text.split(' ');
  const highlightWords = highlightText ? highlightText.split(' ') : [];
  
  return (
    <h2 className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`word-${i}`}
          initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: i * 0.05 + 0.1, ease: 'easeOut' }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
      {highlightWords.map((word, i) => (
        <motion.span
          key={`highlight-${i}`}
          initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: (words.length + i) * 0.05 + 0.1, ease: 'easeOut' }}
          className="inline-block mr-[0.25em] text-zinc-400"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}
