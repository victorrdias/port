"use client";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  bgPattern?: string; // SVG pattern for background
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Groope app",
      description:
        "A modern web application with scalable architecture and high performance. Implemented efficient state management, responsive interfaces, and automated CI/CD pipelines. Utilized monorepo structure and layered design patterns for maintainable code.",
      technologies: [
        "Next.js",
        "Chakra UI",
        "React Query",
        "Zustand",
        "CircleCI",
        "GCP",
        "TypeScript",
      ],
      link: "https://groope.app",
      bgPattern: "/groope.svg",
    },
    {
      title: "CB Shop",
      description:
        "E-commerce platform with advanced features including shopping cart, checkout system, and admin panel. Optimized performance through SSR and lazy loading. Implemented multilingual support using next-intl.",
      technologies: [
        "Next.js",
        "Supabase",
        "ReactQuery",
        "Mercado Pago",
        "Stripe",
        "TypeScript",
        "AWS",
        "next-intl",
        "TailwindCSS",
      ],
      link: "https://www.lojacbshop.com.br",
      bgPattern: "/cbshop.svg",
    },
    {
      title: "Solarium",
      description:
        "Interactive website featuring advanced animations and visual effects. Implemented custom particle systems and smooth transitions for an engaging user experience.",
      technologies: ["Three.js", "Framer Motion", "React", "TypeScript"],
      link: "https://www.vitrastudios.com",
      bgPattern: "/solarium.png",
    },
    {
      title: "BSB Vistos",
      description:
        "Landing page development with modern design and CMS integration. Built scalable microservices-based APIs using Strapi CMS for content management.",
      technologies: ["React", "Strapi CMS", "Node.js", "TailwindCSS"],
      link: "https://www.bsbvistos.com.br",
      bgPattern: "/bsbvistos.svg",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-purple-200 dark:border-[#2d2b3b] rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-[#13111b]/90 relative overflow-hidden group"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("${project.bgPattern}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize:
                  project.title === "Groope app" ||
                  project.title === "BSB Vistos"
                    ? "200px"
                    : project.title === "CB Shop" ||
                      project.title === "Solarium"
                    ? "150px"
                    : "auto",
                opacity: project.title === "CB Shop" ? 0.1 : 0.1,
              }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 min-h-[150px] text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 inline-flex items-center"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
