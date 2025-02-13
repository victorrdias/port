"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">
        {t("about.title")}
      </h2>
      <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        <p>{t("about.description1")}</p>
        <p>{t("about.description2")}</p>
        <p>{t("about.description3")}</p>
      </div>
    </section>
  );
}
