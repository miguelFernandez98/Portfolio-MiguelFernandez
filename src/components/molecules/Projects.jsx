import { RevealOnScroll } from "../atoms/RevealOnScroll";
import { SkeletonLoader } from "../atoms/SkeletonLoader";
import { translations } from "../../lib/constants/translationsProjects";
import PropTypes from "prop-types";

export const Projects = ({ isSpanish }) => {
  const { marker, title, subtitles, myProjects } = translations.projects;
  const currentLang = isSpanish ? "es" : "en";

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <p className="section-marker text-center mb-2">
            {"//"} {marker[currentLang]}
          </p>
          <h2 className="text-3xl font-bold mb-10 bg-linear-to-br from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
            {title[currentLang]}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myProjects[currentLang].map((project, key) => (
              <article
                key={key}
                className="h-full flex flex-col p-6 rounded-2xl border border-gray-400/15 dark:border-white/10 bg-gray-500/5 dark:bg-white/5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                {Object.keys(project).length === 0 ? (
                  <div className="flex-1 flex flex-col justify-center">
                    <SkeletonLoader
                      text={currentLang === "en" ? "Coming soon" : "Próximamente"}
                    />
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-gray-800/90 dark:text-gray-100 text-left">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 text-left">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techKey) => (
                        <span
                          key={techKey}
                          className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/25 py-1 px-3 rounded-full text-sm transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      className="mt-auto font-mono text-sm text-emerald-500 hover:text-emerald-400 transition-colors self-start"
                    >
                      {subtitles[currentLang]} →
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

Projects.propTypes = {
  isSpanish: PropTypes.bool.isRequired,
};
