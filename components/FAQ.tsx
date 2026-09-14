"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQ() {
    const t = useTranslations("FAQ");
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="section-container section-space" id="faq">
            <h2 className="faq-title">{t("title")}</h2>
            {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="faq-item">
                    <h3>
                        <button
                            id={`faq-button-${n}`}
                            aria-expanded={open === n}
                            aria-controls={`faq-answer-${n}`}
                            onClick={() => setOpen(open === n ? null : n)}
                        >
                            {t(`faqs.faq${n}.question`)}
                            <span aria-hidden="true">+</span>
                        </button>
                    </h3>
                    <div
                        id={`faq-answer-${n}`}
                        role="region"
                        aria-labelledby={`faq-button-${n}`}
                        className="faq-answer"
                        data-open={open === n}
                        aria-hidden={open !== n}
                        inert={open !== n}
                    >
                        <div><p>{t(`faqs.faq${n}.answer`)}</p></div>
                    </div>
                </div>
            ))}
        </section>
    );
}
