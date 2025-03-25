import { RevealOnScroll } from "../RevealOnScroll";
import { SkeletonLoader } from "../SkeletonLoader";

export const Projects = () => {
  const projectsObject = [
    {
      title: "Landing page (Wowdeck)",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      tech: ["Html/Css", "Javascript"],
      link: "https://wow-deck.com/",
    },
    {
      title: "Node-auth",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      tech: ["Node.js", "Typescript", "MongoDB"],
      link: "https://github.com/miguelFernandez98/Node-auth",
    },
    {},
    {},
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsObject.map((project, key) => (
              <article
                key={key}
                className="p-6 rounded-4xl border border-gray-400/20 dark:border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                {Object.keys(project).length === 0 ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-2 text-gray-800/90 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techKey) => (
                        <span
                          key={techKey}
                          className="bg-blue-500/50 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        className="text-blue-400 hover:text-blue-300 transition-colors mt-4"
                      >
                        View Project →
                      </a>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
