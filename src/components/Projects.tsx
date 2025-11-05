"use client";

import { useTranslations } from "next-intl";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievement?: string;
}

export default function Projects() {
  const t = useTranslations();

  const experiences: Experience[] = [
    {
      company: "NEORIS / EPAM",
      role: t("experience.neoris.role"),
      period: "Jun 2025 – Present",
      location: "Remote",
      responsibilities: [
        t("experience.neoris.responsibility1"),
        t("experience.neoris.responsibility2"),
        t("experience.neoris.responsibility3"),
        t("experience.neoris.responsibility4"),
        t("experience.neoris.responsibility5"),
        t("experience.neoris.responsibility6"),
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "CI/CD",
        "Testing",
        "React Query",
        "Zustand",
        "AWS",
        "Azure",
      ],
      achievement: t("experience.neoris.achievement"),
    },
    {
      company: "AgileTV",
      role: t("experience.agiletv.role"),
      period: "Apr 2025 – Jun 2025",
      location: "Remote",
      responsibilities: [
        t("experience.agiletv.responsibility1"),
        t("experience.agiletv.responsibility2"),
        t("experience.agiletv.responsibility3"),
        t("experience.agiletv.responsibility4"),
        t("experience.agiletv.responsibility5"),
      ],
      technologies: ["Next.js", "React", "Redux", "Redis", "SSR", "TypeScript"],
    },
    {
      company: "Groope",
      role: t("experience.groope.role"),
      period: "Apr 2021 – Apr 2025",
      location: "Remote",
      responsibilities: [
        t("experience.groope.responsibility1"),
        t("experience.groope.responsibility2"),
        t("experience.groope.responsibility3"),
        t("experience.groope.responsibility4"),
        t("experience.groope.responsibility5"),
      ],
      technologies: [
        "Next.js",
        "React",
        "Chakra UI",
        "React Query",
        "Zustand",
        "CircleCI",
        "TypeScript",
      ],
    },
    {
      company: "Factree",
      role: t("experience.factree.role"),
      period: "2022 – Apr 2025",
      location: "Remote",
      responsibilities: [
        t("experience.factree.responsibility1"),
        t("experience.factree.responsibility2"),
        t("experience.factree.responsibility3"),
      ],
      technologies: [
        "Next.js",
        "Strapi",
        "Node.js",
        "Three.js",
        "Framer Motion",
        "TypeScript",
        "Mercado Pago",
        "PostgreSQL",
        "Supabase",
      ],
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">
        {t("projects.title")}
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="border border-purple-200 dark:border-[#2d2b3b] rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-[#13111b]/90"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold dark:text-white">
                  {experience.company}
                </h3>
                <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                  {experience.role}
                </p>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                <p>{experience.period}</p>
                <p>{experience.location}</p>
              </div>
            </div>

            <ul className="mb-4 space-y-2">
              {experience.responsibilities.map((responsibility, i) => (
                <li
                  key={i}
                  className="text-gray-600 dark:text-gray-300 flex items-start"
                >
                  <span className="text-purple-500 mr-2 ">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>

            {experience.achievement && (
              <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">
                  {t("experience.achievementLabel")}:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {experience.achievement}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
