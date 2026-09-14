"use client";

import { useTranslations } from "next-intl";
import Intro from "./Intro";
import Reveal from "./Reveal";

export default function Services() {
    const t = useTranslations("Services");

    return (
        <section id="services" className="section-container section-space">
            <Intro text={t("desc1")} highlightText={t("desc2")} />
            <h2 className="section-title">{t("title")}</h2>
            <div className="service-list">
                {[1, 2, 3, 4].map((n) => (
                    <Reveal key={n} className="service-row">
                        <div className="service-heading">
                            <span className="row-number">( {n} )</span>
                            <h3>{t(`services.service${n}.title`)}</h3>
                        </div>
                        <div className="row-line" />
                        <ul className="service-points">
                            {[1, 2, 3].map((i) => (
                                <li key={i}>{t(`services.service${n}.item${i}`)}</li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
            <div className="service-cta">
                <p>{t("nextStep")}</p>
                <a href="#contact" className="button">{t("cta")}</a>
            </div>
        </section>
    );
}
