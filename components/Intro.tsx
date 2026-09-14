"use client";

import { Fragment, useRef } from "react";
import { useInView } from "motion/react";

export default function Intro({ text, highlightText }: { text: string; highlightText: string }) {
    const container = useRef<HTMLDivElement>(null);
    const inView = useInView(container, { once: true, amount: 0.3 });
    const primary = text.split(/\s+/);
    const secondary = highlightText.split(/\s+/);

    return (
        <div ref={container} className="intro" data-revealed={inView}>
            <p aria-label={`${text} ${highlightText}`}>
                {[...primary, ...secondary].map((word, index) => (
                    <Fragment key={index}>
                        <span
                            aria-hidden="true"
                            className={`intro-word ${index >= primary.length ? "intro-word-muted" : ""}`}
                            style={{ animationDelay: `${index * 0.045}s` }}
                        >
                            {word}
                        </span>{" "}
                    </Fragment>
                ))}
            </p>
        </div>
    );
}
