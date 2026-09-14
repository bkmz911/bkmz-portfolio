"use client";

import { useTranslations } from "next-intl";
import Intro from "./Intro";
import Reveal from "./Reveal";

export default function Experience() {
    const t = useTranslations("Experience");

    return (
        <section id="about" className="section-container section-space">
            <Intro text={t("desc1")} highlightText={t("desc2")} />
            <h2 className="section-title">{t("title")}</h2>
            <div className="experience-list">
                {[1, 2, 3, 4].map((n) => (
                    <Reveal key={n} className="experience-row">
                        <div className="experience-heading">
                            <span className="row-number">{t(`experience.case${n}.duration`)}</span>
                            <h3>{t(`experience.case${n}.role`)}</h3>
                            <span>{t(`experience.case${n}.company`)}</span>
                        </div>
                        <div className="row-line" />
                        <div className="experience-description">
                            <p>{t(`experience.case${n}.description`)}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
