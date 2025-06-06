import { RevealOnScroll } from "../atoms/RevealOnScroll";
import { translations } from "../../lib/constants/translationAbout";
import PropTypes from "prop-types";

export const About = ({ isSpanish }) => {
  const { title, description, subtitle, workExperience } = translations.about;
  const currentLang = isSpanish ? "es" : "en";

  const frontEndSkills = [
    "Javascript",
    "Typescript",
    "Vue",
    "React",
    "Flutter",
    "TailwindCSS",
  ];

  const backEndSkills = ["Node.js", "Express", "MongoDB", "Docker"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-emerald-600 text-center bg-clip-text text-transparent">
            {title[currentLang]}
          </h2>
          <article className="rounded-4xl p-8 border border-gray-400/20 dark:border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-center">
              {description[currentLang]}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="rounded-4xl py-6 hover:-translate-y-1 transition-all flex flex-col justify-center items-start">
                <h3 className="text-xl font-bold mb-4 text-gray-800/90 dark:text-gray-100">
                  Frontend
                </h3>
                <div className="flex flex-wrap justify-start items-center gap-2">
                  {frontEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/30 py-1 px-3 rounded-3xl text-sm   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
              <li className="rounded-4xl py-6 hover:-translate-y-1 transition-all flex flex-col justify-center items-start">
                <h3 className="text-xl font-bold mb-4 text-gray-800/90 dark:text-gray-100">
                  Backend
                </h3>
                <div className="flex flex-wrap justify-start items-center gap-2">
                  {backEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:bg-blue-500/30  py-1 px-3 rounded-3xl text-sm  transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </article>
          <article className="p-8 mt-8 rounded-4xl border border-gray-400/20 dark:border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-6 text-gray-800/90 dark:text-gray-100">
              {subtitle[currentLang]}
            </h3>
            <ul role="list" className="m-4 max-w-screen-md">
              {workExperience[currentLang].map((job, index) => (
                <li
                  key={index}
                  className="group relative flex flex-col pb-8 pl-7 last:pb-0"
                >
                  <div className="absolute bottom-0 left-[calc(0.33rem-0.5px)] top-0 w-px bg-blue-500/20 group-first:top-3" />
                  <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full border-[1.5px] border-blue-500 dark:bg-[#0a0a0a] bg-[#f3f4f6]" />
                  <h4 className="mt-2 font-semibold text-gray-800/90 dark:text-gray-100">
                    {job.position}
                    <br />
                    <span className="text-gray-500 dark:text-gray-400 ">
                      {job.company}
                    </span>
                  </h4>
                  <p className="font-display order-first font-semibold tracking-wide text-blue-500">
                    <time dateTime={job.period.replace(" - ", "/")}>
                      ({job.period})
                    </time>
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {job.description}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </RevealOnScroll>
    </section>
  );
};

About.propTypes = {
  isSpanish: PropTypes.bool.isRequired,
};
