export default {
  navigation: {
    about: "About Me",
    projects: "View Projects",
    resume: "View My Resume",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Vitor Dias",
    subtitle:
      "Full Stack Developer | Problem Solver | Tech Enthusiast | Musician",
  },
  about: {
    title: "About Me",
    description1:
      "Software developer specialized in building scalable web applications with Next.js, TypeScript, Firebase, Supabase, Node.js, Google Cloud Platform, and AWS.",
    description2:
      "Experienced in implementing robust permission systems, managing complex database schemas, and enhancing user interfaces with various tools.",
    description3:
      "Skilled in collaborating in dynamic teams to deliver high-quality solutions.",
    techStack: "My Tech Stack",
  },
  projects: {
    title: "Professional Experience",
  },
  experience: {
    achievementLabel: "Key Achievement",
    neoris: {
      role: "Senior Frontend Developer",
      responsibility1:
        "Led frontend development initiatives, defining architecture and selecting the technology stack used across projects.",
      responsibility2:
        "Drove technical decision-making to ensure scalability, maintainability, and performance of enterprise applications.",
      responsibility3:
        "Collaborated with cross-functional teams to establish goals and deliver key project milestones.",
      responsibility4:
        "Developed user‑centric, high‑performance interfaces using React, Next.js, and TypeScript.",
      responsibility5:
        "Implemented CI/CD pipelines and ensured consistent code quality through automated testing and review processes.",
      responsibility6:
        "Mentored team members on frontend best practices, code organization, and performance optimization.",
      achievement:
        "Doubled the story-points delivery from my squad with 4 senior developers during my first PI",
    },
    agiletv: {
      role: "Frontend Developer",
      responsibility1:
        "Contributed to the Claro TV+ platform — a streaming service with over 1 million active users — using Redux, Next.js, and React, leveraging Redis for efficient cache management.",
      responsibility2:
        "Developed and maintained key frontend features in a fast-paced, large-scale production environment.",
      responsibility3:
        "Collaborated closely with designers and backend engineers to deliver seamless, high-quality user experiences.",
      responsibility4:
        "Optimized component performance, reduced bundle size, and improved rendering efficiency through SSR and lazy loading.",
      responsibility5:
        "Ensured accessibility and design consistency across multiple devices and screen resolutions.",
    },
    groope: {
      role: "Fullstack Developer",
      responsibility1:
        "Designed and maintained scalable databases and REST APIs for performance-critical applications.",
      responsibility2:
        "Developed modern, responsive UIs using React, Next.js, and Chakra UI.",
      responsibility3:
        "Managed complex client-side state efficiently using React Query and Zustand.",
      responsibility4:
        "Configured CI/CD workflows via CircleCI for continuous integration and delivery.",
      responsibility5:
        "Implemented monorepo architecture and layered design patterns for modular and reusable codebases.",
    },
    factree: {
      role: "Fullstack Developer (Freelance Projects)",
      responsibility1:
        "Developed landing pages, e-commerce platforms, and institutional websites for multiple clients.",
      responsibility2:
        "Integrated CMS and microservice-based APIs using Strapi and Node.js.",
      responsibility3:
        "Delivered SEO-optimized, high-performance web applications using Next.js and SSR.",
    },
  },
  resume: {
    portuguese: "Portuguese (BR)",
    english: "English",
  },
  footer: {
    rights: "All rights reserved.",
  },
} as const;
