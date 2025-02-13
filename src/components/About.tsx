"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const TechStackScene = dynamic(() => import("./TechStackScene"), {
  ssr: false,
});

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

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 dark:text-white">
          {t("about.techStack")}
        </h3>
        <TechStackScene />
      </div>
    </section>
  );
}
