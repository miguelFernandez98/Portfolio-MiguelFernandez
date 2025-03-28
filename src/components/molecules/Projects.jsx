import { RevealOnScroll } from "../atoms/RevealOnScroll";
import { SkeletonLoader } from "../atoms/SkeletonLoader";
import { translations } from "../../lib/constants/translations";

export const Projects = ({ isSpanish }) => {
  const { title, subtitles, myProjects } = translations.projects;
  const currentLang = isSpanish ? "es" : "en";

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
            {title[currentLang]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myProjects[currentLang].map((project, key) => (
              <article
                key={key}
                className="p-6 rounded-4xl border border-gray-400/20 dark:border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                {Object.keys(project).length === 0 ? (
                  <SkeletonLoader />
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-2 text-gray-800/90 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tech.map((tech, techKey) => (
                        <span
                          key={techKey}
                          className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/30 py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
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
                        {subtitles[currentLang]} →
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
