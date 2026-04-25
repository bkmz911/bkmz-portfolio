'use client';
import { useSyncExternalStore } from 'react';

let scrolled = false;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

if (typeof window !== 'undefined') {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 150;
    if (isScrolled !== scrolled) {
      scrolled = isScrolled;
      listeners.forEach((l) => l());
    }
  };
  
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

export function useHeroScrolled() {
  return useSyncExternalStore(subscribe, () => scrolled, () => false);
}

