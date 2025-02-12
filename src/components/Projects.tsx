"use client";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Project 1",
      description: "A brief description of your first project",
      technologies: ["React", "TypeScript", "Next.js"],
      link: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: "A brief description of your second project",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 3",
      description: "A brief description of your third project",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/project3",
    },
    {
      title: "Project 4",
      description: "A brief description of your fourth project",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/project4",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-purple-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
