"use client";

import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
    const element = useRef<HTMLDivElement>(null);
    const inView = useInView(element, { once: true, amount: 0.1 });

    return (
        <div ref={element} className={`reveal ${className}`} data-revealed={inView}>
            {children}
        </div>
    );
}
